import { newE2EPage } from '@stencil/core/testing';

describe('blog-navbar-btn', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<blog-navbar-btn></blog-navbar-btn>');

    const element = await page.find('blog-navbar-btn');
    expect(element).toHaveClass('hydrated');
  });
});
