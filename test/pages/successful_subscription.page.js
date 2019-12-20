const Page = require('./page')
class SuccessfulSubscriptionPage extends Page {
  get successful_subscription_text () { return $('.subscribe-success') }

  open () {
    super.open('/')
  }
};
module.exports = new SuccessfulSubscriptionPage()
