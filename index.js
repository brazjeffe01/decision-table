const firstFeature = () => {

    console.log('FEATURE: Sacar dinheiro.')

    const firstScenario = () => {
        //Código sera refatorado futuramente quando eu finalmente descobrir como receber dados do usuário usando ES6 hahahaha (to triste de vdd)
    
        console.log('CONDIÇÕES:')
        const firstCondition = () => {
        console.log('Eu estou logado na conta: [VERDADEIRO]')
        return true
        }
            
        const secondCondition = () => {
        console.log('Eu tenho dinheiro na conta: [VERDADEIRO]')
        return true
        }
    
        if (firstCondition() && secondCondition()) {
            console.log('AÇÕES:')
            console.log('Eu consigo sacar dinheiro: [VERDADEIRO]')
        }
    
        console.log('--- --- --- ---')
        
    }
    
    const secondScenario = () => {
        //Código sera refatorado futuramente quando eu finalmente descobrir como receber dados do usuário usando ES6 hahahaha (to triste de vdd)
        
        console.log('CONDIÇÕES:')
        const firstCondition = () => {
        console.log('Eu estou logado na conta: [VERDADEIRO]')
        return true
        }
            
        const secondCondition = () => {
        console.log('Eu tenho dinheiro na conta: [FALSO]')
        return false
        }

        if (firstCondition() && secondCondition()) {
            console.log('AÇÕES:')
            console.log('Eu consigo sacar dinheiro: [VERDADEIRO]')
        } else {
            console.log('AÇÕES:')
            console.log('Eu não consigo sacar dinheiro: [FALSO]')
        }

        console.log('--- --- --- ---')
        
    }

    firstScenario()
    secondScenario()
}

const secondFeature = () => {

    console.log('FEATURE: Verificar saldo.')

    const firstScenario = () => {

        console.log('CONDIÇÕES:')
        const firstCondition = () => {

        }
    }
}

firstFeature()


//Condição sacarDinheiro
// 1 - Tenho dinheiro na conta
// 2 - Estou logado na conta

// Resultado = 1 && 2 = true