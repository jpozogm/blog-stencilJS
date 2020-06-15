import { Component, h, Prop } from '@stencil/core';
export class BlogPostComment {
    render() {
        return (h("div", { class: "comment" },
            h("div", { class: "comment__title" },
                h("h2", null, this.author)),
            h("div", { class: "comment__content" },
                h("p", { class: "" }, this.content))));
    }
    static get is() { return "blog-post-comment"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["blog-post-comment.css"]
    }; }
    static get styleUrls() { return {
        "$": ["blog-post-comment.css"]
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
