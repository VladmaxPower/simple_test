const Go = require('../../require_all_modules')

describe('Check mail subscription', function () {
  it('Check mail subscription', function () {
    const email = (Math.floor(Math.random() * (9999999 - 1000000 + 1) + 1000000)).toString() + '@dayloo.com'
    Go.HomePage.open();
    (new Go.OpenProductFromMenu()).openProductPage('cleanMyMacX');
    (new Go.DownloadProductHelper()).downloadWithSubscription(email)
    Go.ProductPage.successfulSubscription.waitForExist(3000);
    browser.url((new Go.MailHelper()).findMailsInBox(email))
    Go.ProductPage.successfulSubscriptionThanksPage.waitForExist(3000);
    expect(Go.SuccessfulSubscriptionPage.successfulSubscriptionText.getText()).to.eq('Thanks for signing up!\nLet’s get social. We’re always on.')
  });
});
