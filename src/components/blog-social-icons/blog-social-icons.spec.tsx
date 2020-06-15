import { newSpecPage } from '@stencil/core/testing';
import { BlogSocialIcons } from './blog-social-icons';

describe('blog-social-icons', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BlogSocialIcons],
      html: `<blog-social-icons></blog-social-icons>`,
    });
    expect(page.root).toEqualHtml(`
      <blog-social-icons>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </blog-social-icons>
    `);
  });
});
