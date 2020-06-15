import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'blog-navbar-btn',
  styleUrl: 'blog-navbar-btn.css',
  shadow: true,
})
export class BlogNavbarBtn implements ComponentInterface {
  @Prop() text: string;

  
  render() {
    return (
      <Host>
        <div class="btn">
            <span class="btn__item"><slot name="btn__item">{this.text}</slot></span>
        </div>
      </Host>
    );
  }
}
