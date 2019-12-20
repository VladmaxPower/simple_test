const Page = require('./page')
class ProductPage extends Page {
  get free_download_clean_my_mac_x_button () { return $("[data-qa='FreeDownloadBtn']") }
  get email_modal () { return $('.modal-content') }
  get set_email_field () { return $$("//div[@class='dlm-box']//input[@placeholder='Введите ваш адрес e-mail…']")[0] }
  get submit_mail_subscription_button () { return $$("//button[@class='btn -large']")[0] }
  get successful_subscription () { return $('.successful_subscription') }
  open () {
    super.open('/cleanmymac')
  }
};
module.exports = new ProductPage()
