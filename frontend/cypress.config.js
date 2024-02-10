const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'ag5p23',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
