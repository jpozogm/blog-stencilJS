import { r as registerInstance, h } from './index-464b2da0.js';
var blogIframeCss = ":host{display:block}.container{position:relative}.iframe{width:254px;height:480px}";
var BlogIframe = /** @class */ (function () {
    function BlogIframe(hostRef) {
        registerInstance(this, hostRef);
    }
    BlogIframe.prototype.render = function () {
        return (h("div", { class: "container" }, h("iframe", { src: "assets/gifs/tellUs.gif", class: "iframe", allowFullScreen: true }), h("a", null, h("slot", { name: "link" }))));
    };
    return BlogIframe;
}());
BlogIframe.style = blogIframeCss;
export { BlogIframe as blog_iframe };
