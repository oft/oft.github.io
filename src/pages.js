import React from "react"
import {default as template} from "art-template";
import {readFileSync} from "fs";
import {join} from "path";
import {HomePage} from "./components/HomePage.jsx";
import {renderToString} from 'react-dom/server';
const wrapper = readFileSync(join(__dirname,'./template/base.art'),"UTF-8");
const base = template.compile(wrapper);

var page1 = React.createElement(HomePage,{name:222});
console.log(page1);

console.log(renderToString(page1));

function wraper(component,data,option){
    return renderToString(React.createElement(component,data));
}
function wraper2(component,data,option){
    return base({
        content:renderToString(React.createElement(component,data)),
        option:option||{}
    })
}


export let index = wraper(HomePage,{name:222});