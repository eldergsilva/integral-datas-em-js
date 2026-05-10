const taValendo = (inicio, solicitacao) => {
    const trintaDiasEmMs = 30 * 24 * 60 * 60 * 1000 

    const resultado = solicitacao >= inicio && solicitacao <= fim
    console.log(resultado)
    return resultado
}


taValendo(
    new Date(2021, 0, 1),   
    new Date(2021, 0, 30)   
) 

taValendo(
    new Date(2021, 0, 1),   
    new Date(2021, 1, 1)    
) 

taValendo(
    new Date(2021, 0, 1),   
    new Date(2021, 0, 31)   
) 