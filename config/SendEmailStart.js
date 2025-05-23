const emailjs = require("@emailjs/browser")

async function init(){
    await emailjs.init({
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
    });
}