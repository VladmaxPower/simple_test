const ProductPage = require('../pages/product.page')

class DownloadProductHelper {
  constructor () {
  }

  downloadWithSubscription (email) {
    ProductPage.freeDownloadCleanMyMacXButton.waitForExist(3000)
    ProductPage.freeDownloadCleanMyMacXButton.click()
    ProductPage.setEmailField.waitForExist(2000)
    ProductPage.setEmailField.setValue(email)
    ProductPage.submitMailSubscriptionButton.waitForExist(2000)
    ProductPage.submitMailSubscriptionButton.click()
  }
}

module.exports = DownloadProductHelper
