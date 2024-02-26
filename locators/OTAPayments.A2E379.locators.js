class vcPaymentstestBusinessthree{
    OTAPaymentsSidebarLink(){
        return cy.get('[data-testid="ota-payments-sidebar-link"]');
    }
    OTAPaymentsCalendar(){
        return cy.get('[data-testid="ota-payments-calendar"]');
    }
    OTAPaymentsMonthMarch(){
        return cy.get('.datepicker-months > .table-condensed > tbody > tr > td > :nth-child(3)');
    }
    OTAPaymentsSearch(){
        return cy.get('[data-testid="ota-payments-search"]');
    }
    OTAPaymentsBookingButton(){
        return cy.get('#ta-booking-result-row-14561 > :nth-child(3) > .font-family-regular > .row > #travel-agent-booking-info-14561 > .btn-no-margin > .info-btn > .img');
    }
    OTAPaymentsBookingDetails(){
        return cy.get('li > .op-details-booking-14561');
    }
    OTAPaymentsExpediaButton(){
        return cy.get('#ta-expedia-result-row-14561 > :nth-child(3) > .font-family-regular > .row > #travel-agent-booking-info-14561 > .btn-no-margin > .info-btn > .img');
    }
    OTAPaymentsExpediaDetails(){
        return cy.get('li > .op-details-expedia-14561');
    }
    OTAPaymentsBookingAddANewCard(){
        return cy.get('[data-testid="add_card_btn_vc_detail"]');
    }
    OTAPaymentsBookingAddANewCardGuestName(){
        return cy.get('#ota_payment_entry_guest_name');
    }
    OTAPaymentsBookingAddANewCardReservationId(){
        return cy.get('#ota_payment_entry_reservation_id');
    }
    OTAPaymentsBookingAddANewCardCheckIn(){
        return cy.get('#cin');
    }
    OTAPaymentsBookingAddANewCardCheckOut(){
        return cy.get('#cout');
    }
    OTAPaymentsBookingAddANewCardAmountToCharge(){
        return cy.get('#ota_payment_entry_amount_charged');
    }
    OTAPaymentsBookingAddANewCardTotalPrice(){
        return cy.get('#ota_payment_entry_reservation_amount');
    }
    OTAPaymentsBookingAddANewCardCCNumber(){
        return cy.get('#ota_payment_entry_cc_number');
    }
    OTAPaymentsBookingAddANewCardExpirationCard(){
        return cy.get('#ota_payment_entry_expiry_date');
    }
    OTAPaymentsBookingAddANewCardCVCCard(){
        return cy.get('#ota_payment_entry_cvv_code');
    }
    OTAPaymentsAddANewCardAddButton(){
        return cy.get('.add-new-c-pay');
    }
    OTAPaymentsAllCheckBox(){
        return cy.get('[data-testid="all-checkbox"]');
    }
    OTAPaymentsDetailPageBulkAction(){
        return cy.get('[data-testid="ota-payments-bulk-action"]');
    }
    OTAPaymentsDetailPageDeleteButton(){
        return cy.get('[data-testid="ota-payments-bulk-action-delete-cards"]');
    }
    OTAPaymentsDeleteVCCards(){
        return cy.get('[data-testid="delete_vc_cards"]');
    }
    OTAPaymentsEditButton(){
        return cy.get('.fa-edit');
    }
    OTAPaymentsGuestName(){
        return cy.get('[data-testid="guest_name"]');
    }
    OTAPaymentsOldCardUpdateCVC(){
        return cy.get('#update-old-card > .modal-dialog > .modal-content > form > .modal-body > .container-fluid > :nth-child(9) > .col-lg-6 > #ota_payment_entry_cvv_code');
    }
}
export default vcPaymentstestBusinessthree;