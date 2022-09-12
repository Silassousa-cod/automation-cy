import pages from '../support/pages';

beforeEach(() => {
    cy.visit('/')
});
describe('buy product changing deliveries', () => {
    it('buy product changing delivery address', () => {
        pages.login.emailLogin()
        pages.login.passwordLogin()
        pages.addProuctCart.homepage()
        pages.addProuctCart.clothesSex()
        pages.addProuctCart.selectProduct()    
        pages.elements.elementVisibleCart()
        pages.addProuctCart.addToCart()
        pages.addProuctCart.proceedCheck()
        pages.elements.elementVisibleCheckout()        
        pages.changeDeliveryAdress.proceedCheck()
        pages.login.emailLogin()
        pages.login.passwordLogin()
        pages.changeDeliveryAdress.buttonSubmitLogin()
        pages.changeDeliveryAdress.buttonUpdate()
        pages.changeDeliveryAdress.updateAdress()
        pages.changeDeliveryAdress.buttonSave()
        pages.methodPay.proceedCheck()
        pages.methodPay.acceptTerms()
        pages.methodPay.proceedCheckTwo()
        pages.methodPay.checkPay()
        pages.methodPay.confirmOrder()
        pages.buyComplete.buyComplete()
    });
});