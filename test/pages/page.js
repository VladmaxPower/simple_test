class Page {
  constructor () {
  }

  open (path) {
    browser.url('/' + path)
    browser.pause(1000)
  }
}
module.exports = Page
