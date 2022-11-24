# benchmark_nodejs_java_db
Projeto que visa de forma grosseira e rápida realizar testes de carga em nodejs e em java, com iteração com base de dados.

Sempre ficou a duvida de qual técnologia respondia melhor em determinada situação, então, foi escrito este pequeno projeto, de forma bastante grosseira, e sem cuidados estéticos ou de melhores práticas em código.

Este prójeto visa realizar inserções em um banco de dados postgres. Os dois projeto possuem exatamente as mesmas rotas(portas diferentes, óbvio) e inserem os mesmos dados na mesma quantidade, visando unicamente o teste de iteração com base de dados.

O resultado já era esperado de que o Java seria um pouco mais rápido do que o nodejs e com menos falhas, devido ao fato de ser uma linguagem híbrida (compilada e interpretada).

**Java**
Usando a versão 17 LTS + Spring 5.7

**NodeJS**
Escrito em typescript, usando a versão 19.1 + Express + TypeORM;

**autocannon**
Projeto usando a lib de mesmo nome, com o objetivo de realizar testes de carga (via API) com centenas ou milhares de requisições simultâneas.
