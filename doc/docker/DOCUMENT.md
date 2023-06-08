# ENDPOINT API GATEWAY


- MAIN
    - URL: https://apigateway-production.up.railway.app/api/
    - GET: 
        - response: 'Connect Endpoint API Gateway'

- USER
    - URL: https://apigateway-production.up.railway.app/api/user
    - GET: response in json format with all data
    - POST: 
        - request send json format
            ```json
            { 
                "firstName": "Teste",
                "lastName": "Testando",
                "role": "4185c33e-eb3c-47ed-a533-da2d92d86acb"
            }    
            ```
        - response return json format
            ```json
            {
                "firstName": "Teste",
                "lastName": "Testando",
                "role": "4022b2f5-d3e3-4ef8-8b7e-e13934327223",
                "deletedDate": null,
                "id": "7effc5dd-178f-4fae-b76a-06ec677cad5b",
                "createdDate": "2023-06-07T22:00:09.807Z",
                "updatedDate": "2023-06-07T22:00:09.807Z",
                "version": 1
            }
            ```
- ROLE        
    - URL: https://apigateway-production.up.railway.app/api/role
    - GET: response in json format with all data
    - POST: 
        - request send json format
        - response return json format

- LOGS        
    - URL: https://apigateway-production.up.railway.app/api/logs
    - GET: response in json format with all data