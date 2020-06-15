import { Component, ComponentInterface, h, Prop } from '@stencil/core';

@Component({
  tag: 'blog-landing-info',
  styleUrl: 'blog-landing-info.css',
  shadow: true,
})
export class BlogLandingInfo implements ComponentInterface {

  @Prop() heading: string;
  @Prop() subTitle: string;
  @Prop() content: string;

  render() {
    return (
      <main>
        <div class="title">
          <h3 class="title__text">{this.heading}</h3>
          <p class="subtitle__text">{this.subTitle}</p>
          <slot name="title" />
        </div>

        <div class="content">
          <p class="content__text">{this.content}</p>
          <slot name="content" />
        </div>

        <div class="aside-picture"></div>

        <div class="section-picture">
        </div>
      </main>
    );
  }

}
