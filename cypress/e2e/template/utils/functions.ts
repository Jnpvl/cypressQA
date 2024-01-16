import { CREDENTIALS, SELECTORS } from "./constants";



export function login(){
    cy.get(SELECTORS.inputEmail).type(CREDENTIALS.email);
    cy.get(SELECTORS.inputPassword).type(CREDENTIALS.password);
    cy.get(SELECTORS.buttonIniciar).click();
    cy.contains('button', 'Aceptar').click();
   
}