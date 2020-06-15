import { r as registerInstance, h, H as Host } from './index-464b2da0.js';
var blogRouterLinkCss = ":host{display:block}";
var BlogRouterLink = /** @class */ (function () {
    function BlogRouterLink(hostRef) {
        registerInstance(this, hostRef);
    }
    BlogRouterLink.prototype.render = function () {
        return (h(Host, null, h("slot", null)));
    };
    return BlogRouterLink;
}());
BlogRouterLink.style = blogRouterLinkCss;
export { BlogRouterLink as blog_router_link };
