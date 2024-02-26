import taSavingsChoiceED91AA from "../../locators/OTASavingsChoice/OTASavings.Choice.ED91AA.locators";
const serverUrl = Cypress.env("baseUrl");
const taSavingsChoiceED91AALocators = new taSavingsChoiceED91AA();
const BookingFile = "CHOICEED91AA/temp20230327-4-3ccqyx.xls"
const ExpediaFile = "CHOICEED91AA/temp20230327-4-2ts6co.xlsx"
const PMSFebReport = "CHOICEED91AA/FebReport.csv"
const PMSMarchReport = "CHOICEED91AA/MarchReport.csv"
const BookingTotalEntriesAnalyzed = '98';
const BookingTotalExceptionsFound = '4';
const BookingTotalSavingsIdentified = '$91.94';
const ExpediaTotalEntriesAnalyzed = '26';
const ExpediaTotalExceptionsFound = '3';
const ExpediaTotalSavingsIdentified = '$46.97';
describe("TA Savings : Business XID: ED91AA  Business Name: Comfort Inn & Suites Harrisonburg FL PMS: Choice", () => {
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
//     taSavingsChoiceED91AALocators.OTASavingsBtn().should("be.visible").click();
//     cy.wait('@TASavings',{timeout:42000}).then((interception) => {
//         assert.isNotNull(interception.response.statusCode, 200);
//     });
//     taSavingsChoiceED91AALocators.OTACalendar().should("be.visible").click();
//     taSavingsChoiceED91AALocators.MonthMarch().should("be.visible").click();
//     cy.wait('@TASavings',{timeout:42000}).then((interception) => {
//         assert.isNotNull(interception.response.statusCode, 200);
//     });
//     taSavingsChoiceED91AALocators.SearchBusiness().scrollIntoView().should("be.visible").type("ED91AA{enter}");
//     cy.wait('@SearchBusinessTA').then((interception) => {
//         assert.isNotNull(interception.response.statusCode, 200);
//     });
//     taSavingsChoiceED91AALocators.BookingButton().should("be.visible").click();
//     taSavingsChoiceED91AALocators.BookingUploadFiles().should("be.visible").click();
//     taSavingsChoiceED91AALocators.DeleteCheckBox().should("be.visible").click();
//     taSavingsChoiceED91AALocators.YesButtonTA().should("be.visible").click();
//     cy.wait(5000);
//     taSavingsChoiceED91AALocators.BookingFileUpload().attachFile(BookingFile);
//     cy.wait(5000);
//     taSavingsChoiceED91AALocators.PMSMarchReportBooking().attachFile(PMSMarchReport);
//     cy.wait(5000);
//     taSavingsChoiceED91AALocators.PMSFebReportBooking().attachFile(PMSFebReport);
//     cy.wait(5000);
//     taSavingsChoiceED91AALocators.BookingCompareButton().should("be.visible").click();
//     cy.wait('@FilesUploaded', {timeout:320000}).then((interception) => {
//         assert.isNotNull(interception.response.statusCode, 200);
//     })
//     taSavingsChoiceED91AALocators.TotalEntriesAnalyzed().should("be.visible").should("have.text", BookingTotalEntriesAnalyzed);
//     taSavingsChoiceED91AALocators.TotalExceptionsFound().should("be.visible").should("have.text", BookingTotalExceptionsFound);
//     taSavingsChoiceED91AALocators.SavingsIdentfied().should("be.visible").should("have.text", BookingTotalSavingsIdentified);
// });
// it("TA Savings : Select month, search business and upload files using 1st option for Expedia", () => {
//     taSavingsChoiceED91AALocators.OTASavingsBtn().should("be.visible").click();
//     cy.wait('@TASavings',{timeout:42000}).then((interception) => {
//         assert.isNotNull(interception.response.statusCode, 200);
//     });
//     taSavingsChoiceED91AALocators.OTACalendar().should("be.visible").click();
//     taSavingsChoiceED91AALocators.MonthMarch().should("be.visible").click();
//     cy.wait('@TASavings',{timeout:42000}).then((interception) => {
//         assert.isNotNull(interception.response.statusCode, 200);
//     });
//     taSavingsChoiceED91AALocators.SearchBusiness().scrollIntoView().should("be.visible").type("ED91AA{enter}");
//     cy.wait('@SearchBusinessTA').then((interception) => {
//         assert.isNotNull(interception.response.statusCode, 200);
//     });
//     taSavingsChoiceED91AALocators.ExpediaButton().should("be.visible").click()
//     taSavingsChoiceED91AALocators.ExpediaUploadFiles().should("be.visible").click();
//     taSavingsChoiceED91AALocators.DeleteCheckBox().should("be.visible").click();
//     taSavingsChoiceED91AALocators.YesButtonTA().should("be.visible").click();
//     cy.wait(5000);
//     taSavingsChoiceED91AALocators.ExpediaFileUpload().attachFile(ExpediaFile);
//     cy.wait(5000);
//     taSavingsChoiceED91AALocators.PMSMarchReportExpedia().attachFile(PMSMarchReport);
//     cy.wait(5000);
//     taSavingsChoiceED91AALocators.PMSFebReportExpedia().attachFile(PMSFebReport);
//     cy.wait(5000);
//     taSavingsChoiceED91AALocators.CompareButtonExpedia().should("be.visible").click();
//     cy.wait('@FilesUploaded', {timeout:320000}).then((interception) => {
//         assert.isNotNull(interception.response.statusCode, 200);
//     });
//     taSavingsChoiceED91AALocators.TotalEntriesAnalyzed().should("be.visible").should("have.text", ExpediaTotalEntriesAnalyzed);
//     taSavingsChoiceED91AALocators.TotalExceptionsFound().should("be.visible").should("have.text", ExpediaTotalExceptionsFound);
//     taSavingsChoiceED91AALocators.SavingsIdentfied().should("be.visible").should("have.text", ExpediaTotalSavingsIdentified);
// });
it("TA Savings : Select month, search business and upload files using 3rd option for Booking", () => {
    taSavingsChoiceED91AALocators.OTASavingsBtn().should("be.visible").click();
    cy.wait('@TASavings',{timeout:42000}).then((interception) => {
        assert.isNotNull(interception.response.statusCode, 200);
    });
    taSavingsChoiceED91AALocators.OTACalendar().scrollIntoView().should("be.visible").click();
    taSavingsChoiceED91AALocators.MonthMarch().should("be.visible").click();
    cy.wait('@TASavings',{timeout:42000}).then((interception) => {
        assert.isNotNull(interception.response.statusCode, 200);
    });
    taSavingsChoiceED91AALocators.SearchBusiness().scrollIntoView().should("be.visible").type("ED91AA{enter}");
    cy.wait('@SearchBusinessTA').then((interception) => {
        assert.isNotNull(interception.response.statusCode, 200);
    });
    taSavingsChoiceED91AALocators.BookingButton().should("be.visible").click();
    taSavingsChoiceED91AALocators.BookingUploadFiles().should("be.visible").click();
    taSavingsChoiceED91AALocators.ThirdOptionButton().should("be.visible").click();
    cy.wait(5000);
    taSavingsChoiceED91AALocators.BookingFileUpload().attachFile(BookingFile);
    cy.wait(5000);
    taSavingsChoiceED91AALocators.PMSMarchReportBooking().attachFile(PMSMarchReport);
    cy.wait(5000);
    taSavingsChoiceED91AALocators.PMSFebReportBooking().attachFile(PMSFebReport);
    cy.wait(5000);
    taSavingsChoiceED91AALocators.BookingCompareButton().should("be.visible").click();
    cy.wait('@FilesUploaded', {timeout:320000}).then((interception) => {
        assert.isNotNull(interception.response.statusCode, 200);
    })
    taSavingsChoiceED91AALocators.TotalEntriesAnalyzed().should("be.visible").should("have.text", BookingTotalEntriesAnalyzed);
    taSavingsChoiceED91AALocators.TotalExceptionsFound().should("be.visible").should("have.text", BookingTotalExceptionsFound);
    taSavingsChoiceED91AALocators.SavingsIdentfied().should("be.visible").should("have.text", BookingTotalSavingsIdentified);
});
it('TA Savings: Auto Run Rules Verification for Booking', () => {
    cy.request('GET',`${serverUrl}/travel_agents/30022/auto_verification_rules_count`).as('AutoRuleBookingC983F6');
    cy.get('@AutoRuleBookingC983F6').should((response=>{
        expect(response.status).to.eq(200);
        expect(response.body.data).to.deep.equal({
            'Rule V': 2
        });
    }));
});
it("TA Savings : Select month, search business and upload files using 3rd option for Expedia", () => {
    taSavingsChoiceED91AALocators.OTASavingsBtn().should("be.visible").click();
    cy.wait('@TASavings',{timeout:42000}).then((interception) => {
        assert.isNotNull(interception.response.statusCode, 200);
    });
    taSavingsChoiceED91AALocators.OTACalendar().scrollIntoView().should("be.visible").click();
    taSavingsChoiceED91AALocators.MonthMarch().should("be.visible").click();
    cy.wait('@TASavings',{timeout:42000}).then((interception) => {
        assert.isNotNull(interception.response.statusCode, 200);
    });
    taSavingsChoiceED91AALocators.SearchBusiness().scrollIntoView().should("be.visible").type("ED91AA{enter}");
    cy.wait('@SearchBusinessTA').then((interception) => {
        assert.isNotNull(interception.response.statusCode, 200);
    });
    taSavingsChoiceED91AALocators.ExpediaButton().should("be.visible").click()
    taSavingsChoiceED91AALocators.ExpediaUploadFiles().should("be.visible").click();
    taSavingsChoiceED91AALocators.ThirdOptionButton().should("be.visible").click();
    cy.wait(5000);
    taSavingsChoiceED91AALocators.ExpediaFileUpload().attachFile(ExpediaFile);
    cy.wait(5000);
    taSavingsChoiceED91AALocators.PMSMarchReportExpedia().attachFile(PMSMarchReport);
    cy.wait(5000);
    taSavingsChoiceED91AALocators.PMSFebReportExpedia().attachFile(PMSFebReport);
    cy.wait(5000);
    taSavingsChoiceED91AALocators.CompareButtonExpedia().should("be.visible").click();
    cy.wait('@FilesUploaded', {timeout:320000}).then((interception) => {
        assert.isNotNull(interception.response.statusCode, 200);
    });
    taSavingsChoiceED91AALocators.TotalEntriesAnalyzed().should("be.visible").should("have.text", ExpediaTotalEntriesAnalyzed);
    taSavingsChoiceED91AALocators.TotalExceptionsFound().should("be.visible").should("have.text", ExpediaTotalExceptionsFound);
    taSavingsChoiceED91AALocators.SavingsIdentfied().should("be.visible").should("have.text", ExpediaTotalSavingsIdentified);
});
it('TA Savings: Auto Run Rules Verification for Booking', () => {
    cy.request('GET',`${serverUrl}/travel_agents/30127/auto_verification_rules_count`).as('AutoRuleBookingC983F6');
    cy.get('@AutoRuleBookingC983F6').should((response=>{
        expect(response.status).to.eq(200);
    }));
});
});