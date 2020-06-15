import { Component, h, Host } from '@stencil/core';
export class BlogNavbar {
    render() {
        return (h(Host, null,
            h("nav", { class: "navbar" },
                h("div", { class: "navbar__logo" },
                    h("slot", { name: "navbar__logo" })),
                h("div", { class: "navbar__items" },
                    h("slot", { name: "navbar__items" })))));
    }
    static get is() { return "blog-navbar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["blog-navbar.css"]
    }; }
    static get styleUrls() { return {
        "$": ["blog-navbar.css"]
    }; }
}
