package com.example.benchmark;

import net.bytebuddy.asm.Advice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.config.IntervalTask;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.Duration;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import java.util.concurrent.TimeUnit;

@RestController
@CrossOrigin(origins = "*")
public class controller {

    @Autowired
    repo repo;

    @GetMapping("/salva")
    public ResponseEntity<?> salvaOArrayTodo(){
        LocalTime ini = LocalTime.now();
        repo.saveAll(pessoajava.carregaLista());
        TimeUnit timeunit;
        System.out.println(Duration.between(ini, LocalTime.now()).toMillis());
        return ResponseEntity.ok().build();
    }

    @GetMapping("/salva/percorre")
    public ResponseEntity<?> salvaPercorrendoOArrayTodo(){
        LocalTime ini = LocalTime.now();
        List<pessoajava> pessoas = pessoajava.carregaLista();
        for (pessoajava pessoa:pessoas) {
            LocalTime inireg = LocalTime.now();
            repo.save(pessoa);
            System.out.println("Duração do registro: " + Duration.between(inireg, LocalTime.now()).toMillis());
        }
        TimeUnit timeunit;
        System.out.println("Duração total: " + Duration.between(ini, LocalTime.now()).toMillis());
        return ResponseEntity.ok().build();
    }
}
