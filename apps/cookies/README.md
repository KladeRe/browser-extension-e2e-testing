---
name: Extension with cookie
description: We want the extension to have a cookie loaded before the tests start
---

## Extension

This extension is a fairly simple popup UI based extension, where cookies are required for essential functionality. Cookie data is in this case handled on the popup-script side (in popup.js), however, it could also be handled in the background service worker (background.js).

## Testing Strategy

The key challenge in testing this extension is managing browser state—specifically cookies—before the extension UI loads. While extensions run in Playwright's persistent context, the `context.addCookies()` method allows us to programmatically inject cookies during test execution. Tests are structured to validate both scenarios: the error state when expected cookies are missing, and the success state where cookies are added via `context.addCookies()` before opening the popup.
