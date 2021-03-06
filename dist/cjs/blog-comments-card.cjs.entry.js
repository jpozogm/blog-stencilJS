'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f0df703d.js');

const blogCommentsCardCss = ":host{display:block}.card{position:relative;display:block;width:205px;height:67px;margin-top:10px;-webkit-box-shadow:0px 0px 10px rgba(0, 0, 0, 0.1);box-shadow:0px 0px 10px rgba(0, 0, 0, 0.1);padding:2px 10px;color:#bdbdbd;border-radius:4px;background-image:-webkit-gradient(linear, left bottom, left top, color-stop(95%, rgb(253, 253, 253)), color-stop(5%, rgb(35, 47, 62)));background-image:linear-gradient(to top, rgb(253, 253, 253) 95%, rgb(35, 47, 62)5%);-webkit-transition:-webkit-transform 0.5s;transition:-webkit-transform 0.5s;transition:transform 0.5s;transition:transform 0.5s, -webkit-transform 0.5s;-webkit-transform:perspective( 400px ) rotateY( 14deg );transform:perspective( 400px ) rotateY( 14deg );opacity:1;-webkit-animation:fade 0.35s ease-in;animation:fade 0.35s ease-in}.card{margin:-10px}@-webkit-keyframes fade{0%,25%{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}100%{opacity:1;-webkit-transform:none;transform:none}}@keyframes fade{0%,25%{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}100%{opacity:1;-webkit-transform:none;transform:none}}.card:hover{position:relative;-webkit-transform:scale(1.025);transform:scale(1.025);-webkit-transform:perspective( 400px ) rotateY( -20deg );transform:perspective( 400px ) rotateY( -20deg );-webkit-transition:-webkit-transform 0.25s;transition:-webkit-transform 0.25s;transition:transform 0.25s;transition:transform 0.25s, -webkit-transform 0.25s;background-image:-webkit-gradient(linear, left bottom, left top, color-stop(95%, rgb(253, 253, 253)), color-stop(5%, rgb(58, 10, 10)));background-image:linear-gradient(to top, rgb(253, 253, 253) 95%, rgb(58, 10, 10)5%);border:1px solid rgb(58, 10, 10);border-right:2px solid rgb(58, 10, 10);color:rgb(58, 10, 10);z-index:15}.card:nth-child(n){position:relative;font-style:italic}.card__content{margin:-16px 0;font-style:italic;color:black}.author{margin-top:6px;text-align:end}.card__author{text-align:end}.content::after{content:\" ”\";line-height:10px;font-size:16px;color:#007ad9}.content::before{content:\"“ \";line-height:10px;font-size:16px;color:#007ad9}";

const BlogCommentsCard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { class: "card" }, index.h("div", { class: "card__author" }, index.h("p", { class: "author" }, this.author)), index.h("div", { class: "card__content" }, index.h("h3", { class: "content" }, this.content))));
    }
};
BlogCommentsCard.style = blogCommentsCardCss;

exports.blog_comments_card = BlogCommentsCard;
