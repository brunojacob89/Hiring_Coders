var express = require('express');
var router = express.Router();
var cielo = require('../lib/cielo');

/* POST Criação de compra */
router.post('/', function(req, res, next) {

  cielo.compra(req.body).then((result) => {
    //res.send(result);
    const paymentId = result.Payment.PaymentId;
    cielo.captura(paymentId)
    .then((result) => {
      if(result.Status == 2){
        res.status(201).send({
          "Status": "Sucesso",
          "Message": "Compra realizada com sucesso.",
          "CompraId": paymentId
        });
      }
      else{
        res.status(402).send({
          "Status": "Falhou",
          "Message": "Compra não realizada, problema na cobraça no cartão de credit"
        });
      }
      
    })
    .catch((err)=>{
      console.error(err);
    })
  })

});

/* GET status de compra */
router.get('/:compra_id/status', function(req, res, next) {
  cielo.consulta(req.params.compra_id)
  .then((result) =>{
    let menssage = {}
    switch(result.Payment.Status){
      case 1:
        menssage =  {
          'Status' : "Pagamento Autorizado"
        };
        break;
      case 2:
        menssage =  {
          'Status' : "Pagamento Realizado"
        };
        break;
      case 12:
        menssage =  {
          'Status' : "Pagamento Pendente"
        };
        break;
      default: 
        menssage =  {
         'Status' : "Pagamento Falhou"
        };
        break;
    }
    res.send(menssage);

  })
});
module.exports = router;
