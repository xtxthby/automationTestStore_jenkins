// Ця функція прий має два параметри з тесту авторизації і ми їх назвали username, password
//  сюди повинно прийти імя і пароль які функція введе в поля нажме на кнопку логін
//  незабуваємо єкспортувати функцію для подальшого використання
// Ця функйія не для логінізації як такової вона для того щоб людина
// яка хоче купити наприклад товар через корзину пройшла аторизацію і далі змогла зробити покупку
// Зараз ми її імпортуємо в order

// тепер вона перенесена в клас LoginPage
// export function fillAuthorizationFields(username, password) {
//     cy.log('Fill in authorization fields');
//     // cy.get('#loginFrm_loginname').type(username);
//     // cy.get('#loginFrm_password').type(password);
//
//     // тепер тут ми використовуємо тернарник так як тут type не приймає порожній рядок (' ')
//     username? cy.get('#loginFrm_loginname').type(username): cy.log('username field not filled');
//     password? cy.get('#loginFrm_password').type(password): cy.log('username field not filled');
//     cy.get('[title="Login"]').click();
// }

// Ще один варіант
// export function fillAuthorizationFields(username, password) {
//     cy.log('Fill in authorization fields');
//
//     if (username) {
//         cy.get('#loginFrm_loginname')
//             .should('be.visible')
//             .then(($input) => {
//                 cy.wrap($input).type(username);
//             })
//             .log('Username field filled');
//     } else {
//         cy.log('Username field not filled');
//     }
//
//     if (password) {
//         cy.get('#loginFrm_password')
//             .should('be.visible')
//             .then(($input) => {
//                 cy.wrap($input).type(password);
//             })
//             .log('Password field filled');
//     } else {
//         cy.log('Password field not filled');
//     }
//
//     cy.get('[title="Login"]').click();
// }



// //функція пошуку елемента через поле вводу (input) яке зазвичай розташовано в хедері
// _____Коли функція findItem(name) викликає сама себе з середини називають -- рекурсією  ______
// export function  findItem(name) {
//     cy.log('search item');
//     cy.get('body').then((body) => {
//         if (body.find(`[title="${name}"]`).length>0){
//             cy.get(`[title="${name}"]`).click();
//             cy.get('.productname .bgnone').should('have.prop','textContent', `${name}`);
//             cy.get('.productpagecart').should('be.visible');
//         }else {
//             cy.get('.pagination').contains('>').click();
//             findItem(name)
//         }
//     })
// }


// // більш складний варіант
// // функція приймає назву товару.
// export function findItem(name) {
//     cy.log('search item');
//     cy.get('body').then((body) => {
//         // find перевіряэ чи є товар [title="${name}"] на поточній сторінці
//         // якщо є то довжина рядка повинна бути length > 0
//         if (body.find(`[title="${name}"]`).length > 0) {
//             // // Натискаємо на назву товару де нас перекине на картку товара
//             cy.get(`[title="${name}"]`).click();
//             // первіряємо картку товара за назвою
//             cy.get('.productname .bgnone').should('have.prop', 'textContent', `${name}`);
//             // перевіряємо чи існує кнопка додати в корзину
//             cy.get('.productpagecart').should('be.visible');
//             //  якщо товару немає на сторінці перевіряємо чи є пагінація на сторінці
//             // body.find('.pagination').length > 0: Ця умова перевіряє, чи існує на сторінці елемент з класом .pagination.
//             // Якщо такий елемент є, значення буде більше нуля, і це означає, що на сторінці присутній блок для пагінації.
//             //  body.find('.pagination').contains('>').length > 0: Ця умова перевіряє, чи існує всередині блоку пагінації (.pagination) елемент, що містить текст '>'
//             //  (наприклад, стрілку або текстову позначку для переходу на наступну сторінку).Якщо такий елемент знайдено, його кількість буде більше нуля, що означає
//             //  наявність кнопки для переходу на наступну сторінку.
//         } else if (body.find('.pagination').length > 0 && body.find('.pagination').contains('>').length > 0) {
//             // далі робимо клік і переходимо на другу сторінку
//             cy.get('.pagination').contains('>').click();
//             // починаємо пошу по новій
//             findItem(name);
//         } else {
//             // в противному випадку виводимо текст що елемент не найден
//             cy.log('Item not found');
//         }
//     });
// }


// (// Ще один варіант Функції не універсальний а саме для цього сайту
// //  просто тут не використовується виклик функції по колу
// export function findProduct(productName) {
//     cy.get('#filter_keyword').type('e').closest('form').submit();
//     cy.get('ul .pagination a').then(pages => {
//         // тут ми порахували кількість сторінок з товаром
//         return pages.length;
//     }).then(pageCount => {
//         // тут цикл який перебірає сторінки і виконує дії
//         for(let i = 0; i < pageCount; i++) {
//             cy.location().then(location => {
//                 // якщо локація сайту має такий пас(ендпоінт - картки) 'product/product' то робити нічого непотрібно
//                 // якщо це не ця локаціявиконай слідучу дію яка шукаєкартку товара
//                 if(!location.search.includes('product/product')) {
//                     cy.get('body').then(body => {
//                         if(body.find(`.productname[title="${productName}"]`).length > 0) {
//                             cy.get(`.productname[title="${productName}"]`).click();
//                         }else {
//                             cy.get('ul .pagination a').contains('>').click()
//                         }
//                     })
//                 }
//             })
//         }
//     })
// })


// ще варіант Дмитра

export function findProduct(productName) {
    cy.get('body').then((body) =>{
        if (body.find(`[title="${productName}"]`).length > 0) {
            cy.get(`[title="${productName}"]`).click();
        } else {
            cy.get('.pagination li a').contains('>').click();
            findProduct(productName);
        }
    })
}



