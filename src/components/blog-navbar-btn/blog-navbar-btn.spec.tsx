import { newSpecPage } from '@stencil/core/testing';
import { BlogNavbarBtn } from './blog-navbar-btn';

describe('blog-navbar-btn', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BlogNavbarBtn],
      html: `<blog-navbar-btn></blog-navbar-btn>`,
    });
    expect(page.root).toEqualHtml(`
      <blog-navbar-btn>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </blog-navbar-btn>
    `);
  });
});
