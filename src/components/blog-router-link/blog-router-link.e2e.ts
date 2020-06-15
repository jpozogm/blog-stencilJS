import { newE2EPage } from '@stencil/core/testing';

describe('blog-router-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<blog-router-link></blog-router-link>');

    const element = await page.find('blog-router-link');
    expect(element).toHaveClass('hydrated');
  });
});
