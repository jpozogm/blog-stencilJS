import { Component, h, Host, Prop } from '@stencil/core';
export class BlogNavbarBtn {
    render() {
        return (h(Host, null,
            h("div", { class: "btn" },
                h("span", { class: "btn__item" },
                    h("slot", { name: "btn__item" }, this.text)))));
    }
    static get is() { return "blog-navbar-btn"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["blog-navbar-btn.css"]
    }; }
    static get styleUrls() { return {
        "$": ["blog-navbar-btn.css"]
    }; }
    static get properties() { return {
        "text": {
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
            "attribute": "text",
            "reflect": false
        }
    }; }
}
