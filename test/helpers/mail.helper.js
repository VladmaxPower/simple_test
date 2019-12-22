const md5 = require('js-md5')
const request = require('sync-request')

class MailHelper {
  constructor () {

  }

  findMailsInBox (email) {
    const emailHash = this.genereateMd5Hash(email)
    const mailUrl = this.getMailText(emailHash)
    return mailUrl[0].toString();
  }

  genereateMd5Hash (email) {
    return md5(email)
  }

  getMailText (hash) {
    browser.pause(3000)
    const res = request('GET', 'https://privatix-temp-mail-v1.p.rapidapi.com/request/mail/id/' + hash + '/', {
      headers: {
        'x-rapidapi-host': 'privatix-temp-mail-v1.p.rapidapi.com',
        'x-rapidapi-key': '0b4ee80218msh55d8c1e41942ecbp18a90fjsnec866d1c90c4'
      }
    })
    return this.parsingUrlFromEmail(res)
  }

  parsingUrlFromEmail (res) {
    const responseBody = JSON.parse(res.getBody('utf8'))
    const mailText = responseBody[0].mail_text
    const regularka = new RegExp('https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,4}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)')
    return (regularka.exec(mailText))
  }
}

module.exports = MailHelper
