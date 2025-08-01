---
name: UI mounted by content script
description: A case where the extension UI is created by the content script
---

## Overview

Unlike popup-based extensions that have dedicated HTML files, content script extensions inject their UI directly into the DOM of web pages. This example shows that these UIs are fully testable with Playwright using local HTML files for testing.

## Testing Strategy

The key insight is that **content script UI elements become part of the page's DOM**, making them accessible to Playwright's page automation API. We can use local HTML files for testing instead of external websites.


