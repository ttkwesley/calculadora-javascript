

function calcular(tipo, valor) {
    if (tipo === 'acao') {
        if (valor === 'c') {
            //limpar o visor
            document.getElementById('resultado').value = ''
        } //Elementos de comparação com o valor
        if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            document.getElementById('resultado').value += valor
        } //configurando o =
        if (valor === '=') {
            let valor_campo = eval(document.getElementById('resultado').value)
            document.getElementById('resultado').value = valor_campo
        }
    } else if (tipo === 'valor') {

        document.getElementById('resultado').value += valor
    }
}


// O eval avalia uma string como se fosse uma expressão