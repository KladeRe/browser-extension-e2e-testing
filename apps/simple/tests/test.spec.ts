import { openPopup } from "./pom";
import { createExtensionFixtures, expect } from "../../fixtures";

const test = createExtensionFixtures("apps/simple/code")

test("Simple popup works as expected", async ({ page, extensionId }) => {
  const popup = await openPopup(page, extensionId);
  expect(await popup.getHeading().allInnerTexts()).toEqual(["Simple Chrome Extension"]);

});