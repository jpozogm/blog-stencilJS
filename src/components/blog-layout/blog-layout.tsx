import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'blog-layout',
  styleUrl: 'blog-layout.css',
  shadow: true,
})
export class BlogLayout implements ComponentInterface {

  render() {
    return (
      <main class="main">

        <nav class="navbar">
          <slot name="navbar"/>
        </nav>

        <section class="section">
          <slot name="section"/>
        </section>

        <footer class="footer">
          <slot name="footer"/>
        </footer>
      </main>  
    );
  }

}
