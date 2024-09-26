import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
//    baseUrl: "http://localhost:3000",
    baseUrl: "http://localhost:5173/",
    setupNodeEvents(on, config) {
      // E2Eテスト用の設定をここに記述
    },
    supportFile: 'cypress/support/e2e.js',
    experimentalRunAllSpecs: true,
  },
});

