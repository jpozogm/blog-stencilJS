import { r as registerInstance, h, H as Host } from './index-464b2da0.js';

const blogSocialIconsCss = ":host{display:block}.site-footer .social-icons{text-align:right}.site-footer .social-icons a{width:40px;height:40px;line-height:40px;margin-left:6px;margin-right:0;border-radius:100%;background-color:#33353d}.copyright-text{margin:0}@media (max-width:991px){.site-footer [class^=col-]{margin-bottom:30px}}@media (max-width:767px){.site-footer{padding-bottom:0}.site-footer .copyright-text,.site-footer .social-icons{text-align:center}}.social-icons{padding-left:0;margin-bottom:0;list-style:none}.social-icons li{display:inline-block;margin-bottom:4px}.social-icons li.title{margin-right:15px;text-transform:uppercase;color:#96a2b2;font-weight:700;font-size:13px}.social-icons a{background-color:#eceeef;color:#818a91;font-size:16px;display:inline-block;line-height:44px;width:44px;height:44px;text-align:center;margin-right:8px;border-radius:100%;-webkit-transition:all .2s linear;-o-transition:all .2s linear;transition:all .2s linear}.social-icons .size-sm a{line-height:34px;height:34px;width:34px;font-size:14px}.social-icons a.dribbble:hover{background-color:#ea4c89}.social-icons a.facebook:hover{background-color:#3b5998}.social-icons a.twitter:hover{background-color:#00aced}.social-icons a.linkedin:hover{background-color:#007bb6}.social-icons a:active,.social-icons a:focus,.social-icons a:hover{color:#fff;background-color:#29aafe}";

const BlogSocialIcons = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("div", { class: "col-md-4 col-sm-6 col-xs-12" }, h("ul", { class: "social-icons" }, h("li", null, h("a", { class: "facebook", href: "#" }, h("i", { class: "fa fa-facebook" }, "F"))), h("li", null, h("a", { class: "twitter", href: "#" }, h("i", { class: "fa fa-twitter" }, "T"))), h("li", null, h("a", { class: "dribbble", href: "#" }, h("i", { class: "fa fa-dribbble" }, "D"))), h("li", null, h("a", { class: "linkedin", href: "#" }, h("i", { class: "fa fa-linkedin" }, "L")))))));
    }
};
BlogSocialIcons.style = blogSocialIconsCss;

export { BlogSocialIcons as blog_social_icons };
