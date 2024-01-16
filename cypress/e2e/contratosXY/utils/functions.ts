import { CREDENTIALS, SELECTORS } from "./constants";


export function login(){
    cy.get(SELECTORS.inputEmail).type(CREDENTIALS.EMAIL_CONTRATOSXY);
    cy.get(SELECTORS.inputPassword).type(CREDENTIALS.PASSWORD_CONTRATOSXY);
    cy.get(SELECTORS.buttonIniciar).click();
}

export function redireccionClientes(){
    cy.get(SELECTORS.menuClientes).click();
    cy.get(SELECTORS.buttonCrearCliente).click();
}