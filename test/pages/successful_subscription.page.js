const Page = require('./page')
class SuccessfulSubscriptionPage extends Page {
  get successfulSubscriptionText () { return $('.subscribe-success') }

  open () {
    super.open('/')
  }
};
module.exports = new SuccessfulSubscriptionPage()
