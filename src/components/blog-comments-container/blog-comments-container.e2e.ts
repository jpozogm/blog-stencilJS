import { newE2EPage } from '@stencil/core/testing';

describe('blog-comments-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<blog-comments-container></blog-comments-container>');

    const element = await page.find('blog-comments-container');
    expect(element).toHaveClass('hydrated');
  });
});
