// Lê os parâmetros da URL atual
// Exemplo: detalhes.html?id=3
const params = new URLSearchParams(window.location.search);

// Pega o valor do parâmetro "id" da URL
// Esse valor vem como texto (string)
const id = params.get("id");

// Faz uma requisição GET para buscar o local na API pelo id
fetch(`http://localhost:8080/locais/${id}`)

  // Quando a resposta chegar, entra aqui
  .then(response => {

    // Verifica se a resposta não foi OK (ex: 404 ou 500)
    if (!response.ok) {
      throw new Error("Local não encontrado ou erro na API");
    }

    // Converte a resposta em JSON (transforma em objeto JavaScript)
    return response.json();
  })

  // Aqui recebemos o JSON convertido (o objeto local)
  .then(local => {

    // Insere o conteúdo dentro da div com id="detalhes"
    document.getElementById("detalhes").innerHTML =
      '<a href="locais.html">← Voltar</a>' +
      '<img src="' + local.imagem + '" alt="' + local.nome + '">' +
      '<h1>' + local.nome + '</h1>' +
      '<p><strong>Categoria:</strong> ' + local.categoria + '</p>' +
      '<p><strong>Descrição:</strong> ' + local.descricao + '</p>' +
      '<p><strong>Endereço:</strong> ' + local.endereco + '</p>';
  })

  // Se der erro (API fora do ar, id errado, etc) cai aqui
  .catch(error => {
    console.error("Erro:", error);

    // Mostra mensagem de erro na tela
    document.getElementById("detalhes").innerHTML =
      "<p>Erro ao carregar os detalhes do local.</p>";
  });