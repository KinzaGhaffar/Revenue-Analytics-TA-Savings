import { otaSavingsSPHGZCHZL } from "../../locators/OTASavingsSPH/OTASavings.GZCHZL.locators";
const serverUrl = Cypress.env("baseUrl");
describe('TA Savings : Business XID: GZCHZL | PMS: SPH | Month: May', () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.login();
        cy.intercept('GET',`${serverUrl}/businesses/*/travel_agents?travel_agent_date=*&date_change=*&term=&company_id=&page=&show_archived=*`).as('travelAgentsPageAPI');
        cy.intercept('GET',`${serverUrl}/travel_agents/load_cumulative_summary?term=&travel_agent_date=*&company_id=&pms=&show_archived=*&dispute_filter=&header_load=true&show_dispute_throughout_month=false&access_status_filter=&_=*`).as('travelAgentsCumulativeSummaryAPI');
        cy.intercept('GET',`${serverUrl}/travel_agents/search_ota_businesses?term=*&travel_agent_date=*&company_id=&pms=&show_archived=false&dispute_filter=&show_dispute_throughout_month=false&access_status_filter=&_=*`).as('travelAgentsSearchedBusinessAPI');
        cy.intercept('GET',`${serverUrl}/travel_agents/search_ota_businesses?term=GZCHZL&travel_agent_date=*&company_id=&pms=&show_archived=false&dispute_filter=&show_dispute_throughout_month=false&access_status_filter=&_=*`).as('travelAgentsSearchedBusinessCumulativeSummaryAPI');
        cy.intercept('GET',`${serverUrl}/check_ta_status?status_id=*`).as('travelAgentsCheckTAStatusAPI');
        cy.intercept('GET',`${serverUrl}/update_ta_status?status_id=*`).as('travelAgentsUpdateTAStatusAPI');
    });
    it('TA Savings : Select month, search business and upload files using 3rd option for Booking', () => {
        otaSavingsSPHGZCHZL.click_on_ota_savings_button();
        cy.wait('@travelAgentsPageAPI',{timeout:42000}).then(interception=>{
            otaSavingsSPHGZCHZL.verify_ta_savings_api(interception);
        });
        cy.wait('@travelAgentsCumulativeSummaryAPI',{timeout:42000}).then(interception=>{
            otaSavingsSPHGZCHZL.verify_ta_savings_cumulative_summary_api(interception);
        });
        otaSavingsSPHGZCHZL.click_on_ota_savings_calendar();
        otaSavingsSPHGZCHZL.click_on_ota_savings_month_May();
        cy.wait('@travelAgentsPageAPI',{timeout:42000}).then(interception=>{
            otaSavingsSPHGZCHZL.verify_ta_savings_api(interception);
        });
        cy.wait('@travelAgentsCumulativeSummaryAPI',{timeout:42000}).then(interception=>{
            otaSavingsSPHGZCHZL.verify_ta_savings_cumulative_summary_api(interception);
        });
        otaSavingsSPHGZCHZL.search_ota_savings_business();
        cy.wait('@travelAgentsSearchedBusinessAPI',{timeout:42000}).then(interception=>{
            otaSavingsSPHGZCHZL.verify_ta_savings_searched_business_api(interception);
        });
        cy.wait('@travelAgentsSearchedBusinessCumulativeSummaryAPI',{timeout:42000}).then(interception=>{
            otaSavingsSPHGZCHZL.verify_ta_savings_searched_business_cumulative_summary_api(interception);
        });
        otaSavingsSPHGZCHZL.ota_savings_GZCHZL_booking_three_dots_button_is_visible();
        otaSavingsSPHGZCHZL.click_on_ota_savings_GZCHZL_booking_three_dots_button();
        otaSavingsSPHGZCHZL.click_on_ota_savings_GZCHZL_booking_upload_files_button();
        otaSavingsSPHGZCHZL.click_on_ota_savings_GZCHZL_booking_ta_modal_yes_button();
        cy.wait(5000);
        otaSavingsSPHGZCHZL.attach_booking_files_on_ta_modal();
        cy.wait(5000);
        otaSavingsSPHGZCHZL.attach_ReservationActivityfile_on_ta_modal();
        cy.wait(5000);
        otaSavingsSPHGZCHZL.attach_TrasactionTotalDetailfile_on_ta_modal();
        cy.wait(5000)
        otaSavingsSPHGZCHZL.click_on_booking_compare_button();
        cy.wait('@travelAgentsCheckTAStatusAPI',{timeout:320000}).then(interception=>{
        otaSavingsSPHGZCHZL.verify_ta_savings_check_ta_status_api(interception);
        });
        cy.wait('@travelAgentsUpdateTAStatusAPI',{timeout:320000}).then(interception=>{
        otaSavingsSPHGZCHZL.verify_ta_savings_update_ta_status_api(interception);
        });
        otaSavingsSPHGZCHZL.verify_GZCHZL_booking_ta_results_total_entries();
        otaSavingsSPHGZCHZL.verify_GZCHZL_booking_ta_results_total_exceptions();
        otaSavingsSPHGZCHZL.verify_GZCHZL_booking_ta_results_total_savings_identified();
    });
    it('TA Savings : Select month, search business and upload files using 3rd option for Expedia', () => {
        otaSavingsSPHGZCHZL.click_on_ota_savings_button();
        cy.wait('@travelAgentsPageAPI',{timeout:42000}).then(interception=>{
            otaSavingsSPHGZCHZL.verify_ta_savings_api(interception);
        });
        cy.wait('@travelAgentsCumulativeSummaryAPI',{timeout:42000}).then(interception=>{
            otaSavingsSPHGZCHZL.verify_ta_savings_cumulative_summary_api(interception);
        });
        otaSavingsSPHGZCHZL.click_on_ota_savings_calendar();
        otaSavingsSPHGZCHZL.click_on_ota_savings_month_May();
        cy.wait('@travelAgentsPageAPI',{timeout:42000}).then(interception=>{
            otaSavingsSPHGZCHZL.verify_ta_savings_api(interception);
        });
        cy.wait('@travelAgentsCumulativeSummaryAPI',{timeout:42000}).then(interception=>{
            otaSavingsSPHGZCHZL.verify_ta_savings_cumulative_summary_api(interception);
        });
        otaSavingsSPHGZCHZL.search_ota_savings_business();
        cy.wait('@travelAgentsSearchedBusinessAPI',{timeout:42000}).then(interception=>{
            otaSavingsSPHGZCHZL.verify_ta_savings_searched_business_api(interception);
        });
        cy.wait('@travelAgentsSearchedBusinessCumulativeSummaryAPI',{timeout:42000}).then(interception=>{
            otaSavingsSPHGZCHZL.verify_ta_savings_searched_business_cumulative_summary_api(interception);
        });
        otaSavingsSPHGZCHZL.click_on_ota_savings_GZCHZL_expedia_three_dots();
        otaSavingsSPHGZCHZL.click_on_ota_savings_GZCHZL_expedia_upload_files_button();
        otaSavingsSPHGZCHZL.click_on_ota_savings_GZCHZL_booking_ta_modal_yes_button();
        cy.wait(5000);
        otaSavingsSPHGZCHZL.attach_expedia_file_on_ta_modal();
        cy.wait(5000);
        otaSavingsSPHGZCHZL.attach_Expedia_ReservationActivityfile_on_ta_modal();
        cy.wait(5000);
        otaSavingsSPHGZCHZL.attach_Expedia_TrasactionTotalDetailfile_on_ta_modal();
        cy.wait(5000);
        otaSavingsSPHGZCHZL.click_on_expedia_compare_button();
        cy.wait('@travelAgentsCheckTAStatusAPI',{timeout:320000}).then(interception=>{
        otaSavingsSPHGZCHZL.verify_ta_savings_check_ta_status_api(interception);
        });
        cy.wait('@travelAgentsUpdateTAStatusAPI',{timeout:320000}).then(interception=>{
        otaSavingsSPHGZCHZL.verify_ta_savings_update_ta_status_api(interception);
        });
        otaSavingsSPHGZCHZL.verify_GZCHZL_expedia_total_entries_analyzed();
        otaSavingsSPHGZCHZL.verify_GZCHZL_expedia_total_exceptions_found();
        otaSavingsSPHGZCHZL.verify_GZCHZL_expedia_total_savings_identified();
    });
})