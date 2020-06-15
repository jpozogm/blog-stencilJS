import { newSpecPage } from '@stencil/core/testing';
import { BlogBackGround } from './blog-back-ground';

describe('blog-back-ground', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BlogBackGround],
      html: `<blog-back-ground></blog-back-ground>`,
    });
    expect(page.root).toEqualHtml(`
      <blog-back-ground>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </blog-back-ground>
    `);
  });
});
