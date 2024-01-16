import { SELECTORS } from "./constants";

const email:string = Cypress.env('EMAIL_CONTRATOSXY');
const password:string = Cypress.env('PASSWORD_CONTRATOSXY');

export function login(){
    cy.get(SELECTORS.inputEmail).type(email);
    cy.get(SELECTORS.inputPassword).type(password);
    cy.get(SELECTORS.buttonIniciar).click();
}