let md5 = require('js-md5');
let request = require('sync-request');

class MailHelper {
    constructor() {

    }


    find_mails_in_box(email) {
        let email_hash = this.genereate_md5_hash(email);
        return this.get_mail_text(email_hash);
    }

    genereate_md5_hash(email) {
        return md5(email);
    }


    get_mail_text(hash) {
        let res = request('GET', 'https://privatix-temp-mail-v1.p.rapidapi.com/request/mail/id/'+hash+'/', {
            headers: {
                'x-rapidapi-host': 'privatix-temp-mail-v1.p.rapidapi.com',
                'x-rapidapi-key': '0b4ee80218msh55d8c1e41942ecbp18a90fjsnec866d1c90c4'
            },
        });
       return this.parsing_url_from_email(res);
    }

    parsing_url_from_email(res){
        let response_body = res['body'].toString();
        let href_position = response_body.search('<Ok, I’m with you, guys');
        return response_body.substr(href_position+27, 115);
    }

}

module.exports = MailHelper;
