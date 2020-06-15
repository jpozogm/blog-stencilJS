import { Component, ComponentInterface, h, Prop } from '@stencil/core';

@Component({
  tag: 'blog-comments-card',
  styleUrl: 'blog-comments-card.css',
  shadow: true,
})
export class BlogCommentsCard implements ComponentInterface {


  @Prop() author: string;
  @Prop() content: string;
  
  render() {
    return (
      <div class="card">
      <div class="card__author">
          <p class="author">{this.author}</p>
      </div>

      <div class="card__content">
        <h3 class="content">{this.content}</h3>
      </div>
  </div>
    );
  }

}
