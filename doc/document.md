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

<details><summary>TESTE DE COMUNICAÇÃO</summary>

>Para realizar os testes utilize a rota [main]('https://apigateway-production.up.railway.app/api/') para testar todos os metodos e o envio de dados como Authorization, Body, Params. Veja o exemplo abaixo

```javascript
    {
        "path": "https://apigateway-production.up.railway.app/api/:item?/:value?", //item(id, name...) e value
        "methods": [
        "POST", // retorna os valores passado no Headers.Authorization e Body
        "GET" // retorna os valores passado no Headers.Authorization params /:item?/:value?
        "PUT", // retorna os valores passado no Headers.Authorization e Body
        "DELETE" // retorna os valores passado no Headers.Authorization e Body
        ],
    },

    // Exemplo de valores utilizandos no body
    { 
        "name": "name",
        "email":"email",
        "password":"password",
        "id": "uuid", // 390e2296-7500-4f2f-83b2-bbf99e2308f8
        "firebase_uid": "firebase_uid" //PpSrODvJ2HVV7WRZuMaUMYOnaSN2
    }

```

</details>

<details><summary>REGISTRO</summary>

```json
    {
        "path": "https://apigateway-production.up.railway.app/api/register",
        "methods": [
            "POST"
        ],
        "body":{ 
            "name": "name",
            "email":"email",
            "password":"password"
        }
        
    }

```

</details>

<details><summary>LOGIN</summary>

<hr>

## SIGNIN

```javascript
    {
        "path": "https://apigateway-production.up.railway.app/api/login",
        "methods": [
            "POST"
        ],
        "body":{ 
            "email":"email",
            "password":"password"
        }
        
    }

    // response
    {
        "user_id": "76d8e695-4502-40c5-a1e2-e4a54932b046",
        "firebase_uid": "167dvRv7mNfT1pV4JDo8KNiW60I2",
        "email": "email1@email.com",
        "emailVerified": false,
        "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjU0NWUyNDZjNTEwNmExMGQ2MzFiMTA0M2E3MWJiNTllNWJhMGM5NGQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdGVyY2Vpcm8tZ2VzdG9yIiwiYXVkIjoidGVyY2Vpcm8tZ2VzdG9yIiwiYXV0aF90aW1lIjoxNjg2NDIyOTQ1LCJ1c2VyX2lkIjoiMTY3ZHZSdjdtTmZUMXBWNEpEbzhLTmlXNjBJMiIsInN1YiI6IjE2N2R2UnY3bU5mVDFwVjRKRG84S05pVzYwSTIiLCJpYXQiOjE2ODY0MjI5NDUsImV4cCI6MTY4NjQyNjU0NSwiZW1haWwiOiJlbWFpbDFAZW1haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImVtYWlsMUBlbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.bMEiM_R_t8KOCSp5cm-LtN-6X-_Tm7GGzM4Ogu-6wp1PxWchWqe9BIfWwlD-K52cVwniiZqKEWwaZEDljP4CK61OguSLE3cIIQ6543x49fqa_wY11frF8Rw0ynXNkEaFHxmp5kaX2BwW37oh8twJbJtD0e7yssm_wzknhOXiWLr8pUhNs3PdoyLuQOD-j0Fw8jEEK0PCY0_xD7nBSQcZPEIEFSk0npo5nQTYPvorxaXk-ovNHhA0Af1cZw2MLXQ2CQ63VL7jG_7hGBnu2uvH_cLK2jctAhWRsqhHhNfIHOKZigGfpo8bjqdqCbZd3Qzz-q0zEoza-v6dA1OSjoYclw",
        "accessInfo": null,
        "deleted": null,
        "id": "56ebda69-5213-4051-a5e1-f1f34b0465f0",
        "created": "2023-06-10T18:49:05.630Z",
        "updated": "2023-06-10T18:49:05.630Z",
        "version": 1
    }

```

>Aqui o response retorna o "accessToken" que será sempre utilizado no Headers.Autorization para futuras requisições.

## LOGGED

>Para testar se o login foi bem sucedido acesse.

```json
    {
        "path": "https://apigateway-production.up.railway.app/api/login",
        "methods": [
            "GET"
        ],
        "headers": [
            "Authorization": "accessToken"
        ]

        
    } 
```

>Response logged in user data.

## SIGNOUT

>Para finalizar o login.

```json
    {
        "path": "https://apigateway-production.up.railway.app/api/login",
        "methods": [
            "DELETE"
        ],
        "headers": [
            "Authorization": "accessToken"
        ]

        
    } 
```

<hr>

</details>

<details><summary>LOGs</summary>

```json
    {
        "path": "https://apigateway-production.up.railway.app/api/logs",
        "methods": [
            "GET"
        ],
        "headers": [
            "Authorization": "accessToken"
        ]
    }

```

>Response all data logs

</details>

<details><summary>USER</summary>

```json
    {
        "path": "https://apigateway-production.up.railway.app/api/user",
        "methods": [
            "GET"
        ],
        "headers": [
            "Authorization": "accessToken"
        ]
    }

```

>Response all data user

</details>