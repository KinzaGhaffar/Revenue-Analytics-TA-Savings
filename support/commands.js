import Login from "../locators/loginlocators";
const serverUrl = Cypress.env("baseUrl");
const LoginLocators = new Login();
const AuthUserName = 'admin'
const AuthPassword = '123XQUIC&*^'
const TestUsers = [
    {
        username: "ns_cxl",
        password: "AsOne10907!",
        testAccountusername: "Autotest1",
        testAccountpassword: "Tahir@123"
    }
]
Cypress.Commands.add("login", () => {
    // cy.request({method:'GET',url:'https://fs-staging.xquic.com/',auth:{username:AuthUserName,password:AuthPassword}});
    cy.intercept("GET", `${serverUrl}/ns_cxl_dashboard`).as("Dashboard");
    cy.intercept('GET', `${serverUrl}/welcome/get_suggested_user_groups`).as('userSuggestedgroups');
    cy.intercept('GET', `${serverUrl}/reports/get_revenue_dashboard_data`).as('revenueDashboarddata');
    cy.intercept('GET', `${serverUrl}/reports/get_budget_forecasting_data`).as('budgetForcastingdata');
    cy.intercept('GET', `${serverUrl}/reports/get_daily_trial_data`).as('dailyTrialdata');
    cy.intercept('GET', `${serverUrl}/dashboard_contracts_count/`).as('dashboardContractscount');
    cy.intercept('GET', `${serverUrl}/dashboard_listing_count/`).as('dashboardListingcount');
    cy.intercept('GET', `${serverUrl}/travel_agents_ota_savings`).as('travelAgentsotaSavings');
    cy.intercept('GET', `${serverUrl}/welcome/get_group_info`).as('getGroupinfo');
    cy.visit(serverUrl, {auth:{username:AuthUserName,password:AuthPassword}});
    LoginLocators.HeaderLoginBtn().should("be.visible").click();
    LoginLocators.Email().should("be.visible").click().type(TestUsers[0].username);
    LoginLocators.Password().should("be.visible").click().type(TestUsers[0].password);
    LoginLocators.ModalLoginBtn().should("be.visible").click();
   
    cy.wait('@userSuggestedgroups');
    cy.wait('@revenueDashboarddata');
    cy.wait('@budgetForcastingdata');
    cy.wait('@dailyTrialdata');
    cy.wait('@dashboardContractscount');
    cy.wait('@dashboardListingcount');
    cy.wait('@travelAgentsotaSavings');
    cy.wait('@getGroupinfo');
    cy.wait("@Dashboard");
});
Cypress.Commands.add("testAccountlogin", () => {
    cy.visit(serverUrl,{timeout:3200000});
    LoginLocators.HeaderLoginBtn().should("be.visible").click();
    LoginLocators.Email().should("be.visible").click().type(TestUsers[0].testAccountusername);
    LoginLocators.Password().should("be.visible").click().type(TestUsers[0].testAccountpassword);
    LoginLocators.ModalLoginBtn().should("be.visible").click();
    cy.intercept("GET", `${serverUrl}/ns_cxl_dashboard`).as("Dashboard");
    cy.intercept('GET', `${serverUrl}/welcome/get_suggested_user_groups`).as('userSuggestedgroups');
    cy.intercept('GET', `${serverUrl}/reports/get_revenue_dashboard_data`).as('revenueDashboarddata');
    cy.intercept('GET', `${serverUrl}/reports/get_budget_forecasting_data`).as('budgetForcastingdata');
    cy.intercept('GET', `${serverUrl}/reports/get_daily_trial_data`).as('dailyTrialdata');
    cy.intercept('GET', `${serverUrl}/dashboard_contracts_count/`).as('dashboardContractscount');
    cy.intercept('GET', `${serverUrl}/dashboard_listing_count/`).as('dashboardListingcount');
    cy.intercept('GET', `${serverUrl}/travel_agents_ota_savings`).as('travelAgentsotaSavings');
    cy.intercept('GET', `${serverUrl}/welcome/get_group_info`).as('getGroupinfo');
    cy.wait('@userSuggestedgroups');
    // cy.wait('@revenueDashboarddata');
    // cy.wait('@budgetForcastingdata');
    // cy.wait('@dailyTrialdata');
    // cy.wait('@dashboardContractscount');
    // cy.wait('@dashboardListingcount');
    // cy.wait('@travelAgentsotaSavings');
    // cy.wait('@getGroupinfo');
    cy.wait("@Dashboard");
});
Cypress.Commands.add('OnetoFiveOTASavingsWorker', (xid) => {
    const url = `http://localhost:3000/run_auto_run_ota_savings?xids=${xid}&one_to_five=true`;
  
    cy.request({
      method: 'GET',
      url: url,
    }).then((response) => {
      // Expecting the response of the endpoint to ensure that the worker is triggered successfully
      expect(response.status).to.eq(200);
    });
  });
  
// Cypress.Keyboard.defaults({
//     keystrokeDelay: 200,
// });




// import Login from '../locators/loginlocators';
// import login_fixture from '../fixtures/login-data.json';
// Cypress.Commands.add('login', (email, password) => {
//     const LoginLocatorsObj = new Login();
//     LoginLocatorsObj.HeaderLoginBtn()
//     .click()
//     LoginLocatorsObj.Email()
//     .type(login_fixture.test_user.email, {delay:300})
//     LoginLocatorsObj.Password()
//     .type(login_fixture.test_user.password, {delay:100})
//     LoginLocatorsObj.ModalLoginBtn()
//     .should('be.visible')
//     .click()
// })

import 'cypress-file-upload';