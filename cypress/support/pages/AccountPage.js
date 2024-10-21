import BasePage from "./BasePage";

class AccountPage extends BasePage {
    visit() {
        // тут нічого не повертаємо бо виконуємо дію
        cy.visit('/index.php?rt=account/account');
    }

    getFirstNameText() {
        return cy.get('.heading1 .subtext');
    }
}
export default new AccountPage();
