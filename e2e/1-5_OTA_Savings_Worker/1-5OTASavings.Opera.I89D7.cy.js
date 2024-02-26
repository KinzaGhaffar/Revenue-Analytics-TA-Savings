import { OneToFiveOTASavingsOperaI89D7 } from "../../locators/1-5_OTA_Savings_Worker/1-5OTASavings.Opera.I89D7.locators";
const serverUrl = Cypress.env("baseUrl");
describe('TA Savings : Business XID: I89D7 | PMS: SPH | Month: May', () => {
    before(() => {
        cy.OnetoFiveOTASavingsWorker("I89D7");
        //cy.clearCookies();
    })
    beforeEach(() => {
        cy.clearCookies();
        cy.login();
        cy.intercept('GET',`${serverUrl}/businesses/*/travel_agents?travel_agent_date=*&date_change=*&term=&company_id=&page=&show_archived=*`).as('travelAgentsPageAPI');
        cy.intercept('GET',`${serverUrl}/travel_agents/load_cumulative_summary?term=&travel_agent_date=*&company_id=&pms=&show_archived=*&dispute_filter=&header_load=true&show_dispute_throughout_month=false&access_status_filter=&_=*`).as('travelAgentsCumulativeSummaryAPI');
        cy.intercept('GET',`${serverUrl}/travel_agents/search_ota_businesses?term=*&travel_agent_date=*&company_id=&pms=&show_archived=false&dispute_filter=&show_dispute_throughout_month=false&access_status_filter=&_=*`).as('travelAgentsSearchedBusinessAPI');
        cy.intercept('GET',`${serverUrl}/travel_agents/search_ota_businesses?term=I89D7&travel_agent_date=*&company_id=&pms=&show_archived=false&dispute_filter=&show_dispute_throughout_month=false&access_status_filter=&_=*`).as('travelAgentsSearchedBusinessCumulativeSummaryAPI');
        cy.intercept('GET',`${serverUrl}/check_ta_status?status_id=*`).as('travelAgentsCheckTAStatusAPI');
        cy.intercept('GET',`${serverUrl}/update_ta_status?status_id=*`).as('travelAgentsUpdateTAStatusAPI');
    });
    // it.only('1-5 OTA Saving : Running OTA Savings for I89D7 using Endpoint' ,() => { 

    //     // Triggering the 1-5 OTA Savings Worker by passing Xid = I89D7 as a argument
    //     cy.request('GET', 'http://localhost:3000/run_auto_run_ota_savings?xids=I89D7&one_to_five=true')
    //         .then((response) => {
    //             // Expecting the respone of the endpoint to make sure that the worker is trigerred successfully
    //             expect(response.status).to.eq(200);
    //   })
    // });
    it('1-5 OTA Savings : PMS = OPERA Business_Xid = I89D7 for Booking', () => {
        OneToFiveOTASavingsOperaI89D7.click_on_ota_savings_button();
        cy.wait('@travelAgentsPageAPI',{timeout:42000}).then(interception=>{
            OneToFiveOTASavingsOperaI89D7.verify_ta_savings_api(interception);
        });
        cy.wait('@travelAgentsCumulativeSummaryAPI',{timeout:42000}).then(interception=>{
            OneToFiveOTASavingsOperaI89D7.verify_ta_savings_cumulative_summary_api(interception);
        });
        OneToFiveOTASavingsOperaI89D7.click_on_ota_savings_calendar();
        OneToFiveOTASavingsOperaI89D7.click_on_ota_savings_month_August();
        cy.wait('@travelAgentsPageAPI',{timeout:42000}).then(interception=>{
            OneToFiveOTASavingsOperaI89D7.verify_ta_savings_api(interception);
        });
        cy.wait('@travelAgentsCumulativeSummaryAPI',{timeout:42000}).then(interception=>{
            OneToFiveOTASavingsOperaI89D7.verify_ta_savings_cumulative_summary_api(interception);
        });
        OneToFiveOTASavingsOperaI89D7.search_ota_savings_business();
        cy.wait('@travelAgentsSearchedBusinessAPI',{timeout:42000}).then(interception=>{
            OneToFiveOTASavingsOperaI89D7.verify_ta_savings_searched_business_api(interception);
        });
        OneToFiveOTASavingsOperaI89D7.click_on_ota_detailPage_Booking();
        cy.wait('@travelAgentsSearchedBusinessCumulativeSummaryAPI',{timeout:42000}).then(interception=>{
            OneToFiveOTASavingsOperaI89D7.verify_ta_savings_searched_business_cumulative_summary_api(interception);
        });
        OneToFiveOTASavingsOperaI89D7.verify_I89D7_booking_ta_results_total_entries();
        OneToFiveOTASavingsOperaI89D7.verify_I89D7_booking_ta_results_total_exceptions();
        OneToFiveOTASavingsOperaI89D7.verify_I89D7_booking_ta_results_total_savings_identified();
    });
    it('1-5 OTA Savings : PMS = OPERA Business_Xid = I89D7 for Expedia', () => {
        OneToFiveOTASavingsOperaI89D7.click_on_ota_savings_button();
        cy.wait('@travelAgentsPageAPI',{timeout:42000}).then(interception=>{
            OneToFiveOTASavingsOperaI89D7.verify_ta_savings_api(interception);
        });
        cy.wait('@travelAgentsCumulativeSummaryAPI',{timeout:42000}).then(interception=>{
            OneToFiveOTASavingsOperaI89D7.verify_ta_savings_cumulative_summary_api(interception);
        });
        OneToFiveOTASavingsOperaI89D7.click_on_ota_savings_calendar();
        OneToFiveOTASavingsOperaI89D7.click_on_ota_savings_month_August();
        cy.wait('@travelAgentsPageAPI',{timeout:42000}).then(interception=>{
            OneToFiveOTASavingsOperaI89D7.verify_ta_savings_api(interception);
        });
        cy.wait('@travelAgentsCumulativeSummaryAPI',{timeout:42000}).then(interception=>{
            OneToFiveOTASavingsOperaI89D7.verify_ta_savings_cumulative_summary_api(interception);
        });
        OneToFiveOTASavingsOperaI89D7.search_ota_savings_business();
        cy.wait('@travelAgentsSearchedBusinessAPI',{timeout:42000}).then(interception=>{
            OneToFiveOTASavingsOperaI89D7.verify_ta_savings_searched_business_api(interception);
        });
        OneToFiveOTASavingsOperaI89D7.click_on_ota_detailPage_Expedia();
        cy.wait('@travelAgentsSearchedBusinessCumulativeSummaryAPI',{timeout:42000}).then(interception=>{
            OneToFiveOTASavingsOperaI89D7.verify_ta_savings_searched_business_cumulative_summary_api(interception);
        });
        OneToFiveOTASavingsOperaI89D7.verify_I89D7_expedia_total_entries_analyzed();
        OneToFiveOTASavingsOperaI89D7.verify_I89D7_expedia_total_exceptions_found();
        OneToFiveOTASavingsOperaI89D7.verify_I89D7_expedia_total_savings_identified();
    });
});
        