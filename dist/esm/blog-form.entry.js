import { r as registerInstance, h } from './index-464b2da0.js';

const blogFormCss = ":host{display:block}.signUpLogin{position:absolute}.passwordForgotten{padding-left:20px}.angularIco{position:relative;top:3px;right:22px}.form-label{padding-top:20px;font-size:20px}.form-control,select{border:1px slolid  rgb(35, 47, 62);outline:none;height:30px;padding:0 15px;margin:5px 0}";

const BlogForm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "form" }, h("slot", { name: "form" })));
    }
};
BlogForm.style = blogFormCss;

export { BlogForm as blog_form };
