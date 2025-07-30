import { test, expect } from "./fixtures";
import { openPopup } from "./pages/popup";

test("Simple popup works as expected", async ({ page, extensionId }) => {
  const popup = await openPopup(page, extensionId);
  expect(await popup.getHeading().allInnerTexts()).toEqual(["Simple Chrome Extension"]);

});