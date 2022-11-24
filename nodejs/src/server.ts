import "reflect-metadata";
import { AppDataSource } from "./datasource";
import fs from 'fs';
import { pessoanode } from './pessoanode';
import express from 'express'
const app = express();
const pessoaRepo = AppDataSource.getRepository(pessoanode);


app.get("/salva", async(req, res) => {
    try{
        const dados: pessoanode[] = JSON.parse(fs.readFileSync('./src/data.json', 'utf8'));
        console.time('salvando o array todo')
        pessoaRepo.save(dados);
        console.timeEnd('salvando o array todo')
        res.status(200);
    } catch(err) {
        console.error(err);
        res.status(500);
    }
});

app.get("/salva/percorre", async(req, res) => {
    const dados: pessoanode[] = JSON.parse(fs.readFileSync('./src/data.json', 'utf8'));
    //Percorrer o array, salvando um por um
    console.time('total um por um')
    for await (let pessoa of dados){
        console.time('unitario')
        await pessoaRepo.save(pessoa)
        console.timeEnd('unitario')
    }
    console.timeEnd('total um por um')
    res.end()
})

// app.get("/salva/qtde/:qtde", async(req, res) => {
//     const s = `periodo completo para salvar o array ${req.params.qtde} vezes`;
//     console.time(s)
//     // new Promise((resolve) => {
//         await salvandoNArrays(Number(req.params.qtde)).then(r => {
//             console.timeEnd(s);

//         })
//     // }).then(() => {
//     //     res.end();
//     // })
        
   
// })

// async function salvandoNArrays(iqtde: number) {
//     const dados: pessoanode[] = JSON.parse(fs.readFileSync('./src/data.json', 'utf8'));
//     return new Promise((resolve) => {
//         for (let i: number = 0; i <= iqtde; i++) {
//             pessoaRepo.save(dados);
//         }
//     })
// }





AppDataSource.initialize()
    .then(() => {
        app.listen(3000, () => {
            console.log("Server funcionando")
        }) 
        console.log("Conectado na base")
    })
    .catch((error) => console.log(error))