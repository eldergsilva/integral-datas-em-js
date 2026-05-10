const taAberto = (data) => {
    const hora = data.getUTCHours()
    const minutos = data.getUTCMinutes()
    const dia = data.getUTCDay() 

    const horarioSemana = hora >= 8 && (hora < 18 || (hora === 18 && minutos === 0))
    const horarioSabado = hora >= 8 && (hora < 12 || (hora === 12 && minutos === 0))

    const semana = dia >= 1 && dia <= 5 && horarioSemana
    const sabado = dia === 6 && horarioSabado

    const resultado = semana || sabado
    console.log(resultado)
    return resultado
}

taAberto(new Date(2021, 3, 25, 12))     
taAberto(new Date(2021, 3, 26, 12))    
taAberto(new Date(2021, 3, 26, 7, 59)) 
taAberto(new Date(2021, 3, 24, 9, 30)) 