import taSavingsCloudbedsBPXU1T from "../../locators/OTASavingsCloudbeds/OTASavings.Cloudbeds.BPXU1T.locators";
const serverUrl = Cypress.env("baseUrl");
const taSavingsBPXU1Tlocators = new taSavingsCloudbedsBPXU1T();
const BookingFile = 'CLOUDBEDBPXU1T/temp20230327-4-ny023h.xls';
const ExpediaFile = 'CLOUDBEDBPXU1T/temp20230327-4-tjnx7z.xlsx';
const PMSFileGuestRevReport = 'CLOUDBEDBPXU1T/GuestRevReport.xlsx';
const PMSFileReportTranscations = 'CLOUDBEDBPXU1T/ReportTransaction.xlsx';
const BookingTotalEntriesAnalyzed = '110';
const BookingTotalExceptionsFound = '11';
const BookingTotalSavingsIdentified = '$355.81';
const ExpediaTotalEntriesAnalyzed = '6';
const ExpediaTotalExceptionsFound = '5';
const ExpediaTotalSavingsIdentified = '$116.62';

describe("TA Savings : Business XID: BPXU1T Business Name: Stayable Suites Kissimmee West, Kissimmee, FL PMS: Cloudbeds", () => {
    beforeEach(() => {
        //cy.server();
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
    //     taSavingsBPXU1Tlocators.OTASavingsBtn().should("be.visible").click();
    //     cy.wait('@TASavings',{timeout:42000}).then((interception) => {
    //         assert.isNotNull(interception.response.statusCode, 200);
    //     });
    //     taSavingsBPXU1Tlocators.OTACalendar().should("be.visible").click();
    //     taSavingsBPXU1Tlocators.MonthMarch().should("be.visible").click();
    //     cy.wait('@TASavings',{timeout:42000}).then((interception) => {
    //         assert.isNotNull(interception.response.statusCode, 200);
    //     });
    //     taSavingsBPXU1Tlocators.SearchBusiness().scrollIntoView().should("be.visible").type("BPXU1T{enter}");
    //     cy.wait('@SearchBusinessTA').then((interception) => {
    //         assert.isNotNull(interception.response.statusCode, 200);
    //     });
    //     taSavingsBPXU1Tlocators.BookingButton().should("be.visible").click();
    //     taSavingsBPXU1Tlocators.BookingUploadFiles().should("be.visible").click();
    //     taSavingsBPXU1Tlocators.DeleteCheckBox().should("be.visible").click();
    //     taSavingsBPXU1Tlocators.YesButtonTA().should("be.visible").click();
    //     cy.wait(5000);
    //     taSavingsBPXU1Tlocators.BookingFileUpload().attachFile(BookingFile);
    //     cy.wait(5000);
    //     taSavingsBPXU1Tlocators.PMSGuestRevFile().attachFile(PMSFileGuestRevReport);
    //     cy.wait(5000);
    //     taSavingsBPXU1Tlocators.PMSReportTransactionFile().attachFile(PMSFileReportTranscations);
    //     cy.wait(5000);
    //     taSavingsBPXU1Tlocators.BookingCompareButton().should("be.visible").click();
    //     cy.wait('@FilesUploaded',{timeout:320000}).then((interception) => {
    //         assert.isNotNull(interception.response.statusCode, 200);
    //     });
    //     taSavingsBPXU1Tlocators.TotalEntriesAnalyzed().should("be.visible").should("have.text", BookingTotalEntriesAnalyzed);
    //     taSavingsBPXU1Tlocators.TotalExceptionsFound().should("be.visible").should("have.text", BookingTotalExceptionsFound);
    //     taSavingsBPXU1Tlocators.SavingsIdentfied().should("be.visible").should("have.text", BookingTotalSavingsIdentified);
    // });
    // it("TA Savings : Select month, search business and upload files using 1st option for Expedia", () => {
    //     taSavingsBPXU1Tlocators.OTASavingsBtn().should("be.visible").click();
    //     cy.wait('@TASavings',{timeout:42000}).then((interception) => {
    //         assert.isNotNull(interception.response.statusCode, 200);
    //     });
    //     taSavingsBPXU1Tlocators.OTACalendar().should("be.visible").click();
    //     taSavingsBPXU1Tlocators.MonthMarch().should("be.visible").click();
    //     cy.wait('@TASavings',{timeout:42000}).then((interception) => {
    //         assert.isNotNull(interception.response.statusCode, 200);
    //     });
    //     taSavingsBPXU1Tlocators.SearchBusiness().scrollIntoView().should("be.visible").type("BPXU1T{enter}");
    //     cy.wait('@SearchBusinessTA').then((interception) => {
    //         assert.isNotNull(interception.response.statusCode, 200);
    //     });
    //     taSavingsBPXU1Tlocators.ExpediaButton().should("be.visible").click();
    //     taSavingsBPXU1Tlocators.ExpediaUploadFiles().should("be.visible").click();
    //     taSavingsBPXU1Tlocators.DeleteCheckBox().should("be.visible").click();
    //     taSavingsBPXU1Tlocators.YesButtonTA().should("be.visible").click();
    //     cy.wait(5000);
    //     taSavingsBPXU1Tlocators.ExpediaFileUpload().attachFile(ExpediaFile);
    //     cy.wait(5000);
    //     taSavingsBPXU1Tlocators.ExpediaPMSUpload1().attachFile(PMSFileGuestRevReport);
    //     cy.wait(5000);
    //     taSavingsBPXU1Tlocators.ExpediaPMSUpload2().attachFile(PMSFileReportTranscations);
    //     cy.wait(5000);
    //     taSavingsBPXU1Tlocators.CompareButtonExpedia().should("be.visible").click();
    //     cy.wait('@FilesUploaded',{timeout:320000}).then((interception) => {
    //         assert.isNotNull(interception.response.statusCode, 200);
    //     });
    //     taSavingsBPXU1Tlocators.TotalEntriesAnalyzed().should("be.visible").should("have.text", ExpediaTotalEntriesAnalyzed);
    //     taSavingsBPXU1Tlocators.TotalExceptionsFound().should("be.visible").should("have.text", ExpediaTotalExceptionsFound);
    //     taSavingsBPXU1Tlocators.SavingsIdentfied().should("be.visible").should("have.text", ExpediaTotalSavingsIdentified);
    // });
    it("TA Savings : Select month, search business and upload files using 3rd option for Booking", () => {
        taSavingsBPXU1Tlocators.OTASavingsBtn().should("be.visible").click();
        cy.wait('@TASavings',{timeout:42000}).then((interception) => {
            assert.isNotNull(interception.response.statusCode, 200);
        });
        taSavingsBPXU1Tlocators.OTACalendar().scrollIntoView().should("be.visible").click();
        taSavingsBPXU1Tlocators.MonthMarch().should("be.visible").click();
        cy.wait('@TASavings',{timeout:42000}).then((interception) => {
            assert.isNotNull(interception.response.statusCode, 200);
        });
        taSavingsBPXU1Tlocators.SearchBusiness().scrollIntoView().should("be.visible").type("BPXU1T{enter}");
        cy.wait('@SearchBusinessTA').then((interception) => {
            assert.isNotNull(interception.response.statusCode, 200);
        });
        taSavingsBPXU1Tlocators.BookingButton().should("be.visible").click();
        taSavingsBPXU1Tlocators.BookingUploadFiles().should("be.visible").click();
        taSavingsBPXU1Tlocators.ThirdOptionButton().should("be.visible").click();
        cy.wait(5000);
        taSavingsBPXU1Tlocators.BookingFileUpload().attachFile(BookingFile);
        cy.wait(5000);
        taSavingsBPXU1Tlocators.PMSGuestRevFile().attachFile(PMSFileGuestRevReport);
        cy.wait(5000);
        taSavingsBPXU1Tlocators.PMSReportTransactionFile().attachFile(PMSFileReportTranscations);
        cy.wait(5000);
        taSavingsBPXU1Tlocators.BookingCompareButton().should("be.visible").click();
        cy.wait('@FilesUploaded',{timeout:320000}).then((interception) => {
            assert.isNotNull(interception.response.statusCode, 200);
        });
        taSavingsBPXU1Tlocators.TotalEntriesAnalyzed().should("be.visible").should("have.text", BookingTotalEntriesAnalyzed);
        taSavingsBPXU1Tlocators.TotalExceptionsFound().should("be.visible").should("have.text", BookingTotalExceptionsFound);
        taSavingsBPXU1Tlocators.SavingsIdentfied().should("be.visible").should("have.text", BookingTotalSavingsIdentified);
    });
    it('TA Savings: Auto Run Rules Verification for Booking', () => {
        cy.request('GET',`${serverUrl}/travel_agents/30009/auto_verification_rules_count`).as('AutoRuleBookingC983F6');
        cy.get('@AutoRuleBookingC983F6').should((response=>{
            expect(response.status).to.eq(200);
            expect(response.body.data).to.deep.equal({
                'Rule E': 1,
                'Rule G': 1,
                'Rule V': 5
            });
        }));
    });
    it("TA Savings : Select month, search business and upload files using 3rd option for Expedia", () => {
        taSavingsBPXU1Tlocators.OTASavingsBtn().should("be.visible").click();
        cy.wait('@TASavings',{timeout:42000}).then((interception) => {
            assert.isNotNull(interception.response.statusCode, 200);
        });
        taSavingsBPXU1Tlocators.OTACalendar().scrollIntoView().should("be.visible").click();
        taSavingsBPXU1Tlocators.MonthMarch().should("be.visible").click();
        cy.wait('@TASavings',{timeout:42000}).then((interception) => {
            assert.isNotNull(interception.response.statusCode, 200);
        });
        taSavingsBPXU1Tlocators.SearchBusiness().scrollIntoView().should("be.visible").type("BPXU1T{enter}");
        cy.wait('@SearchBusinessTA').then((interception) => {
            assert.isNotNull(interception.response.statusCode, 200);
        });
        taSavingsBPXU1Tlocators.ExpediaButton().should("be.visible").click();
        taSavingsBPXU1Tlocators.ExpediaUploadFiles().should("be.visible").click();
        taSavingsBPXU1Tlocators.ThirdOptionButton().should("be.visible").click();
        cy.wait(5000);
        taSavingsBPXU1Tlocators.ExpediaFileUpload().attachFile(ExpediaFile);
        cy.wait(5000);
        taSavingsBPXU1Tlocators.ExpediaPMSUpload1().attachFile(PMSFileGuestRevReport);
        cy.wait(5000);
        taSavingsBPXU1Tlocators.ExpediaPMSUpload2().attachFile(PMSFileReportTranscations);
        cy.wait(5000);
        taSavingsBPXU1Tlocators.CompareButtonExpedia().should("be.visible").click();
        cy.wait('@FilesUploaded',{timeout:320000}).then((interception) => {
            assert.isNotNull(interception.response.statusCode, 200);
        });
        taSavingsBPXU1Tlocators.TotalEntriesAnalyzed().should("be.visible").should("have.text", ExpediaTotalEntriesAnalyzed);
        taSavingsBPXU1Tlocators.TotalExceptionsFound().should("be.visible").should("have.text", ExpediaTotalExceptionsFound);
        taSavingsBPXU1Tlocators.SavingsIdentfied().should("be.visible").should("have.text", ExpediaTotalSavingsIdentified);
    });
    it('TA Savings: Auto Run Rules Verification for Booking', () => {
        cy.request('GET',`${serverUrl}/travel_agents/30114/auto_verification_rules_count`).as('AutoRuleBookingC983F6');
        cy.get('@AutoRuleBookingC983F6').should((response=>{
            expect(response.status).to.eq(200);
            expect(response.body.data).to.deep.equal({
                'Rule E': 2,
                'Rule G': 3
            });
        }));
    });
});