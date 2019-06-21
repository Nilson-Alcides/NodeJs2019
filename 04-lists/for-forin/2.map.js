const service = require ('./service')

Array.prototype.meuMap = function(callback) {
    const novoArrayMapeado = []
    for (let indice = 0; indice <= this.length - 1; indice ++ ){
        const resultado = callback(this[indice], indice)
        novoArrayMapeado.push(resultado)
    }
    return novoArrayMapeado;
}

async function main(){
    try {
        const results = await service.obterPessoas(`a`)
        // 1° FORMULA DE USAR O MAP
        // const names = []
        // results.results.forEach(function (iten) {
        //     names.push(iten.name)
        // })

        // 2° FORMULA DE USAR O MAP
        // const names = results.results.map(function(pessoa) {
        //     return pessoa.name
        // })

        // 3° FORMULA DE USAR O MAP
        const names = results.results.map(function(pessoa, indice) {
            return `[${indice}] ${pessoa.name}`
        })

        console.log('names', names)

    } catch (error) {
        console.error(`Deu ruim`, error)
    }

}
main()