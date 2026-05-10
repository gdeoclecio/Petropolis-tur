package com.petropolistur.api.repository;
import com.petropolistur.api.model.Local;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//Anotação que avisa o Spring Boot: "essa interface é responsável por acessar o banco de dados". O Spring usa isso para gerenciar ela automaticamente.
@Repository

//É uma interface, não uma classe. Lembra que interface é um contrato? Aqui estamos definindo que LocalRepository vai ser responsável pelos dados de Local.
//Aqui esta a herança! Estamos herdando de JpaRepository uma interface do Spring que ja tem metodos prontos para acessar p banco.
//o Local, long diz que "esse repository trabalha com a classe Local e o id é tipo Long"
public interface LocalRepository extends JpaRepository<Local, Long>{
    
}
// aqui vamos acessar o banco de dados