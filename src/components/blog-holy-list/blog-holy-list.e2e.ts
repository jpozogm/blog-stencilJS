import { newE2EPage } from '@stencil/core/testing';

describe('blog-holy-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<blog-holy-list></blog-holy-list>');

    const element = await page.find('blog-holy-list');
    expect(element).toHaveClass('hydrated');
  });
});
