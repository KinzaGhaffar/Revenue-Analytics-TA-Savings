import { otaSavingsSPHDFUNX7 } from "../../locators/OTASavingsSPH/OTASavings.DFUNX7.locators";
const serverUrl = Cypress.env("baseUrl");
describe('TA Savings : Business XID: DFUNX7 | PMS: SPH | Month: May', () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.login();
        cy.intercept('GET',`${serverUrl}/businesses/*/travel_agents?travel_agent_date=*&date_change=*&term=&company_id=&page=&show_archived=*`).as('travelAgentsPageAPI');
        cy.intercept('GET',`${serverUrl}/travel_agents/load_cumulative_summary?term=&travel_agent_date=*&company_id=&pms=&show_archived=*&dispute_filter=&header_load=true&show_dispute_throughout_month=false&access_status_filter=&_=*`).as('travelAgentsCumulativeSummaryAPI');
        cy.intercept('GET',`${serverUrl}/travel_agents/search_ota_businesses?term=*&travel_agent_date=*&company_id=&pms=&show_archived=false&dispute_filter=&show_dispute_throughout_month=false&access_status_filter=&_=*`).as('travelAgentsSearchedBusinessAPI');
        cy.intercept('GET',`${serverUrl}/travel_agents/search_ota_businesses?term=DFUNX7&travel_agent_date=*&company_id=&pms=&show_archived=false&dispute_filter=&show_dispute_throughout_month=false&access_status_filter=&_=*`).as('travelAgentsSearchedBusinessCumulativeSummaryAPI');
        cy.intercept('GET',`${serverUrl}/check_ta_status?status_id=*`).as('travelAgentsCheckTAStatusAPI');
        cy.intercept('GET',`${serverUrl}/update_ta_status?status_id=*`).as('travelAgentsUpdateTAStatusAPI');
    });
    it('TA Savings : Select month, search business and upload files using 3rd option for Booking', () => {
        otaSavingsSPHDFUNX7.click_on_ota_savings_button();
        cy.wait('@travelAgentsPageAPI',{timeout:42000}).then(interception=>{
            otaSavingsSPHDFUNX7.verify_ta_savings_api(interception);
        });
        cy.wait('@travelAgentsCumulativeSummaryAPI',{timeout:42000}).then(interception=>{
            otaSavingsSPHDFUNX7.verify_ta_savings_cumulative_summary_api(interception);
        });
        otaSavingsSPHDFUNX7.click_on_ota_savings_calendar();
        otaSavingsSPHDFUNX7.click_on_ota_savings_month_May();
        cy.wait('@travelAgentsPageAPI',{timeout:42000}).then(interception=>{
            otaSavingsSPHDFUNX7.verify_ta_savings_api(interception);
        });
        cy.wait('@travelAgentsCumulativeSummaryAPI',{timeout:42000}).then(interception=>{
            otaSavingsSPHDFUNX7.verify_ta_savings_cumulative_summary_api(interception);
        });
        otaSavingsSPHDFUNX7.search_ota_savings_business();
        cy.wait('@travelAgentsSearchedBusinessAPI',{timeout:42000}).then(interception=>{
            otaSavingsSPHDFUNX7.verify_ta_savings_searched_business_api(interception);
        });
        cy.wait('@travelAgentsSearchedBusinessCumulativeSummaryAPI',{timeout:42000}).then(interception=>{
            otaSavingsSPHDFUNX7.verify_ta_savings_searched_business_cumulative_summary_api(interception);
        });
        otaSavingsSPHDFUNX7.ota_savings_DFUNX7_booking_three_dots_button_is_visible();
        otaSavingsSPHDFUNX7.click_on_ota_savings_DFUNX7_booking_three_dots_button();
        otaSavingsSPHDFUNX7.click_on_ota_savings_DFUNX7_booking_upload_files_button();
        otaSavingsSPHDFUNX7.click_on_ota_savings_DFUNX7_booking_ta_modal_yes_button();
        cy.wait(5000);
        otaSavingsSPHDFUNX7.attach_booking_files_on_ta_modal();
        cy.wait(5000);
        otaSavingsSPHDFUNX7.attach_ReservationActivityfile_on_ta_modal();
        cy.wait(5000);
        otaSavingsSPHDFUNX7.attach_TrasactionTotalDetailfile_on_ta_modal();
        cy.wait(5000)
        otaSavingsSPHDFUNX7.click_on_booking_compare_button();
        cy.wait('@travelAgentsCheckTAStatusAPI',{timeout:320000}).then(interception=>{
        otaSavingsSPHDFUNX7.verify_ta_savings_check_ta_status_api(interception);
        });
        cy.wait('@travelAgentsUpdateTAStatusAPI',{timeout:320000}).then(interception=>{
        otaSavingsSPHDFUNX7.verify_ta_savings_update_ta_status_api(interception);
        });
        otaSavingsSPHDFUNX7.verify_DFUNX7_booking_ta_results_total_entries();
        otaSavingsSPHDFUNX7.verify_DFUNX7_booking_ta_results_total_exceptions();
        otaSavingsSPHDFUNX7.verify_DFUNX7_booking_ta_results_total_savings_identified();
    });
    // it('TA Savings: Auto Run Rules Verification for Booking', () => {
    //     cy.request('GET',`${serverUrl}/travel_agents/30116/auto_verification_rules_count`).as('AutoRunRuleDFUNX7Booking');
    //     cy.get('@AutoRunRuleDFUNX7Booking').then(interception=>{
    //         otaSavingsSPHDFUNX7.verify_DFUNX7_booking_auto_run_rules_verification_api(interception);
    //     });
    // });
    it('TA Savings : Select month, search business and upload files using 3rd option for Expedia', () => {
        otaSavingsSPHDFUNX7.click_on_ota_savings_button();
        cy.wait('@travelAgentsPageAPI',{timeout:42000}).then(interception=>{
            otaSavingsSPHDFUNX7.verify_ta_savings_api(interception);
        });
        cy.wait('@travelAgentsCumulativeSummaryAPI',{timeout:42000}).then(interception=>{
            otaSavingsSPHDFUNX7.verify_ta_savings_cumulative_summary_api(interception);
        });
        otaSavingsSPHDFUNX7.click_on_ota_savings_calendar();
        otaSavingsSPHDFUNX7.click_on_ota_savings_month_May();
        cy.wait('@travelAgentsPageAPI',{timeout:42000}).then(interception=>{
            otaSavingsSPHDFUNX7.verify_ta_savings_api(interception);
        });
        cy.wait('@travelAgentsCumulativeSummaryAPI',{timeout:42000}).then(interception=>{
            otaSavingsSPHDFUNX7.verify_ta_savings_cumulative_summary_api(interception);
        });
        otaSavingsSPHDFUNX7.search_ota_savings_business();
        cy.wait('@travelAgentsSearchedBusinessAPI',{timeout:42000}).then(interception=>{
            otaSavingsSPHDFUNX7.verify_ta_savings_searched_business_api(interception);
        });
        cy.wait('@travelAgentsSearchedBusinessCumulativeSummaryAPI',{timeout:42000}).then(interception=>{
            otaSavingsSPHDFUNX7.verify_ta_savings_searched_business_cumulative_summary_api(interception);
        });
        otaSavingsSPHDFUNX7.click_on_ota_savings_DFUNX7_expedia_three_dots();
        otaSavingsSPHDFUNX7.click_on_ota_savings_DFUNX7_expedia_upload_files_button();
        otaSavingsSPHDFUNX7.click_on_ota_savings_DFUNX7_booking_ta_modal_yes_button();
        cy.wait(5000);
        otaSavingsSPHDFUNX7.attach_expedia_file_on_ta_modal();
        cy.wait(5000);
        otaSavingsSPHDFUNX7.attach_Expedia_ReservationActivityfile_on_ta_modal();
        cy.wait(5000);
        otaSavingsSPHDFUNX7.attach_Expedia_TrasactionTotalDetailfile_on_ta_modal();
        cy.wait(5000);
        otaSavingsSPHDFUNX7.click_on_expedia_compare_button();
        cy.wait('@travelAgentsCheckTAStatusAPI',{timeout:320000}).then(interception=>{
        otaSavingsSPHDFUNX7.verify_ta_savings_check_ta_status_api(interception);
        });
        cy.wait('@travelAgentsUpdateTAStatusAPI',{timeout:320000}).then(interception=>{
        otaSavingsSPHDFUNX7.verify_ta_savings_update_ta_status_api(interception);
        });
        otaSavingsSPHDFUNX7.verify_DFUNX7_expedia_total_entries_analyzed();
        otaSavingsSPHDFUNX7.verify_DFUNX7_expedia_total_exceptions_found();
        otaSavingsSPHDFUNX7.verify_DFUNX7_expedia_total_savings_identified();
    });
})