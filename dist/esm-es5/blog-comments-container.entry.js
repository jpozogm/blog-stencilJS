import { r as registerInstance, h } from './index-464b2da0.js';
var blogCommentsContainerCss = ":host{display:block}.title{width:70%;margin:15px;border-bottom:1px solid #232f3e;font-style:italic;font-size:20px}.container__comment{height:165px;margin-bottom:-40px}.slot{display:-ms-flexbox;display:flex}.comments{height:100px;width:950px;overflow-y:scroll;padding-left:20px}";
var BlogCommentsContainer = /** @class */ (function () {
    function BlogCommentsContainer(hostRef) {
        registerInstance(this, hostRef);
    }
    BlogCommentsContainer.prototype.render = function () {
        return (h("div", { class: "container__comment" }, h("p", { class: "title" }, "Last comments"), h("div", { id: "comments", class: "comments flex" }, h("slot", { name: "slot" }))));
    };
    return BlogCommentsContainer;
}());
BlogCommentsContainer.style = blogCommentsContainerCss;
export { BlogCommentsContainer as blog_comments_container };
