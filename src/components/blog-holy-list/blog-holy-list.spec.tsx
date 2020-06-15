import { newSpecPage } from '@stencil/core/testing';
import { BlogHolyList } from './blog-holy-list';

describe('blog-holy-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BlogHolyList],
      html: `<blog-holy-list></blog-holy-list>`,
    });
    expect(page.root).toEqualHtml(`
      <blog-holy-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </blog-holy-list>
    `);
  });
});
