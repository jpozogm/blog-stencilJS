import { newE2EPage } from '@stencil/core/testing';

describe('blog-back-ground', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<blog-back-ground></blog-back-ground>');

    const element = await page.find('blog-back-ground');
    expect(element).toHaveClass('hydrated');
  });
});
