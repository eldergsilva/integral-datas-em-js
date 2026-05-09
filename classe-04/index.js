const taAberto = (data) => {
    const hora = data.getUTCHours()
    const minutos = data.getUTCMinutes()
    const dia = data.getUTCDay()  

    const horarioOk = hora >= 8 && (hora < 18 || (hora === 18 && minutos === 0))
    const diaOk = dia >= 1 && dia <= 5

    const resultado = horarioOk && diaOk
    console.log(resultado)
    return resultado
}

taAberto(new Date(2021, 3, 25, 12))     
taAberto(new Date(2021, 3, 26, 12))     
taAberto(new Date(2021, 3, 26, 7, 59))  