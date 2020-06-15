import { newSpecPage } from '@stencil/core/testing';
import { BlogPostDetail } from './blog-post-detail';

describe('blog-post-detail', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BlogPostDetail],
      html: `<blog-post-detail></blog-post-detail>`,
    });
    expect(page.root).toEqualHtml(`
      <blog-post-detail>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </blog-post-detail>
    `);
  });
});
