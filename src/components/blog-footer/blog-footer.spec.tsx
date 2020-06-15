import { newSpecPage } from '@stencil/core/testing';
import { BlogFooter } from './blog-footer';

describe('blog-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BlogFooter],
      html: `<blog-footer></blog-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <blog-footer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </blog-footer>
    `);
  });
});
