import { SELECTORS } from '../../utils/constants';


describe('Login Tests', () => {
  beforeEach(() => {
    const url = Cypress.env('URL_CONTRATOSXY');
    cy.visit(url);
  });

  it('Login sin datos', function () {
    cy.get(SELECTORS.buttonIniciar).click();
    cy.get('#swal2-title').should('have.text', '¡Acceso denegado!');
  });

  const email = Cypress.env('EMAIL_CONTRATOSXY');
  const password = Cypress.env('PASSWORD_CONTRATOSXY');

  it('Login correcto', function () {
    cy.get(SELECTORS.inputEmail).type(email);
    cy.get(SELECTORS.inputPassword).type(password);
    cy.get(SELECTORS.buttonIniciar).click();
    cy.get('#swal2-title').should('have.text', '¡Acceso concedido!');
  });
});



