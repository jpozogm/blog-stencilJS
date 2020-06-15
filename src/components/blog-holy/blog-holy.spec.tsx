import { newSpecPage } from '@stencil/core/testing';
import { BlogHoly } from './blog-holy';

describe('blog-holy', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BlogHoly],
      html: `<blog-holy></blog-holy>`,
    });
    expect(page.root).toEqualHtml(`
      <blog-holy>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </blog-holy>
    `);
  });
});
