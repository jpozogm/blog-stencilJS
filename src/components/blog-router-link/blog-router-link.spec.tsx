import { newSpecPage } from '@stencil/core/testing';
import { BlogRouterLink } from './blog-router-link';

describe('blog-router-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BlogRouterLink],
      html: `<blog-router-link></blog-router-link>`,
    });
    expect(page.root).toEqualHtml(`
      <blog-router-link>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </blog-router-link>
    `);
  });
});
