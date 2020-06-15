import { newSpecPage } from '@stencil/core/testing';
import { BlogButton } from './blog-button';

describe('blog-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BlogButton],
      html: `<blog-button></blog-button>`,
    });
    expect(page.root).toEqualHtml(`
      <blog-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </blog-button>
    `);
  });
});
