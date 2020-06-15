import { newSpecPage } from '@stencil/core/testing';
import { BlogNavbar } from './blog-navbar';

describe('blog-navbar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BlogNavbar],
      html: `<blog-navbar></blog-navbar>`,
    });
    expect(page.root).toEqualHtml(`
      <blog-navbar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </blog-navbar>
    `);
  });
});
