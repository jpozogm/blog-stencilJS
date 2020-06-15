'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f0df703d.js');

const blogButtonCss = ":host{display:block}button{display:inline-block;-webkit-appearance:none;background-color:var(--radh-button-background-color, orange);border:none;border-radius:5px;color:var(--radh-button-color, white);margin:10px;padding:10px 15px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;cursor:pointer;outline:none;-webkit-box-shadow:inset 99px 99px transparent;box-shadow:inset 99px 99px transparent;-webkit-transition:500ms -webkit-box-shadow;transition:500ms -webkit-box-shadow;transition:500ms box-shadow;transition:500ms box-shadow, 500ms -webkit-box-shadow}button:hover{-webkit-box-shadow:inset 99px 99px rgba(255,255,255,0.18);box-shadow:inset 99px 99px rgba(255,255,255,0.18)}button:active{-webkit-box-shadow:inset 99px 99px   rgba(0,0,0,0.18);box-shadow:inset 99px 99px   rgba(0,0,0,0.18)}button:disabled{-webkit-box-shadow:inset 99px 99px rgba(255,255,255,0.18);box-shadow:inset 99px 99px rgba(255,255,255,0.18);cursor:not-allowed}";

const BlogButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("button", { class: "button", type: this.type, disabled: this.disabled }, this.text));
    }
};
BlogButton.style = blogButtonCss;

exports.blog_button = BlogButton;
