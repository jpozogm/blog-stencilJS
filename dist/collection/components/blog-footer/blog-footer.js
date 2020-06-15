import { Component, h, Prop } from '@stencil/core';
export class BlogFooter {
    render() {
        return (h("footer", { class: "footer" },
            h("div", { class: "footer__info" },
                h("div", { class: "footer__first" },
                    h("h3", null, this.heading)),
                h("div", { class: "footer__middle" },
                    h("p", { class: "" }, this.content))),
            h("div", { class: "footer__last" },
                h("div", { class: "col-md-4 col-sm-6 col-xs-12" },
                    h("ul", { class: "social-icons" },
                        h("li", null,
                            h("a", { class: "a facebook", href: "#" },
                                h("i", { class: "fa fa-facebook" }, "\u24C4"))),
                        h("li", null,
                            h("a", { class: "a twitter", href: "#" },
                                h("i", { class: "fa fa-twitter" }, "\u30C4"))),
                        h("li", null,
                            h("a", { class: "a dribbble", href: "#" },
                                h("i", { class: "fa fa-dribbble" }, "\u3004"))),
                        h("li", null,
                            h("a", { class: "a linkedin", href: "#" },
                                h("i", { class: "fa fa-linkedin" }, "\u2661"))))))));
    }
    static get is() { return "blog-footer"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["blog-footer.css"]
    }; }
    static get styleUrls() { return {
        "$": ["blog-footer.css"]
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
        }
    }; }
}
