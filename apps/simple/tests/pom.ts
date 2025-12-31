import { Page } from "@playwright/test";

export async function openPopup(page: Page, extensionId: string) {
  await page.goto(`chrome-extension://${extensionId}/popup.html`);

  await page.locator("h1").first();

  const popup = {
    getHeading: () => page.locator("h1").first(),
  };
  return popup;
}