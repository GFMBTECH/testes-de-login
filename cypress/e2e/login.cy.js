/// <reference types="cypress" />
//Funccionalidade de login
describe('Testes de Login', () => {
//cenarios
it('Login com sucesso', () => {
    //DADO
    //abrir a aplicação
    cy.visit('https://automationpratice.com.br/login')  
    //preenche email e senha 
    cy.get('#user').type('edu@quazando.com')
    cy.get('#password').type('123456')


    //quando o usuario clicar no botao entrar
    //clica em entrar 
    cy.get('#btnLogin').click()

    //ENTAO
    //verifica se o login foi realizado com sucesso valida a msg
    cy.get('#swal2-title').should('contain', 'Login realizado')
    cy.get('#swal2-title').should('have.text', 'Login realizado')
    

});


it('E-mail inválido', () => {

    cy.visit('https://automationpratice.com.br/login')
    //preenche email e senha
    cy.get('#user').type('edu@quazando')
    cy.get('#password').type('123456')
    
    //quando o usuario clicar no botao entrar
    //clica em entrar 
    cy.get('#btnLogin').click()
    cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
    

  


});

it('senha invalido', () => {

    cy.visit('https://automationpratice.com.br/login')
    //preenche email e senha
    cy.get('#user').type('edu@quazando.com')
    cy.get('#password').type('kkkk')
    
    //quando o usuario clicar no botao entrar
    //clica em entrar 
    cy.get('#btnLogin').click()
    cy.get('.invalid_input').should('have.text', 'Senha inválida.')

});

it('senha em branco', () => {

    cy.visit('https://automationpratice.com.br/login')
    //preenche email e senha
    cy.get('#user').type('edu@quazando.com')
    cy.get('#password').type('   ')
    
    //quando o usuario clicar no botao entrar
    //clica em entrar 
    cy.get('#btnLogin').click()
    cy.get('.invalid_input').should('have.text', 'Senha inválida.')


});
    
it('email em branco', () => {

    cy.visit('https://automationpratice.com.br/login')
    //preenche email e senha
    cy.get('#user').type('   ')
    cy.get('#password').type('123456')
    
    //quando o usuario clicar no botao entrar
    //clica em entrar 
    cy.get('#btnLogin').click()
    cy.get('.invalid_input').should('have.text', 'E-mail inválido.')


});

it('E-mail e senha em branco', () => {

    cy.visit('https://automationpratice.com.br/login')
    //preenche email e senha
   
    
    //quando o usuario clicar no botao entrar
    //clica em entrar 
    cy.get('#btnLogin').click()
    cy.get('.invalid_input').should('have.text', 'E-mail inválido.')


});


})