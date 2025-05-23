async function HandleService(chatId, client, message){
    var fiscal = data.find(d => d.Id === chatId)
    var firstName = fiscal.name.split(" ")[0];
    return await client.sendMessage(chatId, `Olá *${primeiroNome}*, Para que possamos direcioná-lo da melhor forma possível, por favor, selecione a opção que melhor descreve o motivo do seu contato\n
    *1* - Solicitar combustível *(Esse meio só está disponível após o dia 20 de cada mês.)*\n 
    *2* - Solicitar EPI's (*Joelheiras*, *Cotoveleiras*, *Balaclava*, *Manguito*, *Bota*, *Capacete*...) \n 
    *3* - Moto (*Solicitar Documento*, *Informar Quilometragem*, *Notificar Quebra*)\n 
    *4* - Fiscal (*Incidente/Acidente*)\n 
    *5* - *Outros*\n

Em breve, daremos início ao seu atendimento.\n

Atenciosamente,\n
*TPF ENGENHARIA/CCO EMLURB*`)
}


module.exports = {
    HandleService,
}