class Login{
    HeaderLoginBtn(){
        return cy.get('[datatest-id="header-login-btn"]')
    }
    Email(){
        return cy.get('[datatest-id="username-field"]')
    }
    Password(){
        return cy.get('[datatest-id="password-field"]')
    }
    ModalLoginBtn(){
        return cy.get('[datatest-id="modal-login-btn"]')
    }
    RememberMe(){
        return cy.get('[datatest-id="remember-me-checkbox"]');
    }
    LoginCloseModal(){
        return cy.get('[datatest-id="login-close-button"]');
    }
    SignUpLinkLoginModal(){
        return cy.get('[datatest-id="login-modal-signup"]');
    }
    ResendEmailLinkLoginModal(){
        return cy.get('[datatest-id="resend-email-link"]');
    }
    ShowHidePassword(){
        return cy.get('[datatest-id="show-hide-password"]');
    }
    HeaderProfileMenu(){
        return cy.get('[datatest-id="profile-menu"]');
    }
    MenuLogoutButton(){
        return cy.get('[datatest-id="logout-btn"]');
    }
    FacebookLogin(){
        return cy.get('[datatest-id="facebook-btn"]');
    }
    LinkedinLogin(){
        return cy.get('[datatest-id="linkedin-btn"]');
    }
    GoogleLogin(){
        return cy.get('[datatest-id="google-btn"]');
    }
    MicrosoftLogin(){
        return cy.get('[datatest-id="microsoft-login"]');
    }
}
export default Login