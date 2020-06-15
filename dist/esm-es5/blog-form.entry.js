import { r as registerInstance, h } from './index-464b2da0.js';
var blogFormCss = ":host{display:block}.signUpLogin{position:absolute}.passwordForgotten{padding-left:20px}.angularIco{position:relative;top:3px;right:22px}.form-label{padding-top:20px;font-size:20px}.form-control,select{border:1px slolid  rgb(35, 47, 62);outline:none;height:30px;padding:0 15px;margin:5px 0}";
var BlogForm = /** @class */ (function () {
    function BlogForm(hostRef) {
        registerInstance(this, hostRef);
    }
    BlogForm.prototype.render = function () {
        return (h("div", { class: "form" }, h("slot", { name: "form" })));
    };
    return BlogForm;
}());
BlogForm.style = blogFormCss;
export { BlogForm as blog_form };
