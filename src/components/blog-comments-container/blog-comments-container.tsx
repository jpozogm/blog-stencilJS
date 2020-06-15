import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'blog-comments-container',
  styleUrl: 'blog-comments-container.css',
  shadow: true,
})
export class BlogCommentsContainer implements ComponentInterface {

  render() {
    return (
      <div class="container__comment"> 
        <p class="title">Last comments</p>

        <div id="comments" class="comments flex">  
          <slot name="slot"></slot>
        </div>
      </div>        
    );
  }
}
