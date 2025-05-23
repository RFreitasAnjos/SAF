const emailjs = require("@emailjs/browser")
const axios = require("axios")

async function init(){
    await emailjs.init({
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
    });
}

async function SendMail(chatId, data, client) {
    const response = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data, {
        headers: {
            "Content-Type": "application/json" ,
            "Authorization": process.env.EMAILJS_PRIVATE_KEY,
        },
    }).then(res => client.sendMessage(chatId,"Is over"))
    .catch(err => client.sendMessage(chatId, "Falha ao carregar"))
}

module.exports = {
    SendMail,
}