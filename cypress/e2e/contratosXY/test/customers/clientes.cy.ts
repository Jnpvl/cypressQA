import { login, redireccionClientes } from '../../utils/functions';

describe('Clientes', () => {
  beforeEach(() => {
    const url = Cypress.env('URL_CONTRATOSXY');
    cy.visit(url);
    login();
  });

  it('Crear clientes', function (){
    redireccionClientes();
    cy.get('input[name="client.name"]').type('name');
    cy.get('input[name="client.first_last_name"]').type('apellidoP');
    cy.get('input[name="client.second_last_name"]').type('apellidoM');
    cy.get('input[name="client.rfc"]').type('valj991024a98');

    cy.get('input[name="details.curp"]').type('valj991024hsrrzn02');
    cy.contains('span','Género').click();
    cy.contains('li','Masculino').click();

    cy.get('input[name="details.nationality"]').type('Mexicana');
    cy.get('input[name="details.country_born"]').type('Mexico');
    cy.get('input[name="details.country_nationality"]').type('Mexico');
    cy.get('input[name="details.occupation"]').type('QATESTER');
    cy.get('input[name="details.cell_phone"]').type('6621911702');
    cy.get('input[name="details.home_phone"]').type('6621911702');
    cy.get('input[name="details.email"]').type('name@yopmail.com');
    cy.get('input[name="details.id_type_authority"]').type('1');
    cy.get('input[name="details.id_number"]').type('11111111111');

    //boton para contnuar

    cy.get('input[name="address.street"]').type('calle');
    cy.get('input[name="address.exterior_num"]').type('20');
    cy.get('input[name="address.inner_num"]').type('20');
    cy.get('input[name="address.colony"]').type('Colonia');
    cy.get('input[name="address.municipality"]').type('Municipio');
    cy.get('input[name="address.zip_code"]').type('83104');
    cy.get('input[name="address.city"]').type('Hermosillo');
    cy.get('input[name="address.federal_entity"]').type('Mexico');
    cy.get('input[name="address.country"]').type('Sonora');

    //Nobeneficios
    cy.get('.p-checkbox-box').click();

    //conbeneficios
  })
 
});



