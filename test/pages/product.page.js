const Page = require('./page')
class ProductPage extends Page {
  get freeDownloadCleanMyMacXButton () { return $("[data-qa='FreeDownloadBtn']") }
  get setEmailField () { return $$("[name='email']")[1] }
  get submitMailSubscriptionButton () { return $$("[data-qa='subscribeBtn']")[1] }
  get successfulSubscription () { return $('.modal-content') }
  get successfulSubscriptionThanksPage() {return $('.subscribe-ok')}
  open () {
    super.open('/cleanmymac')
  }
};
module.exports = new ProductPage()
