import { Component, ComponentInterface, h, Prop } from '@stencil/core';
@Component({
  tag: 'blog-card',
  styleUrl: 'blog-card.css',
  shadow: true,
})
export class BlogCard implements ComponentInterface {


  @Prop() heading: string;
  @Prop() content: string;
  @Prop() author: string;


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
          <p>{this.author}</p>
        </div>
      </div>
    );
  }
}
