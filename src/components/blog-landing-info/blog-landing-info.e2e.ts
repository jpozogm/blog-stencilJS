import { newE2EPage } from '@stencil/core/testing';

describe('blog-landing-info', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<blog-landing-info></blog-landing-info>');

    const element = await page.find('blog-landing-info');
    expect(element).toHaveClass('hydrated');
  });
});
