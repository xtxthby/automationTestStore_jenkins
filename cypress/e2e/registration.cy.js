import user from '../fixtures/user.json'
import {faker} from '@faker-js/faker' // бібліотека для генурування фейкових даних, імейл. паспорт і т.д.
import loginPage from "../support/pages/LoginPage";
import accountPage from "../support/pages/AccountPage";
import RegistrationPage from "../support/pages/RegistrationPage";

// Тепер деякім нашим змінним зробимо переприсвоєння значень які нам сгенерує faker
//  длятого щоб при кожній регістрації мінялися дані і тест не фейлився
//  Jeanne_Doe@example.fakerjs.dev
user.firstname = faker.person.firstName();
user.lastname = faker.person.lastName();
user.email = faker.internet.email({ firstName: 'Jeanne', lastName: 'Doe', provider: 'some.fakerMail.qa', allowSpecialCharacters: false });
user.loginname = faker.internet.userName();


// describe('register with valid data', () => {
//   it('Registration', () => {
//     cy.log('Open registration form')
//     cy.visit('/') // сама адреса знаходиться в cypress.config.js
//     cy.get('#customer_menu_top').click();
//     cy.get('[title="Continue"]').click();
//
//     cy.log('Your Personal Details')
//     cy.get('#AccountFrm_firstname').type(user.firstname);
//     // should('have.prop', 'value', 'Yurii') перевіряє, чи властивість value цього елемента дорівнює 'Yurii'.
//     // тобіш якщо ми вводимо в поле то перевіряємо за допомогою have.properti те що ми ввели в дінамічне значення value
//     cy.get('#AccountFrm_firstname').should('have.prop', 'value', user.firstname);
//
//     cy.get('#AccountFrm_lastname').type(user.lastname);
//     cy.get('#AccountFrm_lastname').should('have.prop', 'value', user.lastname);
//
//     cy.get('#AccountFrm_email').type(user.email);
//     cy.get('#AccountFrm_email').should('have.prop', 'value', user.email);
//
//     // AccountFrm_telephone
//     cy.get('#AccountFrm_telephone').type(user.telephone);
//     cy.get('#AccountFrm_telephone').should('have.prop', 'value', user.telephone);
//
//
//     cy.get('#AccountFrm_fax').type(user.fax);
//     cy.get('#AccountFrm_fax').should('have.prop', 'value', user.fax);
//
//     cy.log('Your Address')
//     cy.get('#AccountFrm_company').type(user.company);
//     cy.get('#AccountFrm_company').should('have.prop', 'value', user.company);
//
//     cy.get('#AccountFrm_address_1').type(user.address_1);
//     cy.get('#AccountFrm_address_1').should('have.prop', 'value', user.address_1);
//
//     cy.get('#AccountFrm_address_2').type(user.address_2);
//     cy.get('#AccountFrm_address_2').should('have.prop', 'value', user.address_2);
//
//     cy.get('#AccountFrm_city').type(user.city)
//     cy.get('#AccountFrm_city').should('have.prop', 'value', user.city);
//     //  в даному випадку ми вибіраємо в дропдауні країну і перевіряємо значення її коду
//     cy.get('#AccountFrm_country_id').select(user.country);
//     cy.get('#AccountFrm_country_id').should('have.prop', 'value', user.country_id);
//
//     // те саме і тут така перевірка
//     cy.get('#AccountFrm_zone_id').select(user.zone);
//     cy.get('#AccountFrm_zone_id').should('have.prop', 'value', user.zone_id);
//
//     // AccountFrm_postcode
//     cy.get('#AccountFrm_postcode').type(user.postcode)
//     cy.get('#AccountFrm_postcode').should('have.prop', 'value', user.postcode);
//
//
//     cy.log('Login Details');
//     cy.get('#AccountFrm_loginname').type(user.loginname);
//     cy.get('#AccountFrm_loginname').should('have.prop', 'value', user.loginname);
//
//     cy.get('#AccountFrm_password').type(user.password);
//     cy.get('#AccountFrm_password').should('have.prop', 'value', user.password);
//
//     cy.get('#AccountFrm_confirm').type(user.confirm);
//     cy.get('#AccountFrm_confirm').should('have.prop', 'value', user.confirm);
//
//
//     cy.log('Newsletter')
//     cy.get('#AccountFrm_newsletter1').click();
//     cy.get('#AccountFrm_newsletter1').should('be.checked');
//     // cy.get('#AccountFrm_newsletter0').click();
//     // cy.get('#AccountFrm_newsletter0').should('be.checked');
//     cy.get('#AccountFrm_agree').click();
//     cy.get('#AccountFrm_agree').should('be.checked');
//
//      cy.log('Submit form')
//     cy.get('[title="Continue"]').click();
//     // Використовувати метод include.text замість have.prop,
//     // якщо не потрібно точне співпадіння. Це дозволить перевірити наявність потрібного тексту без врахування пробілів:
//     cy.get('.maintext').should('include.text', 'Your Account Has Been Created!');
//     // з використанням invoke
//     // cy.get('.maintext').invoke('prop', 'textContent').should('eq', 'Your Account Has Been Created!');
//     // Або ж можна використовувати invoke з trim()
//     // cy.get('.maintext').invoke('text').then((text) => {
//     //   expect(text.trim()).to.equal('Your Account Has Been Created!');
//     // });
//
//
//     // // .should(($el) => { ... }):--Використовується для перевірки певної умови для знайденого елемента.
//     // // В цьому випадку передається анонімна функція з параметром $el, який представляє собою знайдений елемент.
//     // //  $el.text().trim():--$el.text(): Отримує текстовий вміст елемента. Це може включати всі символи та пробіли всередині цього елемента.
//     // // .trim(): Видаляє пробіли на початку та в кінці тексту. Це допомагає позбутися зайвих пробілів, які можуть впливати на порівняння.
//     // // expect(...).to.match(/.../);: Це конструкція з бібліотеки Chai, яка використовується для перевірки (assertions) в Cypress.
//     // // Вона перевіряє, чи текстовий вміст елемента відповідає регулярному виразу /Your Account Has Been Created!/.
//     // // /..../ Це і є регулярний вираз
//     // cy.get('.maintext').should(($el) => {
//     //     expect($el.text().trim()).to.match(/Your Account Has Been Created!/);
//     // });
//     // // Або регулярка ось така
//     // // Тут \s* означає "нуль або більше пробілів" між словами, що зробить перевірку більш гнучкою.
//     // cy.get('.maintext').should(($el) => {
//     //   expect($el.text().trim()).to.match(/Your\s*Account\s*Has\s*Been\s*Created!/);
//     // });
//
//
//
//   })
//   it('Authorization', () => {
//     cy.log('open authorization form');
//     cy.visit('/index.php?rt=account/login');
//
//     cy.log('Fill in authorization fields');
//     cy.get('#loginFrm_loginname').type(user.loginname);
//     cy.get('#loginFrm_password').type(user.password);
//     cy.get('[title="Login"]').click();
//
//     cy.log('User first name should display on page')
//     //  Перевіряю за допомогою імені чи ми на сторінці користувача
//     cy.get('.heading1 .subtext').should('contain', user.firstname);
//
//   })
// })

