package com.example.benchmark;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.ArrayList;
import java.util.List;

@Entity
public class pessoajava {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nome;
    private String cidade;

    public pessoajava(Integer id, String nome, String cidade) {
        this.id = id;
        this.nome = nome;
        this.cidade = cidade;
    }

    public static List<pessoajava> carregaLista(){
        List<pessoajava> pessoas = new ArrayList<>();
        pessoas.add(new pessoajava(null, "VALTER NEVES FILHO", "ASSIS"));
        pessoas.add(new pessoajava(null, "VALTER NEVES BANDEIRA", "ASSIS"));
        pessoas.add(new pessoajava(null, "LUCIA HELENA VIEIRA NEVES", "ASSIS"));
        pessoas.add(new pessoajava(null, "LUANA VIEIRA NEVES", "ASSIS"));
        pessoas.add(new pessoajava(null, "BEATRIZ BARBOSA SILVÉRIO NEVES", "ASSIS"));
        pessoas.add(new pessoajava(null, "MIGUEL SILVÉRIO NEVES", "ASSIS"));

        return pessoas;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }
}
