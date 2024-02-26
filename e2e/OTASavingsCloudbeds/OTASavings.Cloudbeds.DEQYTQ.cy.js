import taSavingsCloudbedsDEQYTQ from "../../locators/OTASavingsCloudbeds/OTASavings.Cloudbeds.DEQYTQ.locators";
const serverUrl = Cypress.env("baseUrl");
const taSavingsDEQYTQlocators = new taSavingsCloudbedsDEQYTQ();
const BookingFile = 'CLOUDBEDSDEQYTQ/temp20230327-4-47b0vo.xls';
const ExpediaFile = 'CLOUDBEDSDEQYTQ/temp20230327-4-dvbbzb.xlsx';
const PMSFileGuestRevReport = 'CLOUDBEDSDEQYTQ/temp-42025.819793.xlsx';
const PMSFileReportTranscations = 'CLOUDBEDSDEQYTQ/temp-42041.492922.xlsx';
const BookingTotalEntriesAnalyzed = '118';
const BookingTotalExceptionsFound = '31';
const BookingTotalSavingsIdentified = '$1,250.33';
const ExpediaTotalEntriesAnalyzed = '10';
const ExpediaTotalExceptionsFound = '10';
const ExpediaTotalSavingsIdentified = '$949.08';

describe("TA Savings : Business XID: DEQYTQ Business Name: Stayable Select Gainesville PMS: Cloudbeds", () => {
    beforeEach(() => {
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
    //     taSavingsDEQYTQlocators.OTASavingsBtn().should("be.visible").click();
    //     cy.wait('@TASavings',{timeout:42000}).then((interception) => {
    //         assert.isNotNull(interception.response.statusCode, 200);
    //     });
    //     taSavingsDEQYTQlocators.OTACalendar().should("be.visible").click();
    //     taSavingsDEQYTQlocators.MonthMarch().should("be.visible").click();
    //     cy.wait('@TASavings',{timeout:42000}).then((interception) => {
    //         assert.isNotNull(interception.response.statusCode, 200);
    //     });
    //     taSavingsDEQYTQlocators.SearchBusiness().scrollIntoView().should("be.visible").type("DEQYTQ{enter}");
    //     cy.wait('@SearchBusinessTA').then((interception) => {
    //         assert.isNotNull(interception.response.statusCode, 200);
    //     });
    //     taSavingsDEQYTQlocators.BookingButton().should("be.visible").click();
    //     taSavingsDEQYTQlocators.BookingUploadFiles().should("be.visible").click();
    //     taSavingsDEQYTQlocators.DeleteCheckBox().should("be.visible").click();
    //     taSavingsDEQYTQlocators.YesButtonTA().should("be.visible").click();
    //     cy.wait(5000);
    //     taSavingsDEQYTQlocators.BookingFileUpload().attachFile(BookingFile);
    //     cy.wait(5000);
    //     taSavingsDEQYTQlocators.PMSGuestRevFile().attachFile(PMSFileGuestRevReport);
    //     cy.wait(5000);
    //     taSavingsDEQYTQlocators.PMSReportTransactionFile().attachFile(PMSFileReportTranscations);
    //     cy.wait(5000);
    //     taSavingsDEQYTQlocators.BookingCompareButton().should("be.visible").click();
    //     cy.wait('@FilesUploaded',{timeout:320000}).then((interception) => {
    //         assert.isNotNull(interception.response.statusCode, 200);
    //     });
    //     taSavingsDEQYTQlocators.TotalEntriesAnalyzed().should("be.visible").should("have.text", BookingTotalEntriesAnalyzed);
    //     taSavingsDEQYTQlocators.TotalExceptionsFound().should("be.visible").should("have.text", BookingTotalExceptionsFound);
    //     taSavingsDEQYTQlocators.SavingsIdentfied().should("be.visible").should("have.text", BookingTotalSavingsIdentified);
    // });
    // it("TA Savings : Select month, search business and upload files using 1st option for Expedia", () => {
    //     taSavingsDEQYTQlocators.OTASavingsBtn().should("be.visible").click();
    //     cy.wait('@TASavings',{timeout:42000}).then((interception) => {
    //         assert.isNotNull(interception.response.statusCode, 200);
    //     });
    //     taSavingsDEQYTQlocators.OTACalendar().should("be.visible").click();
    //     taSavingsDEQYTQlocators.MonthMarch().should("be.visible").click();
    //     cy.wait('@TASavings',{timeout:42000}).then((interception) => {
    //         assert.isNotNull(interception.response.statusCode, 200);
    //     });
    //     taSavingsDEQYTQlocators.SearchBusiness().scrollIntoView().should("be.visible").type("DEQYTQ{enter}");
    //     cy.wait('@SearchBusinessTA').then((interception) => {
    //         assert.isNotNull(interception.response.statusCode, 200);
    //     });
    //     taSavingsDEQYTQlocators.ExpediaButton().should("be.visible").click();
    //     taSavingsDEQYTQlocators.ExpediaUploadFiles().should("be.visible").click();
    //     taSavingsDEQYTQlocators.DeleteCheckBox().should("be.visible").click();
    //     taSavingsDEQYTQlocators.YesButtonTA().should("be.visible").click();
    //     cy.wait(5000);
    //     taSavingsDEQYTQlocators.ExpediaFileUpload().attachFile(ExpediaFile);
    //     cy.wait(5000);
    //     taSavingsDEQYTQlocators.ExpediaPMSUpload1().attachFile(PMSFileGuestRevReport);
    //     cy.wait(5000);
    //     taSavingsDEQYTQlocators.ExpediaPMSUpload2().attachFile(PMSFileReportTranscations);
    //     cy.wait(5000);
    //     taSavingsDEQYTQlocators.CompareButtonExpedia().should("be.visible").click();
    //     cy.wait('@FilesUploaded',{timeout:320000}).then((interception) => {
    //         assert.isNotNull(interception.response.statusCode, 200);
    //     });
    //     taSavingsDEQYTQlocators.TotalEntriesAnalyzed().should("be.visible").should("have.text", ExpediaTotalEntriesAnalyzed);
    //     taSavingsDEQYTQlocators.TotalExceptionsFound().should("be.visible").should("have.text", ExpediaTotalExceptionsFound);
    //     taSavingsDEQYTQlocators.SavingsIdentfied().should("be.visible").should("have.text", ExpediaTotalSavingsIdentified);
    // });
    it("TA Savings : Select month, search business and upload files using 3rd option for Booking", () => {
        taSavingsDEQYTQlocators.OTASavingsBtn().should("be.visible").click();
        cy.wait('@TASavings',{timeout:42000}).then((interception) => {
            assert.isNotNull(interception.response.statusCode, 200);
        });
        taSavingsDEQYTQlocators.OTACalendar().scrollIntoView().should("be.visible").click();
        taSavingsDEQYTQlocators.MonthMarch().should("be.visible").click();
        cy.wait('@TASavings',{timeout:42000}).then((interception) => {
            assert.isNotNull(interception.response.statusCode, 200);
        });
        taSavingsDEQYTQlocators.SearchBusiness().scrollIntoView().should("be.visible").type("DEQYTQ{enter}");
        cy.wait('@SearchBusinessTA').then((interception) => {
            assert.isNotNull(interception.response.statusCode, 200);
        });
        taSavingsDEQYTQlocators.BookingButton().should("be.visible").click();
        taSavingsDEQYTQlocators.BookingUploadFiles().should("be.visible").click();
        taSavingsDEQYTQlocators.ThirdOptionButton().should("be.visible").click();
        cy.wait(5000);
        taSavingsDEQYTQlocators.BookingFileUpload().attachFile(BookingFile);
        cy.wait(5000);
        taSavingsDEQYTQlocators.PMSGuestRevFile().attachFile(PMSFileGuestRevReport);
        cy.wait(5000);
        taSavingsDEQYTQlocators.PMSReportTransactionFile().attachFile(PMSFileReportTranscations);
        cy.wait(5000);
        taSavingsDEQYTQlocators.BookingCompareButton().should("be.visible").click();
        cy.wait('@FilesUploaded',{timeout:320000}).then((interception) => {
            assert.isNotNull(interception.response.statusCode, 200);
        });
        taSavingsDEQYTQlocators.TotalEntriesAnalyzed().should("be.visible").should("have.text", BookingTotalEntriesAnalyzed);
        taSavingsDEQYTQlocators.TotalExceptionsFound().should("be.visible").should("have.text", BookingTotalExceptionsFound);
        taSavingsDEQYTQlocators.SavingsIdentfied().should("be.visible").should("have.text", BookingTotalSavingsIdentified);
    });
    it('TA Savings: Auto Run Rules Verification for Booking', () => {
        cy.request('GET',`${serverUrl}/travel_agents/30018/auto_verification_rules_count`).as('AutoRuleBookingC983F6');
        cy.get('@AutoRuleBookingC983F6').should((response=>{
            expect(response.status).to.eq(200);
            expect(response.body.data).to.deep.equal({
                'Rule A': 1,
                'Rule C': 3,
                'Rule E': 6,
                'Rule P': 1,
                'Rule V': 17
            });
        }));
    });
    it("TA Savings : Select month, search business and upload files using 3rd option for Expedia", () => {
        taSavingsDEQYTQlocators.OTASavingsBtn().should("be.visible").click();
        cy.wait('@TASavings',{timeout:42000}).then((interception) => {
            assert.isNotNull(interception.response.statusCode, 200);
        });
        taSavingsDEQYTQlocators.OTACalendar().scrollIntoView().should("be.visible").click();
        taSavingsDEQYTQlocators.MonthMarch().should("be.visible").click();
        cy.wait('@TASavings',{timeout:42000}).then((interception) => {
            assert.isNotNull(interception.response.statusCode, 200);
        });
        taSavingsDEQYTQlocators.SearchBusiness().scrollIntoView().should("be.visible").type("DEQYTQ{enter}");
        cy.wait('@SearchBusinessTA').then((interception) => {
            assert.isNotNull(interception.response.statusCode, 200);
        });
        taSavingsDEQYTQlocators.ExpediaButton().should("be.visible").click();
        taSavingsDEQYTQlocators.ExpediaUploadFiles().should("be.visible").click();
        taSavingsDEQYTQlocators.ThirdOptionButton().should("be.visible").click();
        cy.wait(5000);
        taSavingsDEQYTQlocators.ExpediaFileUpload().attachFile(ExpediaFile);
        cy.wait(5000);
        taSavingsDEQYTQlocators.ExpediaPMSUpload1().attachFile(PMSFileGuestRevReport);
        cy.wait(5000);
        taSavingsDEQYTQlocators.ExpediaPMSUpload2().attachFile(PMSFileReportTranscations);
        cy.wait(5000);
        taSavingsDEQYTQlocators.CompareButtonExpedia().should("be.visible").click();
        cy.wait('@FilesUploaded',{timeout:320000}).then((interception) => {
            assert.isNotNull(interception.response.statusCode, 200);
        });
        taSavingsDEQYTQlocators.TotalEntriesAnalyzed().should("be.visible").should("have.text", ExpediaTotalEntriesAnalyzed);
        taSavingsDEQYTQlocators.TotalExceptionsFound().should("be.visible").should("have.text", ExpediaTotalExceptionsFound);
        taSavingsDEQYTQlocators.SavingsIdentfied().should("be.visible").should("have.text", ExpediaTotalSavingsIdentified);
    });
    it('TA Savings: Auto Run Rules Verification for Booking', () => {
        cy.request('GET',`${serverUrl}/travel_agents/30123/auto_verification_rules_count`).as('AutoRuleBookingC983F6');
        cy.get('@AutoRuleBookingC983F6').should((response=>{
            expect(response.status).to.eq(200);
            expect(response.body.data).to.deep.equal({
                'Rule A': 1,
                'Rule E': 4,
                'Rule G': 2,
                'Rule I': 1
            });
        }));
    });
});