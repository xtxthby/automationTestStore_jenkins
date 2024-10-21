// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })





// робимо логінізацію тільки в Commands для того щоб зясувати що це не зручно
Cypress.Commands.add('login', (username, password) => {
    cy.log('open authorization form');
    cy.visit('/index.php?rt=account/login');
    cy.log('Fill in authorization fields');
// тепер тут ми використовуємо тернарник так як тут type не приймає порожній рядок (' ')
    username? cy.get('#loginFrm_loginname').type(username): cy.log('username field not filled');
    password? cy.get('#loginFrm_password').type(password): cy.log('username field not filled');
    cy.get('[title="Login"]').click();
})
