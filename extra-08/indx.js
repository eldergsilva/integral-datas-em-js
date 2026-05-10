const meses = [
    'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
    'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
]

const mesesAbrev = [
    'jan', 'fev', 'mar', 'abr', 'mai', 'jun',
    'jul', 'ago', 'set', 'out', 'nov', 'dez'
]


const dia = (data) => String(data.getUTCDate()).padStart(2, '0')
const mes = (data) => data.getUTCMonth()


const formatA = (data) => {
    const resultado = `${dia(data)} de ${meses[mes(data)]} de ${data.getUTCFullYear()}`
    console.log(resultado)
    return resultado
}


const formatB = (data) => {
    const numMes = String(mes(data) + 1).padStart(2, '0')
    const resultado = `${dia(data)}/${numMes}/${data.getUTCFullYear()}`
    console.log(resultado)
    return resultado
}


const formatC = (data) => {
    const resultado = `${data.getUTCDate()} ${mesesAbrev[mes(data)]}`
    console.log(resultado)
    return resultado
}


const formatD = (data) => {
    const resultado = `${dia(data)} ${mesesAbrev[mes(data)]} ${data.getUTCFullYear()}`
    console.log(resultado)
    return resultado
}


const formatE = (data) => {
    const resultado = `${dia(data)} de ${mesesAbrev[mes(data)]} de ${data.getUTCFullYear()}`
    console.log(resultado)
    return resultado
}


const formatF = (data) => {
    const resultado = `${dia(data)}/${mesesAbrev[mes(data)]}`
    console.log(resultado)
    return resultado
}


const data = new Date(2020, 9, 5) 

formatA(data) // 05 de outubro de 2020
formatB(data) // 05/10/2020
formatC(data) // 5 out
formatD(data) // 05 out 2020
formatE(data) // 05 de out de 2020
formatF(data) // 05/out