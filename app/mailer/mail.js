'use strict';

const nodemailer = require('nodemailer');
// const sgTransport  = require('nodemailer-sendgridv3-transport');

// let transportOption = sgTransport({
// 	auth: {
// 		api_user: 'novatokensale',
// 		api_key: process.env.SENDGRID_API_KEY
// 	}
// });

let transportOption = {
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER || 'alltopandroidapps@gmail.com',
    pass: process.env.MAIL_PASSWORD || 'zizou@123'
  }
};

var transporter = nodemailer.createTransport(transportOption);

module.exports.transporter = transporter;
