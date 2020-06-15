import { r as registerInstance, h } from './index-464b2da0.js';

const blogIframeCss = ":host{display:block}.container{position:relative}.iframe{width:254px;height:480px}";

const BlogIframe = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "container" }, h("iframe", { src: "assets/gifs/tellUs.gif", class: "iframe", allowFullScreen: true }), h("a", null, h("slot", { name: "link" }))));
    }
};
BlogIframe.style = blogIframeCss;

export { BlogIframe as blog_iframe };
