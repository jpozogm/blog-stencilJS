import { Component, ComponentInterface, h, Prop } from '@stencil/core';

@Component({
  tag: 'blog-footer',
  styleUrl: 'blog-footer.css',
  shadow: true,
})
export class BlogFooter implements ComponentInterface {


  @Prop() heading: string;
  @Prop() content: string;


  render() {
    return (
      <footer class="footer">

        <div class="footer__info">
            <div class="footer__first">
              <h3>{this.heading}</h3>
            </div>

            <div class="footer__middle">
              <p class="">{this.content}</p>
            </div>
          </div>

          <div class="footer__last">
            <div class="col-md-4 col-sm-6 col-xs-12">
                <ul class="social-icons">
                  <li><a class="a facebook" href="#"><i class="fa fa-facebook">Ⓞ</i></a></li>
                  <li><a class="a twitter" href="#"><i class="fa fa-twitter">ツ</i></a></li>
                  <li><a class="a dribbble" href="#"><i class="fa fa-dribbble">〄</i></a></li>
                  <li><a class="a linkedin" href="#"><i class="fa fa-linkedin">♡</i></a></li>
                </ul>
            </div>
          </div>
      </footer>
    );
  }
}

