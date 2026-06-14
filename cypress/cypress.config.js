const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'nm7tbd',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php',
  },
});
