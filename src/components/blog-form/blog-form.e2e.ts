import { newE2EPage } from '@stencil/core/testing';

describe('blog-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<blog-form></blog-form>');

    const element = await page.find('blog-form');
    expect(element).toHaveClass('hydrated');
  });
});
