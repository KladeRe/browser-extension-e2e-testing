import { Page, Locator } from "@playwright/test";

export class ContentScriptUIPage {
  constructor(private page: Page) {}

  getContainer(): Locator {
    return this.page.locator('#content-script-ui-container');
  }

  getPanel(): Locator {
    return this.page.locator('#content-script-panel');
  }

  getHeader(): Locator {
    return this.page.locator('#content-script-panel h3');
  }

  getCloseButton(): Locator {
    return this.page.locator('#close-btn');
  }

  async waitForInjection(): Promise<void> {
    await this.getContainer().waitFor({ state: 'visible' });
  }

  async closePanel(): Promise<void> {
    await this.getCloseButton().click();
  }

  async isContainerVisible(): Promise<boolean> {
    return await this.getContainer().isVisible();
  }
}
