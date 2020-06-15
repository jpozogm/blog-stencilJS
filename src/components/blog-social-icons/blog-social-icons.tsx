import { Component, ComponentInterface, h, Host } from '@stencil/core';

@Component({
  tag: 'blog-social-icons',
  styleUrl: 'blog-social-icons.css',
  shadow: true,
})
export class BlogSocialIcons implements ComponentInterface {

  render() {
    return (
      <Host>
        <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook">F</i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter">T</i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble">D</i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin">L</i></a></li>
            </ul>
        </div>
      </Host>
    );
  }

}


