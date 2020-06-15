import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'blog-router-link',
  styleUrl: 'blog-router-link.css',
  shadow: true,
})
export class BlogRouterLink implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
