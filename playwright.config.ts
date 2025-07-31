import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./apps",

  retries: 0,

  workers: 1,

  reporter: [['list', { printSteps: true }]],

  use: {
    trace: "on-first-retry",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});