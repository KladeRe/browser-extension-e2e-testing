# Edge cases in e2e testing browser extensions

A project about clarifying the concept of e2e testing browser extensions

## How to run

Execute the below command to run all e2e tests:
```sh
npm run test
```

## Why

Browser extensions may have huge differences, meaning that common e2e testing frameworks might not have direct support for them. Comprehensive documentation about these edge cases is lackluster, which is the idea behind this project.

## What

This project aims to serve as a guide to those that want to e2e-test browser extensions that don't follow the traditional extension structure.

## How

To make things easy, this repository will include example cases where the extension code is provided in the `code` directory and the test code is coupled with it in the `tests` directory.

For scenarios that can't be e2e tested in a reasonable manner, a detailed explanation will be added about why it can't be reasonably e2e-tested. This is to help and inspire future research about these edge cases.

## Tools

The aim of this project is to stick to modern tools for e2e testing and web development. On the code-side this means that Typescript will be preferred whenever possible. Modern e2e-testing frameworks such as Playwright will be preferred over older frameworks, however, if using older frameworks makes sense in a particular scenario, they will be used.
