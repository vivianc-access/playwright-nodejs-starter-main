import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  reporter: "html",

  use: {
    baseURL: "http://localhost:3000/",
    launchOptions: { slowMo: 1000 },
  },
  webServer: {
    command: "npm start",
    url: "http://localhost:3000/index.html",
    reuseExistingServer: !process.env.CI,
  },
});
