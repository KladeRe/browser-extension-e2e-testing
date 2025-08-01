import { test, expect } from './fixtures';

test.describe('Cookie Extension Tests', () => {
  test('should show error when target cookie does not exist', async ({ context, extensionId }) => {
    // Create a simple localhost page using data URL
    const page = await context.newPage();
    await page.goto('data:text/html,<html><body><h1>Test Page</h1></body></html>');

    // Open extension popup
    const extensionPage = await context.newPage();
    await extensionPage.goto(`chrome-extension://${extensionId}/popup.html`);

    // Wait for the extension to check for the cookie
    await extensionPage.waitForSelector('#result', { timeout: 10000 });

    // Should show error message since cookie doesn't exist
    const result = await extensionPage.textContent('#result');
    expect(result).toContain('Cookie "CookieTest" not found on domain "www.test.com"');
  });

  test('should display cookie value when target cookie exists', async ({ context, extensionId }) => {
    // Add cookie
    await context.addCookies([{
      name: 'CookieTest',
      value: 'testValue',
      domain: 'www.test.com',
      path: '/',
    }]);

    // Open extension popup
    const extensionPage = await context.newPage();
    await extensionPage.goto(`chrome-extension://${extensionId}/popup.html`);

    // Wait for the extension to check for the cookie
    await extensionPage.waitForSelector('.cookie-result', { timeout: 10000 });

    // Should show the cookie value
    const result = await extensionPage.textContent('#result');
    expect(result).toContain('Cookie Found!');
    expect(result).toContain('CookieTest');
    expect(result).toContain('testValue');
    expect(result).toContain('www.test.com');
  });
});
