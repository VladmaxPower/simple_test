const Page = require('./page')
class HomePage extends Page {
  get menuButton () { return $('.humb') }
  get cleanMyMacButton () { return $("[data-qa='cleanmymac-x-in-menu']") }
  open () {
    super.open('')
  }
}
module.exports = new HomePage()
