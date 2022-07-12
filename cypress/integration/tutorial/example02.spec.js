context('Variables', () => {
  beforeEach(() => {
      cy.visit('/');
      cy.fixture('todos').as('todosFixture');
  });

  it('Test 01', () => {
    let x = 5;
    cy.wrap(x).as("myVar");
    cy.get('.todo-list li').as('items');
    cy.get('.new-todo').type("Something...{enter}");

    cy.get('@items').should('have.length', 1);
    cy.get('.todo-list li').should('have.length', 2);
    cy.get('@myVar')
      .then((element) => {
        cy.log(element)
        //cy.wrap(element).as("myVar2");
      })

  });


  it('Test 02', () => {
    cy.get("@todosFixture").its("todos").should('have.length', 6)
    cy.get("@todosFixture").then(todos => {
        todos.todos.forEach(todo => {
            cy.get('.new-todo').type(todo + "{enter}")
            cy.wait(3000);
        });
    });
  });

});
