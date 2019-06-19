const service = require('./service')

async function main() {
    try {
        const result = service.obterPessoas('a')

        const names = [] 
        for (let i = 0; i <= result.results.length - 1; i++) {
            const pessoa = result.results[i]
            names.push(pessoa.name)
        }
    } catch (error) {
        console.error(`error interno`, error)
    }
}
main()