import { Page, Locator } from "@playwright/test";

export class SidePanelPage {
  constructor(private page: Page) {}

  getHeading(): Locator {
    return this.page.locator('h1');
  }

  getUserInput(): Locator {
    return this.page.locator('#user-input');
  }

  getSubmitButton(): Locator {
    return this.page.locator('#submit-btn');
  }

  getOutputArea(): Locator {
    return this.page.locator('#output-area');
  }

  getOutputItems(): Locator {
    return this.page.locator('[data-testid="output-item"]');
  }

  async submitText(text: string): Promise<void> {
    await this.getUserInput().fill(text);
    await this.getSubmitButton().click();
  }

  async getOutputItemsText(): Promise<string[]> {
    const items = await this.getOutputItems().all();
    const texts: string[] = [];
    for (const item of items) {
      const text = await item.textContent();
      if (text) {
        texts.push(text);
      }
    }
    return texts;
  }
}

export async function openSidePanel(page: Page, extensionId: string): Promise<SidePanelPage> {
  await page.goto('https://example.com');
  
  const sidePanelUrl = `chrome-extension://${extensionId}/side-panel.html`;
  const sidePanelPage = await page.context().newPage();
  await sidePanelPage.goto(sidePanelUrl);
  
  return new SidePanelPage(sidePanelPage);
}