function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
        section.innerHTML = "<p>Não encontramos nada, por favor tente pesquisar chocolate, ladrão ou css!</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";
    //para fazer "marca texto"
    let regex = new RegExp(`(${campoPesquisa})`, 'gi');

    for (let dado of dados) {
        let titulo = dado.titulo.toLowerCase();
        let descricao = dado.descricao.toLowerCase();
        let tags = dado.tags.toLocaleLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Destaca a palavra pesquisada no título e na descrição
            let tituloDestacado = dado.titulo.replace(regex, '<mark>$1</mark>');
            let descricaoDestacada = dado.descricao.replace(regex, '<mark>$1</mark>');

            resultados += `
            <div class="item-resultado">
                <h2>${tituloDestacado}</h2>
                <p>${descricaoDestacada}</p>
                <a href="${dado.link}" target="_blank">Clique para saber mais!</a>
            </div>`;
        }
    }

    if (!resultados) {
        resultados = "<p>Não encontramos nada, por favor tente pesquisar chocolate, ladrão ou css!</p>";
    }

    section.innerHTML = resultados;
}

document.getElementById("campo-pesquisa").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Evita o envio do formulário se for o caso
        pesquisar();
    }
});