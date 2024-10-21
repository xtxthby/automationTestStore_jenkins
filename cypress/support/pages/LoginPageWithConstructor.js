import BasePage from "./BasePage";
// тут ми використовуємо конструктор в який виносимо локатори
class LoginPageWithConstructor extends BasePage {
    constructor(){
        super();
        this.loginField = '#loginFrm_loginname';
        this.passwordField = '#loginFrm_password';
        this.submitButton = '[title="Login"]';
        this.errorMessageText = '.alert-error';
    }
    visit() {
        // тут нічого не повертаємо бо виконуємо дію
        cy.visit('/index.php?rt=account/login');
    }
    getLoginNameField() {
        return cy.get(this.loginField);
    }
    getPasswordField() {
        return cy.get(this.passwordField);
    }
    getSubmitButton() {
        return cy.get(this.submitButton);
    }
    getErrorMessageText() {
        return cy.get(this.errorMessageText);
    }
    // Тут те саме але ми використовуємо додатково дробдаун унаслідуваного
    // з батьківського конструктора через super(); Тоді запис така `${this.errorMessageText} ${this.dropdown}`
    getErrorMessageDropdown() {
        return cy.get(`${this.errorMessageText} ${this.dropdown}`);
    }
    getErrorMessageButton() {
        return cy.get(`${this.errorMessageText} ${this.button}`);
    }
    fillLoginFields(username, password) {
        cy.log('Fill in authorization fields');
        // тепер тут ми використовуємо тернарник так як тут type не приймає порожній рядок (' ')
        username? this.getLoginNameField().type(username): cy.log('username field not filled');
        password? this.getPasswordField().type(password): cy.log('password field not filled');
        this.getSubmitButton().click();
    }
}
export default new LoginPageWithConstructor ();
