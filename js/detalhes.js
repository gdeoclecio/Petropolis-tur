// Lê os parâmetros da URL (ex: ?id=1)
const params= new URLSearchParams(window.location.search);
// Pega o valor do parâmetro "id" da URL
const id= params.get("id"); 
// Busca no array o objeto cujo id é igual ao id da URL
// Number(id) converte o id de texto para número
const local= locais.find(l => l.id === Number(id));
// Mostra as informações encontrado na div#detalhes, que são os locais, botão de voltar antes das informações
document.getElementById("detalhes").innerHTML= '<a href="locais.html">← Voltar</a>' +'<img src="' + local.imagem + '" alt="' + local.nome + '">' 
    '<h1>' + local.nome + '</h1>' +
    '<p>' + local.categoria + '</p>' +
    '<p>' + local.descricao + '</p>' +
    '<p>' + local.endereco + '</p>';