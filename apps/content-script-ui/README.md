---
name: UI mounted by content script
description: A case where the extension UI is created by the content script
---

## Overview

Unlike popup-based extensions that have dedicated HTML files, content script extensions inject their UI directly into the DOM of web pages. This example shows that these UIs are fully testable with Playwright using local HTML files for testing.

## Extension

This extension demonstrates the content script injection pattern, where the extension's UI is dynamically created and injected into web pages rather than existing as a standalone popup. The content script (`content-script.js`) runs on web pages and programmatically creates DOM elements—a container div with styled components including a header and close button. These elements are inserted into the host page's DOM to overlay the existing page content.

## Testing Strategy

Testing content script UI requires a fundamentally different approach compared to popup extensions because the UI must be injected into an actual web page rather than loaded as a standalone HTML file. This test setup uses a local `demo.html` file accessed via the `file://` protocol, eliminating the need for external websites or local servers during testing. The key difference is that tests navigate to the demo page (`demo.html`) first, then wait for the content script to inject its UI elements into the page's DOM—this injection happens automatically because the extension's manifest declares the content script to run on all pages (or specific URL patterns). The persistent context setup includes additional Chrome flags like `--disable-web-security` and `--disable-features=VizDisplayCompositor` to ensure content scripts work properly during testing. Tests must use explicit waits for the injected elements to appear (via `waitForInjection()`), since there's a temporal gap between page load and content script execution. Once injected, the UI elements are tested using standard Playwright selectors that target the dynamically created DOM elements.


