const taAberto = (data) => {
    const hora = data.getUTCHours()
    const resultado = hora >= 8 && hora <= 17
    console.log(resultado)
    return resultado
}

taAberto(new Date(2015, 1, 1, 12))  
taAberto(new Date(2015, 1, 1, 2))   