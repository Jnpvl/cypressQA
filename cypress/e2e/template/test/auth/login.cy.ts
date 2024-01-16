import { CREDENTIALS, SELECTORS } from '../../utils/constants';


describe('Login Tests', () => {
  beforeEach(() => {
    const url = Cypress.env('URL');
    cy.visit(url);
  });

  it('Login sin datos', function () {
    cy.get(SELECTORS.buttonIniciar).click();
    cy.contains('.v-messages__message', 'El correo es obligatorio').should('be.visible');
    //cy.xpath('/html/body/div[1]/div/div/div/div/div/div/div/div/div[1]/div[3]/form/div[2]/div/div[2]/div/div/div', 'La contraseña es obligatoria').should('be.visible');

  });


  it('Login Incorrecto', function () {
    cy.get(SELECTORS.inputEmail).type('noexisto@yopmail.com');
    cy.get(SELECTORS.inputPassword).type('noexisto');
    cy.get(SELECTORS.buttonIniciar).click();
    cy.contains('#swal2-html-container', 'Error en las credenciales').should('be.visible');
  });


  it('Login correcto', function () {
    cy.get(SELECTORS.inputEmail).type(CREDENTIALS.email);
    cy.get(SELECTORS.inputPassword).type(CREDENTIALS.password);
    cy.get(SELECTORS.buttonIniciar).click();
    cy.contains('button', 'Aceptar').click();
    cy.get('.text-h4').should('be.visible');
  });
});



