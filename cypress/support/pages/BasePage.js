// Тут будуть батьківськи класи для наприклад
// футера, хедера...
// тут у нас -до- 20 урока
export default class BasePage {
    constructor() {
        this.dropdown = '.dropdown';
        this.button = '.button';
    }
    // тут пошук за ключевими літерами або буквою
    getSearchInput() {
        return cy.get('#filter_keyword');
    }
}














// Тут вже 20 урок і це поки помилка не той проект

// export default class BasePage {
//     constructor() {
//         this.element = {};
//         // в хедері є акаунт де div це .topnavbar а акаун li сторінка це[data-id="menu_account"]
//         this.element.headerAccountButton = '.topnavbar [data-id="menu_account"]';
//     }
//     // функція
//     getHeaderAccountBatton() {
//         return cy.get(this.element.headerAccountButton);
//     }
// }
