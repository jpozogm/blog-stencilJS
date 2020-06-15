import { newE2EPage } from '@stencil/core/testing';

describe('blog-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<blog-button></blog-button>');

    const element = await page.find('blog-button');
    expect(element).toHaveClass('hydrated');
  });
});
