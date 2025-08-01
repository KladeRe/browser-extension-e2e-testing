import { test, expect } from "./fixtures";
import { ContentScriptUIPage } from "./pages/content-script-ui";
import path from "path";

test.describe("Basic Content Script UI Tests", () => {
  test("content script UI is injected into local demo page", async ({ page }) => {
    // Use the local demo.html file
    const demoPath = path.resolve("apps/content-script-ui/demo.html");
    await page.goto(`file://${demoPath}`);

    const contentScriptUI = new ContentScriptUIPage(page);

    // Wait for the content script to inject the UI
    await contentScriptUI.waitForInjection();

    // Verify the main elements are present
    await expect(contentScriptUI.getContainer()).toBeVisible();
    await expect(contentScriptUI.getPanel()).toBeVisible();
    await expect(contentScriptUI.getHeader()).toHaveText("Extension UI");
  });

  test("can close panel using close button", async ({ page }) => {
    const demoPath = path.resolve("apps/content-script-ui/demo.html");
    await page.goto(`file://${demoPath}`);

    const contentScriptUI = new ContentScriptUIPage(page);
    await contentScriptUI.waitForInjection();

    // Panel should be visible initially
    expect(await contentScriptUI.isContainerVisible()).toBe(true);

    // Close using the close button
    await contentScriptUI.closePanel();

    // Container should be hidden (display: none)
    const container = contentScriptUI.getContainer();
    await expect(container).toHaveCSS('display', 'none');
  });
});
