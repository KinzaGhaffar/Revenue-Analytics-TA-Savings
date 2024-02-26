const BookingFile = 'SPHGZCHZL/temp20230529-2-1sdshvb.xls'
const ReservationActivityfile = 'SPHGZCHZL/sphReservationActivity.csv'
const TransactionTotalDetailfile = 'SPHGZCHZL/sphTransactionTotalDetail.csv'
const ExpediaFile = 'SPHGZCHZL/temp20230529-2-1m3kcnu.xlsx'
const GZCHZLTotalEntriesAnalyzed = '111'
const GZCHZLTotalExceptionsFound = '12'
const GZCHZLTotalSavingsIdentified = '$580.22'
const GZCHZLExpediaTotalEntriesAnalyzed = '193'
const GZCHZLExpediaTotalExceptionsFound = '183'
const GZCHZLExpediaTotalSavingsIdentified = '$396.70'
export class otaSavingsSPHGZCHZL{
    //locators
    elements = {
        ota_savings_button:() => cy.get('[datatest-id="ota-savings-btn"]'),
        ota_savings_search_business:() => cy.get('[datatest-id="search-business"]'),
        ota_savings_calendar:() => cy.get('#travel-agent-date'),
        ota_savings_month_May:() => cy.get('.datepicker-months > .table-condensed > tbody > tr > td > :nth-child(5)'),
        ota_savings_GZCHZL_booking_three_dots:() => cy.get('.data-div-booking > .travel-agent-deatails-info > .btn-no-margin > .info-btn > .img'),
        ota_savings_GZCHZL_booking_upload_files:() => cy.get('#travel-agent-booking-upload-files-14852'),
        //ota_savings_GZCHZL_booking_ta_modal_delete_checkbox:() => cy.get('[datatest-id="delete-chkbox"]'),
        ota_savings_GZCHZL_booking_ta_modal_yes_button:() => cy.get('[datatest-id="yes-button"]'),
        ota_savings_GZCHZL_booking_upload_file_button:() => cy.get('[datatest-id="booking-file-upload"]'),
        ota_savings_GZCHZL_ReservationActivityfile:() => cy.get('[datatest-id="room-rev-file-2"]'),
        ota_savings_GZCHZL_TransactionTotalDetailfile:() => cy.get('[data-testid="room-rev-file-1"]'),
        ota_savings_GZCHZL_booking_compare_button:() => cy.get('[datatest-id="booking-compare-btn"]'),
        ota_savings_GZCHZL_booking_ta_results_total_entries: () => cy.get('[data-testid="total-entries-analyzed"]'),
        ota_savings_GZCHZL_booking_ta_results_total_exceptions: () => cy.get('[data-testid="total-exceptions-found"]'),
        ota_savings_GZCHZL_booking_ta_results_total_savings_identified: () => cy.get('[data-testid="savings-identfied"]'),
        ota_savings_GZCHZL_expedia_three_dots: () => cy.get('#travel-agent-expedia-info-14852 > .btn-no-margin > .info-btn > .img'),
        ota_savings_GZCHZL_expedia_upload_files: () => cy.get('#travel-agent-expedia-upload-files-14852 > span'),
        ota_savings_GZCHZL_expedia_file_upload: () => cy.get('[datatest-id="expedia-file-upload"]'),
        ota_savings_GZCHZL_expedia_ReservationActivityfile: () => cy.get('[datatest-id="report-upload"]'),
        ota_savings_GZCHZL_expedia_TransactionTotaldetailfile: ()=> cy.get('[datatest-id="pms-upload"]'),
        ota_savings_GZCHZL_expedia_compare_button: () => cy.get('[datatest-id="expedia-compare-btn"]')
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
    get_ota_savings_month_May() {
        return this.elements.ota_savings_month_May();
    }
    get_ota_savings_GZCHZL_booking_three_dots() {
        return this.elements.ota_savings_GZCHZL_booking_three_dots();
    }
    get_ota_savings_GZCHZL_booking_upload_files_button() {
        return this.elements.ota_savings_GZCHZL_booking_upload_files();
    }
    // get_ota_savings_GZCHZL_booking_ta_modal_delete_button() {
    //     return this.elements.ota_savings_GZCHZL_booking_ta_modal_delete_checkbox();
    // }
    get_ota_savings_GZCHZL_booking_ta_modal_yes_button() {
        return this.elements.ota_savings_GZCHZL_booking_ta_modal_yes_button();
    }
    get_ota_savings_GZCHZL_booking_upload_files_button_on_ta_modal() {
        return this.elements.ota_savings_GZCHZL_booking_upload_file_button();
    }
    get_ota_savings_ReservationActivityfile_button_on_ta_modal(){
        return this.elements.ota_savings_GZCHZL_ReservationActivityfile();
    }
    get_ota_savings_TransactionTotalDetailfile_button_on_ta_modal(){
        return this.elements.ota_savings_GZCHZL_TransactionTotalDetailfile();
    }
    get_booking_compare_button_on_ta_modal() {
        return this.elements.ota_savings_GZCHZL_booking_compare_button();
    }
    get_GZCHZL_booking_total_entries_analyzed() {
        return this.elements.ota_savings_GZCHZL_booking_ta_results_total_entries();
    }
    get_GZCHZL_booking_total_exceptions_found() {
        return this.elements.ota_savings_GZCHZL_booking_ta_results_total_exceptions();
    }
    get_vwyuour_booking_total_savings_identified() {
        return this.elements.ota_savings_GZCHZL_booking_ta_results_total_savings_identified();
    }
    get_ota_savings_GZCHZL_expedia_three_dots() {
        return this.elements.ota_savings_GZCHZL_expedia_three_dots();
    }
    get_ota_savings_GZCHZL_expedia_upload_files_button() {
        return this.elements.ota_savings_GZCHZL_expedia_upload_files();
    }
    get_ota_savings_GZCHZL_expedia_file_upload_on_ta_modal() {
        return this.elements.ota_savings_GZCHZL_expedia_file_upload();
    }
    get_ota_savings_Expedia_ReservationActivityfile_button_on_ta_modal(){
        return this.elements.ota_savings_GZCHZL_expedia_ReservationActivityfile();
    }
    get_ota_savings_Expedia_TransactionTotalDetailfile_button_on_ta_modal(){
        return this.elements.ota_savings_GZCHZL_expedia_TransactionTotaldetailfile();
    }
    get_expedia_compare_button() {
        return this.elements.ota_savings_GZCHZL_expedia_compare_button();
    }
    //set_functions
    click_on_ota_savings_button() {
        this.get_ota_savings_button().should('be.visible').click();
    }
    click_on_ota_savings_calendar() {
        this.get_ota_savings_calendar().scrollIntoView().should('be.visible').click();
    }
    click_on_ota_savings_month_May() {
        this.get_ota_savings_month_May().should('be.visible').click();
    }
    search_ota_savings_business() {
        this.get_ota_savings_search_business_field().scrollIntoView().should('be.visible').type('GZCHZL{enter}');
    }
    ota_savings_GZCHZL_booking_three_dots_button_is_visible() {
        this.get_ota_savings_GZCHZL_booking_three_dots().should('be.visible');
    }
    click_on_ota_savings_GZCHZL_booking_three_dots_button() {
        this.get_ota_savings_GZCHZL_booking_three_dots().click();
    }
    click_on_ota_savings_GZCHZL_booking_upload_files_button() {
        this.get_ota_savings_GZCHZL_booking_upload_files_button().should('be.visible').click();
    }
    click_on_ota_savings_GZCHZL_booking_ta_modal_yes_button() {
        this.get_ota_savings_GZCHZL_booking_ta_modal_yes_button().should('be.visible').click();
    }
    attach_booking_files_on_ta_modal() {
        this.get_ota_savings_GZCHZL_booking_upload_files_button_on_ta_modal().attachFile(BookingFile);
    }
    attach_ReservationActivityfile_on_ta_modal(){
        this.get_ota_savings_ReservationActivityfile_button_on_ta_modal().attachFile(ReservationActivityfile)
    }
    attach_TrasactionTotalDetailfile_on_ta_modal(){
        this.get_ota_savings_TransactionTotalDetailfile_button_on_ta_modal().attachFile(TransactionTotalDetailfile)
    }
    click_on_booking_compare_button() {
        this.get_booking_compare_button_on_ta_modal().should('be.visible').click();
    }
    click_on_ota_savings_GZCHZL_expedia_three_dots() {
        this.get_ota_savings_GZCHZL_expedia_three_dots().should('be.visible').click();
    }
    click_on_ota_savings_GZCHZL_expedia_upload_files_button() {
        this.get_ota_savings_GZCHZL_expedia_upload_files_button().should('be.visible').click();
    }
    attach_expedia_file_on_ta_modal() {
        this.get_ota_savings_GZCHZL_expedia_file_upload_on_ta_modal().attachFile(ExpediaFile);
    }
    attach_Expedia_ReservationActivityfile_on_ta_modal(){
        this.get_ota_savings_Expedia_ReservationActivityfile_button_on_ta_modal().attachFile(ReservationActivityfile)
    }
    attach_Expedia_TrasactionTotalDetailfile_on_ta_modal(){
        this.get_ota_savings_Expedia_TransactionTotalDetailfile_button_on_ta_modal().attachFile(TransactionTotalDetailfile)
    }
    click_on_expedia_compare_button() {
        this.get_expedia_compare_button().should('be.visible').click();
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
    verify_GZCHZL_booking_ta_results_total_entries() {
        this.get_GZCHZL_booking_total_entries_analyzed().should('have.text', GZCHZLTotalEntriesAnalyzed);
    }
    verify_GZCHZL_booking_ta_results_total_exceptions() {
        this.get_GZCHZL_booking_total_exceptions_found().should('have.text', GZCHZLTotalExceptionsFound);
    }
    verify_GZCHZL_booking_ta_results_total_savings_identified() {
        this.get_vwyuour_booking_total_savings_identified().should('have.text', GZCHZLTotalSavingsIdentified);
    }
    verify_GZCHZL_expedia_total_entries_analyzed() {
        this.get_GZCHZL_booking_total_entries_analyzed().should('have.text', GZCHZLExpediaTotalEntriesAnalyzed);
    }
    verify_GZCHZL_expedia_total_exceptions_found() {
        this.get_GZCHZL_booking_total_exceptions_found().should('have.text', GZCHZLExpediaTotalExceptionsFound);
    }
    verify_GZCHZL_expedia_total_savings_identified() {
        this.get_vwyuour_booking_total_savings_identified().should('have.text', GZCHZLExpediaTotalSavingsIdentified);
    }

}
export default otaSavingsSPHGZCHZL = new otaSavingsSPHGZCHZL();