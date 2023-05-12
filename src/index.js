import _ from 'lodash';
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module
function Form() {
    const element = document.createElement('form');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = ''
    return element;
  }
  
  document.body.appendChild(Form());
  "use strict";
  const nodemailer = require("nodemailer");
  
  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
   // let testAccount = await nodemailer.createTestAccount();
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "bici.vic2@zohomail.com", // generated ethereal user
        pass: "73y-RDCvc*#7eR8", // generated ethereal password
      },
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"r" <bici.vic2@zohomail.com>', // sender address
      to: "robbie.reta67@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
  }
  
  main().catch(console.error);
  
  
  