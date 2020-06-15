import { newSpecPage } from '@stencil/core/testing';
import { BlogLandingInfo } from './blog-landing-info';

describe('blog-landing-info', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BlogLandingInfo],
      html: `<blog-landing-info></blog-landing-info>`,
    });
    expect(page.root).toEqualHtml(`
      <blog-landing-info>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </blog-landing-info>
    `);
  });
});
