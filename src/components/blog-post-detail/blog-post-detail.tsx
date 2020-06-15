import { Component, ComponentInterface, h, Prop } from '@stencil/core';

@Component({
  tag: 'blog-post-detail',
  styleUrl: 'blog-post-detail.css',
  shadow: true,
})
export class BlogPostDetail implements ComponentInterface {


  @Prop() heading: string;
  @Prop() content: string;
  @Prop() footer: string;

  render() {
    return (
      <div class="card">
        <div class="card__title">
          <h2>{this.heading}</h2>
        </div>
        <div class="card__content">
          <p class="">{this.content}</p>
        </div>
        <div class="card__footer">
          <p>{this.footer}</p>
        </div>
      </div>
    );
  }

}
