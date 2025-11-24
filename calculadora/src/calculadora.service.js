function CalculadoraService() {

    const SOMA = '+';
    const SUB = '-';
    const DIV = '/';
    const MULTI = '*';


    function calcular(numero1, numero2, operacao) {
        let resultado;
        
        switch(operacao) {
            case SOMA:
                resultado = numero1 + numero2;
                break;
            case SUB:
                resultado = numero1 - numero2;
                break;
            case DIV:
                resultado = numero1 / numero2;
                break;
            case MULTI:
                resultado = numero1 * numero2;
                break;
            default:
                resultado = 0;
        }

        return resultado;
    }

    function concatenarNumero(numAtual, numConcat) {

        // caso contenha apenas '0' ou null, reinicia o valor
        if (numAtual === '0' || numAtual === null) {
            numAtual = '';
        }
        // primeiro digito for '.', concatena '0' antes do ponto
        if (numConcat === '.' && numAtual === '') {
            return '0.';
        }
        // caso '.' digitado e já tenha um ponto, apenas retornar
        if (numConcat === '.' && numAtual.indexOf('.') > -1) {
            return numAtual;
        }
        return numAtual + numConcat;
    }

    return [
        calcular,
        concatenarNumero,
        SOMA,
        SUB,
        DIV,
        MULTI
    ];
}

export default CalculadoraService;
