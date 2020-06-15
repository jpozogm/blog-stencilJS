import { Component, h } from '@stencil/core';
export class BlogIframe {
    render() {
        return (h("div", { class: "container" },
            h("iframe", { src: "assets/gifs/tellUs.gif", class: "iframe", allowFullScreen: true }),
            h("a", null,
                h("slot", { name: "link" }))));
    }
    static get is() { return "blog-iframe"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["blog-iframe.css"]
    }; }
    static get styleUrls() { return {
        "$": ["blog-iframe.css"]
    }; }
}
