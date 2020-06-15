import { Component, h, Prop } from '@stencil/core';
export class BlogCard {
    render() {
        return (h("div", { class: "card" },
            h("div", { class: "card__title" },
                h("h2", null, this.heading)),
            h("div", { class: "card__content" },
                h("p", { class: "" }, this.content)),
            h("div", { class: "card__footer" },
                h("p", null, this.author))));
    }
    static get is() { return "blog-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["blog-card.css"]
    }; }
    static get styleUrls() { return {
        "$": ["blog-card.css"]
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
        },
        "author": {
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
            "attribute": "author",
            "reflect": false
        }
    }; }
}
