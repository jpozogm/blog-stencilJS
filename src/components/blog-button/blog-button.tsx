import { Component, ComponentInterface, h, Prop } from '@stencil/core';

@Component({
  tag: 'blog-button',
  styleUrl: 'blog-button.css',
  shadow: true,
})
export class BlogButton implements ComponentInterface {
  @Prop() type: string;
  @Prop() text: string;
  @Prop() disabled: boolean;

  render() {
    return (
          <button class="button"
          type={this.type}
          disabled={this.disabled}
          >{this.text}</button>
    );
  }

}
