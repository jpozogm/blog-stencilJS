'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f0df703d.js');

const blogRouterLinkCss = ":host{display:block}";

const BlogRouterLink = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, null, index.h("slot", null)));
    }
};
BlogRouterLink.style = blogRouterLinkCss;

exports.blog_router_link = BlogRouterLink;
