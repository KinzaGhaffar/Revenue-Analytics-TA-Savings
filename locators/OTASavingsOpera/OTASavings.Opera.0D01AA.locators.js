class taSavingsOpera0D01AA{
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
        return cy.get('#travel-agent-booking-upload-files-14136');
    }
    ExpediaButton(){
        return cy.get('#travel-agent-expedia-info-14136 > .btn-no-margin > .info-btn > .img');
    }
    ExpediaUploadFiles(){
        return cy.get('#travel-agent-expedia-upload-files-14136');
    }
    ExpediaFileUpload(){
        return cy.get('[datatest-id="expedia-file-upload"]');
    }
    ExpediaPMSUpload(){
        return cy.get('[datatest-id="pms-upload"]');
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
    PMSFileUpload(){
        return cy.get('[data-testid="room-rev-file-1"]');
    }
    BookingCompareButton(){
        return cy.get('[datatest-id="booking-compare-btn"]');
    }
    CompareButtonExpedia(){
        return cy.get('[datatest-id="expedia-compare-btn"]');
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
    ThirdOptionButton(){
        return cy.get('[datatest-id="third-option-btn"]');
    }
    SeeDetailsButton(){
        return cy.get('[data-testid="see-details-btn"]');
    }
    HeaderTotalEntries(){
        return cy.get('[datatest-id="entries"]');
    }
    HeaderTotalRevenue(){
        return cy.get('[datatest-id="total-rev"]');
    }
    HeaderTotalExceptions(){
        return cy.get('[datatest-id="exceptions"]');
    }
}
export default taSavingsOpera0D01AA;