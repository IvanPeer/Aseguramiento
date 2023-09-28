/// <reference types="cypress"/>
describe("Ingreso",()=>{
    it("Inicio de sesion",()=>{
cy.visit('http://localhost:3000/');
    cy.get('[type="email"]').type('Hola')
    cy.get('[type="password"]').type('prueba123')
    cy.get('.loginButton').click()
    })
});