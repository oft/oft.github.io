
import { createSvg2png, initialize } from 'svg2png-wasm';
import { createApp } from 'vue'
import selectSvg from './components/select-svg.js';

// svg2png.dispose(); // You should dispose svg2png, if you will not use it in the future


let url = null
let svg2png = null;

const app = createApp({
    components: { selectSvg },
    data() {
        return {
            svgContent: '',
            viewUrl:'',
        }
    },
    async mounted() {
        // put wasm to your assets directory
        await initialize(fetch('https://unpkg.com/svg2png-wasm@1.4.1/svg2png_wasm_bg.wasm'));
        const font = await fetch('./Roboto-Light.ttf').then((res) => res.arrayBuffer());
        svg2png = createSvg2png({
            fonts: [new Uint8Array(font)], // require, If you use text in svg
        });
    },
    methods: {
        async updateViewContent(svg){
            const p = await mySvg2png(this.svgContent)
            const imgUrl = toUrl(p);
            this.viewUrl = imgUrl
        },
        async handleSvgChange(svg) {
            this.svgContent = svg;
            this.updateViewContent();
        },
        async handleViewClick(){
            this.updateViewContent()
        },

        handleDownloadClick(){
            download(this.viewUrl)
        }
    }
})

app.mount('#app')

const svgs = [
    '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"></svg>',
    '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"></svg>',
    '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"></svg>',
    // and more ...
];

async function mySvg2png(svg) {
    return await svg2png(svg, { scale: 2 })
}

function toUrl(png){
    if(url){
        URL.revokeObjectURL(url);
    }
    const blob = new Blob([png], { type: 'image/png' });
    url = URL.createObjectURL(blob);
    
    return url;
}

function download(url) {
    const a = document.createElement('a');
    a.href = url;
    a.download = 'image.png';
    a.click();
}