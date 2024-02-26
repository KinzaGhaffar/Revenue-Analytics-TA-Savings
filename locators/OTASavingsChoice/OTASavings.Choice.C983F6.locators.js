class taSavingsChoiceC983F6{
    OTASavingsBtn(){
        return cy.get('[datatest-id="ota-savings-btn"]');
    }
    SearchBusiness(){
        return cy.get('[datatest-id="search-business"]');
    }
    OTACalendar(){
        return cy.get('#travel-agent-date');
    }
    MonthMarch(){
        return cy.get('.datepicker-months > .table-condensed > tbody > tr > td > :nth-child(3)');
    }
    BookingButton(){
        return cy.get('.data-div-booking > .travel-agent-deatails-info > .btn-no-margin > .info-btn > .img');
    }
    BookingUploadFiles(){
        return cy.get('#travel-agent-booking-upload-files-14066 > span');
    }
    ExpediaButton(){
        return cy.get('#travel-agent-expedia-info-14066 > .btn-no-margin > .info-btn > .img');
    }
    ExpediaUploadFiles(){
        return cy.get('#travel-agent-expedia-upload-files-14066 > span');
    }
    DeleteCheckBox(){
        return cy.get('[datatest-id="delete-chkbox"]');
    }
    YesButtonTA(){
        return cy.get('[datatest-id="yes-button"]');
    }
    BookingFileUpload(){
        return cy.get('[datatest-id="booking-file-upload"]');
    }
    PMSMarchReportBooking(){
        return cy.get('[data-testid="room-rev-file-1"]');
    }
    PMSFebReportBooking(){
        return cy.get('[datatest-id="room-rev-file-2"]');
    }
    BookingCompareButton(){
        return cy.get('[datatest-id="booking-compare-btn"]');
    }
    ExpediaFileUpload(){
        return cy.get('[datatest-id="expedia-file-upload"]');
    }
    PMSMarchReportExpedia(){
        return cy.get('[datatest-id="pms-upload"]');
    }
    PMSFebReportExpedia(){
        return cy.get('[datatest-id="report-upload"]');
    }
    CompareButtonExpedia(){
        return cy.get('[datatest-id="expedia-compare-btn"]');
    }
    ThirdOptionButton(){
        return cy.get('[datatest-id="third-option-btn"]');
    }
    TotalEntriesAnalyzed(){
        return cy.get('[data-testid="total-entries-analyzed"]');
    }
    TotalExceptionsFound(){
        return cy.get('[data-testid="total-exceptions-found"]');
    }
    SavingsIdentfied(){
        return cy.get('[data-testid="savings-identfied"]');
    }
}
export default taSavingsChoiceC983F6;
