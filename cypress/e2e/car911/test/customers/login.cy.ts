import { login } from '../../utils/functions';

describe('Clientes', () => {
  beforeEach(() => {
    const url = Cypress.env('URL_CAR911');
    cy.visit(url);
    login();
  });

  it('Crear clientes', function (){
  })
 
});



