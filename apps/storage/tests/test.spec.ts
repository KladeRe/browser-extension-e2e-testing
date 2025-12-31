import { openPopup } from "./pom";
import { createExtensionFixtures, expect } from "../../fixtures";

const test = createExtensionFixtures("apps/storage/code");

test.describe("Storage Counter Extension", () => {
  test.beforeEach(async ({ context }) => {
    // Clear storage before each test
    await context.clearPermissions();
  });

  test("should display initial counter value of 0 when no storage is set", async ({ page, extensionId }) => {
    const popup = await openPopup(page, extensionId);
    expect(await popup.getCounter()).toBe("0");
  });

  test("should load pre-set value from chrome.storage.local", async ({ page, extensionId, context }) => {
    // Set storage value before opening popup
    await context.addInitScript(() => {
      chrome.storage.local.set({ counterValue: 42 });
    });
    
    const popup = await openPopup(page, extensionId);
    
    // Wait a bit for storage to load
    await page.waitForTimeout(100);
    
    expect(await popup.getCounter()).toBe("42");
  });

  test("should increment counter when button is clicked", async ({ page, extensionId, context }) => {
    // Pre-set counter to 10
    await context.addInitScript(() => {
      chrome.storage.local.set({ counterValue: 10 });
    });
    
    const popup = await openPopup(page, extensionId);
    await page.waitForTimeout(100);
    
    expect(await popup.getCounter()).toBe("10");
    
    await popup.clickIncrement();
    await page.waitForTimeout(50);
    expect(await popup.getCounter()).toBe("11");
  });
});
