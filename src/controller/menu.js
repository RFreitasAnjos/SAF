async function menu(chatId, client, name, identifier){
    var value = parseInt(value,10);
    try{
        switch ( value ) {
            case 1:
                return await sendMail(chatId, client, name, identifier);
            case 2:
                return await sendDocs(chatId, client)
            case 3:
                return await sendForms(chatId, client, name, identifier)
            case 4:
                return await reportMotorcycles(chatId, client);
            default:
                return  await client.SendMessage(chatId, "Opção não localizada, tente novamente.")
        }
    } catch( error ) {
        console.error("Error: ", error);
        client.SendMessage(chatId, "Aguarde, um dos nossos atendentes entrão em contato.")
    }
}
module.exports ={
    menu,
}