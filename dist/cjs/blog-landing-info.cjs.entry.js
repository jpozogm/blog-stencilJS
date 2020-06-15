'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f0df703d.js');

const blogLandingInfoCss = ":host{display:block}main{height:950px;width:100%;margin:180px -78px 0 -78px;padding:77px;display:grid;gap:10px;background-color:rgba(58, 10, 10, 1)}.title{grid-column-start:1;grid-column-end:2;grid-row-start:1;grid-row-end:2}.title__text{color:#fcf9f7;font-weight:700;font-family:times;font-size:110px}.section-picture{grid-column-start:2;grid-column-end:3;grid-row-start:1;grid-row-end:2;background-image:url(http://localhost:3000/pictures/books.jpeg);background-repeat:no-repeat;background-position:center center;background-size:100%}.aside-picture{grid-column-start:1;grid-column-end:2;grid-row-start:2;grid-row-end:3;position:relative;left:-150px;top:35px;background-image:url(http://localhost:3000/pictures/computer.jpeg);background-repeat:no-repeat;background-position:center center;background-size:70%}content{grid-column-start:2;grid-column-end:3;grid-row-start:2;grid-row-end:3}.fadeIn{opacity:1;-webkit-animation:fade 0.35s ease-in;animation:fade 0.35s ease-in}@-webkit-keyframes fade{0%,25%{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}100%{opacity:1;-webkit-transform:none;transform:none}}@keyframes fade{0%,25%{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}100%{opacity:1;-webkit-transform:none;transform:none}}@media (min-width: 300px) and (max-width: 767px){main{grid-template-columns:1fr;grid-template-rows:1fr 1fr 1fr}title{grid-column-start:1;grid-column-end:2;grid-row-start:1;grid-row-end:2}.section-picture{grid-column-start:1;grid-column-end:2;grid-row-start:2;grid-row-end:3}.aside-picture{display:none}content{grid-column-start:1;grid-column-end:2;grid-row-start:4;grid-row-end:5}}@media (min-width: 1001px){main{grid-template-columns:2fr 2fr;grid-template-rows:1fr 1fr}}";

const BlogLandingInfo = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("main", null, index.h("div", { class: "title" }, index.h("h3", { class: "title__text" }, this.heading), index.h("p", { class: "subtitle__text" }, this.subTitle), index.h("slot", { name: "title" })), index.h("div", { class: "content" }, index.h("p", { class: "content__text" }, this.content), index.h("slot", { name: "content" })), index.h("div", { class: "aside-picture" }), index.h("div", { class: "section-picture" })));
    }
};
BlogLandingInfo.style = blogLandingInfoCss;

exports.blog_landing_info = BlogLandingInfo;
