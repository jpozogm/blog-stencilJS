import { newE2EPage } from '@stencil/core/testing';

describe('blog-iframe', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<blog-iframe></blog-iframe>');

    const element = await page.find('blog-iframe');
    expect(element).toHaveClass('hydrated');
  });
});
