import taSavingsOpera0D01AA from "../../locators/OTASavingsOpera/OTASavings.Opera.0D01AA.locators";
const serverUrl = Cypress.env("baseUrl");
const taSavingsOpera0D01AALocators = new taSavingsOpera0D01AA();
const BookingFile = 'OPERA0D01AA/temp20230327-4-ryn653.xls'
const ExpediaFile = 'OPERA0D01AA/temp20230327-4-1kbktkr.xlsx'
const PMSFile = 'OPERA0D01AA/tax_type_details2148229.txt'
const BookingTotalEntries = "65"
const BookingTotalExceptionsFound = "6"
const BookingSavingsIdentified = "$83.06"
const ExpediaTotalEntries = "55"
const ExpediaTotalExceptionsFound = "8"
const ExpediaSavingsIdentified = "$308.94"

describe("TA Savings : Business XID: 0D01AA Business Name: Avid Lancaster PMS: Opera", () => {
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
    //     taSavingsOpera0D01AALocators.OTASavingsBtn().should("be.visible").click();
    //     cy.wait('@TASavings',{timeout:42000}).then((interception) => {
    //         assert.isNotNull(interception.response.statusCode, 200);
    //     });
    //     taSavingsOpera0D01AALocators.OTACalendar().should("be.visible").click();
    //     taSavingsOpera0D01AALocators.MonthMarch().should("be.visible").click();
    //     cy.wait('@TASavings',{timeout:42000}).then((interception) => {
    //         assert.isNotNull(interception.response.statusCode, 200);
    //     });
    //     taSavingsOpera0D01AALocators.SearchBusiness().scrollIntoView().should("be.visible").type("0D01AA{enter}");
    //     cy.wait('@SearchBusinessTA').then((interception) => {
    //         assert.isNotNull(interception.response.statusCode, 200);
    //     });
    //     taSavingsOpera0D01AALocators.BookingButton().should("be.visible").click();
    //     taSavingsOpera0D01AALocators.BookingUploadFiles().should("be.visible").click();
    //     taSavingsOpera0D01AALocators.DeleteCheckBox().should("be.visible").click();
    //     taSavingsOpera0D01AALocators.YesButtonTA().should("be.visible").click();
    //     cy.wait(5000);
    //     taSavingsOpera0D01AALocators.BookingFileUpload().attachFile(BookingFile);
    //     cy.wait(5000);
    //     taSavingsOpera0D01AALocators.PMSFileUpload().attachFile(PMSFile);
    //     cy.wait(5000);
    //     taSavingsOpera0D01AALocators.BookingCompareButton().should("be.visible").click();
    //     cy.wait('@FilesUploaded',{timeout:320000}).then((interception) => {
    //         assert.isNotNull(interception.response.statusCode, 200);
    //     });
    //     taSavingsOpera0D01AALocators.TotalEntriesAnalyzed().should("be.visible").should("have.text", BookingTotalEntries);
    //     taSavingsOpera0D01AALocators.TotalExceptionsFound().should("be.visible").should("have.text", BookingTotalExceptionsFound);
    //     taSavingsOpera0D01AALocators.SavingsIdentfied().should("be.visible").should("have.text", BookingSavingsIdentified);
    // });
    // it("TA Savings : Select month, search business and upload files using 1st option for Expedia", () => {
    //     taSavingsOpera0D01AALocators.OTASavingsBtn().should("be.visible").click();
    //     cy.wait('@TASavings',{timeout:42000}).then((interception) => {
    //         assert.isNotNull(interception.response.statusCode, 200);
    //     });
    //     taSavingsOpera0D01AALocators.OTACalendar().should("be.visible").click();
    //     taSavingsOpera0D01AALocators.MonthMarch().should("be.visible").click();
    //     cy.wait('@TASavings',{timeout:42000}).then((interception) => {
    //         assert.isNotNull(interception.response.statusCode, 200);
    //     });
    //     taSavingsOpera0D01AALocators.SearchBusiness().scrollIntoView().should("be.visible").type("0D01AA{enter}");
    //     cy.wait('@SearchBusinessTA').then((interception) => {
    //         assert.isNotNull(interception.response.statusCode, 200);
    //     });
    //     taSavingsOpera0D01AALocators.ExpediaButton().should("be.visible").click();
    //     taSavingsOpera0D01AALocators.ExpediaUploadFiles().should("be.visible").click();
    //     taSavingsOpera0D01AALocators.DeleteCheckBox().should("be.visible").click();
    //     taSavingsOpera0D01AALocators.YesButtonTA().should("be.visible").click();
    //     cy.wait(5000);
    //     taSavingsOpera0D01AALocators.ExpediaFileUpload().attachFile(ExpediaFile);
    //     cy.wait(5000);
    //     taSavingsOpera0D01AALocators.ExpediaPMSUpload().attachFile(PMSFile);
    //     cy.wait(5000);
    //     taSavingsOpera0D01AALocators.CompareButtonExpedia().should("be.visible").click();
    //     cy.wait('@FilesUploaded',{timeout:320000}).then((interception) => {
    //         assert.isNotNull(interception.response.statusCode, 200);
    //     });
    //     taSavingsOpera0D01AALocators.TotalEntriesAnalyzed().should("be.visible").should("have.text", ExpediaTotalEntries);
    //     taSavingsOpera0D01AALocators.TotalExceptionsFound().should("be.visible").should("have.text", ExpediaTotalExceptionsFound);
    //     taSavingsOpera0D01AALocators.SavingsIdentfied().should("be.visible").should("have.text", ExpediaSavingsIdentified);
    // });
    it("TA Savings : Select month, search business and upload files using 3rd option for Booking", () => {
        taSavingsOpera0D01AALocators.OTASavingsBtn().should("be.visible").click();
        cy.wait('@TASavings',{timeout:42000}).then((interception) => {
            assert.isNotNull(interception.response.statusCode, 200);
        });
        taSavingsOpera0D01AALocators.OTACalendar().scrollIntoView().should("be.visible").click();
        taSavingsOpera0D01AALocators.MonthMarch().should("be.visible").click();
        cy.wait('@TASavings',{timeout:42000}).then((interception) => {
            assert.isNotNull(interception.response.statusCode, 200);
        });
        taSavingsOpera0D01AALocators.SearchBusiness().scrollIntoView().should("be.visible").type("0D01AA{enter}");
        cy.wait('@SearchBusinessTA').then((interception) => {
            assert.isNotNull(interception.response.statusCode, 200);
        });
        taSavingsOpera0D01AALocators.BookingButton().should("be.visible").click();
        taSavingsOpera0D01AALocators.BookingUploadFiles().should("be.visible").click();
        taSavingsOpera0D01AALocators.ThirdOptionButton().should("be.visible").click();
        cy.wait(5000);
        taSavingsOpera0D01AALocators.BookingFileUpload().attachFile(BookingFile);
        cy.wait(5000);
        taSavingsOpera0D01AALocators.PMSFileUpload().attachFile(PMSFile);
        cy.wait(5000);
        taSavingsOpera0D01AALocators.BookingCompareButton().should("be.visible").click();
        cy.wait('@FilesUploaded',{timeout:320000}).then((interception) => {
            assert.isNotNull(interception.response.statusCode, 200);
        });
        taSavingsOpera0D01AALocators.TotalEntriesAnalyzed().should("be.visible").should("have.text", BookingTotalEntries);
        taSavingsOpera0D01AALocators.TotalExceptionsFound().should("be.visible").should("have.text", BookingTotalExceptionsFound);
        taSavingsOpera0D01AALocators.SavingsIdentfied().should("be.visible").should("have.text", BookingSavingsIdentified);
    });
    it('TA Savings: Auto Run Rules Verification for Booking', () => {
        cy.request('GET',`${serverUrl}/travel_agents/29966/auto_verification_rules_count`).as('AutoRuleBookingC983F6');
        cy.get('@AutoRuleBookingC983F6').should((response=>{
            expect(response.status).to.eq(200);
            expect(response.body.data).to.deep.equal({
                'Rule V': 2,
            });
        }));
    });
    it("TA Savings : Select month, search business and upload files using 3rd option for Expedia", () => {
        taSavingsOpera0D01AALocators.OTASavingsBtn().should("be.visible").click();
        cy.wait('@TASavings',{timeout:42000}).then((interception) => {
            assert.isNotNull(interception.response.statusCode, 200);
        });
        taSavingsOpera0D01AALocators.OTACalendar().scrollIntoView().should("be.visible").click();
        taSavingsOpera0D01AALocators.MonthMarch().should("be.visible").click();
        cy.wait('@TASavings',{timeout:42000}).then((interception) => {
            assert.isNotNull(interception.response.statusCode, 200);
        });
        taSavingsOpera0D01AALocators.SearchBusiness().scrollIntoView().should("be.visible").type("0D01AA{enter}");
        cy.wait('@SearchBusinessTA').then((interception) => {
            assert.isNotNull(interception.response.statusCode, 200);
        });
        taSavingsOpera0D01AALocators.ExpediaButton().should("be.visible").click();
        taSavingsOpera0D01AALocators.ExpediaUploadFiles().should("be.visible").click();
        taSavingsOpera0D01AALocators.ThirdOptionButton().should("be.visible").click();
        cy.wait(5000);
        taSavingsOpera0D01AALocators.ExpediaFileUpload().attachFile(ExpediaFile);
        cy.wait(5000);
        taSavingsOpera0D01AALocators.ExpediaPMSUpload().attachFile(PMSFile);
        cy.wait(5000);
        taSavingsOpera0D01AALocators.CompareButtonExpedia().should("be.visible").click();
        cy.wait('@FilesUploaded',{timeout:320000}).then((interception) => {
            assert.isNotNull(interception.response.statusCode, 200);
        });
        taSavingsOpera0D01AALocators.TotalEntriesAnalyzed().should("be.visible").should("have.text", ExpediaTotalEntries);
        taSavingsOpera0D01AALocators.TotalExceptionsFound().should("be.visible").should("have.text", ExpediaTotalExceptionsFound);
        taSavingsOpera0D01AALocators.SavingsIdentfied().should("be.visible").should("have.text", ExpediaSavingsIdentified);
    });
    it('TA Savings: Auto Run Rules Verification for Booking', () => {
        cy.request('GET',`${serverUrl}/travel_agents/30080/auto_verification_rules_count`).as('AutoRuleBookingC983F6');
        cy.get('@AutoRuleBookingC983F6').should((response=>{
            expect(response.status).to.eq(200);
        }));
    });
});