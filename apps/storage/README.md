---
name: Extension using browser local storage
description: Extension that uses browser local storage to store information
---

## Extension

A simple browser extension that demonstrates using `chrome.storage.local` to persist data. This extension implements a counter that increments when a button is clicked, and the value is stored in chrome.storage.local so it persists across browser sessions.

## Testing Strategy

With persistent contexts, we use addInitScript to run JavaScript code before the tests are run. This is useful when we need to set values in local storage before tests are run. addInitScript can also be used for other purposes.