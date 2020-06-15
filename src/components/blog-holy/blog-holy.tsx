import { Component, ComponentInterface, h, Prop } from '@stencil/core';

@Component({
  tag: 'blog-holy',
  styleUrl: 'blog-holy.css',
  shadow: true,
})
export class BlogHoly implements ComponentInterface {

  @Prop() heading: string;

  
  render() {
    return (

      <main>
        <header>
          <slot name="header"/>
        </header> 
        
        <nav>
          <h3 class="nav__title">{this.heading}</h3>
          <slot name="nav"/>
        </nav> 
        
        <section>
          <slot name="section"/>
        </section> 
      </main>
    );
  }

}
