import { Component, ComponentInterface, h, Host } from '@stencil/core';

@Component({
  tag: 'blog-navbar',
  styleUrl: 'blog-navbar.css',
  shadow: true,
})
export class BlogNavbar implements ComponentInterface {

  render() {
    return (
      <Host>
      <nav class="navbar">
          <div class="navbar__logo">
              <slot name="navbar__logo"/>
          </div>
          <div class="navbar__items">
              <slot name="navbar__items"/>
          </div>
      </nav>
      </Host>
    );
  }

}
