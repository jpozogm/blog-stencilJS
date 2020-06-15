'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f0df703d.js');

const blogNavbarCss = ":host{display:block}.navbar{display:-ms-flexbox;display:flex;height:30px;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;padding:5px 0}.navbar__items{display:-ms-flexbox;display:flex}";

const BlogNavbar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, null, index.h("nav", { class: "navbar" }, index.h("div", { class: "navbar__logo" }, index.h("slot", { name: "navbar__logo" })), index.h("div", { class: "navbar__items" }, index.h("slot", { name: "navbar__items" })))));
    }
};
BlogNavbar.style = blogNavbarCss;

exports.blog_navbar = BlogNavbar;
