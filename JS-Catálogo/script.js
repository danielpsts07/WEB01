let filmes = [
    {titulo: "interstellar", ano: 2014, genero: "ficção", nota: 8.7, poster: "assets/interstellar.jpg"},
    {titulo: "Homem-Aranha: Sem Volta para Casa", ano: 2021, genero: "ação", nota: 8.1, poster: "assets/homemaranhasemvolta.png"},
    {titulo: "Vingadores Ultimato", ano: 2019, genero: "ação", nota: 8.4, poster: "assets/VingadoresUltimato"},
    {titulo: "Minha mãe é uma Peça 3", ano: 2019, genero: "comédia", nota: 7.1, poster: "assets/minhaMãePeça3.jpg"},
    {titulo: "carros 3", ano: 2017, genero: "animação", nota: 6.7, poster: "assets/carros3.jpg"},
    {titulo: "obsessão", ano: 2026, genero: "terror", nota: 8.2, poster: "assets/obsessão.webp"},
    {titulo: "Toy Story 5", ano: 2026, genero: "animação", nota: 8.3, poster: "assets/toyStory5.jpeg"},
    {titulo: "Frankenstein", ano: 2025, genero: "terror", nota: 7.5, poster: "assets/frankenstein.jpg"},
]
let totalFilmes = filmes.length;
let contador = document.getElementById("contador");
contador.innerHTML += "Total de filmes: " + totalFilmes;
function mostrarFilmes(filmes){
    let catalogo = document.getElementById("catalogo");
    catalogo.innerHTML = "";

    for (filme of filmes){

        let selo;
        if (filme.nota >= 8){
            selo = "recomendado"
        }
        else{
            selo = "";
        }

        catalogo.innerHTML += `
            <div class="filme">
                <img class="poster" src="${filme.poster}">
                <h3 class=" tituloPoster">${filme.titulo}</h3>
                <span class="ano">${filme.ano}</span>
                <span class="genero">${filme.genero}</span>
                <span>${filme.nota}</span>
                <span>${selo}</span>
            </div>
        `

    }
}

mostrarFilmes(filmes)