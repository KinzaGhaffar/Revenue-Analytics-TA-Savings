import vcPaymentstestBusinessthree from "../../locators/OTAPayments.A2E379.locators";
const serverUrl = Cypress.env("baseUrl");
const vcPayTestBusinessThreeLocators = new vcPaymentstestBusinessthree();

describe("OTA Payments: Business XID: A2E379, Business Name: Test_Business_Rg, PMS Name: Choice Advantage", () => {
    beforeEach(() => {
        //cy.server();
        cy.testAccountlogin();
        cy.intercept('GET',
        `${serverUrl}/vc_payment_statuses/load_cumulative_summary?wait_for_customer=*&ptc_filter=&check_in_out=check-in&card_status=&invoice_month=*&future_reservaions=false&card_days_ex=&card_days_in=&payment_date_from=&payment_date_to=&payment_search=&_=*`
        ).as('vcPaymentStatuses');
    });
    afterEach(() => {
        cy.clearCookies();
    });
    it("PTC = NO : Should allow user to navigate to OTA payments page: Select the current month and search the respective business and Add a new card from detail page for Booking", () => {
        vcPayTestBusinessThreeLocators.OTAPaymentsSidebarLink().should("be.visible").click();
        cy.wait('@vcPaymentStatuses',{timeout:32000}).then((interception) => {
            assert.isNotNull(interception.response.statusCode, 200);
        });
        vcPayTestBusinessThreeLocators.OTAPaymentsCalendar().scrollIntoView().should("be.visible").click();
        vcPayTestBusinessThreeLocators.OTAPaymentsMonthMarch().should("be.visible").click();
        cy.wait('@vcPaymentStatuses',{timeout:32000}).then((interception) => {
            assert.isNotNull(interception.response.statusCode, 200);
        });
        vcPayTestBusinessThreeLocators.OTAPaymentsSearch().scrollIntoView().should("be.visible").click().type("A2E379{enter}");
        cy.wait(3000);
        vcPayTestBusinessThreeLocators.OTAPaymentsBookingButton().should("be.visible").click();
        vcPayTestBusinessThreeLocators.OTAPaymentsBookingDetails().should("be.visible").click();
        vcPayTestBusinessThreeLocators.OTAPaymentsBookingAddANewCard().should("be.visible").click();
        vcPayTestBusinessThreeLocators.OTAPaymentsBookingAddANewCardGuestName().should("be.visible").type("Test User One");
        vcPayTestBusinessThreeLocators.OTAPaymentsBookingAddANewCardReservationId().should("be.visible").type("101010101010");
        vcPayTestBusinessThreeLocators.OTAPaymentsBookingAddANewCardCheckIn().should("be.visible").type("Wed, Mar 22, 2023");
        vcPayTestBusinessThreeLocators.OTAPaymentsBookingAddANewCardCheckOut().should("be.visible").type("Fri, Mar 23, 2023");
        vcPayTestBusinessThreeLocators.OTAPaymentsBookingAddANewCardAmountToCharge().should("be.visible").clear().type("22.50");
        vcPayTestBusinessThreeLocators.OTAPaymentsBookingAddANewCardTotalPrice().should("be.visible").type("100.00");
        vcPayTestBusinessThreeLocators.OTAPaymentsBookingAddANewCardCCNumber().should("be.visible").type("4444 4444 4444 4444");
        vcPayTestBusinessThreeLocators.OTAPaymentsBookingAddANewCardExpirationCard().should("be.visible").type("122026");
        vcPayTestBusinessThreeLocators.OTAPaymentsBookingAddANewCardCVCCard().should("be.visible").type("3333");
        vcPayTestBusinessThreeLocators.OTAPaymentsAddANewCardAddButton().should("be.visible").click();
    });
    it("PTC = NO : Should allow user to navigate to OTA payments page: Select the current month and search the respective business and Update the created card from detail page for Booking", () => {
        vcPayTestBusinessThreeLocators.OTAPaymentsSidebarLink().should("be.visible").click();
        cy.wait('@vcPaymentStatuses',{timeout:320000}).then((interception) => {
            assert.isNotNull(interception.response.statusCode, 200);
        });
        vcPayTestBusinessThreeLocators.OTAPaymentsCalendar().scrollIntoView().should("be.visible").click();
        vcPayTestBusinessThreeLocators.OTAPaymentsMonthMarch().should("be.visible").click();
        cy.wait('@vcPaymentStatuses',{timeout:32000}).then((interception) => {
            assert.isNotNull(interception.response.statusCode, 200);
        });
        vcPayTestBusinessThreeLocators.OTAPaymentsSearch().scrollIntoView().should("be.visible").click().type("A2E379{enter}");
        cy.wait(3000);
        vcPayTestBusinessThreeLocators.OTAPaymentsBookingButton().should("be.visible").click();
        vcPayTestBusinessThreeLocators.OTAPaymentsBookingDetails().should("be.visible").click();
        vcPayTestBusinessThreeLocators.OTAPaymentsEditButton().should('be.visible').click({multiple:true});
        vcPayTestBusinessThreeLocators.OTAPaymentsOldCardUpdateCVC().should("be.visible").clear().type("4444");
        vcPayTestBusinessThreeLocators.OTAPaymentsAddANewCardAddButton().eq(1).should("be.visible").click();
    });
    it("PTC = NO : Should allow user to navigate to OTA payments page: Select the current month and search the respective business and Delete the created card from detail page for Booking", () => {
        vcPayTestBusinessThreeLocators.OTAPaymentsSidebarLink().should("be.visible").click();
        cy.wait('@vcPaymentStatuses',{timeout:32000}).then((interception) => {
            assert.isNotNull(interception.response.statusCode, 200);
        });
        vcPayTestBusinessThreeLocators.OTAPaymentsCalendar().should("be.visible").click();
        vcPayTestBusinessThreeLocators.OTAPaymentsMonthMarch().should("be.visible").click();
        cy.wait('@vcPaymentStatuses',{timeout:32000}).then((interception) => {
            assert.isNotNull(interception.response.statusCode, 200);
        });
        vcPayTestBusinessThreeLocators.OTAPaymentsSearch().scrollIntoView().should("be.visible").click().type("A2E379{enter}");
        cy.wait(3000);
        vcPayTestBusinessThreeLocators.OTAPaymentsBookingButton().should("be.visible").click();
        vcPayTestBusinessThreeLocators.OTAPaymentsBookingDetails().should("be.visible").click();
        vcPayTestBusinessThreeLocators.OTAPaymentsAllCheckBox().should("be.visible").click();
        vcPayTestBusinessThreeLocators.OTAPaymentsDetailPageBulkAction().should("be.visible").click();
        vcPayTestBusinessThreeLocators.OTAPaymentsDetailPageDeleteButton().should("be.visible").click();
        vcPayTestBusinessThreeLocators.OTAPaymentsDeleteVCCards().should("be.visible").click();
    });
    it("PTC = NO : Should allow user to navigate to OTA payments page: Select the current month and search the respective business and Add a new card from detail page for Expedia", () => {
        vcPayTestBusinessThreeLocators.OTAPaymentsSidebarLink().should("be.visible").click();
        cy.wait('@vcPaymentStatuses',{timeout:32000}).then((interception) => {
            assert.isNotNull(interception.response.statusCode, 200);
        });
        vcPayTestBusinessThreeLocators.OTAPaymentsCalendar().scrollIntoView().should("be.visible").click();
        vcPayTestBusinessThreeLocators.OTAPaymentsMonthMarch().should("be.visible").click();
        cy.wait('@vcPaymentStatuses',{timeout:32000}).then((interception) => {
            assert.isNotNull(interception.response.statusCode, 200);
        });
        vcPayTestBusinessThreeLocators.OTAPaymentsSearch().scrollIntoView().should("be.visible").click().type("A2E379{enter}");
        cy.wait(3000);
        vcPayTestBusinessThreeLocators.OTAPaymentsExpediaButton().should("be.visible").click();
        vcPayTestBusinessThreeLocators.OTAPaymentsExpediaDetails().should("be.visible").click();
        vcPayTestBusinessThreeLocators.OTAPaymentsBookingAddANewCard().should("be.visible").click();
        vcPayTestBusinessThreeLocators.OTAPaymentsBookingAddANewCardGuestName().should("be.visible").type("Test User One");
        vcPayTestBusinessThreeLocators.OTAPaymentsBookingAddANewCardReservationId().should("be.visible").type("101010101010");
        vcPayTestBusinessThreeLocators.OTAPaymentsBookingAddANewCardCheckIn().should("be.visible").type("03/12/2023 - 03/15/2023");
        vcPayTestBusinessThreeLocators.OTAPaymentsBookingAddANewCardAmountToCharge().should("be.visible").clear().type("22.50");
        vcPayTestBusinessThreeLocators.OTAPaymentsBookingAddANewCardTotalPrice().should("be.visible").type("100.00");
        vcPayTestBusinessThreeLocators.OTAPaymentsBookingAddANewCardCCNumber().should("be.visible").type("4444 4444 4444 4444");
        vcPayTestBusinessThreeLocators.OTAPaymentsBookingAddANewCardExpirationCard().should("be.visible").type("122026");
        vcPayTestBusinessThreeLocators.OTAPaymentsBookingAddANewCardCVCCard().should("be.visible").type("3333");
        vcPayTestBusinessThreeLocators.OTAPaymentsAddANewCardAddButton().should("be.visible").click();
    });
    it("PTC = NO : Should allow user to navigate to OTA payments page: Select the current month and search the respective business and Update the created card from detail page for Expedia", () => {
        vcPayTestBusinessThreeLocators.OTAPaymentsSidebarLink().should("be.visible").click();
        cy.wait('@vcPaymentStatuses',{timeout:32000}).then((interception) => {
            assert.isNotNull(interception.response.statusCode, 200);
        });
        vcPayTestBusinessThreeLocators.OTAPaymentsCalendar().scrollIntoView().should("be.visible").click();
        vcPayTestBusinessThreeLocators.OTAPaymentsMonthMarch().should("be.visible").click();
        cy.wait('@vcPaymentStatuses',{timeout:32000}).then((interception) => {
            assert.isNotNull(interception.response.statusCode, 200);
        });
        vcPayTestBusinessThreeLocators.OTAPaymentsSearch().scrollIntoView().should("be.visible").click().type("A2E379{enter}");
        cy.wait(3000);
        vcPayTestBusinessThreeLocators.OTAPaymentsExpediaButton().should("be.visible").click();
        vcPayTestBusinessThreeLocators.OTAPaymentsExpediaDetails().should("be.visible").click();
        vcPayTestBusinessThreeLocators.OTAPaymentsEditButton().should('be.visible').click({multiple:true});
        vcPayTestBusinessThreeLocators.OTAPaymentsOldCardUpdateCVC().should("be.visible").clear().type("4444");
        vcPayTestBusinessThreeLocators.OTAPaymentsAddANewCardAddButton().eq(1).should("be.visible").click();
    });
    it("PTC = NO : Should allow user to navigate to OTA payments page: Select the current month and search the respective business and Delete the created card from detail page for Expedia", () => {
        vcPayTestBusinessThreeLocators.OTAPaymentsSidebarLink().should("be.visible").click();
        cy.wait('@vcPaymentStatuses',{timeout:32000}).then((interception) => {
            assert.isNotNull(interception.response.statusCode, 200);
        });
        vcPayTestBusinessThreeLocators.OTAPaymentsCalendar().scrollIntoView().should("be.visible").click();
        vcPayTestBusinessThreeLocators.OTAPaymentsMonthMarch().should("be.visible").click();
        cy.wait('@vcPaymentStatuses',{timeout:32000}).then((interception) => {
            assert.isNotNull(interception.response.statusCode, 200);
        });
        vcPayTestBusinessThreeLocators.OTAPaymentsSearch().scrollIntoView().should("be.visible").click().type("A2E379{enter}");
        cy.wait(3000);
        vcPayTestBusinessThreeLocators.OTAPaymentsExpediaButton().should("be.visible").click();
        vcPayTestBusinessThreeLocators.OTAPaymentsExpediaDetails().should("be.visible").click();
        vcPayTestBusinessThreeLocators.OTAPaymentsAllCheckBox().should("be.visible").click();
        vcPayTestBusinessThreeLocators.OTAPaymentsDetailPageBulkAction().should("be.visible").click();
        vcPayTestBusinessThreeLocators.OTAPaymentsDetailPageDeleteButton().should("be.visible").click();
        vcPayTestBusinessThreeLocators.OTAPaymentsDeleteVCCards().should("be.visible").click();
    });
});