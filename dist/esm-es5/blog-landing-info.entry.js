import { r as registerInstance, h } from './index-464b2da0.js';
var blogLandingInfoCss = ":host{display:block}main{height:950px;width:100%;margin:180px -78px 0 -78px;padding:77px;display:grid;gap:10px;background-color:rgba(58, 10, 10, 1)}.title{grid-column-start:1;grid-column-end:2;grid-row-start:1;grid-row-end:2}.title__text{color:#fcf9f7;font-weight:700;font-family:times;font-size:110px}.section-picture{grid-column-start:2;grid-column-end:3;grid-row-start:1;grid-row-end:2;background-image:url(http://localhost:3000/pictures/books.jpeg);background-repeat:no-repeat;background-position:center center;background-size:100%}.aside-picture{grid-column-start:1;grid-column-end:2;grid-row-start:2;grid-row-end:3;position:relative;left:-150px;top:35px;background-image:url(http://localhost:3000/pictures/computer.jpeg);background-repeat:no-repeat;background-position:center center;background-size:70%}content{grid-column-start:2;grid-column-end:3;grid-row-start:2;grid-row-end:3}.fadeIn{opacity:1;-webkit-animation:fade 0.35s ease-in;animation:fade 0.35s ease-in}@-webkit-keyframes fade{0%,25%{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}100%{opacity:1;-webkit-transform:none;transform:none}}@keyframes fade{0%,25%{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}100%{opacity:1;-webkit-transform:none;transform:none}}@media (min-width: 300px) and (max-width: 767px){main{grid-template-columns:1fr;grid-template-rows:1fr 1fr 1fr}title{grid-column-start:1;grid-column-end:2;grid-row-start:1;grid-row-end:2}.section-picture{grid-column-start:1;grid-column-end:2;grid-row-start:2;grid-row-end:3}.aside-picture{display:none}content{grid-column-start:1;grid-column-end:2;grid-row-start:4;grid-row-end:5}}@media (min-width: 1001px){main{grid-template-columns:2fr 2fr;grid-template-rows:1fr 1fr}}";
var BlogLandingInfo = /** @class */ (function () {
    function BlogLandingInfo(hostRef) {
        registerInstance(this, hostRef);
    }
    BlogLandingInfo.prototype.render = function () {
        return (h("main", null, h("div", { class: "title" }, h("h3", { class: "title__text" }, this.heading), h("p", { class: "subtitle__text" }, this.subTitle), h("slot", { name: "title" })), h("div", { class: "content" }, h("p", { class: "content__text" }, this.content), h("slot", { name: "content" })), h("div", { class: "aside-picture" }), h("div", { class: "section-picture" })));
    };
    return BlogLandingInfo;
}());
BlogLandingInfo.style = blogLandingInfoCss;
export { BlogLandingInfo as blog_landing_info };
