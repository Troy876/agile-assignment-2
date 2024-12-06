describe('ToDo App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('display the text field and button', () => {
    cy.get('input[type="text"]').should('be.visible');
    cy.get('button').contains('Create').should('be.visible');
  });

  it('add a new task', () => {
    const testString = 'Sample task';
    cy.get('input[type="text"]').type(testString);
    cy.get('button').contains('Create').click();
    cy.get('div._task_kos9v_1 p').should('contain.text', testString);
  });
});