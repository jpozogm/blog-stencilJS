import { newSpecPage } from '@stencil/core/testing';
import { BlogCommentsContainer } from './blog-comments-container';

describe('blog-comments-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BlogCommentsContainer],
      html: `<blog-comments-container></blog-comments-container>`,
    });
    expect(page.root).toEqualHtml(`
      <blog-comments-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </blog-comments-container>
    `);
  });
});
