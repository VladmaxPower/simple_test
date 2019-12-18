let Page = require('./page');
class ProductPage  extends Page {

    get free_download_clean_my_mac_x_button() {return $("[data-qa='FreeDownloadBtn']");}
    get email_modal() {return $('.modal-content');}
    get set_email_field() {return $$("//div[@class='dlm-box']//div[@class='form-row subscribe-row']//input")[0];}
    get submit_mail_subscription_button() {return $$("//div[@class='dlm-box']//div[@class='form-field subscribe-submit']")[0];}
    open() {
        super.open('ru/cleanmymac');
    }

};
module.exports = new ProductPage();
