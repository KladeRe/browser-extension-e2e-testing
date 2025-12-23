---
name: Side panel UI
description: A case where the extension UI is the Chrome side panel
---

## Extension

This extension leverages Chrome's relatively new side panel API, which provides a persistent panel interface that appears alongside web content rather than as a temporary popup. Unlike traditional popups that close when they lose focus, side panels remain open and accessible, making them ideal for tools that users need to reference or interact with while browsing. The side panel is defined in the extension's manifest and can be triggered through various mechanisms (toolbar icon, context menu, or programmatically).

## Testing Strategy

Testing side panel extensions presents unique challenges because side panels are neither popups (which can be directly opened via URL) nor content scripts (which inject into pages). The testing approach here treats the side panel similarly to a popup by directly navigating to the side panel's HTML file using the `chrome-extension://` protocol and the extension ID. This works because side panels, like popups, are based on HTML files that are packaged with the extension and can be accessed independently. However, there's an important distinction: while testing the UI functionality works with direct navigation, this approach doesn't fully test the side panel API's integration aspects (like how the panel opens via user actions or persists across navigation). The test fixture setup is identical to the simple popup case.


