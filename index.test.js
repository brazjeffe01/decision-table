const { soma } = require('./index.js')

it('deve somar os valores normalmente', () => {
    const a = 25
    const b = 30

    const resultado = soma(a,b)
    console.log(`Esse é o total do valor somado: ${resultado}`)

    expect(resultado).toBe(55)
})