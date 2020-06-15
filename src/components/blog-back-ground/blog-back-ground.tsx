import { Component, ComponentInterface, h, Host } from '@stencil/core';

@Component({
  tag: 'blog-back-ground',
  styleUrl: 'blog-back-ground.css',
  shadow: true,
})
export class BlogBackGround implements ComponentInterface {

  
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
