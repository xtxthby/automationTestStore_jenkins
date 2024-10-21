import user from '../fixtures/user.json';
import {fillAuthorizationFields, findProduct, findItem} from "../support/helper";
import loginPage from "../support/pages/LoginPage";
// тут ми покриваємо тестами купівлю товару
// describe('Order suite', () => {
//   it('Order from homepage', () => {
//     cy.log('open authorization form');
//     cy.visit('/index.php?rt=account/login');
//     //   викликаємо функцію авторизації і передаємо аргументи для заповнення полів
//     // ці аргументи взяті в даному випадку з джейсон файла
//     fillAuthorizationFields(user.loginname, user.password);
//     cy.log('User first name should display on page')
//     //  Перевіряю за допомогою імені чи ми на сторінці користувача
//     cy.get('.heading1 .subtext').should('contain', user.firstname);
//     // В поле пошуку ввожу літеру і шукаю батька на форму далі сабмічу
//     cy.get('#filter_keyword').type('i').closest('form').submit();
//     // далі за допомогою функції вводимо імя товару для пошуку
//     findProduct('Benefit Bella Bamba');
//     // товар знайдено клік на кнопку додавання в кошик
//     cy.get('.productpagecart').click();
//     // або ще можна так замість click() зробити через івент trigger('click')
//       cy.get('.productpagecart').trigger('click');
//     // клік на checkout
//     cy.get('#cart_checkout1').click();
//     cy.get('#checkout_btn').click();
//     // cy.get('.contentpanel').should('contain', 'Thank you for shoppind with us!');
//   })
//
// })
// переписуємо за умов класу

describe('Order suite', () => {
  it('Order from homepage', () => {
    loginPage.visit();
    loginPage.fillLoginFields(user.loginname, user.password);

    // this step is not required and was added to obtain a large selection of products
    cy.get('#filter_keyword')
        .type('i')
        .closest("form")
        .submit();

    findProduct('Benefit Bella Bamba');

    cy.get('.productpagecart').click()
    cy.get('#cart_checkout1').click()
    cy.get('#checkout_btn').click()
    cy.get('.contentpanel').should('contain', "Thank you for shopping with us!")
  })
})












// //
// //домашка де ми вводимо слово і шукаємо картку товара
// describe('Order item',  () => {
//   it('search, add to cart', () => {
//     cy.visit('/');
//     cy.get('#filter_keyword').type('e');
//     cy.get('.button-in-search').click();
//     // те що вище можна записати так
//     // closest - це метод, який шукає найближчого батьківського елемента, що відповідає заданому селектору (у даному випадку — form).
//     // Після того, як ми знайшли форму за допомогою .closest('form'), викликається метод .submit().
//     // submit - це метод, який відправляє (сабмітить) знайдену форму. Це еквівалентно натисканню на кнопку "Відправити" або "Пошук" у формі.
//     // cy.get('#filter_keyword').type('e').closest('form').submit();
//     findItem('Men+Care Active Clean Shower Tool')
//   });
// })

// describe('Order item',  () => {
//   it('search, add to cart', () => {
//     cy.visit('/');
//     findProduct('Benefit Bella Bamba');
//   });
// })

