const HomePage = require('../pages/home.page.js')

class OpenProductFromMenuHelper {
  constructor () {

  }

  openProductPage (product) {
    if (product === 'cleanMyMacX') {
    this.cleanMyMacX()
    }
  }

  cleanMyMacX () {
    HomePage.menuButton.waitForExist(3000)
    HomePage.menuButton.click()
    HomePage.cleanMyMacButton.waitForExist(2000)
    HomePage.cleanMyMacButton.click()
  }
}

module.exports = OpenProductFromMenuHelper
