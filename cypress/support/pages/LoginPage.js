import BasePage from "./BasePage";

class LoginPage extends BasePage {
    visit() {
        cy.log('Open authorization form');
        // тут нічого не повертаємо бо виконуємо дію
        cy.visit('/index.php?rt=account/login');
    }
    getLoginNameFiled() {
        return cy.get('#loginFrm_loginname');
    }
    getPasswordFiled() {
        return cy.get('#loginFrm_password');
    }
    getSubmitButton() {
        return cy.get('[title="Login"]');
    }
    getErrorMessageText() {
        return cy.get('.alert-error')
    }
    fillLoginFields(username, password) {
        cy.log('Fill in authorization fields');
        // тепер тут ми використовуємо тернарник так як тут type не приймає порожній рядок (' ')
        username? this.getLoginNameFiled().type(username): cy.log('username field not filled');
        password? this.getPasswordFiled().type(password): cy.log('username field not filled');
        this.getSubmitButton().click();
    }
}
export default new LoginPage();
