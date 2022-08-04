/// <reference types="cypress" />

/*const { setDebuggingPortMyService, LcciLogin } = require('./LcciLogin');

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

/*module.exports = (on, config) => {
//   // `on` is used to hook into various events Cypress emits
//   // `config` is the resolved Cypress config
// }*/

// const cucumber = require('cypress-cucumber-preprocessor').default

// module.exports = (on, config) => {
//   on('file:preprocessor', cucumber());
//   //on('file:preprocessor', tagify(config));


//   on('before:browser:launch', (browser = {}, args) => {

//     const existing = args.args.find(

//       (args) => args.slice(0, 23) === "--remote-debugging-port"
//     );

//     setDebuggingPortMyService(existing.split("="));
//     return args;  

//   });

//   on("task", { LcciLogin });
// } 

//const tagify = require('cypress-tags');

const cucumber = require("cypress-cucumber-preprocessor").default;
const { setDebuggingPortMyService, LcciLogin } = require("./LcciLogin");
/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on("file:preprocessor", cucumber());

  on("before:browser:launch", (browser = {}, args) => {
    const existing = args.args.find(
      (arg) => arg.slice(0, 23) === "--remote-debugging-port"
    );
    setDebuggingPortMyService(existing.split("="));
    return args;
  });

  on("task", { LcciLogin });
};