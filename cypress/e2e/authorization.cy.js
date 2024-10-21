import user from '../fixtures/user.json'
import {fillAuthorizationFields} from "../support/helper";

// Тут тест з орігінальними даними із '../fixtures/user.json' на авторизацію


// describe('Avthorization positive scenarias', () => {
//
//   it('Authorization', () => {
//     cy.log('open authorization form');
//     cy.visit('/index.php?rt=account/login');
//
//     // cy.log('Fill in authorization fields');
//     // cy.get('#loginFrm_loginname').type(user.loginname);
//     // cy.get('#loginFrm_password').type(user.password);
//     // cy.get('[title="Login"]').click();
//
//     //  те що зараз знизу ми зробили заміну в авроризації на хелпер функцію в якій
//     //  є впринципі та сама авторизація де ми передали с юзер джейсона дані оригінальні
//     fillAuthorizationFields(user.loginname, user.password);
//
//     cy.log('User first name should display on page')
//     //  Перевіряю за допомогою імені чи ми на сторінці користувача
//     cy.get('.heading1 .subtext').should('contain', user.firstname);
//
//   })
//
// })
//
//
// // TODO
// describe('Avthorization negative scenarias', () => {
//   it.skip('Authorization without entered username', () => {
//     // приклад виклику з commands де ми викликаємо функцію і передаємо параметри
//     // прицьому нам не потрібно робити імпорт експорт як з хелпером
//     // і автокомплікт працює тільки в акві , а в другіх ІДЕА він не працює
//     // тому цей приклад не зможе працювати універсально
//     cy.login(user.loginname, user.password)
//
//     cy.log('User first name should display on page')
//     //  Перевіряю за допомогою локатора і 'contain' текст посилки -- Метод дає змогу перевірити без переносів і пробілів перед текстом
//     cy.get('.alert .alert-error .alert-danger').should('contain', 'Error: Incorrect login or password provided.');
//
//   })
//
//   it('Authorization without entered username', () => {
//     cy.log('open authorization form');
//     cy.visit('/index.php?rt=account/login');
//     //  це тест негативний тому перевіримо чи зафейлиться тест з пустим полем loginname
//     // так як в функції type не сприймає пусті лапки бо вони приводять до fols
//     // треба в helper поставити умову(дивись там) це тернатник
//     fillAuthorizationFields('', user.password);
//
//     cy.log('User first name should display on page')
//     //  Перевіряю за допомогою локатора і 'contain' текст посилки -- Метод дає змогу перевірити без переносів і пробілів перед текстом
//     cy.get('.alert .alert-error .alert-danger').should('contain', 'Error: Incorrect login or password provided.');
//
//   })
//   it('Authorization without entered password', () => {
//     cy.log('open authorization form');
//     cy.visit('/index.php?rt=account/login');
//
//     fillAuthorizationFields(user.loginname, '');
//
//     cy.log('User first name should display on page')
//     //  Перевіряю за допомогою локатора і 'contain' текст посилки -- Метод дає змогу перевірити без переносів і пробілів перед текстом
//     cy.get('.alert .alert-error .alert-danger').should('contain', 'Error: Incorrect login or password provided.');
//
//   })
//   it('Authorization with empty fields', () => {
//     cy.log('open authorization form');
//     cy.visit('/index.php?rt=account/login');
//
//     fillAuthorizationFields('', '');
//
//     cy.log('User first name should display on page')
//     //  Перевіряю за допомогою локатора і 'contain' текст посилки -- Метод дає змогу перевірити без переносів і пробілів перед текстом
//     cy.get('.alert .alert-error .alert-danger').should('contain', 'Error: Incorrect login or password provided.');
//
//   })
// })


// тепер варіант з фор ічем

// let userCreds = [{
//   login: '', pass: 'qwer'
// }, {
//   login: 'rewq', pass: ''
// }]
//
// userCreds.forEach(user =>{
//   it('Authorization without entered username', () => {
//     cy.log('open authorization form');
//     cy.visit('/index.php?rt=account/login');
//
//     fillAuthorizationFields(user.login, user.pass);
//
//     cy.log('User first name should display on page')
//     //  Перевіряю за допомогою локатора і 'contain' текст посилки -- Метод дає змогу перевірити без переносів і пробілів перед текстом
//     cy.get('.alert .alert-error .alert-danger').should('contain', 'Error: Incorrect login or password provided.');
//
//   })
// })



