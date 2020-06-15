import { Component, h, Host } from '@stencil/core';
export class BlogSocialIcons {
    render() {
        return (h(Host, null,
            h("div", { class: "col-md-4 col-sm-6 col-xs-12" },
                h("ul", { class: "social-icons" },
                    h("li", null,
                        h("a", { class: "facebook", href: "#" },
                            h("i", { class: "fa fa-facebook" }, "F"))),
                    h("li", null,
                        h("a", { class: "twitter", href: "#" },
                            h("i", { class: "fa fa-twitter" }, "T"))),
                    h("li", null,
                        h("a", { class: "dribbble", href: "#" },
                            h("i", { class: "fa fa-dribbble" }, "D"))),
                    h("li", null,
                        h("a", { class: "linkedin", href: "#" },
                            h("i", { class: "fa fa-linkedin" }, "L")))))));
    }
    static get is() { return "blog-social-icons"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["blog-social-icons.css"]
    }; }
    static get styleUrls() { return {
        "$": ["blog-social-icons.css"]
    }; }
}
