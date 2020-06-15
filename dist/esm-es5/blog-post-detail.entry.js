import { r as registerInstance, h } from './index-464b2da0.js';
var blogPostDetailCss = ":host{display:block;justify-self:stretch}.card{display:block;width:80%;-webkit-box-shadow:0px 0px 10px rgba(0, 0, 0, 0.1);box-shadow:0px 0px 10px rgba(0, 0, 0, 0.1);padding:15px 35px;color:#bdbdbd;border-radius:4px;background-image:-webkit-gradient(linear, left bottom, left top, color-stop(95%, rgb(253, 253, 253)), color-stop(5%, rgb(35, 47, 62)));background-image:linear-gradient(to top, rgb(253, 253, 253) 95%, rgb(35, 47, 62)5%);-webkit-transition:-webkit-transform 0.3s;transition:-webkit-transform 0.3s;transition:transform 0.3s;transition:transform 0.3s, -webkit-transform 0.3s;opacity:1;-webkit-animation:fade 0.35s ease-in;animation:fade 0.35s ease-in}@-webkit-keyframes fade{0%,25%{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}100%{opacity:1;-webkit-transform:none;transform:none}}@keyframes fade{0%,25%{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}100%{opacity:1;-webkit-transform:none;transform:none}}.card__title{overflow:hidden;color:#40403a;text-align:right;font-size:30px;overflow-wrap:break-word}.card__content{height:110px;font-style:italic;color:#007ad9}.card__footer{margin-top:45px;color:black;font-style:italic;text-align:right;font-size:14px}";
var BlogPostDetail = /** @class */ (function () {
    function BlogPostDetail(hostRef) {
        registerInstance(this, hostRef);
    }
    BlogPostDetail.prototype.render = function () {
        return (h("div", { class: "card" }, h("div", { class: "card__title" }, h("h2", null, this.heading)), h("div", { class: "card__content" }, h("p", { class: "" }, this.content)), h("div", { class: "card__footer" }, h("p", null, this.footer))));
    };
    return BlogPostDetail;
}());
BlogPostDetail.style = blogPostDetailCss;
export { BlogPostDetail as blog_post_detail };
