import { newSpecPage } from '@stencil/core/testing';
import { BlogPostComment } from './blog-post-comment';

describe('blog-post-comment', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BlogPostComment],
      html: `<blog-post-comment></blog-post-comment>`,
    });
    expect(page.root).toEqualHtml(`
      <blog-post-comment>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </blog-post-comment>
    `);
  });
});
