function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if(campoPesquisa == ""){
        section.innerHTML="<p>Valor não encontrado</p>"
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Itera sobre os dados dos pilotos
    for (let dados of dado) {
        nome = dados.nome.toLowerCase();
        if(nome.includes(campoPesquisa)){
            // Cria o HTML para um item de resultado
        resultados += `
        <div class="item-resultado">
            <h2>${dados.nome}</h2>
            <p class="descricao-meta">O Piloto Correu pelas equipes ${dados.equipes}</p>
            <p class="descricao-meta">O Piloto está a ${dados.anosNaCategoria} anos na categoria</p>
            <p class="descricao-meta">O Piloto ja ganhou ${dados.titulos} titulos de pilotos</p>
        </div>
    `;
        }  
    }

    // Atualiza o conteúdo da seção com os resultados
    section.innerHTML = resultados;
}