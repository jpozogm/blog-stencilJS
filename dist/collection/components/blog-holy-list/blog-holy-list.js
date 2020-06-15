import { Component, h } from '@stencil/core';
export class BlogHolyList {
    render() {
        return (h("main", null,
            h("slot", { name: "main" })));
    }
    static get is() { return "blog-holy-list"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["blog-holy-list.css"]
    }; }
    static get styleUrls() { return {
        "$": ["blog-holy-list.css"]
    }; }
}
