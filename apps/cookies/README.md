---
name: Extension with cookie
description: We want the extension to have a cookie loaded before the tests start
---

Launching tests with cookies is a more complicated process. Even though it is a peristent context, cookies can still be added to it in the Playwright tests.

Note! The cookies are added in the tests themselves, not while creating the persistent context.