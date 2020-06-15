import { Component, ComponentInterface, h, Prop } from '@stencil/core';

@Component({
  tag: 'blog-post-comment',
  styleUrl: 'blog-post-comment.css',
  shadow: true,
})
export class BlogPostComment implements ComponentInterface {

  @Prop() author: string;
  @Prop() content: string;


  render() {
    return (
      <div class="comment">
        <div class="comment__title">
          <h2>{this.author}</h2>
        </div>
        <div class="comment__content">
          <p class="">{this.content}</p>
        </div>
      </div>
    );
  }
}
