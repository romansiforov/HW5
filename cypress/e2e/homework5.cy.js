describe('Complete the The Block form and submit it',() => {
        const tests = [
            {firstName : 'Roman', lastName : 'Siforov', email : 'romansiforov@gmail.com', website : 'https://google.com'}
        ];

    before('Open the site and navigate to Layouts creation forms',() => {
        cy.visit('http://sanitarskyi-ngx-admin.herokuapp.com');
        cy.get('img[src="assets/images/material-dark-theme.jpg"]').click();
        cy.url().should('be.eq','http://sanitarskyi-ngx-admin.herokuapp.com/pages/dashboard?theme=material-dark');
        cy.get('a[title="Forms"]').click();
        cy.get('a[title="Form Layouts"]').click();
        cy.log("The user reached the Layouts creation form");
    });

    tests.forEach(({firstName, lastName, email, website}) => {
        it('Fill the Block form with all possible values',() => {
            cy.get('#inputFirstName').type(firstName);
            cy.get('#inputLastName').type(lastName);
            cy.get('#inputEmail').type(email);
            cy.get('#inputWebsite').type(website);
            cy.get('.appearance-filled.size-medium.shape-rectangle.status-basic.nb-transition').click();
        })
    })
})