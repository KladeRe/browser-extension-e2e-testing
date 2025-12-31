---
name: Context menu extension
description: When the extension uses a context menu
---

## Explanation

Context menus are a difficult case in E2E testing in general. E2E testing frameworks typically work in the DOM of the webpage, meaning that they don't have access to context menus. This is also the case for Playwright, where you can simulate a right click, however, you can't click anything in the context menu.

Because of this limitation, context menus can't be tested directly with programmatic E2E testing frameworks like Playwright. If E2E testing context-menu functionality is absolutely necessary, desktop automation tools might provide a way to automatically test such functionality. However, these are beyond the scope of this project.




