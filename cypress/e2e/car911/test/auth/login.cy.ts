import { SELECTORS } from '../../utils/constants';


describe('Login Tests', () => {
  beforeEach(() => {
    const url = Cypress.env('URL_CAR911');
    cy.visit(url);
  });

  it('Login sin datos', function () {
    cy.get(SELECTORS.buttonIniciar).click();
    cy.get('div.v-application.v-application--is-ltr.theme--light:nth-child(1) div.v-application--wrap div.backColor.justify-center.col div.container.custom-container.fill-height.container--fluid div.card-container.flex div.custom-card.d-flex.flex-column.pl-10.justify-center.v-card.v-sheet.theme--light:nth-child(2) form.v-form:nth-child(2) div.container.flex.justify-center.text-center.align-center div.row.justify-center.flex:nth-child(1) div.col-sm-12.col div.v-input.text-center.color--pink.v-input--has-state.theme--light.v-text-field.v-text-field--is-booted.error--text div.v-input__control div.v-text-field__details div.v-messages.theme--light.error--text div.v-messages__wrapper > div.v-messages__message').should('have.text','El correo es obligatorio');
  });

  const email = Cypress.env('EMAIL_CAR911');
  const password = Cypress.env('PASSWORD_CAR911');

  it('Login correcto', function () {
    cy.get(SELECTORS.inputEmail).type(email);
    cy.get(SELECTORS.inputPassword).type(password);
    cy.get(SELECTORS.buttonIniciar).click();
  });
});



