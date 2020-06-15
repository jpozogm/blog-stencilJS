import { Component, h } from '@stencil/core';
export class BlogCommentsContainer {
    render() {
        return (h("div", { class: "container__comment" },
            h("p", { class: "title" }, "Last comments"),
            h("div", { id: "comments", class: "comments flex" },
                h("slot", { name: "slot" }))));
    }
    static get is() { return "blog-comments-container"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["blog-comments-container.css"]
    }; }
    static get styleUrls() { return {
        "$": ["blog-comments-container.css"]
    }; }
}
