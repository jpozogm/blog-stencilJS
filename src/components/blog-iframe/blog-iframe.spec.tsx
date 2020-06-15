import { newSpecPage } from '@stencil/core/testing';
import { BlogIframe } from './blog-iframe';

describe('blog-iframe', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BlogIframe],
      html: `<blog-iframe></blog-iframe>`,
    });
    expect(page.root).toEqualHtml(`
      <blog-iframe>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </blog-iframe>
    `);
  });
});
