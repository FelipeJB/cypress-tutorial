context('Example 06', () => {
  beforeEach(() => {
      cy.visit('/');
  });

  it('Test #1', () => {
      cy.AddTodo('My Task #1');
      cy.AddTodo('My Task #2');
      cy.GetTodoCount().should('eq', 3);

      cy.ToggleTask(2);
      cy.GetTodoCount().should('eq', 2);

      cy.SelectCompleted();
  });
});
