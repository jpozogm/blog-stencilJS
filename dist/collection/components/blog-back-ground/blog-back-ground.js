import { Component, h, Host } from '@stencil/core';
export class BlogBackGround {
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "blog-back-ground"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["blog-back-ground.css"]
    }; }
    static get styleUrls() { return {
        "$": ["blog-back-ground.css"]
    }; }
}
