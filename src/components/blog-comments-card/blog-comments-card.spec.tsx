import { newSpecPage } from '@stencil/core/testing';
import { BlogCommentsCard } from './blog-comments-card';

describe('blog-comments-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BlogCommentsCard],
      html: `<blog-comments-card></blog-comments-card>`,
    });
    expect(page.root).toEqualHtml(`
      <blog-comments-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </blog-comments-card>
    `);
  });
});
