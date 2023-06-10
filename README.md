# API Gateway

O API Gateway nada mais é do que um gerenciador de tráfego que faz a interface com o serviço de back-end real ou de dados.  Em seguida, aplica políticas, autenticação e controle de acesso geral para chamadas de APIs, com o objetivo de proteger dados sigilosos e importantes.

<hr>

<details><summary>HISTÓRICO DE DESENVOLVIMENTO</summary>

<details><summary>26/05/2023 - Estudo das Tecnologias</summary>

- Estudo do TypeScript
- Estudo do TypeORM
- Configuração do Ngrok para testes de requisição
- Configuração do Debug, para agilizar o processo de desenvolvimento
- Iniciando registro de logs
- Configurações do framework para uso geral tanto da API Gateway quando das demais API Services
  - container separado database "postgres'
  - container API Gateway
  - teste de consultas no database: create, read.
  - teste de relações

</details>


<details><summary>05/06/2023 - Estudo do Docker</summary>

- Configuração do docker-compose
  - utilizando network para comunicar api com database
- Testes de comunicação, manutenção da API e do Database  

</details>

<details><summary>06/06/2023 - Definindo a Estrutura de Desenvolvimento</summary>

- Definindo a estrutura
- Configurando um Banco de Dados online para iniciar os testes da estrutura
- Definido a estrutura de API Gateway com os Serviços
- Definido o endpoint principal para o FrontEnd
  - Exemplo de endpoint: <https://terceirogestor/api/{service}>, com os dados no corpo da requisição, pode usar por exemplo o "AXIOS" para fazer esta requisição:

    ```javascript
    const data = {
      nome: 'Exemplo',
      idade: 25,
      email: 'exemplo@example.com'
    };
    
    axios.post(ENDPOINT + '{service}', data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer <token>'
      }
    }).then(response => {
      console.log(response.data);
    }).catch(error => {
      console.error(error);
    });
    ```

  - Com esse endpoint o API Gateway consegue enter o serviço que está sendo requisitado, e por meio da rota depois de fazer a autenticação e verificar a autorização faz outra requisição para o serviço e essim retorna a resposta.

</details>

<details><summary>10/06/2023 - API Gateway - Register</summary>

- Serviço de resgitro
- Definido endpoint principal
- Registro de Log
- Registro de Login

    ```typescript
      import fetch from 'node-fetch';

      await fetch('https://apigateway-production.up.railway.app/api', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer <token>'
                },
                body: JSON.stringify({
                  name: "name",
                  email:"email",
                  password:"password",
                  id: "uuid", //390e2296-7500-4f2f-83b2-bbf99e2308f8
                  firebase_uid: "firebase_uid" // PpSrODvJ2HVV7WRZuMaUMYOnaSN2
                })
            }
          );
    ```

- Para realizar o teste de comunicação com a API Gateway foi criado uma rota 'main' para testar todos os metodos e as respostas para verficiar se a API está recebendo o 'Authorization','body', 'params'.
- Para realizar os teste acesse o link abaixo

</details>

</details>

<hr>

[DOCUMENTAÇÃO](doc/document.md)
<hr>

<details><summary>PRÓXIMAS ETAPAS</summary>

- Finalizar o REGISTER
  - Autenticação via Google
  - Verificação de email
  - Update password

</details>

<hr>