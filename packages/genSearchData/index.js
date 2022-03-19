const glob = require("glob")
const path = require('path')
const fs = require('fs');
const htmlparser2 = require("htmlparser2");
const algoliasearch = require('algoliasearch/lite');
const root = path.join(__dirname, '../../');
const out = path.join(root, '../../search.json');
const site = path.join(root, '_site');
// options is optional
glob('**/*.html', {
    cwd: site
}, function (er, files) {
    // files is an array of filenames.
    // If the `nonull` option is set, and nothing
    // was found, then files is ["**/*.js"]
    // er is an error object or null.
    if (er) {
        throw new Error(er)
    }

    // API keys below contain actual values tied to your Algolia account
    const client = algoliasearch('OFBJT4MJL4', 'e969dbb1e02024294a5d4a89a5a0dbec');
    const index = client.initIndex('zqzyz.com');
    console.log(out);
    console.log(files);
    Promise.all(files.map(file => {
        return getFileContent(file)
        .then(content=>{
            let item = {objectID:file,path:file,content:content}
            return item;
        })
    })).then(list => {
        index.saveObjects(list)
        .then(({ objectIDs }) => {
          console.log(objectIDs);
          console.log('api 已更新');
        });
        return fs.promises.writeFile(out, JSON.stringify(list,null,2))
    })
})

function getFileContent(file){
    return fs.promises.readFile(path.join(site, file), 'utf-8')
    .then(getContent)
}

function getContent(htmlString) {
    let texts = [];
    let state = true;
    let filter = ['script','link','style']
    const parser = new htmlparser2.Parser({
        onopentag(name, attributes) {
            if ( filter.includes(name)) {
                state = false;
            }
        },
        ontext(text) {
            if(state){
                texts.push(text.trim());
            }
        },
        onclosetag(tagname) {
            if ( filter.includes(tagname)) {
                state = true;
            }
        },
    });
    parser.write(htmlString);
    parser.end();
    return texts.filter(txt=>txt!=='').join('\n');
}