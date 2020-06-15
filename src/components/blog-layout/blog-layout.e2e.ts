import { newE2EPage } from '@stencil/core/testing';

describe('blog-layout', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<blog-layout></blog-layout>');

    const element = await page.find('blog-layout');
    expect(element).toHaveClass('hydrated');
  });
});
