import { Component, h, Prop } from '@stencil/core';
export class BlogLandingInfo {
    render() {
        return (h("main", null,
            h("div", { class: "title" },
                h("h3", { class: "title__text" }, this.heading),
                h("p", { class: "subtitle__text" }, this.subTitle),
                h("slot", { name: "title" })),
            h("div", { class: "content" },
                h("p", { class: "content__text" }, this.content),
                h("slot", { name: "content" })),
            h("div", { class: "aside-picture" }),
            h("div", { class: "section-picture" })));
    }
    static get is() { return "blog-landing-info"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["blog-landing-info.css"]
    }; }
    static get styleUrls() { return {
        "$": ["blog-landing-info.css"]
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
        },
        "subTitle": {
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
            "attribute": "sub-title",
            "reflect": false
        },
        "content": {
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
            "attribute": "content",
            "reflect": false
        }
    }; }
}
