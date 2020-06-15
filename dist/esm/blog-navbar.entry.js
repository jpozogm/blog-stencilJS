import { r as registerInstance, h, H as Host } from './index-464b2da0.js';

const blogNavbarCss = ":host{display:block}.navbar{display:-ms-flexbox;display:flex;height:30px;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;padding:5px 0}.navbar__items{display:-ms-flexbox;display:flex}";

const BlogNavbar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("nav", { class: "navbar" }, h("div", { class: "navbar__logo" }, h("slot", { name: "navbar__logo" })), h("div", { class: "navbar__items" }, h("slot", { name: "navbar__items" })))));
    }
};
BlogNavbar.style = blogNavbarCss;

export { BlogNavbar as blog_navbar };
