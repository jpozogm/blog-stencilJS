import { newSpecPage } from '@stencil/core/testing';
import { BlogLayout } from './blog-layout';

describe('blog-layout', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BlogLayout],
      html: `<blog-layout></blog-layout>`,
    });
    expect(page.root).toEqualHtml(`
      <blog-layout>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </blog-layout>
    `);
  });
});
