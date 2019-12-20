const Go = require('../../require_all_modules')

describe('Check mail subscription', function () {
  it('Check mail subscription', function () {
    const email = (Math.floor(Math.random() * (9999999 - 1000000 + 1) + 1000000)).toString() + '@dayloo.com'
    Go.HomePage.open();
    (new Go.OpenProductFromMenu()).openProductPage('cleanMyMacX');
    (new Go.DownloadProductHelper()).downloadWithSubscription(email)
    expect(Go.ProductPage.successful_subscription.isDisplayed()).to.eq(true, 'can`t search successful subscription modal')
    browser.url((new Go.MailHelper()).findMailsInBox(email))
    expect(Go.ProductPage.successful_subscription.isDisplayed()).to.eq(true, 'can`t search successful subscription modal in successful page')
    expect(Go.SuccessfulSubscriptionPage.successful_subscription_text.getText()).to.eq('Спасибо за подписку!\nLet’s get social. We’re always on.')
  })
})
