package com.petropolistur.api.controller;

import com.petropolistur.api.model.Local;
import com.petropolistur.api.repository.LocalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "*")//aceita requisições de qualquer origem

// Marca a classe como Controller — recebe requisições HTTP e devolve dados em JSON
@RestController

//Define o endereço base. Todo método dessa classe responde em /locais
@RequestMapping("/locais")
public class LocalController {

// Injeta o LocalRepository automaticamente — o Spring cria e entrega pronto
  @Autowired 
  private LocalRepository repository;

  // Responde ao GET /locais — retorna a lista completa de locais do banco
     @GetMapping
     public List<Local> listarTodos() {
       return repository.findAll();// busca todos os registros da tabela locais
}
//Diz que esse método responde quando alguém faz uma requisição POST para /locais — ou seja, quando alguém quer cadastrar um novo local.
@PostMapping
public Local cadastrar(@RequestBody Local local) {
    return repository.save(local);
}

// Atualiza os dados de um local existente pelo id
@PutMapping("/{id}")
public Local atualizar(@PathVariable Long id, @RequestBody Local local){
    local.setId(id);
    return repository.save(local);
}
    

// Deleta um local pelo id
@DeleteMapping("/{id}")
public void deletar (@PathVariable Long id){
    repository.deleteById(id);
}

}


//retornaremos os dados do banco


