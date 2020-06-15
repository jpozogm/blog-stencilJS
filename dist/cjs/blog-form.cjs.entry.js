'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f0df703d.js');

const blogFormCss = ":host{display:block}.signUpLogin{position:absolute}.passwordForgotten{padding-left:20px}.angularIco{position:relative;top:3px;right:22px}.form-label{padding-top:20px;font-size:20px}.form-control,select{border:1px slolid  rgb(35, 47, 62);outline:none;height:30px;padding:0 15px;margin:5px 0}";

const BlogForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { class: "form" }, index.h("slot", { name: "form" })));
    }
};
BlogForm.style = blogFormCss;

exports.blog_form = BlogForm;
