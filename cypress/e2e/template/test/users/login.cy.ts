import { login } from '../../utils/functions';

describe('Login Tests', () => {
  beforeEach(() => {
    const url = Cypress.env('URL');
    cy.visit(url);
    login();
  });

  it('cumple', function (){
    cy.get('.text-h4').should('be.visible');
  })
 
});



