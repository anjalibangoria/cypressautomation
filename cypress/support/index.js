// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.

require('cypress-xpath')
/// <reference types='cypress-tags' />

Cypress.on("before:run", (details) => {
  //you can add here before 
});

