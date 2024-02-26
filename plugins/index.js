// / //<reference types="cypress"/>
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
const path = require("path");
//const gmail = require("gmail-tester");
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  // on('before:browser:launch', (browser = {}, args) => {
  //   if (browser.name === 'chrome') { 
  //     // ^ make sure this is your browser name, you may 
  //     // be using 'canary' or 'chromium' for example, so change it to match!
  //     args.push('--proxy-bypass-list=<-loopback>')
  //     return args
  //   }
  // })
  on("task", {
    "gmail:get-messages": async args => {
      const messages = await gmail.get_messages(
        path.resolve(__dirname, "credentails.json"), // credentials.json is inside plugins/ directory.
        path.resolve(__dirname, "gmail_token.json"),
        args.options  // gmail_token.json is inside plugins/ directory.                                     // Maximum poll interval (in seconds). If reached, return null, indicating the completion of the task().
      );
      return messages;
    }
  });
}
// const path = require("path");
// const gmail = require("gmail-tester");
// module.exports = (on, config) => {
//   // `on` is used to hook into various events Cypress emits
//   // `config` is the resolved Cypress config
//   // on('before:browser:launch', (browser = {}, args) => {
//   //   if (browser.name === 'chrome') { 
//   //     // ^ make sure this is your browser name, you may 
//   //     // be using 'canary' or 'chromium' for example, so change it to match!
//   //     args.push('--proxy-bypass-list=<-loopback>')
//   //     return args
//   //   }
//   // })
//   on("task", {
//     "gmail:get-messages": async args => {
//       const messages = await gmail.get_messages(
//         path.resolve(__dirname, "credentails.json"), // credentials.json is inside plugins/ directory.
//         path.resolve(__dirname, "gmail_token.json"),
//         args.options  // gmail_token.json is inside plugins/ directory.                                     // Maximum poll interval (in seconds). If reached, return null, indicating the completion of the task().
//       );
//       return messages;
//     }
//   });
// }
// const path = require("path");
// const gmail = require("gmail-tester");

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  // ...

  // on("task", {
  //   "gmail:check": async args => {
  //     const { from, to, subject } = args;
  //     const email = await gmail.check_inbox(
  //       path.resolve(__dirname, "credentials.json"), // credentials.json is inside plugins/ directory.
  //       path.resolve(__dirname, "gmail_token.json"), // gmail_token.json is inside plugins/ directory.
  //       subject,
  //       from,
  //       to,
  //       10,                                          // Poll interval (in seconds)
  //       30                                           // Maximum poll interval (in seconds). If reached, return null, indicating the completion of the task().
  //     );
  //     return email;
  //   }
  // });
};
