# DOCUMENTAÇÃO

<details><summary>ENDPOINT</summary>

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