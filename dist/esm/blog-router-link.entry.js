import { r as registerInstance, h, H as Host } from './index-464b2da0.js';

const blogRouterLinkCss = ":host{display:block}";

const BlogRouterLink = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
};
BlogRouterLink.style = blogRouterLinkCss;

export { BlogRouterLink as blog_router_link };
