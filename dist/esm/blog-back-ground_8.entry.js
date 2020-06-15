import { r as registerInstance, h, H as Host } from './index-464b2da0.js';

const blogBackGroundCss = ":host{display:block;background-image:url(http://localhost:3000/pictures/libreria.jpeg);background-repeat:no-repeat;background-position:right top;background-size:75%;background-color:#fcf9f7;overflow-y:scroll}";

const BlogBackGround = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
};
BlogBackGround.style = blogBackGroundCss;

const blogCardCss = ":host{display:block;justify-self:stretch}.card{display:block;width:300px;height:380px;-webkit-box-shadow:0px 0px 10px rgba(0, 0, 0, 0.1);box-shadow:0px 0px 10px rgba(0, 0, 0, 0.1);padding:15px 35px;color:#bdbdbd;border-radius:4px;background-image:-webkit-gradient(linear, left bottom, left top, color-stop(95%, rgb(253, 253, 253)), color-stop(5%, rgb(35, 47, 62)));background-image:linear-gradient(to top, rgb(253, 253, 253) 95%, rgb(35, 47, 62)5%);-webkit-transition:-webkit-transform 0.5s;transition:-webkit-transform 0.5s;transition:transform 0.5s;transition:transform 0.5s, -webkit-transform 0.5s;opacity:1;-webkit-animation:fade 0.35s ease-in;animation:fade 0.35s ease-in}@-webkit-keyframes fade{0%,25%{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}100%{opacity:1;-webkit-transform:none;transform:none}}@keyframes fade{0%,25%{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}100%{opacity:1;-webkit-transform:none;transform:none}}.card__title{height:220px;overflow:hidden;color:#40403a;text-align:right;font-size:30px;overflow-wrap:break-word}.card__content{height:110px;font-style:italic}.card__footer{margin-top:10px;color:black;font-style:italic;text-align:right;font-size:14px}.card:hover{-webkit-transform:scale(1.025);transform:scale(1.025);-webkit-transition:-webkit-transform 0.25s;transition:-webkit-transform 0.25s;transition:transform 0.25s;transition:transform 0.25s, -webkit-transform 0.25s;background-image:-webkit-gradient(linear, left bottom, left top, color-stop(95%, rgb(253, 253, 253)), color-stop(5%, rgb(58, 10, 10)));background-image:linear-gradient(to top, rgb(253, 253, 253) 95%, rgb(58, 10, 10)5%)}.card:hover div:nth-child(2)>p{color:#007ad9}.more-blue::after{content:\"...\";color:var(--blue-color-light)}";

const BlogCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "card" }, h("div", { class: "card__title" }, h("h2", null, this.heading)), h("div", { class: "card__content" }, h("p", { class: "" }, this.content)), h("div", { class: "card__footer" }, h("p", null, this.author))));
    }
};
BlogCard.style = blogCardCss;

const blogFooterCss = ":host{display:block}.a{text-decoration:none}.footer{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;margin:0 -78px;padding:77px;height:0px;background-color:rgb(35, 47, 62);color:white}.footer__info{padding:10px}.pepe{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:end}.site-footer .social-icons{text-align:right}.site-footer .social-icons a{width:40px;height:40px;line-height:40px;margin-left:6px;margin-right:0;border-radius:100%}.copyright-text{margin:0}@media (max-width:991px){.site-footer [class^=col-]{margin-bottom:30px}}@media (max-width:767px){.site-footer{padding-bottom:0}.site-footer .copyright-text,.site-footer .social-icons{text-align:center}}.social-icons{padding-left:0;margin-bottom:0;list-style:none}.social-icons li{display:inline-block;margin-bottom:4px}.social-icons li.title{margin-right:15px;text-transform:uppercase;color:#96a2b2;font-weight:700;font-size:13px}.social-icons a{background-color:#eceeef;color:#818a91;font-size:21px;display:inline-block;line-height:44px;width:44px;height:44px;text-align:center;margin-right:8px;border-radius:100%;-webkit-transition:all .2s linear;-o-transition:all .2s linear;transition:all .2s linear}.social-icons .size-sm a{line-height:34px;height:34px;width:34px;font-size:14px}.social-icons a.dribbble:hover{background-color:#ea4c89}.social-icons a.facebook:hover{background-color:#3b5998}.social-icons a.twitter:hover{background-color:#00aced}.social-icons a.linkedin:hover{background-color:#007bb6}.social-icons a:active,.social-icons a:focus,.social-icons a:hover{color:#fff;background-color:#29aafe}";

