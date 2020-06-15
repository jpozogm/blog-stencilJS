import { Component, h } from '@stencil/core';
export class BlogForm {
    render() {
        return (h("div", { class: "form" },
            h("slot", { name: "form" })));
    }
    static get is() { return "blog-form"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["blog-form.css"]
    }; }
    static get styleUrls() { return {
        "$": ["blog-form.css"]
    }; }
}
