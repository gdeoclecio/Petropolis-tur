const container=document.getElementById("lista-locais");


function renderizarLocais(lista) {
    container.innerHTML = '';// limpa os cards anteriores antes de renderizar
lista.forEach(l=>{
    // cria um card clicável para cada local, passando o id pela URL
    container.innerHTML += '<a href="../pages/detalhes.html?id=' + l.id + '">' +
        '<div class="card">' +
            '<img src="' + l.imagem + '" alt="' + l.nome + '">' +
            '<h2>' + l.nome + '</h2>' +
            '<p>' + l.categoria + '</p>' +
        '</div>' +
    '</a>';
})
}
renderizarLocais(locais);

/* Vai filtrar as categorias, se o usuario clicar em todos, aparece tudo, senão aparece a categoria escolhida*/
function filtrar(categoria){
    if(categoria=== "Todos"){
        renderizarLocais(locais)
    }else{
       const resultado =locais.filter(l => l.categoria === categoria);
       renderizarLocais(resultado);
    }
}

//faz uma busca pelo nome 
function buscar(){
    const termo= document.getElementById("busca").value;
     const resultado = locais.filter(l => l.nome.includes(termo));
    renderizarLocais(resultado);
}