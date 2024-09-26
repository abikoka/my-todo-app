describe('Todo App', () => {
  it('should add a new todo', () => {
    cy.visit('/');
    cy.get('input[name="title"]').type('New Todo');
    cy.get('button[type="submit"]').click();
    cy.contains('New Todo');
  });

  it('should display existing todos', () => {
    cy.visit('/');
    cy.get('ul').should('exist');
  });
});
