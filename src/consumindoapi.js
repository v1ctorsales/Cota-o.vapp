const { flushSync } = require('react-dom')
const request = require('request')
const fs = require('fs');

const options = {
    url: 'https://economia.awesomeapi.com.br/last/USD-BRL',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset':  'utf-8'
    }
}

 callback_dolar= function(erro, res, body, cotacao_dolar){
    let json = JSON.parse(body)
    cotacao_dolar = json.USDBRL['bid']
    dia_dolar = json.USDBRL['create_date']

    fs.writeFile('dolar.json', JSON.stringify(json, null, 2),err =>{ if(err) throw new Error('Erro')})

    console.log(cotacao_dolar)
    console.log(dia_dolar)
    return (cotacao_dolar)
}



request(options, callback_dolar)