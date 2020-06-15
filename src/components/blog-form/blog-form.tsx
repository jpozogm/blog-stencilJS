import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'blog-form',
  styleUrl: 'blog-form.css',
  shadow: true,
})
export class BlogForm implements ComponentInterface {

  render() {
    return (
      <div class="form">
        <slot name="form"></slot>
      </div>
    );
  }

}
