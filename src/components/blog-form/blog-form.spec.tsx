import { newSpecPage } from '@stencil/core/testing';
import { BlogForm } from './blog-form';

describe('blog-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BlogForm],
      html: `<blog-form></blog-form>`,
    });
    expect(page.root).toEqualHtml(`
      <blog-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </blog-form>
    `);
  });
});