//  переписуємо за умови класу

describe.skip('register with valid data', () => {

  it('Registration', () => {
    RegistrationPage.openRegistrationForm();
    RegistrationPage.getCustomerMenuTop().click();
    RegistrationPage.getContinueButton().click();

    cy.log('Fill in the fields Personal Details fields');
    RegistrationPage.getFirstNameField().type(user.firstname);
    RegistrationPage.getFirstNameField().should('have.prop', 'value', user.firstname);
    RegistrationPage.getLastNameField().type(user.lastname);
    RegistrationPage.getLastNameField().should('have.prop', 'value', user.lastname);
    RegistrationPage.getEmailField().type(user.email);
    RegistrationPage.getEmailField().should('have.prop', 'value', user.email);
    RegistrationPage.getTelephoneField().type(user.telephone);
    RegistrationPage.getTelephoneField().should('have.prop', 'value', user.telephone);
    RegistrationPage.getFaxField().type(user.fax);
    RegistrationPage.getFaxField().should('have.prop', 'value', user.fax);

    cy.log('Fill in the Your Address fields');
    RegistrationPage.getCompanyField().type(user.company);
    RegistrationPage.getCompanyField().should('have.prop', 'value', user.company);
    RegistrationPage.getAddress1Field().type(user.address_1);
    RegistrationPage.getAddress1Field().should('have.prop', 'value', user.address_1);
    RegistrationPage.getAddress2Field().type(user.address_2);
    RegistrationPage.getAddress2Field().should('have.prop', 'value', user.address_2);
    RegistrationPage.getCityField().type(user.city);
    RegistrationPage.getCityField().should('have.prop', 'value', user.city);
    RegistrationPage.getPostcodeField().type(user.postcode);
    RegistrationPage.getPostcodeField().should('have.prop', 'value', user.postcode);
    RegistrationPage.getCountryDropdown().select(user.country);
    RegistrationPage.getCountryDropdown().should('have.prop', 'value', user.country_id);
    RegistrationPage.getZoneDropdown().select(user.zone_name);
    RegistrationPage.getZoneDropdown().should('have.prop', 'value', user.zone_id);

    cy.log('Fill in the Login Details fields');
    RegistrationPage.getLoginNameField().type(user.loginname);
    RegistrationPage.getLoginNameField().should('have.prop', 'value', user.loginname);
    RegistrationPage.getPasswordField().type(user.password);
    RegistrationPage.getPasswordField().should('have.prop', 'value', user.password);
    RegistrationPage.getConfirmPasswordField().type(user.password);
    RegistrationPage.getConfirmPasswordField().should('have.prop', 'value', user.password);

    cy.log('Fill in the Newsletter');
    RegistrationPage.getNewsletterOption().click();
    RegistrationPage.getNewsletterOption().should('be.checked');
    RegistrationPage.getAgreeCheckbox().check();
    RegistrationPage.getAgreeCheckbox().should('be.checked');

    cy.log('Submit form and check results');
    RegistrationPage.getContinueButton().click();
    RegistrationPage.getFormSubmissionStatus().should('have.prop', 'textContent', ' Your Account Has Been Created!');
  });

  it('Authorization', () => {
    loginPage.visit();
    loginPage.fillLoginFields(user.loginname, user.password);

    cy.log('User first name should display on page');
    accountPage.getFirstNameText().should('contain', user.firstname);
  })

})