// export function findProduct(productName) {
//     cy.get('#filter_keyword').type('i').closest('form').submit();
//     cy.get('body').then((body) => {
//         if (body.find(`[title="${productName}"]`).length > 0) {
//             cy.get(`[title="${productName}"]`).click();
//         } else {
//             // Додана умова для перевірки наявності кнопки для переходу на наступну сторінку
//             if (body.find('.pagination li a').contains('>').length > 0) {
//                 cy.get('.pagination li a').contains('>').click();
//                 findProduct(productName);
//             } else {
//                 cy.log('Product not found.');
//             }
//         }
//     });
// }


// export function findProduct(productName) {
//     cy.get('#filter_keyword').type('i').closest('form').submit();
//     cy.get('body').then((body) => {
//         if (body.find(`[title="${productName}"]`).length > 0) {
//             cy.get(`[title="${productName}"]`).click();
//         } else {
//             // Використовуємо jQuery метод для перевірки наявності кнопки "далі"
//             if (body.find('.pagination li a:contains(">")').length > 0) {
//                 cy.get('.pagination li a').contains('>').click();
//                 findProduct(productName);
//             } else {
//                 cy.log('Product not found.');
//             }
//         }
//     });
// }


// export function findProduct(productName) {
//     cy.get('#filter_keyword').type('i').closest('form').submit();
//     cy.get('body').then((body) => {
//         if (body.find(`[title="${productName}"]`).length > 0) {
//             cy.get(`[title="${productName}"]`).click();
//         } else {
//             cy.get('.pagination li a:contains(">")').then($nextButton => {
//                 if ($nextButton.length > 0) {
//                     cy.wrap($nextButton).click();
//                     findProduct(productName);
//                 } else {
//                     cy.log('Product not found.');
//                 }
//             });
//         }
//     });
// }

// export function findProduct(productName) {
//     cy.get('#filter_keyword').type('i').closest('form').submit();
//     cy.wait(2000); // Очікуємо 2 секунди перед перевіркою сторінки
//     cy.get('body').then((body) => {
//         if (body.find(`[title="${productName}"]`).length > 0) {
//             cy.get(`[title="${productName}"]`).click();
//         } else {
//             cy.get('.pagination li a:contains(">")').then($nextButton => {
//                 if ($nextButton.length > 0) {
//                     cy.wrap($nextButton).click();
//                     findProduct(productName);
//                 } else {
//                     cy.log('Product not found.');
//                 }
//             });
//         }
//     });
// }


// export function findProduct(productName) {
//     cy.get('#filter_keyword').type('i').closest('form').submit();
//     cy.wait(2000); // Очікуємо 2 секунди перед перевіркою сторінки
//     cy.get('body').then((body) => {
//         if (body.find(`[title="${productName}"]`).length > 0) {
//             cy.get(`[title="${productName}"]`).click();
//         } else {
//             cy.get('.pagination li a:contains(">")').first().then($nextButton => {
//                 if ($nextButton.length > 0) {
//                     cy.wrap($nextButton).click();
//                     findProduct(productName);
//                 } else {
//                     cy.log('Product not found.');
//                 }
//             });
//         }
//     });
// }



// export function findProduct(productName) {
//     cy.get('#filter_keyword').type('i').closest('form').submit();
//     cy.wait(2000); // Очікуємо 2 секунди перед перевіркою сторінки
//     cy.get('body').then((body) => {
//         if (body.find(`[title="${productName}"]`).length > 0) {
//             cy.get(`[title="${productName}"]`).click();
//         } else {
//             cy.get('.pagination li a:contains(">")').first().click();
//             findProduct(productName);
//         }
//     });
// }


// Функція при авторизації де ми передаємо loginname, password
export function headlessLogin(loginname, password) {
    // змінні в яких ми будемо зберігати токен і цифрове значення яке прийде з бека
    let csrfToken;
    let csrfInstance;
    //  спочатку в запиті ми отримаємо сторінку і почнемо обробляти респонс відповідь
    cy.request('GET', '/index.php?rt=account/login').then( response => {
        // console.log(response.body);
        // створимо змінну в якій ми створюємо обєкт сторінки і в цій сторінці збережемо наш боді з респонса
        // і далі працюємо як з обєктом щоб не на пряму бо сайпрес так не працює
        // document - це і є обєкт і за допомогою createElement беремо корневий єлемент 'html' тобіш тег і створюємо новий обєкт
        let htmlResp = document.createElement('html');
        //  тепер у цей тег запхаємо з відповіді все що в боді
        htmlResp.innerHTML = response.body;
        // тепер беремо за допомогою методу локатор а далі getAttribute його значення токен
        csrfToken = htmlResp.querySelector('#loginFrm [name="csrftoken"]').getAttribute('value');
        csrfInstance = htmlResp.querySelector('#loginFrm [name="csrfinstance"]').getAttribute('value');
        console.log(htmlResp.innerHTML);
        console.log(csrfToken);
        console.log(csrfInstance);
    }).then(() => {
        cy.request({
            method: 'POST',
            // це запит і адреса взята в девтулзах, мережа, запити, заголовки.
            url: '/index.php?rt=account/login',
            // також в пейлоаде в девтулзах є форм дата і ми до неї додамо тру
            form: true,
            // так само в девтулзах в пейлоаде взяли назви ключів для боді
            // значення це змінні з верху і логін з паролем в дужках
            body: {
                csrftoken: csrfToken,
                csrfinstance: csrfInstance,
                loginname: loginname,
                password: password
            }
        }).then( response => {
            // перевіряємо статус.
            expect(response.status).eq(200);
        })
    })
}









