import { newE2EPage } from '@stencil/core/testing';

describe('blog-post-detail', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<blog-post-detail></blog-post-detail>');

    const element = await page.find('blog-post-detail');
    expect(element).toHaveClass('hydrated');
  });
});