const BlogFooter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("footer", { class: "footer" }, h("div", { class: "footer__info" }, h("div", { class: "footer__first" }, h("h3", null, this.heading)), h("div", { class: "footer__middle" }, h("p", { class: "" }, this.content))), h("div", { class: "footer__last" }, h("div", { class: "col-md-4 col-sm-6 col-xs-12" }, h("ul", { class: "social-icons" }, h("li", null, h("a", { class: "a facebook", href: "#" }, h("i", { class: "fa fa-facebook" }, "\u24C4"))), h("li", null, h("a", { class: "a twitter", href: "#" }, h("i", { class: "fa fa-twitter" }, "\u30C4"))), h("li", null, h("a", { class: "a dribbble", href: "#" }, h("i", { class: "fa fa-dribbble" }, "\u3004"))), h("li", null, h("a", { class: "a linkedin", href: "#" }, h("i", { class: "fa fa-linkedin" }, "\u2661"))))))));
    }
};
BlogFooter.style = blogFooterCss;

const blogHolyCss = ":host{display:block}main{height:500px;margin:90px auto;display:grid;gap:10px;padding:16px}nav{overflow:hidden;grid-column-start:1;grid-column-end:2;grid-row-start:1;grid-row-end:-1}.nav__title{font-size:40px;font-weight:100;font-family:helvetica;-webkit-transform:scaley(2);transform:scaley(2);padding-bottom:10px}section{grid-column-start:2;grid-column-end:-1;grid-row-start:2;grid-row-end:-1}header{grid-column-start:2;grid-column-end:-1;grid-row-start:1;grid-row-end:2}@media (min-width: 300px) and (max-width: 1000px){main{grid-template-columns:2fr;grid-template-rows:1fr 1fr 1fr}header{grid-column-start:1;grid-column-end:-1;grid-row-start:1;grid-row-end:2}nav{grid-column-start:1;grid-column-end:-1;grid-row-start:3;grid-row-end:4}section{grid-column-start:1;grid-column-end:-1;grid-row-start:5;grid-row-end:-1}}@media (min-width: 1001px){main{grid-template-columns:330px 2fr;grid-template-rows:1fr 2fr}}";

const BlogHoly = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("main", null, h("header", null, h("slot", { name: "header" })), h("nav", null, h("h3", { class: "nav__title" }, this.heading), h("slot", { name: "nav" })), h("section", null, h("slot", { name: "section" }))));
    }
};
BlogHoly.style = blogHolyCss;

const blogHolyListCss = ":host{display:block;display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 370px));justify-items:stretch;-ms-flex-pack:space-evenly;justify-content:space-evenly;padding:10px 20px 10px 90px;gap:20px}main{color:gainsboro;height:1500px;margin:0 auto;min-height:100vh;display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 370px));justify-items:stretch;-ms-flex-pack:space-evenly;justify-content:space-evenly;padding:10px 20px 10px 90px;gap:20px}section{display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 370px));justify-items:stretch;-ms-flex-pack:space-evenly;justify-content:space-evenly;padding:10px 20px 10px 90px;gap:20px;grid-area:my-section;background-color:indigo;grid-column-start:1;grid-column-end:-1;grid-row-start:1;grid-row-end:-1}";

const BlogHolyList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("main", null, h("slot", { name: "main" })));
    }
};
BlogHolyList.style = blogHolyListCss;

const blogLayoutCss = ":host{display:block}.main{margin:0 5%;min-height:3300px;max-height:1500px}nav{height:75px}footer{height:20px}";

const BlogLayout = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("main", { class: "main" }, h("nav", { class: "navbar" }, h("slot", { name: "navbar" })), h("section", { class: "section" }, h("slot", { name: "section" })), h("footer", { class: "footer" }, h("slot", { name: "footer" }))));
    }
};
BlogLayout.style = blogLayoutCss;

const blogNavbarBtnCss = ":host{display:block}.btn{display:-ms-flexbox;display:flex}slot{background-color:blueviolet;border-radius:3px}.btn__item{display:inline-block;text-decoration:none;display:-ms-flexbox;display:flex;padding:10px;background-color:rgba(35, 47, 62, 0.4);border-radius:3px;margin-left:10px;font-weight:700;letter-spacing:.15em;color:white;text-transform:uppercase;text-shadow:3.5px 2px rgb(58, 10, 10);font-family:Montserrat,Helvetica Neue,Helvetica,Arial,sans-serif;border-bottom:2px solid transparent}.btn__item+.btn__item{margin-left:10px}.btn__item:hover{background-color:rgba(255, 0, 0, 0.2);border-bottom:2px solid white}";

const BlogNavbarBtn = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("div", { class: "btn" }, h("span", { class: "btn__item" }, h("slot", { name: "btn__item" }, this.text)))));
    }
};
BlogNavbarBtn.style = blogNavbarBtnCss;

function format(first, middle, last) {
    return ((first || '') +
        (middle ? ` ${middle}` : '') +
        (last ? ` ${last}` : ''));
}

const myComponentCss = ":host{display:block}";

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return h("div", null, "Hello, World! I'm ", this.getText());
    }
};
MyComponent.style = myComponentCss;

export { BlogBackGround as blog_back_ground, BlogCard as blog_card, BlogFooter as blog_footer, BlogHoly as blog_holy, BlogHolyList as blog_holy_list, BlogLayout as blog_layout, BlogNavbarBtn as blog_navbar_btn, MyComponent as my_component };
