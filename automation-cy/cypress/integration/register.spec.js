import pages from '../support/pages';


beforeEach(() => {
    cy.visit('/')
});

describe('register user', () => {
    it('register new user sucess', () => {
        pages.dataNewUser.email('')
        pages.dataNewUser.buttonCreate()
        pages.elements.elementVisibleRegister()
        pages.dataNewUser.sexo()
        pages.dataNewUser.firstName()
        pages.dataNewUser.lastName()
        pages.dataNewUser.password()
        pages.dataNewUser.day()
        pages.dataNewUser.month()
        pages.dataNewUser.year()
        pages.dataNewUser.company()
        pages.dataNewUser.address()
        pages.dataNewUser.city()
        pages.dataNewUser.state()
        pages.dataNewUser.postalcode()
        pages.dataNewUser.messageOther()
        pages.dataNewUser.mobilePhone()
        pages.dataNewUser.buttonFinalCreate()
        pages.dataNewUser.registerSucess()
    });
});