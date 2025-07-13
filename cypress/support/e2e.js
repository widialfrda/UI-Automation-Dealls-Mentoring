import './commands';
require('cypress-xpath');

const COMMAND_DELAY = 3000;

for (const command of [
  'visit',
  'click',
  'type',
  'clear',
  'reload'
]) {
  Cypress.Commands.overwrite(command, (originalFn, ...args) => {
    const origVal = originalFn(...args);
    return new Promise((resolve) => {
      setTimeout(() => resolve(origVal), COMMAND_DELAY);
    });
  });
}

Cypress.Commands.overwriteQuery('contains', (originalFn, ...args) => {
  const origVal = originalFn(...args);
  return new Promise((resolve) => {
    setTimeout(() => resolve(origVal), COMMAND_DELAY);
  });
});
