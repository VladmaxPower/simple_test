const ProductPage = require('../pages/product.page')

class DownloadProductHelper {
  constructor () {
  }

  downloadWithSubscription (email) {
    ProductPage.free_download_clean_my_mac_x_button.waitForExist(3000)
    ProductPage.free_download_clean_my_mac_x_button.click()
    ProductPage.email_modal.waitForExist(2000)
    ProductPage.set_email_field.setValue(email)
    ProductPage.submit_mail_subscription_button.waitForExist(2000)
    ProductPage.submit_mail_subscription_button.click()
  }
}

module.exports = DownloadProductHelper
