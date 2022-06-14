const fetch = require('node-fetch');

class Cielo{
    static compra(params){
        
        return fetch('https://apisandbox.cieloecommerce.cielo.com.br/1/sales/', {
            method: 'post',
            body: JSON.stringify(params),
            headers: {
                'Content-Type': 'application/json',
                'MerchantId': '20a8a9e3-852b-4f61-b5c9-4d422880993e',
                'MerchantKey': 'EMOOWLSQEZUMNGEHXAQTMSFPXRSIFUSJZRKHDTZU',
            }
        })
        .then(res => res.json());
        
    }

    static captura(paymentId){
        
        return fetch('https://apisandbox.cieloecommerce.cielo.com.br/1/sales/' + paymentId + '/capture', {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'MerchantId': '20a8a9e3-852b-4f61-b5c9-4d422880993e',
                'MerchantKey': 'EMOOWLSQEZUMNGEHXAQTMSFPXRSIFUSJZRKHDTZU',
            }
        })
        .then(res => res.json());
        
    }

    static consulta(paymentId){
        
        return fetch('https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/' + paymentId, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'MerchantId': '20a8a9e3-852b-4f61-b5c9-4d422880993e',
                'MerchantKey': 'EMOOWLSQEZUMNGEHXAQTMSFPXRSIFUSJZRKHDTZU',
            }
        })
        .then(res => res.json());
        
    }
}

module.exports = Cielo;