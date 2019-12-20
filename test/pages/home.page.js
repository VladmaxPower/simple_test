const Page = require('./page')
class HomePage extends Page {
  get menu_button () { return $('.humb') }
  get clean_my_mac_x_button () { return $("[data-qa='cleanmymac-x-in-menu']") }
  open () {
    super.open('')
  }
}
module.exports = new HomePage()
