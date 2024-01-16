import { CREDENTIALS, SELECTORS } from '../../utils/constants';


describe('Login Tests', () => {
  beforeEach(() => {
    const url = Cypress.env('URL_CONTRATOSXY');
    cy.visit(url);
  });

  it('Login sin datos', function () {
    cy.get(SELECTORS.buttonIniciar).click();
    cy.contains('span','El correo es requerido.').should('be.visible')
  });

  it('Login correcto', function () {
    cy.get(SELECTORS.inputEmail).type(CREDENTIALS.EMAIL_CONTRATOSXY);
    cy.get(SELECTORS.inputPassword).type(CREDENTIALS.PASSWORD_CONTRATOSXY);
    cy.get(SELECTORS.buttonIniciar).click();
    cy.get('#swal2-title').should('have.text', '¡Acceso concedido!');
  });
});



