let filmes = [
    {titulo: "interstellar", ano: 2014, genero: "ficção", nota: 8.7, poster: "assets/interstellar.jpg"},
    {titulo: "Homem-Aranha: Sem Volta para Casa", ano: 2021, genero: "ação", nota: 8.1, poster: "assets/homemaranhasemvolta.png"},
    {titulo: "Vingadores Ultimato", ano: 2019, genero: "ação", nota: 8.4, poster: "assets/VingadoresUltimato"},
    {titulo: "Minha mãe é uma Peça 3", ano: 2019, genero: "comédia", nota: 7.1, poster: "assets/minhaMãePeça3.jpg"},
    {titulo: "carros 3", ano: 2017, genero: "animação", nota: 6.7, poster: "assets/carros3.jpg"},
    {titulo: "obsessão", ano: 2026, genero: "terror", nota: 8.2, poster: "assets/obsessão.webp"},
    {titulo: "Toy Story 5", ano: 2026, genero: "animação", nota: 8.3, poster: "assets/toyStory5.jpeg"},
    {titulo: "Frankenstein", ano: 2025, genero: "terror", nota: 7.5, poster: "assets/frankenstein.jpg"},
];
let favoritosFilmes = [];
let listaAtual = []
listaAtual = filmes

let totalFilmes = filmes.length;
let contador = document.getElementById("contador");
contador.innerHTML += "Total de filmes: " + totalFilmes;

function mostrarFilmes(filmes){
    let catalogo = document.getElementById("catalogo");
    catalogo.innerHTML = "";

    for (let i = 0; i < filmes.length;i++){

        let selo;
        if (filmes[i].nota >= 8){
            selo = "recomendado"
        }
        else{
            selo = "";
        }

        catalogo.innerHTML += `
            <div class="filme">
                <img class="poster" src="${filmes[i].poster}">
                <h3 class=" tituloPoster">${filmes[i].titulo}</h3>
                <span class="ano">${filmes[i].ano}</span>
                <span class="genero">${filmes[i].genero}</span>
                <span>${filmes[i].nota}</span>
                <span>${selo}</span>
                <button onclick="favoritar(${i})">Favoritar</button>
            </div>
        `
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

    if(escolhaGenero == "todos"){
        mostrarFilmes(filmes)
    } else{
        for (let filme of filmes){
            if(filme.genero === escolhaGenero){
                resultado.push(filme)
            }
            mostrarFilmes(resultado)
        }
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
    let arrayVazio =[];
    favoritosFilmes = arrayVazio;
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
