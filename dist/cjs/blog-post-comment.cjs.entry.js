'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f0df703d.js');

const blogPostCommentCss = ":host{display:block}.comment{display:block;width:80%;margin:10px 0;padding:15px 35px;border-radius:4px;-webkit-box-shadow:0px 0px 10px rgba(0, 0, 0, 0.1);box-shadow:0px 0px 10px rgba(0, 0, 0, 0.1);color:#bdbdbd;background-color:rgb(253, 253, 253);border-bottom:2px solid black;border-right:2px solid black;opacity:1;-webkit-animation:fade 0.45s ease-in;animation:fade 0.45s ease-in}@-webkit-keyframes fade{0%,25%{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}100%{opacity:1;-webkit-transform:none;transform:none}}@keyframes fade{0%,25%{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}100%{opacity:1;-webkit-transform:none;transform:none}}.comment__title{overflow:hidden;margin-top:-15px;text-align:right;font-size:11px;overflow-wrap:break-word;color:#40403a}.comment__content{margin-top:-15px;font-size:14px;font-style:italic;color:black}div h2{border-bottom:0.05px solid black}";

const BlogPostComment = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { class: "comment" }, index.h("div", { class: "comment__title" }, index.h("h2", null, this.author)), index.h("div", { class: "comment__content" }, index.h("p", { class: "" }, this.content))));
    }
};
BlogPostComment.style = blogPostCommentCss;

exports.blog_post_comment = BlogPostComment;
