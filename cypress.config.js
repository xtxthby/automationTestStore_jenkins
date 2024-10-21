const { defineConfig } = require("cypress");
const { configureAllureAdapterPlugins } = require("@mmisty/cypress-allure-adapter/plugins");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  // //  зменшити споживання пам'яті під час запуску тестів,
  // //  особливо коли запускається велика кількість тестів або
  // //  коли браузер залишається відкритим протягом тривалого часу.
  // //  Включати її варто лише при наявності проблем із використанням пам'яті.
  // experimentalMemoryManagement: true,
  // // Мета: обмежити кількість збережених у пам'яті завершених тестів для зменшення споживання ресурсів.
  // // Якщо ти встановлюєш значення 1, це означає, що після завершення одного тесту
  // // Cypress зберігатиме в пам'яті тільки один останній тест, вивільняючи пам'ять для попередніх.
  // //  Тобіш віддебажити я незможу окрім останньго, решту зможу лише побачити результат.
  // numTestsKeptInMemory: 1,
  // це конфігурація щоб тест не перезапускавя сам по собі
  watchForFileChanges: false,
  e2e: {
    baseUrl: 'https://automationteststore.com', // тут заносимо завжди базову URL
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // тут будуть трекатися наші тести і формуватися основа для allure-report
      // для запуску використовуємо в консолі ' npx cypress run --env allure=true '
      configureAllureAdapterPlugins(on, config);

      return config;
    },
  },
});

