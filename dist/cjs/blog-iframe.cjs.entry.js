'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f0df703d.js');

const blogIframeCss = ":host{display:block}.container{position:relative}.iframe{width:254px;height:480px}";

const BlogIframe = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { class: "container" }, index.h("iframe", { src: "assets/gifs/tellUs.gif", class: "iframe", allowFullScreen: true }), index.h("a", null, index.h("slot", { name: "link" }))));
    }
};
BlogIframe.style = blogIframeCss;

exports.blog_iframe = BlogIframe;
