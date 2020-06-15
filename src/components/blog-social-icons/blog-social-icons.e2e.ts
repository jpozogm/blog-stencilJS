import { newE2EPage } from '@stencil/core/testing';

describe('blog-social-icons', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<blog-social-icons></blog-social-icons>');

    const element = await page.find('blog-social-icons');
    expect(element).toHaveClass('hydrated');
  });
});
