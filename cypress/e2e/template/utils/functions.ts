import { SELECTORS } from "./constants";

const email:string = Cypress.env('USER_EMAIL');
const password:string = Cypress.env('USER_PASSWORD');

export function login(){
    cy.get(SELECTORS.inputEmail).type(email);
    cy.get(SELECTORS.inputPassword).type(password);
    cy.get(SELECTORS.buttonIniciar).click();
    cy.contains('button', 'Aceptar').click();
   
}