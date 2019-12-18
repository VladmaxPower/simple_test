const Go = require('../../require_all_modules');

describe('Check mail subscription', function () {

    it('Check mail subscription', function () {
        let email = (Math.floor(Math.random() * (9999999 - 1000000 + 1) + 1000000)).toString() + '@dayloo.com';
        Go.HomePage.open();
        Go.HomePage.menu_button.waitForExist(3000);
        Go.HomePage.menu_button.click();
        Go.HomePage.clean_my_mac_x_button.waitForExist(2000);
        Go.HomePage.clean_my_mac_x_button.click();
        Go.ProductPage.free_download_clean_my_mac_x_button.waitForExist(3000);
        Go.ProductPage.free_download_clean_my_mac_x_button.click();
        Go.ProductPage.email_modal.waitForExist(2000);
        Go.ProductPage.set_email_field.setValue(email);
        Go.ProductPage.submit_mail_subscription_button.waitForExist(2000);
        Go.ProductPage.submit_mail_subscription_button.click();
        expect('.subscribe-ok').to.be.there();
        browser.pause(3000);//wait until the letter is delivered
        let activate_url = (new Go.MailHelper()).find_mails_in_box(email);
        browser.url(activate_url);
        expect('.subscribe-ok').to.be.there();
        expect(Go.SuccessfulSubscriptionPage.successful_subscription_text.getText()).to.eq("Спасибо за подписку!\nLet’s get social. We’re always on.");
    });
});
