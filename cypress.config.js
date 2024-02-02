// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   component: {
//     devServer: {
//       framework: "create-react-app",
//       bundler: "webpack",
//     },
//   },

//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });
const { defineConfig } = require("cypress");


module.exports = defineConfig({
   e2e: {
       setupNodeEvents(on, config) {
           // implement node event listeners here
       },
   },
   video: false,
   reporter: "mochawesome",
   reporterOptions: {
       reportDir: "cypress/reports",
       reportFilename: "test-results",
       quiet: true,
   },
});
