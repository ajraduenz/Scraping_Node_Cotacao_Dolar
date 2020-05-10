const request = require('request-promise')
const cheerio = require('cheerio')

const URL = 'https://economia.uol.com.br/cotacoes/cambio/dolar-comercial-estados-unidos/'

async function acess(){
    const response = await request(URL)
    let $ = cheerio.load(response)
    let cotacao = "R$ " + $('input[name=currency2]').val()
    console.log(cotacao)
}
acess()
