import { Component, h, Prop } from '@stencil/core';
export class BlogCommentsCard {
    render() {
        return (h("div", { class: "card" },
            h("div", { class: "card__author" },
                h("p", { class: "author" }, this.author)),
            h("div", { class: "card__content" },
                h("h3", { class: "content" }, this.content))));
    }
    static get is() { return "blog-comments-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["blog-comments-card.css"]
    }; }
    static get styleUrls() { return {
        "$": ["blog-comments-card.css"]
    }; }
    static get properties() { return {
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
