import { newE2EPage } from '@stencil/core/testing';

describe('blog-post-comment', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<blog-post-comment></blog-post-comment>');

    const element = await page.find('blog-post-comment');
    expect(element).toHaveClass('hydrated');
  });
});
