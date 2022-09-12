class pages {

    elements = {
        elementVisibleRegister: () => cy.get('#id_gender1', { timeout: 20000 }).should('be.visible'),
        elementVisibleCart: () => cy.contains('h1', 'Printed Summer Dress', { timeout: 20000 }).should('be.visible'),
        elementVisibleCheckout: () => cy.contains('h1', 'Shopping-cart summary', { timeout: 20000 }).should('be.visible')
    }

    dataNewUser = {
        email: () => cy.get('#email_create').type('qazinho10@gmail.com'),
        buttonCreate: () => cy.get('button#SubmitCreate').click(),
        sexo: () => cy.get('#uniform-id_gender1').click(),
        firstName: () => cy.get('#customer_firstname').type('Silas'),
        lastName: () => cy.get('#customer_lastname').type('Sousa'),
        password: () => cy.get('#passwd').type('12345'),
        day: () => cy.get('#days').select('12'),
        month: () => cy.get('#months').select('January'),
        year: () => cy.get('#years').select('1998'),
        company: () => cy.get('#company').type('Justa'),
        address: () => cy.get('#address1').type('Av. Visconde de Suassuna 540'),
        city: () => cy.get('#city').type('Recife'),
        state: () => cy.get('#id_state').select('Florida'),
        postalcode: () => cy.get('#postcode').type('12345'),
        messageOther: () => cy.get('#other').type('Sucesso!'),
        mobilePhone: () => cy.get('#phone_mobile').type('997196677'),
        buttonFinalCreate: () => cy.get('#submitAccount').click(),
        registerSucess: () => cy.get('#center_column h1').should('be.visible', 'My account')
    }

    login ={
            emailLogin: () => cy.get('#email').type('candidato@justa.com.vc'),
            passwordLogin: () => cy.get('#passwd').type('tamojusto')
    }

    addProuctCart = {
        homepage: () => cy.get('#header_logo a').click(),
        clothesSex: () => cy.contains('li', 'Women').click(),
        selectProduct: () => cy.contains('a', 'Printed Summer Dress').click(),
        addToCart: () => cy.contains('button', 'Add to cart').click(),
        proceedCheck: () => cy.contains('span', 'Proceed to checkout').click()    
    }

    changeDeliveryAdress = {
        buttonSubmitLogin: () => cy.get('#SubmitLogin').click(),
        proceedCheck: () => cy.get('p a[title="Proceed to checkout"]').click(),
        buttonUpdate: () => cy.contains('span', 'Update').click(),
        updateAdress: () => cy.get('#address1').type('Av. 742'),
        buttonSave: () => cy.get('#submitAddress').click()
    }
    
    methodPay = {
        proceedCheck: () => cy.get('button[name=processAddress]').click(),
        acceptTerms: () => cy.get('#cgv').click(),
        proceedCheckTwo: () => cy.get('button[name=processCarrier]').click(),
        checkPay: () => cy.get('.cheque').click(),
        confirmOrder: () => cy.contains('button', 'I confirm my order').click(),
    }

    buyComplete = {
        buyComplete: () => cy.contains('p', 'Your order on My Store is complete.').should('be.visible')

    }

}
module.exports = new pages();