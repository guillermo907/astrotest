describe('Home loads properly', ()=>{
    it('loads home', ()=>{
        cy.visit('http://localhost:3000/');
        cy.get('#users').click();
        cy.contains('Patricia');
        cy.get('#users').click();
        cy.get('#home').click();
        cy.get('#main-input').type('prueba');
    })
    it('loads About', ()=>{
        cy.get('#about').click();
        cy.contains('About');
    })
    it('Goes back home', ()=>{
        cy.get('nav').contains('Home').click();
        cy.contains('About');
    })
})