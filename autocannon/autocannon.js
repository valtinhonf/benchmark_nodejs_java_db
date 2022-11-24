import autocannon from 'autocannon'

async function nodejs_salvando_array_unicavez(){
 const result = await autocannon({
        title: 'Salvando o array todo em nodeJS',
        url: 'http://localhost:3000/salva',
        method: 'GET',
        connections: 1000, //default
        pipelining: 1, // default
        duration: 10 // default
    });
    console.log(result);
}

async function java_salvando_array_unicavez(){

    const result = autocannon({
        title: 'Salvando o array todo em JAVA',
        url: 'http://localhost:8080/salva',
        method: 'GET',
        connections: 1000, //default
        pipelining: 1, // default
        duration: 10 // default
    })

    console.log(result);
}

nodejs_salvando_array_unicavez();
//java_salvando_array_unicavez();