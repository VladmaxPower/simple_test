const HomePage = require('../pages/home.page')

class OpenProductFromMenuHelper {
  constructor () {

  }

  openProductPage (product) {
    if (product === 'cleanMyMacX') {
      OpenProductFromMenuHelper.cleanMyMacX()
    }
  }

  static cleanMyMacX () {
    HomePage.menu_button.waitForExist(3000)
    HomePage.menu_button.click()
    HomePage.clean_my_mac_x_button.waitForExist(2000)
    HomePage.clean_my_mac_x_button.click()
  }
}

module.exports = OpenProductFromMenuHelper
