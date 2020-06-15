'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f0df703d.js');

const blogPostDetailCss = ":host{display:block;justify-self:stretch}.card{display:block;width:80%;-webkit-box-shadow:0px 0px 10px rgba(0, 0, 0, 0.1);box-shadow:0px 0px 10px rgba(0, 0, 0, 0.1);padding:15px 35px;color:#bdbdbd;border-radius:4px;background-image:-webkit-gradient(linear, left bottom, left top, color-stop(95%, rgb(253, 253, 253)), color-stop(5%, rgb(35, 47, 62)));background-image:linear-gradient(to top, rgb(253, 253, 253) 95%, rgb(35, 47, 62)5%);-webkit-transition:-webkit-transform 0.3s;transition:-webkit-transform 0.3s;transition:transform 0.3s;transition:transform 0.3s, -webkit-transform 0.3s;opacity:1;-webkit-animation:fade 0.35s ease-in;animation:fade 0.35s ease-in}@-webkit-keyframes fade{0%,25%{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}100%{opacity:1;-webkit-transform:none;transform:none}}@keyframes fade{0%,25%{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}100%{opacity:1;-webkit-transform:none;transform:none}}.card__title{overflow:hidden;color:#40403a;text-align:right;font-size:30px;overflow-wrap:break-word}.card__content{height:110px;font-style:italic;color:#007ad9}.card__footer{margin-top:45px;color:black;font-style:italic;text-align:right;font-size:14px}";

const BlogPostDetail = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { class: "card" }, index.h("div", { class: "card__title" }, index.h("h2", null, this.heading)), index.h("div", { class: "card__content" }, index.h("p", { class: "" }, this.content)), index.h("div", { class: "card__footer" }, index.h("p", null, this.footer))));
    }
};
BlogPostDetail.style = blogPostDetailCss;

exports.blog_post_detail = BlogPostDetail;
