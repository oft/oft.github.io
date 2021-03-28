const template = require("art-template");

var html = template.compile("aaa<%=xxx  %>")({
    content:"xxx"
})

console.log(html);