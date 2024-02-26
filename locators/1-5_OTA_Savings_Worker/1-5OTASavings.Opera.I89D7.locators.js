const I89D7TotalEntriesAnalyzed = ' 97'
const I89D7TotalExceptionsFound = '18'
const I89D7TotalSavingsIdentified = '$600.27'
const I89D7ExpediaTotalEntriesAnalyzed = ' 85'
const I89D7ExpediaTotalExceptionsFound = '14'
const I89D7ExpediaTotalSavingsIdentified = '$1,229.69'

export class OneToFiveOTASavingsOperaI89D7
{
    
    //locators
    elements = {
        ota_savings_button:() => cy.get('[datatest-id="ota-savings-btn"]'),
        ota_savings_search_business:() => cy.get('[datatest-id="search-business"]'),
        ota_savings_calendar:() => cy.get('#travel-agent-date'),
        ota_savings_month_August:() => cy.get('.datepicker-months > .table-condensed > tbody > tr > td > :nth-child(8)'),
        ota_detailPage_Booking:() => cy.get('#booking-file-upload-modal-14558 > .col-sm-8 > :nth-child(1)'),
        ota_detailPage_Expedia:() => cy.get('#expedia-file-upload-modal-14558 > .col-sm-8 > :nth-child(1)'),
        ota_savings_I89D7_booking_ta_results_total_entries: () => cy.get('[datatest-id="entries"]'),
        ota_savings_I89D7_booking_ta_results_total_exceptions: () => cy.get('[datatest-id="exceptions"]'),
        ota_savings_I89D7_booking_ta_results_total_savings_identified: () => cy.get('[datatest-id="savings-identified"]'),
    }

//get_functions
get_ota_savings_button() {
    return this.elements.ota_savings_button();
}
get_ota_savings_search_business_field() {
    return this.elements.ota_savings_search_business();
}
get_ota_savings_calendar() {
    return this.elements.ota_savings_calendar();
}
get_ota_savings_month_August() {
    return this.elements.ota_savings_month_August();
}
get_otasavings_detailPage_Booking() {
    return this.elements.ota_detailPage_Booking();
}
get_otasavings_detailPage_Expedia() {
    return this.elements.ota_detailPage_Expedia();
}
get_I89D7_booking_total_entries_analyzed() {
    return this.elements.ota_savings_I89D7_booking_ta_results_total_entries();
}
get_I89D7_booking_total_exceptions_found() {
    return this.elements.ota_savings_I89D7_booking_ta_results_total_exceptions();
}
get_I89D7_booking_total_savings_identified() {
    return this.elements.ota_savings_I89D7_booking_ta_results_total_savings_identified();
}
//set_functions
click_on_ota_savings_button() {
    this.get_ota_savings_button().should('be.visible').click();
}
click_on_ota_savings_calendar() {
    this.get_ota_savings_calendar().scrollIntoView().should('be.visible').click();
}
click_on_ota_savings_month_August() {
    this.get_ota_savings_month_August().should('be.visible').click();
}
search_ota_savings_business() {
    this.get_ota_savings_search_business_field().scrollIntoView().should('be.visible').type('I89D7{enter}');
}
click_on_ota_detailPage_Booking() {
    this.get_otasavings_detailPage_Booking().should('be.visible').click();
}
click_on_ota_detailPage_Expedia() {
    this.get_otasavings_detailPage_Expedia().should('be.visible').click();
}
//test_functions
verify_ta_savings_api(interception) {
    expect(interception.response.statusCode).to.deep.eq(200);
}
verify_ta_savings_cumulative_summary_api(interception) {
    expect(interception.response.statusCode).to.deep.eq(200);
}
verify_ta_savings_searched_business_api(interception) {
    expect(interception.response.statusCode).to.deep.eq(200);
}
verify_ta_savings_searched_business_cumulative_summary_api(interception) {
    expect(interception.response.statusCode).to.deep.eq(200);
}
verify_ta_savings_check_ta_status_api(interception) {
    expect(interception.response.statusCode).to.deep.eq(200);
}
verify_ta_savings_update_ta_status_api(interception) {
    expect(interception.response.statusCode).to.deep.eq(200);
}
verify_I89D7_booking_ta_results_total_entries() {
    this.get_I89D7_booking_total_entries_analyzed().should('have.text', I89D7TotalEntriesAnalyzed);
}
verify_I89D7_booking_ta_results_total_exceptions() {
    this.get_I89D7_booking_total_exceptions_found().should('have.text', I89D7TotalExceptionsFound);
}
verify_I89D7_booking_ta_results_total_savings_identified() {
    this.get_I89D7_booking_total_savings_identified().should('have.text', I89D7TotalSavingsIdentified);
}
verify_I89D7_expedia_total_entries_analyzed() {
    this.get_I89D7_booking_total_entries_analyzed().should('have.text', I89D7ExpediaTotalEntriesAnalyzed);
}
verify_I89D7_expedia_total_exceptions_found() {
    this.get_I89D7_booking_total_exceptions_found().should('have.text', I89D7ExpediaTotalExceptionsFound);
}
verify_I89D7_expedia_total_savings_identified() {
    this.get_I89D7_booking_total_savings_identified().should('have.text', I89D7ExpediaTotalSavingsIdentified);
}

}
export default OneToFiveOTASavingsOperaI89D7 = new OneToFiveOTASavingsOperaI89D7();

