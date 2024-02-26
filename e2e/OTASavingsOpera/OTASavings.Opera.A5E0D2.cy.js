import taSavingsA5E0D2 from "../../locators/OTASavingsOpera/OTASavings.Opera.A5E0D2.locators";
const serverUrl = Cypress.env("baseUrl");
const taSavingsOperaA5E0D2locators = new taSavingsA5E0D2();
const BookingFile = 'OPERAA5E0D2/temp20230327-4-wb47o7.xls';
const ExpediaFile = 'OPERAA5E0D2/temp20230320-4-11lx77y.xlsx';
const PMSFile = 'OPERAA5E0D2/tax_type_details5250147.txt';
const BookingTotalEntriesAnalyzed = '95';
const BookingTotalExceptionsFound = '6';
const BookingTotalSavingsIdentified = '$30.05';
const ExpediaTotalEntriesAnalyzed = '28';
const ExpediaTotalExceptionsFound = '2';
const ExpediaTotalSavingsIdentified = '$32.39';

describe("TA Savings : Business XID: A5E0D2 Business Name: Country Inn & Suites (CIS 1) PMS: Opera", () => {
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
    //     taSavingsOperaA5E0D2locators.OTASavingsBtn().should("be.visible").click();
    //     cy.wait('@TASavings',{timeout:42000}).then((interception) => {
    //         assert.isNotNull(interception.response.statusCode, 200);
    //     });
    //     taSavingsOperaA5E0D2locators.OTACalendar().should("be.visible").click();
    //     taSavingsOperaA5E0D2locators.MonthMarch().should("be.visible").click();
    //     cy.wait('@TASavings',{timeout:42000}).then((interception) => {
    //         assert.isNotNull(interception.response.statusCode, 200);
    //     });
    //     taSavingsOperaA5E0D2locators.SearchBusiness().scrollIntoView().should("be.visible").type("A5E0D2{enter}");
    //     cy.wait('@SearchBusinessTA').then((interception) => {
    //         assert.isNotNull(interception.response.statusCode, 200);
    //     });
    //     taSavingsOperaA5E0D2locators.BookingButton().should("be.visible").click();
    //     taSavingsOperaA5E0D2locators.BookingUploadFiles().should("be.visible").click();
    //     taSavingsOperaA5E0D2locators.DeleteCheckBox().should("be.visible").click();
    //     taSavingsOperaA5E0D2locators.YesButtonTA().should("be.visible").click();
    //     cy.wait(5000);
    //     taSavingsOperaA5E0D2locators.BookingFileUpload().attachFile(BookingFile);
    //     cy.wait(5000);
    //     taSavingsOperaA5E0D2locators.PMSFileUpload().attachFile(PMSFile);
    //     cy.wait(5000);
    //     taSavingsOperaA5E0D2locators.BookingCompareButton().should("be.visible").click();
    //     cy.wait('@FilesUploaded',{timeout:320000}).then((interception) => {
    //         assert.isNotNull(interception.response.statusCode, 200);
    //     });
    //     taSavingsOperaA5E0D2locators.TotalEntriesAnalyzed().should("be.visible").should("have.text", BookingTotalEntriesAnalyzed);
    //     taSavingsOperaA5E0D2locators.TotalExceptionsFound().should("be.visible").should("have.text", BookingTotalExceptionsFound);
    //     taSavingsOperaA5E0D2locators.SavingsIdentfied().should("be.visible").should("have.text", BookingTotalSavingsIdentified);
    // });
    // it("TA Savings : Select month, search business and upload files using 1st option for Expedia", () => {
    //     taSavingsOperaA5E0D2locators.OTASavingsBtn().should("be.visible").click();
    //     cy.wait('@TASavings',{timeout:42000}).then((interception) => {
    //         assert.isNotNull(interception.response.statusCode, 200);
    //     });
    //     taSavingsOperaA5E0D2locators.OTACalendar().should("be.visible").click();
    //     taSavingsOperaA5E0D2locators.MonthMarch().should("be.visible").click();
    //     cy.wait('@TASavings',{timeout:42000}).then((interception) => {
    //         assert.isNotNull(interception.response.statusCode, 200);
    //     });
    //     taSavingsOperaA5E0D2locators.SearchBusiness().scrollIntoView().should("be.visible").type("A5E0D2{enter}");
    //     cy.wait('@SearchBusinessTA').then((interception) => {
    //         assert.isNotNull(interception.response.statusCode, 200);
    //     });
    //     taSavingsOperaA5E0D2locators.ExpediaButton().should("be.visible").click();
    //     taSavingsOperaA5E0D2locators.ExpediaUploadFiles().should("be.visible").click();
    //     taSavingsOperaA5E0D2locators.DeleteCheckBox().should("be.visible").click();
    //     taSavingsOperaA5E0D2locators.YesButtonTA().should("be.visible").click();
    //     cy.wait(5000);
    //     taSavingsOperaA5E0D2locators.ExpediaFileUpload().attachFile(ExpediaFile);
    //     cy.wait(5000);
    //     taSavingsOperaA5E0D2locators.ExpediaPMSUpload().attachFile(PMSFile);
    //     cy.wait(5000);
    //     taSavingsOperaA5E0D2locators.CompareButtonExpedia().should("be.visible").click();
    //     cy.wait('@FilesUploaded',{timeout:320000}).then((interception) => {
    //         assert.isNotNull(interception.response.statusCode, 200);
    //     });
    //     taSavingsOperaA5E0D2locators.TotalEntriesAnalyzed().should("be.visible").should("have.text", ExpediaTotalEntriesAnalyzed);
    //     taSavingsOperaA5E0D2locators.TotalExceptionsFound().should("be.visible").should("have.text", ExpediaTotalExceptionsFound);
    //     taSavingsOperaA5E0D2locators.SavingsIdentfied().should("be.visible").should("have.text", ExpediaTotalSavingsIdentified);
    // });
    it("TA Savings : Select month, search business and upload files using 3rd option for Booking", () => {
        taSavingsOperaA5E0D2locators.OTASavingsBtn().should("be.visible").click();
        cy.wait('@TASavings',{timeout:42000}).then((interception) => {
            assert.isNotNull(interception.response.statusCode, 200);
        });
        taSavingsOperaA5E0D2locators.OTACalendar().scrollIntoView().should("be.visible").click();
        taSavingsOperaA5E0D2locators.MonthMarch().should("be.visible").click();
        cy.wait('@TASavings',{timeout:42000}).then((interception) => {
            assert.isNotNull(interception.response.statusCode, 200);
        });
        taSavingsOperaA5E0D2locators.SearchBusiness().scrollIntoView().should("be.visible").type("A5E0D2{enter}");
        cy.wait('@SearchBusinessTA').then((interception) => {
            assert.isNotNull(interception.response.statusCode, 200);
        });
        taSavingsOperaA5E0D2locators.BookingButton().should("be.visible").click();
        taSavingsOperaA5E0D2locators.BookingUploadFiles().should("be.visible").click();
        taSavingsOperaA5E0D2locators.ThirdOptionButton().should("be.visible").click();
        cy.wait(5000);
        taSavingsOperaA5E0D2locators.BookingFileUpload().attachFile(BookingFile);
        cy.wait(5000);
        taSavingsOperaA5E0D2locators.PMSFileUpload().attachFile(PMSFile);
        cy.wait(5000);
        taSavingsOperaA5E0D2locators.BookingCompareButton().should("be.visible").click();
        cy.wait('@FilesUploaded',{timeout:320000}).then((interception) => {
            assert.isNotNull(interception.response.statusCode, 200);
        });
        taSavingsOperaA5E0D2locators.TotalEntriesAnalyzed().should("be.visible").should("have.text", BookingTotalEntriesAnalyzed);
        taSavingsOperaA5E0D2locators.TotalExceptionsFound().should("be.visible").should("have.text", BookingTotalExceptionsFound);
        taSavingsOperaA5E0D2locators.SavingsIdentfied().should("be.visible").should("have.text", BookingTotalSavingsIdentified);
    });
    it('TA Savings: Auto Run Rules Verification for Booking', () => {
        cy.request('GET',`${serverUrl}/travel_agents/30000/auto_verification_rules_count`).as('AutoRuleBookingC983F6');
        cy.get('@AutoRuleBookingC983F6').should((response=>{
            expect(response.status).to.eq(200);
            expect(response.body.data).to.deep.equal({
                'Rule V': 1
            });
        }));
    });
    it("TA Savings : Select month, search business and upload files using 3rd option for Expedia", () => {
        taSavingsOperaA5E0D2locators.OTASavingsBtn().should("be.visible").click();
        cy.wait('@TASavings',{timeout:42000}).then((interception) => {
            assert.isNotNull(interception.response.statusCode, 200);
        });
        taSavingsOperaA5E0D2locators.OTACalendar().scrollIntoView().should("be.visible").click();
        taSavingsOperaA5E0D2locators.MonthMarch().should("be.visible").click();
        cy.wait('@TASavings',{timeout:42000}).then((interception) => {
            assert.isNotNull(interception.response.statusCode, 200);
        });
        taSavingsOperaA5E0D2locators.SearchBusiness().scrollIntoView().should("be.visible").type("A5E0D2{enter}");
        cy.wait('@SearchBusinessTA').then((interception) => {
            assert.isNotNull(interception.response.statusCode, 200);
        });
        taSavingsOperaA5E0D2locators.ExpediaButton().should("be.visible").click();
        taSavingsOperaA5E0D2locators.ExpediaUploadFiles().should("be.visible").click();
        taSavingsOperaA5E0D2locators.ThirdOptionButton().should("be.visible").click();
        cy.wait(5000);
        taSavingsOperaA5E0D2locators.ExpediaFileUpload().attachFile(ExpediaFile);
        cy.wait(5000);
        taSavingsOperaA5E0D2locators.ExpediaPMSUpload().attachFile(PMSFile);
        cy.wait(5000);
        taSavingsOperaA5E0D2locators.CompareButtonExpedia().should("be.visible").click();
        cy.wait('@FilesUploaded',{timeout:320000}).then((interception) => {
            assert.isNotNull(interception.response.statusCode, 200);
        });
        taSavingsOperaA5E0D2locators.TotalEntriesAnalyzed().should("be.visible").should("have.text", ExpediaTotalEntriesAnalyzed);
        taSavingsOperaA5E0D2locators.TotalExceptionsFound().should("be.visible").should("have.text", ExpediaTotalExceptionsFound);
        taSavingsOperaA5E0D2locators.SavingsIdentfied().should("be.visible").should("have.text", ExpediaTotalSavingsIdentified);
    });
    it('TA Savings: Auto Run Rules Verification for Booking', () => {
        cy.request('GET',`${serverUrl}/travel_agents/30107/auto_verification_rules_count`).as('AutoRuleBookingC983F6');
        cy.get('@AutoRuleBookingC983F6').should((response=>{
            expect(response.status).to.eq(200);
        }));
    });
});