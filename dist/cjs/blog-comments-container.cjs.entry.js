'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f0df703d.js');

const blogCommentsContainerCss = ":host{display:block}.title{width:70%;margin:15px;border-bottom:1px solid #232f3e;font-style:italic;font-size:20px}.container__comment{height:165px;margin-bottom:-40px}.slot{display:-ms-flexbox;display:flex}.comments{height:100px;width:950px;overflow-y:scroll;padding-left:20px}";

const BlogCommentsContainer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { class: "container__comment" }, index.h("p", { class: "title" }, "Last comments"), index.h("div", { id: "comments", class: "comments flex" }, index.h("slot", { name: "slot" }))));
    }
};
BlogCommentsContainer.style = blogCommentsContainerCss;

exports.blog_comments_container = BlogCommentsContainer;
