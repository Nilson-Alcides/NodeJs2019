const axios = require('axios')
const URL = `https://swapi.co/api/people`

async function obterPessoas (nome){
    const url = `${URL}/?seach=${nome}&format=json`
    const response = await axios.get(url)
    return response.data
}

// obterPessoas('r2')
// .then(function(resultado) {
//     console.log('resultado', resultado)
// })
// .catch(function(error) {
//     console.log('Deu erro, favor verifivar', error )
// })
module.exports = {
    obterPessoas
}