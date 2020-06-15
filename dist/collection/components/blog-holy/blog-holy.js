import { Component, h, Prop } from '@stencil/core';
export class BlogHoly {
    render() {
        return (h("main", null,
            h("header", null,
                h("slot", { name: "header" })),
            h("nav", null,
                h("h3", { class: "nav__title" }, this.heading),
                h("slot", { name: "nav" })),
            h("section", null,
                h("slot", { name: "section" }))));
    }
    static get is() { return "blog-holy"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["blog-holy.css"]
    }; }
    static get styleUrls() { return {
        "$": ["blog-holy.css"]
    }; }
    static get properties() { return {
        "heading": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "heading",
            "reflect": false
        }
    }; }
}
