import { Page } from "@playwright/test";

export async function openPopup(page: Page, extensionId: string) {
  await page.goto(`chrome-extension://${extensionId}/popup.html`);

  // Wait for the counter display to be visible
  await page.locator("#counter").first();

  const popup = {
    getCounter: async () => {
      return await page.locator("#counter").textContent();
    },
    clickIncrement: async () => {
      await page.locator("#increment").click();
    },
    getHeading: () => page.locator("h1").first(),
  };
  
  return popup;
}
