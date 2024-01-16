import { SELECTORS } from "./constants";

const email:string = Cypress.env('EMAIL_CAR911');
const password:string = Cypress.env('PASSWORD_CAR911');

export function login(){
    cy.get(SELECTORS.inputEmail).type(email);
    cy.get(SELECTORS.inputPassword).type(password);
    cy.get(SELECTORS.buttonIniciar).click();
}