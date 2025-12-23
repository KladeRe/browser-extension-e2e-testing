---
name: Simple extension case
description: Simple case with popup script where framework instructions work fine
---

## Extension

This is a basic popup-based Chrome extension that demonstrates the simplest possible extension architecture. When the user clicks the extension icon in the browser toolbar, a popup window appears displaying a static HTML page. The popup opens separately from the web page and does they don't interfere with each other. This represents the most straightforward extension pattern: a self-contained UI that loads from an HTML file and has minimal interaction with the browser's runtime APIs.

## Testing Strategy

Tests use a `launchPersistentContext` to load the extension into a Chromium browser instance, which is the fundamental requirement for testing any Chrome extension with Playwright. The test fixture extracts the extension ID by waiting for the service worker and parsing its URL—a technique that works reliably for Manifest V3 extensions. Tests directly navigate to the popup HTML using the `chrome-extension://` protocol with the extracted extension ID, allowing Playwright to interact with the popup UI as if it were any other web page. The Page Object Model pattern encapsulates popup interactions, and assertions verify that UI elements contain expected text and are properly visible.