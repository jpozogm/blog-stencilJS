import { newE2EPage } from '@stencil/core/testing';

describe('blog-footer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<blog-footer></blog-footer>');

    const element = await page.find('blog-footer');
    expect(element).toHaveClass('hydrated');
  });
});
