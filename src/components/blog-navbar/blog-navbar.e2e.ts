import { newE2EPage } from '@stencil/core/testing';

describe('blog-navbar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<blog-navbar></blog-navbar>');

    const element = await page.find('blog-navbar');
    expect(element).toHaveClass('hydrated');
  });
});
