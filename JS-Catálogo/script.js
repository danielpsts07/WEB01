let filmes = [
    {titulo: "interstellar", ano: 2014, genero: "Ficção", nota: 8.7, poster: "assets/interstellar.jpg"},
    {titulo: "Homem-Aranha: Sem Volta para Casa", ano: 2021, genero: "Ação", nota: 8.1, poster: "assets/homemaranhasemvolta.png"},
    {titulo: "Vingadores Ultimato", ano: 2019, genero: "Ação", nota: 8.4, poster: "assets/VingadoresUltimato"},
    {titulo: "Minha mãe é uma Peça 3", ano: 2019, genero: "Comédia", nota: 7.1, poster: "assets/minhaMãePeça3.jpg"},
    {titulo: "carros 3", ano: 2017, genero: "Animação", nota: 6.7, poster: "assets/carros3.jpg"},
    {titulo: "obsessão", ano: 2026, genero: "Terror", nota: 8.2, poster: "assets/obsessão.webp"},
    {titulo: "Toy Story 5", ano: 2026, genero: "Animação", nota: 8.3, poster: "assets/toyStory5.jpeg"},
    {titulo: "Frankenstein", ano: 2025, genero: "Terror", nota: 7.5, poster: "assets/frankenstein.jpg"},
];
let favoritosFilmes = [];
let listaAtual = []





let contador = document.getElementById("contador");
function mostrarFilmes(lista){
    let catalogo = document.getElementById("catalogo");
    catalogo.innerHTML = "";

    for (let i = 0; i < lista.length;i++){

        let selo;
        if (lista[i].nota >= 8){
            selo = "<img class = 'estrelaDestaque' src='assets/2117160.webp'>Recomendado"
        }
        else{
            selo = "";
        }

        catalogo.innerHTML += `
            <div class="filme">
                <img class="poster" src="${lista[i].poster}">
                <div class="informações">
                    <div>
                        <h3 class=" tituloPoster">${lista[i].titulo}</h3>
                        <span class="ano">${lista[i].ano}</span>
                        <span class="genero">${lista[i].genero}</span>
                        <span class="nota">Nota: ${lista[i].nota}</span>
                    </div>
                    <div class="favoritosRecomendado">
                        <span class="seloRecomendado">${selo}</span>
                        <button class ="btnFavoritar" onclick="favoritar(${i})">Favoritar</button>
                    </div>
                </div>
            </div>
        `
    }
    listaAtual = lista;
    contador.innerText = "Total de filmes: " + lista.length;
    if (lista.length === 0) {
        catalogo.innerHTML = "<p>Nenhum filme encontrado</p>";
    }
}
mostrarFilmes(filmes);



let campoBusca = document.getElementById("busca")
campoBusca.addEventListener("input",function(){
    let letra = campoBusca.value.toLowerCase()
    let resultado = [];
    for (let filme of filmes){
        if(filme.titulo.toLowerCase().includes(letra)){
            resultado.push(filme)
        }
    }
    mostrarFilmes(resultado)
});


let filtro = document.getElementById("filtroGenero");
filtro.addEventListener("change",function(){
    escolhaGenero = filtro.value;
    let resultado = [];

    if(escolhaGenero === "todos"){
        mostrarFilmes(filmes)
    } else{
        for (let filme of filmes){
            if(filme.genero === escolhaGenero){
                resultado.push(filme)
            }
        }
        mostrarFilmes(resultado)
    }

})


let inverter = document.getElementById("inverter");
inverter.addEventListener("click",function(){
    filmes.reverse()
    mostrarFilmes(filmes);
})



let contadorFavoritos = document.getElementById("contadorFavoritos");
let listaFavoritos = document.getElementById("listaFavoritos");
let limparFavoritos = document.getElementById("limparFavoritos");
limparFavoritos.addEventListener("click",function(){
    favoritosFilmes = [];
    listaFavoritos.innerHTML = ""
    contadorFavoritos.innerHTML =""
})




function favoritar(i){
    let titulo = listaAtual[i].titulo;
    if (!favoritosFilmes.includes(titulo)){
        favoritosFilmes.push(titulo)
    }
    contadorFavoritos.innerText = ""
    contadorFavoritos.innerHTML = "Quantidade de favoritos: " + favoritosFilmes.length; 

    listaFavoritos.innerHTML = ""
    for (let filme of favoritosFilmes ){
        listaFavoritos.innerHTML += `
            <li>${filme}</li>
        `
    }
}

let tituloPrincipal = document.getElementById("tituloPrincipal")
tituloPrincipal.addEventListener("mouseenter",function(){
    tituloPrincipal.style.color = "gold";
})

tituloPrincipal.addEventListener("mouseout",function(){
    tituloPrincipal.style.color = "#CDB0A1";
})
