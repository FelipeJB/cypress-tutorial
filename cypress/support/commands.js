// cypress/support/commands.js
import TodosPage from '../support/pages/TodosPage.js'
const todosPage = new TodosPage();

Cypress.Commands.add('AddTodo', (text) => {
  todosPage.newTodoInput().type(text + '{enter}');
});

Cypress.Commands.add('SelectAll', () => {
  todosPage.allLink().click();
});

Cypress.Commands.add('SelectActive', () => {
  todosPage.activeLink().click();
});

Cypress.Commands.add('SelectCompleted', () => {
  todosPage.completedLink().click();
});

Cypress.Commands.add('ToggleTask', id => {
  todosPage.todoToggle(id).click();
});

Cypress.Commands.add('GetTodoCount', () => { 
  todosPage.todoCount();
});

