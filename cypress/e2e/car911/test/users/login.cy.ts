import { login } from '../../utils/functions';

describe('Usuarios', () => {
  beforeEach(() => {
    const url = Cypress.env('URL_CAR911');
    cy.visit(url);
    login();
  });

  it('Crear usuarios', function (){
  })
 
});



