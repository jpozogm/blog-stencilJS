import { newE2EPage } from '@stencil/core/testing';

describe('blog-comments-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<blog-comments-card></blog-comments-card>');

    const element = await page.find('blog-comments-card');
    expect(element).toHaveClass('hydrated');
  });
});
