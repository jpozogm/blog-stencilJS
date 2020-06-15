import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'blog-iframe',
  styleUrl: 'blog-iframe.css',
  shadow: true,
})
export class BlogIframe implements ComponentInterface {

  render() {
    return (
    <div class="container">

      <iframe src="assets/gifs/tellUs.gif" class="iframe" 
      allowFullScreen></iframe>

      <a><slot name="link"></slot></a>
    </div>
    );
  }

}
