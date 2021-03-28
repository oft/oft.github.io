

const component = require("./index.js")
const React = require("react");
var ReactDOMServer = require('react-dom/server');

var div = React.createElement("div", {className:"aaa"});

console.log(div);

var sl = new component({name:"name"});


var renderer = {
    className:function(key,value){
        return ` class="${value}"`
    },
    default:function(key,value){
        return `${key}="${value}"`
    }
}

function toHTML(obj,sj){
    sj=sj||"";

    
    if(typeof obj == "object"){
        const exinlude = ["type","children"]

        let attrs = obj.props 
        && Object.keys(obj.props).filter(item=>exinlude.indexOf(item)==-1 && typeof obj.props[item] == "string")
        .map(item=>{
            return (renderer[item]||renderer.default)(item,obj.props[item])
        }).join(" ")||"";


        let content = "";
        if(obj.props && typeof obj.props.children === "object" && obj.props.children.constructor == Array){
            content=`\n${obj.props.children.map(item=>toHTML(item,sj+"  ")).join("\n")}\n${sj}`
        }else if(obj.props && obj.props.children){
            content=obj.props.children.toString();
        }
        return  `${sj}<${obj.type}${attrs}>${content}</${obj.type}>`
    }else{
        return sj+obj.toString();
    }
}

console.log(toHTML(sl.render()))
console.log(toHTML(div))

ReactDOMServer.renderToString(sl);


