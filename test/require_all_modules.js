const HomePage = require('./pages/home.page.js');
const ProductPage = require('./pages/product.page.js');
const SuccessfulSubscriptionPage = require('./pages/successful_subscription.page');
// helpers
const MailHelper = require('./helpers/mail.helper.js');

module.exports = {
    HomePage: HomePage,
    ProductPage: ProductPage,
    SuccessfulSubscriptionPage:SuccessfulSubscriptionPage,
    MailHelper: MailHelper
};