// it('Demo authorization with Page Object', () => {
//   cy.log('open authorization form');
//   cy.visit('/index.php?rt=account/login');
//
//   // cy.log('Fill in authorization fields');
//   // cy.get('#loginFrm_loginname').type(user.loginname);
//   // cy.get('#loginFrm_password').type(user.password);
//   // cy.get('[title="Login"]').click();
//
//   //  те що зараз знизу ми зробили заміну в авроризації на хелпер функцію в якій
//   //  є впринципі та сама авторизація де ми передали с юзер джейсона дані оригінальні
//   fillAuthorizationFields(user.loginname, user.password);
//
//   cy.log('User first name should display on page')
//   //  Перевіряю за допомогою імені чи ми на сторінці користувача
//   cy.get('.heading1 .subtext').should('contain', user.firstname);
//
// })



//Переробка під клас
import LoginPage from "../support/pages/LoginPage";
import AccountPage from "../support/pages/AccountPage";
import {headlessLogin} from "../support/helper";

describe('Avthorization positive scenarias', () => {

  it('Authorization', () => {
    LoginPage.visit();

    // Тут ми змінили назву функції якабула раніше але її робота не змінилася
    LoginPage.fillLoginFields(user.loginname, user.password);

    cy.log('User first name should display on page')
    //  Перевіряю за допомогою імені чи ми на сторінці користувача
    AccountPage.getFirstNameText().should('contain', user.firstname);

  })

})
// TODO
describe('Avthorization negative scenarias', () => {
  it('Test auth helper', () => {
    headlessLogin(user.loginname, user.password);

    cy.visit('/index.php?rt=account/account');
    cy.log('User first name should display on page');
    accountPage.getFirstNameText().should('contain', user.firstname);
  })
  it.skip('Authorization without entered username', () => {
    // приклад виклику з --commands-- де ми викликаємо функцію і передаємо параметри
    // прицьому нам не потрібно робити імпорт експорт як з хелпером
    // і автокомплікт працює тільки в акві , а в другіх ІДЕА він не працює
    // тому цей приклад не зможе працювати універсально
    // Метод cy.login() зазвичай використовується для автоматизації процесу входу в систему
    // під час тестування з Cypress. Його функціонал залежить від конкретної реалізації, але зазвичай він:
    //Відкриває сторінку входу.
    // Заповнює поля для введення логіна та пароля.
    // Надсилає форму для авторизації.
    // Іноді цей метод може включати додаткові дії, наприклад, роботу з токенами або кукі для збереження стану сесії,
    // щоб пропускати процес входу в подальших тестах.
    cy.login(user.loginname, user.password);

    cy.log('User first name should display on page')
    //  Перевіряю за допомогою локатора і 'contain' текст посилки -- Метод дає змогу перевірити без переносів і пробілів перед текстом
    cy.get('.alert .alert-error .alert-danger').should('contain', 'Error: Incorrect login or password provided');

  })

  it('Authorization without entered username', () => {
    LoginPage.visit();
    // Тут ми змінили назву функції якабула раніше але її робота не змінилася
    LoginPage.fillLoginFields('', user.password);

    cy.log('User first name should display on page')
    //  Перевіряю за допомогою локатора і 'contain' текст посилки -- Метод дає змогу перевірити без переносів і пробілів перед текстом
    LoginPage.getErrorMessageText().should('contain', 'Error: Incorrect login or password provided');

  })
  it('Authorization without entered password', () => {
      LoginPage.visit();
      // Тут ми змінили назву функції якабула раніше але її робота не змінилася
      LoginPage.fillLoginFields(user.loginname, '');

      cy.log('User first name should display on page')
      //  Перевіряю за допомогою локатора і 'contain' текст посилки -- Метод дає змогу перевірити без переносів і пробілів перед текстом
      LoginPage.getErrorMessageText().should('contain', 'Error: Incorrect login or password provided');
  })
  it('Authorization with empty fields', () => {
    LoginPage.visit();
    LoginPage.fillLoginFields('', '');

    cy.log('User first name should display on page')
    //  Перевіряю за допомогою локатора і 'contain' текст посилки -- Метод дає змогу перевірити без переносів і пробілів перед текстом
    LoginPage.getErrorMessageText().should('contain', 'Error: Incorrect login or password provided');

  })
})