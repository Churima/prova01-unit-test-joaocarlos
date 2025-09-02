const Utilitarios = require("../src/utilitarios");

describe("Classe Utilitarios", () => {
    let utilitarios;

    beforeEach(() => {
        utilitarios = new Utilitarios();
    });

    test("Teste validando se inverte o texto", () => {
        expect(utilitarios.inverterString("Teste")).toBe("etseT");
        expect(utilitarios.inverterString("Banana")).toBe("ananaB");
    });

    test("Teste validando se junta uma array em uma string separada por vírgula", () => {
        expect(utilitarios.juntarArray([1, 2, 3, 4, 5])).toEqual("1,2,3,4,5");
        expect(utilitarios.juntarArray([100, 90, 80], "/")).toEqual("100/90/80");
    });

    test("Teste validando se torna a primeira letra do texo em maiúscula", () => {
        expect(utilitarios.primeiraLetraMaiuscula("teste")).toBe("Teste");
        expect(utilitarios.primeiraLetraMaiuscula("tEsTe")).toBe("TEsTe");
    });

    test("Teste validando se conta o número de caracteres da mensagem", () => {
        expect(utilitarios.contarCaracteres("Teste")).toBe(5);
        expect(utilitarios.contarCaracteres("")).toBe(0);
        expect(utilitarios.contarCaracteres("A")).toBe(1);
    });

    test("Teste validando se mescla dois objetos", () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { c: 3, d: 4 };
        expect(utilitarios.mesclarObjetos(obj1, obj2)).toEqual({ a: 1, b: 2, c: 3, d: 4 });
        expect(utilitarios.mesclarObjetos({}, obj2)).toEqual({ c: 3, d: 4 });
    });

    test("Teste validando se converte o texto para maiúsculas", () => {
        expect(utilitarios.paraMaiusculas("teste")).toBe("TESTE");
        expect(utilitarios.paraMaiusculas("tEsTe")).toBe("TESTE");
    });

    test("Teste validando se converte o texto para minúsculas", () => {
        expect(utilitarios.paraMinusculas("TESTE")).toBe("teste");
        expect(utilitarios.paraMinusculas("TeStE")).toBe("teste");
    });

    test("Teste validando se remove espaços da String", () => {
        expect(utilitarios.removerEspacos("   Remove espaço   ")).toBe("Remove espaço");
        expect(utilitarios.removerEspacos("  Espaço   ")).toBe("Espaço");
    });

    test("Teste validando se gera um número aleatório dentro do intervalo determinado", () => {
        const max = 10;
        const resultado = utilitarios.gerarNumeroAleatorio(max);
        expect(resultado).toBeGreaterThanOrEqual(0);
        expect(resultado).toBeLessThan(10);
    });

    test("Teste validando se conta corretamente as palavras da frase", () => {
        expect(utilitarios.contarPalavras("Dá dez professor gente boa")).toBe(5);
        expect(utilitarios.contarPalavras("Aluno satc nota máxima")).toBe(4);
        expect(utilitarios.contarPalavras("   ")).toBe(0);
    });

    test("Teste validando se texto é palíndromo", () => {
        expect(utilitarios.ehPalindromo("ana")).toBe(true);
        expect(utilitarios.ehPalindromo("salas")).toBe(true);
        expect(utilitarios.ehPalindromo("arara")).toBe(false);
    });

    test("Teste validando se soma corretamente os valores", () => {
        expect(utilitarios.somar(5, 5)).toBe(10);
        expect(utilitarios.somar(5, -1)).toBe(4);
        expect(utilitarios.somar(0, 0)).toBe(0);
        expect(utilitarios.somar(-2, 0)).toBe(-2);
    });

    test("Teste validando se subtrai os valores", () => {
        expect(utilitarios.subtrair(9, 3)).toBe(6);
        expect(utilitarios.subtrair(-2, 2)).toBe(-4);
        expect(utilitarios.subtrair(5, -1)).toBe(6);
    });

    test("Teste validando se multiplica os valores", () => {
        expect(utilitarios.multiplicar(5, 5)).toBe(25);
        expect(utilitarios.multiplicar(0, 100)).toBe(0);
        expect(utilitarios.multiplicar(1, -1)).toBe(-1);
        expect(utilitarios.multiplicar(-1, -1)).toBe(1);
    });

    test("Teste validando se divide corretamente os valores", () => {
        expect(utilitarios.dividir(25, 5)).toBe(5);
        expect(utilitarios.dividir(20, 2)).toBe(10);
    });

    test("Teste validando se repete o texto conforme quantidade", () => {
        expect(utilitarios.repetirTexto("DEZ", 2)).toBe("DEZDEZ");
        expect(utilitarios.repetirTexto("JC", 3)).toBe("JCJCJC");
        expect(utilitarios.repetirTexto("", 1)).toBe("");
    });

    test("Teste validando se retorna erro ao dividir por valores impossíveis", () => {
        expect(() => { utilitarios.dividir(1, 0); }).toThrow("Por zero não há divisão");
    });

    test("Teste validando se verifica o tipo do número", () => {
        expect(utilitarios.ehPar(6)).toBe(true);
        expect(utilitarios.ehPar(1)).toBe(false);
        expect(utilitarios.ehPar(0)).toBe(true);
        expect(utilitarios.ehPar(-1)).toBe(false);
        expect(utilitarios.ehPar(-2)).toBe(true);
    });

    test("Teste validando se verifica quando é número", () => {
        expect(utilitarios.ehNumero(5)).toBe(true);
        expect(utilitarios.ehNumero("Não é número")).toBe(false);
        expect(utilitarios.ehNumero(undefined)).toBe(false);
        expect(utilitarios.ehNumero(NaN)).toBe(false);
    });

    test("Teste validando se retorna a primeira informação da lista", () => {
        expect(utilitarios.primeiroElemento([2,5,2,35,6])).toEqual(2);
        expect(utilitarios.primeiroElemento([])).toBeUndefined();
        expect(utilitarios.primeiroElemento([1])).toEqual(1);
    });

    test("Teste validando se retorna a última informação da lista", () => {
        expect(utilitarios.ultimoElemento([2,5,2,35,6])).toEqual(6);
        expect(utilitarios.ultimoElemento([])).toBeUndefined();
        expect(utilitarios.ultimoElemento([1])).toEqual(1);
    });

    test("Teste validando se retorna o tamanho da lista", () => {
        expect(utilitarios.tamanhoArray([2,5,2,35,6])).toEqual(5);
        expect(utilitarios.tamanhoArray([])).toEqual(0);
        expect(utilitarios.tamanhoArray([1])).toEqual(1);
    });

    test("Teste validando se inverte a lista", () => {
        expect(utilitarios.inverterArray([2,5,2,35,6])).toEqual([6,35,2,5,2]);
        expect(utilitarios.inverterArray([1])).toEqual([1]);
    });

    test("Teste validando se ordena a lista", () => {
        expect(utilitarios.ordenarArray([2,5,2,35,6])).toEqual([2,2,5,6,35]);
        expect(utilitarios.ordenarArray([-1,-2,-3])).toEqual([-3,-2,-1]);
    });


    test("Teste validando se remove duplicados da lista", () => {
        expect(utilitarios.removerDuplicados([2,5,2,35,6])).toEqual([2,5,35,6]);
        expect(utilitarios.removerDuplicados([5,4,3,2,1])).toEqual([5,4,3,2,1]);
    });

    test("Teste validando o cálculo da média de uma lista", () => {
        expect(utilitarios.mediaArray([2, 5, 2, 35, 6])).toEqual(10);
        expect(utilitarios.mediaArray([-1, -2, -3])).toEqual(-2);
        expect(utilitarios.mediaArray([2.5, 3.5, 4.5])).toEqual(3.5);
        expect(utilitarios.mediaArray([])).toEqual(0);
        expect(utilitarios.mediaArray([10])).toEqual(10);
        expect(utilitarios.mediaArray([1, -2, 3, -4])).toEqual(-0.5);
    });
});
