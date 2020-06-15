import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'blog-holy-list',
  styleUrl: 'blog-holy-list.css',
  shadow: true,
})
export class BlogHolyList implements ComponentInterface {

  render() {
    return (
      <main> 
        <slot name="main"/>
      </main>
    );
  }

}
