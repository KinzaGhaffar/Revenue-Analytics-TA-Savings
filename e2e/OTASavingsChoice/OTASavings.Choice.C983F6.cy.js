import taSavingsChoiceC983F6 from "../../locators/OTASavingsChoice/OTASavings.Choice.C983F6.locators";
const serverUrl = Cypress.env("baseUrl");
const taSavingsChoiceC983F6Locators = new taSavingsChoiceC983F6();
const BookingFile = "CHOICEC983F6/temp20230327-4-1hftfau.xls"
const ExpediaFile = "CHOICEC983F6/temp20230327-4-1kdln35.xlsx"
const PMSFebReport = "CHOICEC983F6/FebReport.csv"
const PMSMarchReport = "CHOICEC983F6/MarchReport.csv"
const BookingTotalEntriesAnalyzed = '13';
const BookingTotalExceptionsFound = '1';
const BookingTotalSavingsIdentified = '$13.37';
const ExpediaTotalEntriesAnalyzed = '3';
const ExpediaTotalExceptionsFound = '1';
const ExpediaTotalSavingsIdentified = '$17.44';
describe("TA Savings : Business XID: C983F6  Business Name: Econo lodge Palm Coast FL PMS: Choice", () => {
    beforeEach(() =>{
        //cy.server()
        cy.login();
        cy.intercept('GET',
        `${serverUrl}/travel_agents/load_cumulative_summary?term=&travel_agent_date=*&company_id=&pms=&show_archived=*&dispute_filter=&header_load=true&show_dispute_throughout_month=false&access_status_filter=&_=*`
        ).as('TASavings');
        cy.intercept('GET',
        `${serverUrl}/travel_agents/search_ota_businesses?term=*&travel_agent_date=*&company_id=&pms=&show_archived=false&dispute_filter=&show_dispute_throughout_month=false&access_status_filter=&_=*`
        ).as('SearchBusinessTA');
        cy.intercept('GET',
        `${serverUrl}/update_ta_status?status_id=*`
        ).as('FilesUploaded');
    });

afterEach(() => {
    cy.clearCookies();
});

// it("TA Savings : Select month, search business and upload files using 1st option for Booking", () => {
//     taSavingsChoiceC983F6Locators.OTASavingsBtn().should("be.visible").click();
//     cy.wait('@TASavings',{timeout:42000}).then((interception) => {
//         assert.isNotNull(interception.response.statusCode, 200);
//     });
//     taSavingsChoiceC983F6Locators.OTACalendar().should("be.visible").click();
//     taSavingsChoiceC983F6Locators.MonthMarch().should("be.visible").click();
//     cy.wait('@TASavings',{timeout:42000}).then((interception) => {
//         assert.isNotNull(interception.response.statusCode, 200);
//     });
//     taSavingsChoiceC983F6Locators.SearchBusiness().scrollIntoView().should("be.visible").type("C983F6{enter}");
//     cy.wait('@SearchBusinessTA').then((interception) => {
//         assert.isNotNull(interception.response.statusCode, 200);
//     });
//     taSavingsChoiceC983F6Locators.BookingButton().should("be.visible").click();
//     taSavingsChoiceC983F6Locators.BookingUploadFiles().should("be.visible").click();
//     taSavingsChoiceC983F6Locators.DeleteCheckBox().should("be.visible").click();
//     taSavingsChoiceC983F6Locators.YesButtonTA().should("be.visible").click();
//     cy.wait(5000);
//     taSavingsChoiceC983F6Locators.BookingFileUpload().attachFile(BookingFile);
//     cy.wait(5000);
//     taSavingsChoiceC983F6Locators.PMSMarchReportBooking().attachFile(PMSMarchReport);
//     cy.wait(5000);
//     taSavingsChoiceC983F6Locators.PMSFebReportBooking().attachFile(PMSFebReport);
//     cy.wait(5000);
//     taSavingsChoiceC983F6Locators.BookingCompareButton().should("be.visible").click();
//     cy.wait('@FilesUploaded', {timeout:320000}).then((interception) => {
//         assert.isNotNull(interception.response.statusCode, 200);
//     })
//     taSavingsChoiceC983F6Locators.TotalEntriesAnalyzed().should("be.visible").should("have.text", BookingTotalEntriesAnalyzed);
//     taSavingsChoiceC983F6Locators.TotalExceptionsFound().should("be.visible").should("have.text", BookingTotalExceptionsFound);
//     taSavingsChoiceC983F6Locators.SavingsIdentfied().should("be.visible").should("have.text", BookingTotalSavingsIdentified);
// });
// it("TA Savings : Select month, search business and upload files using 1st option for Expedia", () => {
//     taSavingsChoiceC983F6Locators.OTASavingsBtn().should("be.visible").click();
//     cy.wait('@TASavings',{timeout:42000}).then((interception) => {
//         assert.isNotNull(interception.response.statusCode, 200);
//     });
//     taSavingsChoiceC983F6Locators.OTACalendar().should("be.visible").click();
//     taSavingsChoiceC983F6Locators.MonthMarch().should("be.visible").click();
//     cy.wait('@TASavings',{timeout:42000}).then((interception) => {
//         assert.isNotNull(interception.response.statusCode, 200);
//     });
//     taSavingsChoiceC983F6Locators.SearchBusiness().scrollIntoView().should("be.visible").type("C983F6{enter}");
//     cy.wait('@SearchBusinessTA').then((interception) => {
//         assert.isNotNull(interception.response.statusCode, 200);
//     });
//     taSavingsChoiceC983F6Locators.ExpediaButton().should("be.visible").click()
//     taSavingsChoiceC983F6Locators.ExpediaUploadFiles().should("be.visible").click();
//     taSavingsChoiceC983F6Locators.DeleteCheckBox().should("be.visible").click();
//     taSavingsChoiceC983F6Locators.YesButtonTA().should("be.visible").click();
//     cy.wait(5000);
//     taSavingsChoiceC983F6Locators.ExpediaFileUpload().attachFile(ExpediaFile);
//     cy.wait(5000);
//     taSavingsChoiceC983F6Locators.PMSMarchReportExpedia().attachFile(PMSMarchReport);
//     cy.wait(5000);
//     taSavingsChoiceC983F6Locators.PMSFebReportExpedia().attachFile(PMSFebReport);
//     cy.wait(5000);
//     taSavingsChoiceC983F6Locators.CompareButtonExpedia().should("be.visible").click();
//     cy.wait('@FilesUploaded', {timeout:320000}).then((interception) => {
//         assert.isNotNull(interception.response.statusCode, 200);
//     });
//     taSavingsChoiceC983F6Locators.TotalEntriesAnalyzed().should("be.visible").should("have.text", ExpediaTotalEntriesAnalyzed);
//     taSavingsChoiceC983F6Locators.TotalExceptionsFound().should("be.visible").should("have.text", ExpediaTotalExceptionsFound);
//     taSavingsChoiceC983F6Locators.SavingsIdentfied().should("be.visible").should("have.text", ExpediaTotalSavingsIdentified);
// });
it("TA Savings : Select month, search business and upload files using 3rd option for Booking", () => {
    taSavingsChoiceC983F6Locators.OTASavingsBtn().should("be.visible").click();
    cy.wait('@TASavings',{timeout:420000}).then((interception) => {
        assert.isNotNull(interception.response.statusCode, 200);
    });
    taSavingsChoiceC983F6Locators.OTACalendar().scrollIntoView().should("be.visible").click();
    taSavingsChoiceC983F6Locators.MonthMarch().should("be.visible").click();
    cy.wait('@TASavings',{timeout:420000}).then((interception) => {
        assert.isNotNull(interception.response.statusCode, 200);
    });
    taSavingsChoiceC983F6Locators.SearchBusiness().scrollIntoView().should("be.visible").type("C983F6{enter}");
    cy.wait('@SearchBusinessTA').then((interception) => {
        assert.isNotNull(interception.response.statusCode, 200);
    });
    taSavingsChoiceC983F6Locators.BookingButton().should("be.visible").click();
    taSavingsChoiceC983F6Locators.BookingUploadFiles().should("be.visible").click();
    taSavingsChoiceC983F6Locators.ThirdOptionButton().should("be.visible").click();
    cy.wait(5000);
    taSavingsChoiceC983F6Locators.BookingFileUpload().attachFile(BookingFile);
    cy.wait(5000);
    taSavingsChoiceC983F6Locators.PMSMarchReportBooking().attachFile(PMSMarchReport);
    cy.wait(5000);
    taSavingsChoiceC983F6Locators.PMSFebReportBooking().attachFile(PMSFebReport);
    cy.wait(5000);
    taSavingsChoiceC983F6Locators.BookingCompareButton().should("be.visible").click();
    cy.wait('@FilesUploaded', {timeout:320000}).then((interception) => {
        assert.isNotNull(interception.response.statusCode, 200);
    })
    taSavingsChoiceC983F6Locators.TotalEntriesAnalyzed().should("be.visible").should("have.text", BookingTotalEntriesAnalyzed);
    taSavingsChoiceC983F6Locators.TotalExceptionsFound().should("be.visible").should("have.text", BookingTotalExceptionsFound);
    taSavingsChoiceC983F6Locators.SavingsIdentfied().should("be.visible").should("have.text", BookingTotalSavingsIdentified);
});
it('TA Savings: Auto Run Rules Verification for Booking', () => {
    cy.request('GET',`${serverUrl}/travel_agents/30011/auto_verification_rules_count`).as('AutoRuleBookingC983F6');
    cy.get('@AutoRuleBookingC983F6').should((response=>{
        expect(response.status).to.eq(200);
        expect(response.body.data).to.deep.equal({
            'Rule E': 1
        });
    }));
});
it("TA Savings : Select month, search business and upload files using 3rd option for Expedia", () => {
    taSavingsChoiceC983F6Locators.OTASavingsBtn().should("be.visible").click();
    cy.wait('@TASavings',{timeout:420000}).then((interception) => {
        assert.isNotNull(interception.response.statusCode, 200);
    });
    taSavingsChoiceC983F6Locators.OTACalendar().scrollIntoView().should("be.visible").click();
    taSavingsChoiceC983F6Locators.MonthMarch().should("be.visible").click();
    cy.wait('@TASavings',{timeout:420000}).then((interception) => {
        assert.isNotNull(interception.response.statusCode, 200);
    });
    taSavingsChoiceC983F6Locators.SearchBusiness().scrollIntoView().should("be.visible").type("C983F6{enter}");
    cy.wait('@SearchBusinessTA').then((interception) => {
        assert.isNotNull(interception.response.statusCode, 200);
    });
    taSavingsChoiceC983F6Locators.ExpediaButton().should("be.visible").click()
    taSavingsChoiceC983F6Locators.ExpediaUploadFiles().should("be.visible").click();
    taSavingsChoiceC983F6Locators.ThirdOptionButton().should("be.visible").click();
    cy.wait(5000);
    taSavingsChoiceC983F6Locators.ExpediaFileUpload().attachFile(ExpediaFile);
    cy.wait(5000);
    taSavingsChoiceC983F6Locators.PMSMarchReportExpedia().attachFile(PMSMarchReport);
    cy.wait(5000);
    taSavingsChoiceC983F6Locators.PMSFebReportExpedia().attachFile(PMSFebReport);
    cy.wait(5000);
    taSavingsChoiceC983F6Locators.CompareButtonExpedia().should("be.visible").click();
    cy.wait('@FilesUploaded', {timeout:320000}).then((interception) => {
        assert.isNotNull(interception.response.statusCode, 200);
    });
    taSavingsChoiceC983F6Locators.TotalEntriesAnalyzed().should("be.visible").should("have.text", ExpediaTotalEntriesAnalyzed);
    taSavingsChoiceC983F6Locators.TotalExceptionsFound().should("be.visible").should("have.text", ExpediaTotalExceptionsFound);
    taSavingsChoiceC983F6Locators.SavingsIdentfied().should("be.visible").should("have.text", ExpediaTotalSavingsIdentified);
});
it('TA Savings: Auto Run Rules Verification for Booking', () => {
    cy.request('GET',`${serverUrl}/travel_agents/30116/auto_verification_rules_count`).as('AutoRuleBookingC983F6');
    cy.get('@AutoRuleBookingC983F6').should((response=>{
        expect(response.status).to.eq(200);
    }));
});
});