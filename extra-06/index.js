const taValendo = (inicio, solicitacao) => {
    const umDiaEmMs = 24 * 60 * 60 * 1000  
    const fim = new Date(inicio.getTime() + umDiaEmMs)

    const resultado = solicitacao >= inicio && solicitacao <= fim
    console.log(resultado)
    return resultado
}
// Testes
taValendo(
    new Date(2021, 3, 26, 8, 0),   
    new Date(2021, 3, 26, 12, 0)  
) 
taValendo(
    new Date(2021, 3, 26, 8, 0),   
    new Date(2021, 3, 27, 8, 1)    
)  

taValendo(
    new Date(2021, 3, 26, 8, 0),  
    new Date(2021, 3, 27, 8, 0)    
) 