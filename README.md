# How to E2E test various browser extensions

#### A list of guiding examples on how to end-to-end test browser extensions

## E2E testing examples

| Example | Description |
|---------|-------------|
| [🚀 Basic Extension](apps/simple/README.md) | Basic browser extension structure (popup script) |
| [🎨 Content Script UI](apps/content-script-ui/README.md) | Extension with **content script** based UI |
| [🍪 Cookies Example](apps/cookies/README.md) | E2E testing extensions with **cookies** |
| [📌 Side Panel UI](apps/side-panel-ui/README.md) | **Side panel** extension testing |
| [🗄️ Storage](apps/storage/README.md) | Testing extension using **local storage** |

## Difficult/impossible E2E testing examples

| Example | Description |
|---------|-------------|
| [📋 Context menu](apps/context-menu/README.md) | **Context menus** in E2E testing |

## How to run

Install necessary dependencies (Playwright, TypeScript, ESLint):
```sh
npm install
```

Run all e2e tests:
```sh
npm run test
```

Run tests for a single example:

```sh
npm run test:<app-codename>
```

## Why

The amount of differences between browser extensions presents different requirements for e2e-testing them. This project aims to make it easier to learn browser extensions by providing extensive detailed documentation coupled with practical examples (code).

## Tools

The aim of this project is to stick to modern tools for e2e testing and web development. For this reason [TypeScript](https://www.typescriptlang.org/) will be used to implement the browser extensions in the examples. The target browser of the example extensions is [Chromium](https://www.chromium.org/Home/) due to being easy to integrate with browser testing frameworks.

[Playwright](https://playwright.dev/) is the chosen e2e testing framework. It was chosen due to having documented support for browser extension testing ([link to documentation](https://playwright.dev/docs/chrome-extensions)).

## Structure

The following is the file structure of a single example case:

```
app/
|
├── code/                 # Browser extension code
│   ├── manifest.json
|   ├── *.js
|   └── *.html
|
└── tests/                # Test code
    ├── pom.ts            # Page object model of extension UI (not always necessary)
    └── test.spec.ts      # Playwright test cases
```

The [fixtures.ts](apps/fixtures.ts) contains test fixtures, which are the same in every test. In short, they setup a environment in which browser extensions can be tested.

For more information about page object models and test fixtures in Playwright, check:
- https://playwright.dev/docs/pom
- https://playwright.dev/docs/test-fixtures