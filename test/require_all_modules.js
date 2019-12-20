const HomePage = require('./pages/home.page.js')
const ProductPage = require('./pages/product.page.js')
const SuccessfulSubscriptionPage = require('./pages/successful_subscription.page')
// helpers
const MailHelper = require('./helpers/mail.helper.js')
const OpenProductFromMenu = require('./helpers/open_product_from_menu.helper')
const DownloadProductHelper = require('./helpers/download_product.helper')

module.exports = {
  HomePage: HomePage,
  ProductPage: ProductPage,
  SuccessfulSubscriptionPage: SuccessfulSubscriptionPage,
  MailHelper: MailHelper,
  OpenProductFromMenu: OpenProductFromMenu,
  DownloadProductHelper: DownloadProductHelper
}
