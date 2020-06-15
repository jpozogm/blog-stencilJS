import { Component, Host, h } from '@stencil/core';
export class BlogRouterLink {
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "blog-router-link"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["blog-router-link.css"]
    }; }
    static get styleUrls() { return {
        "$": ["blog-router-link.css"]
    }; }
}
