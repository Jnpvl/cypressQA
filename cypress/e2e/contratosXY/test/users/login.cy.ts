import { login } from '../../utils/functions';

describe('Usuarios', () => {
  beforeEach(() => {
    const url = Cypress.env('URL_CONTRATOSXY');
    cy.visit(url);
    login();
  });

  it('Crear usuarios', function (){
  })
 
});



