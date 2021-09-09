let catalogo = [
    {
        codigo: 1,
        titulo: "A Hora do Rush",
        anoDeLancamento: 1998,
        duracao: 1.7, 
        emCartaz: false,   
        faturamento: 1000000     
    }, 
    {
        codigo: 2,
        titulo: "Velozes e Furiosos 9",
        anoDeLancamento: 2021,
        duracao: 2.5,
        emCartaz: true,
        faturamento: 1263489713618
    },
    {
        codigo: 3,
        titulo: "Homem aranha",
        anoDeLancamento: 2021,
        duracao: 2.5,
        emCartaz: true,
        faturamento: 0
    }
];

function adicionarFilme(codigo, titulo, anoDeLancamento, filmeEstaEmCartaz) {
    catalogo.push({
        codigo,
        titulo,
        anoDeLancamento,
        emCartaz: filmeEstaEmCartaz        
    });
    console.log("Filme adicionado");
    console.log(catalogo);
}

function buscarFilme() {
    // Receber como parametro o codigo do filme
    // Buscar no array do catálogo o filme pelo seu código array.find
    // Console.log(filmeEncontrado)
}

function alterarStatusEmCartaz() {
    // Receber como parametro o código do filme
    // Encontrar o filme no catálogo pelo código
    // Alterar o status emCartaz para seu inverso (se for true, vira false)
    // Atualizar o array de catalogo com o filme alterado
}

function listarTodosFilmes() {
    catalogo.forEach((item) => console.log(item.titulo + ", " + item.anoDeLancamento + ". Duração: " + item.duracao));
}

function listarFilmesLongos() {
    let filmesLongos = catalogo.filter((item) => item.duracao > 2);
    filmesLongos.forEach((item) => console.log(item.titulo + ", " + item.anoDeLancamento + ". Duração: " + item.duracao));
}

function listarTodosFilmes2() {
    let filmesResumo = catalogo.map(item => {
        return {            
            resumo: item.titulo + ", " + item.anoDeLancamento + ". Duração: " + item.duracao,
            ...item
        }
    });
    filmesResumo.forEach(item => console.log(item.resumo));
}

function buscarFilmePeloCodigo(codigo) {
    let { titulo } = catalogo.find(item => item.codigo === codigo);
    console.log(titulo);
}

function calcularFaturamento() {
    // Utilizar o método reduce do array para calcular o total de faturamento dos filmes
    let total = catalogo.reduce(getTotal, 0);
function getTotal(total, item) {
 return total + item.faturamento;
}
console.log(total)
}

module.exports = {
    adicionarFilme,
    buscarFilme,
    alterarStatusEmCartaz,
    listarTodosFilmes,
    listarFilmesLongos,
    listarTodosFilmes2,
    buscarFilmePeloCodigo,
    calcularFaturamento
};