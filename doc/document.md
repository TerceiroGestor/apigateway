# DOCUMENTAÇÃO

``` json
{
    "API_URL": "https://apigateway-production.up.railway.app/api/"
}
```

<details><summary>ENDPOINTS</summary>

```json
[
  {
    "path": "/endpoints",
    "methods": [
      "GET"
    ],
    "middlewares": [
      "anonymous"
    ]
  },
  {
    "path": "/:item?/:value?",
    "methods": [
      "POST",
      "GET",
      "PUT",
      "DELETE"
    ],
    "middlewares": [
      "create",
      "read",
      "update",
      "delete"
    ]
  },
  {
    "path": "/register",
    "methods": [
      "POST"
    ],
    "middlewares": [
      "create"
    ]
  },
  {
    "path": "/user",
    "methods": [
      "GET",
      "PUT",
      "DELETE"
    ],
    "middlewares": [
      "authenticationMiddleware",
      "authorizationMiddleware",
      "read",
      "authenticationMiddleware",
      "authorizationMiddleware",
      "update",
      "authenticationMiddleware",
      "authorizationMiddleware",
      "delete"
    ]
  },
  {
    "path": "/login",
    "methods": [
      "POST",
      "GET",
      "DELETE"
    ],
    "middlewares": [
      "signIn",
      "authenticationMiddleware",
      "authorizationMiddleware",
      "signInState",
      "authenticationMiddleware",
      "authorizationMiddleware",
      "signOut"
    ]
  },
  {
    "path": "/logs",
    "methods": [
      "GET"
    ],
    "middlewares": [
      "authenticationMiddleware",
      "authorizationMiddleware",
      "read"
    ]
  }
]
```

</details>

<hr>

>Para realizar os testes utilize a rota [main]('https://apigateway-production.up.railway.app/api/') para testar todos os metodos e a envio de dados como Authorization, Body, Params. Veja o exemplo abaixo

```json
    {
        "path": "https://apigateway-production.up.railway.app/api/:item?/:value?", //item(id, name...) e value
        "methods": [
        "POST", // retorna os valores passado no Headers.Authorization e Body
        "GET" // retorna os valores passado no Headers.Authorization params /:item?/:value?
        "PUT", // retorna os valores passado no Headers.Authorization e Body
        "DELETE" // retorna os valores passado no Headers.Authorization e Body
        ],
    },

    // Exemplo de valores utilizandos em body
    { 
        "name": "name",
        "email":"email",
        "password":"password",
        "id": "uuid", // 390e2296-7500-4f2f-83b2-bbf99e2308f8
        "firebase_uid": "firebase_uid" //PpSrODvJ2HVV7WRZuMaUMYOnaSN2
    }

```
