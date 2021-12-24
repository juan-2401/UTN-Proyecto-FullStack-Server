var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Formulario de Contacto */

router.post('/llegada-form-contacto', (req, res) => {
  const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const body = req.body;

  console.log(body);

  const msg = {
    to: 'no.reply.240191@gmail.com', // Change to your recipient
    from: 'no.reply.240191@gmail.com', // Change to your verified sender
    subject: `${body.data.nombre} te ha enviado un mail`,
    text: `${contactForm.nombre} te envió el siguiente mensaje: ${contactForm.mensaje}. Contactalo a su teléfono ${contactForm.telefono} o a su email ${contactForm.email}.`,
  }

  sgMail
    .send(msg)
    .then((response) => {
      console.log(response[0].statusCode)
      console.log(response[0].headers)
      res.send(response[0].statusCode);
    })
    .catch((error) => {
      console.error(error)
      res.send(error);
    })
});

module.exports = router;
