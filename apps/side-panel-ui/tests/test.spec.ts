import { openSidePanel } from "./pom";
import { createExtensionFixtures, expect } from "../../fixtures";

const test = createExtensionFixtures("apps/side-panel-ui/code")

test.describe("Side Panel Extension Tests", () => {
  test("side panel opens and displays correctly", async ({ page, extensionId }) => {
    const sidePanel = await openSidePanel(page, extensionId);
    
    await expect(sidePanel.getHeading()).toHaveText("Side Panel Extension");
    await expect(sidePanel.getUserInput()).toBeVisible();
    await expect(sidePanel.getSubmitButton()).toBeVisible();
  });

  test("can submit text and see output", async ({ page, extensionId }) => {
    const sidePanel = await openSidePanel(page, extensionId);
    
    const testText = "Hello";
    await sidePanel.submitText(testText);
    
    const outputItems = await sidePanel.getOutputItemsText();
    expect(outputItems).toContain(testText);
  });

});