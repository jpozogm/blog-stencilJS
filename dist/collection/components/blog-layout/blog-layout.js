import { Component, h } from '@stencil/core';
export class BlogLayout {
    render() {
        return (h("main", { class: "main" },
            h("nav", { class: "navbar" },
                h("slot", { name: "navbar" })),
            h("section", { class: "section" },
                h("slot", { name: "section" })),
            h("footer", { class: "footer" },
                h("slot", { name: "footer" }))));
    }
    static get is() { return "blog-layout"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["blog-layout.css"]
    }; }
    static get styleUrls() { return {
        "$": ["blog-layout.css"]
    }; }
}
