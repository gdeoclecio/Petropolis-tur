package com.petropolistur.api.model;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Setter;

//Anotação do Lombok que gera automaticamente todos os getters, setters, toString e equals — sem precisar escrever um por um.
@Data

//Avisa o Spring Boot: "essa classe representa uma tabela no banco de dados".
@Entity

//Define o nome da tabela no banco. Sem essa anotação, o Spring usaria o nome da classe (Local) como nome da tabela.
@Table(name = "locais")

public class Local {

    @Id //Marca qual atributo é a chave primária da tabela — igual ao PRIMARY KEY que você aprendeu em SQL
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter // força o Lombok a gerar o setter do id
    //Diz que o banco de dados vai gerar o id automaticamente a cada novo registro — igual ao AUTO_INCREMENT do MySQL.

    //private Long id, Long é usado para id porque suporta números muito grandes — um banco com milhares de registros nunca vai estourar o limite.

    //atributos
    private Long id;
    private String nome;
    private String categoria;
    private String descricao;
    private String imagem;
    private String endereco;
}
//A classe Local representa a tabela locais no banco, onde cada atributo é uma coluna e o id é gerado automaticamente