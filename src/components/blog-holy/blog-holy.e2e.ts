import { newE2EPage } from '@stencil/core/testing';

describe('blog-holy', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<blog-holy></blog-holy>');

    const element = await page.find('blog-holy');
    expect(element).toHaveClass('hydrated');
  });
});
