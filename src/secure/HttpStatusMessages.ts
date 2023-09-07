export class HttpStatusMessages {

    private static statusMessagesEN: Record<number, object> = {
        100: {
            code: 100,
            title: "Continue",
            description: "The server has received the request and needs more information to continue processing."
        },
        101: {
            code: 101,
            title: "Switching Protocols",
            description: "The server agrees to switch the requested protocol."
        },
        102: {
            code: 102,
            title: "Processing",
            description: "The server is processing the request but has not completed it yet."
        },
        103: {
            code: 103,
            title: "Early Hints",
            description: "Indicates that the server is returning preliminary information."
        },
        200: {
            code: 200,
            title: "OK",
            description: "The request was successful."
        },
        201: {
            code: 201,
            title: "Created",
            description: "The request was successful, and a new resource was created as a result."
        },
        202: {
            code: 202,
            title: "Accepted",
            description: "The request has been accepted but has not been completed yet."
        },
        203: {
            code: 203,
            title: "Non-Authoritative Information",
            description: "The response is a representation of the resource's state but is not an authoritative source."
        },
        204: {
            code: 204,
            title: "No Content",
            description: "The request was successful, but there is no information to be returned."
        },
        205: {
            code: 205,
            title: "Reset Content",
            description: "The client should reset the document's view."
        },
        206: {
            code: 206,
            title: "Partial Content",
            description: "The request was partially successful, returning only part of the resource."
        },
        207: {
            code: 207,
            title: "Multi-Status",
            description: "The server has returned information about multiple instances of the requested resource."
        },
        208: {
            code: 208,
            title: "Already Reported",
            description: "The document has been previously reported."
        },
        226: {
            code: 226,
            title: "IM Used",
            description: "The request was completed using the GET request method."
        },
        300: {
            code: 300,
            title: "Multiple Choices",
            description: "The request has multiple options for the requested resource."
        },
        301: {
            code: 301,
            title: "Moved Permanently",
            description: "The resource has been permanently moved to a new location."
        },
        302: {
            code: 302,
            title: "Found",
            description: "The resource has been found at a temporary new location."
        },
        303: {
            code: 303,
            title: "See Other",
            description: "The client should make a GET request for the resource at a new location."
        },
        304: {
            code: 304,
            title: "Not Modified",
            description: "The resource has not been modified since the last request."
        },
        305: {
            code: 305,
            title: "Use Proxy",
            description: "The client should use a specified proxy."
        },
        307: {
            code: 307,
            title: "Temporary Redirect",
            description: "The request has been temporarily redirected to another location."
        },
        308: {
            code: 308,
            title: "Permanent Redirect",
            description: "The request has been permanently redirected to another location."
        },
        400: {
            code: 400,
            title: "Bad Request",
            description: "The request is invalid or malformed."
        },
        401: {
            code: 401,
            title: "Unauthorized",
            description: "Authentication is required to access the resource."
        },
        402: {
            code: 402,
            title: "Payment Required",
            description: "Payment is required to access the resource."
        },
        403: {
            code: 403,
            title: "Forbidden",
            description: "Access to the resource is forbidden."
        },
        404: {
            code: 404,
            title: "Not Found",
            description: "The requested resource was not found."
        },
        405: {
            code: 405,
            title: "Method Not Allowed",
            description: "The request method is not allowed for the resource."
        },
        406: {
            code: 406,
            title: "Not Acceptable",
            description: "The resource is not acceptable according to the client's acceptance settings."
        },
        407: {
            code: 407,
            title: "Proxy Authentication Required",
            description: "Proxy authentication is required to access the resource."
        },
        408: {
            code: 408,
            title: "Request Timeout",
            description: "The request has reached the timeout waiting period."
        },
        409: {
            code: 409,
            title: "Conflict",
            description: "The request conflicts with the current state of the resource."
        },
        410: {
            code: 410,
            title: "Gone",
            description: "The requested resource is no longer available."
        },
        411: {
            code: 411,
            title: "Length Required",
            description: "The request length has not been specified."
        },
        412: {
            code: 412,
            title: "Precondition Failed",
            description: "A precondition in the request has failed."
        },
        413: {
            code: 413,
            title: "Payload Too Large",
            description: "The request payload is too large to be processed."
        },
        414: {
            code: 414,
            title: "URI Too Long",
            description: "The request URI is too long to be processed."
        },
        415: {
            code: 415,
            title: "Unsupported Media Type",
            description: "The media type in the request is not supported by the resource."
        },
        416: {
            code: 416,
            title: "Range Not Satisfiable",
            description: "The request includes a range that cannot be satisfied by the resource."
        },
        417: {
            code: 417,
            title: "Expectation Failed",
            description: "The request failed due to unmet expectations."
        },
        418: {
            code: 418,
            title: "I'm a Teapot",
            description: "The server is a teapot and cannot brew coffee."
        },
        421: {
            code: 421,
            title: "Misdirected Request",
            description: "The request was directed incorrectly."
        },
        422: {
            code: 422,
            title: "Unprocessable Entity",
            description: "The request is valid but cannot be processed."
        },
        423: {
            code: 423,
            title: "Locked",
            description: "The resource is locked, and the request cannot be fulfilled."
        },
        424: {
            code: 424,
            title: "Failed Dependency",
            description: "The request failed due to a dependency failure."
        },
        425: {
            code: 425,
            title: "Too Early",
            description: "The request is too early to be processed."
        },
        426: {
            code: 426,
            title: "Upgrade Required",
            description: "The client must upgrade to continue."
        },
        428: {
            code: 428,
            title: "Precondition Required",
            description: "The request requires a precondition that has not been met."
        },
        429: {
            code: 429,
            title: "Too Many Requests",
            description: "The request has been rejected due to excessive requests."
        },
        431: {
            code: 431,
            title: "Request Header Fields Too Large",
            description: "The request's header fields are too large."
        },
        451: {
            code: 451,
            title: "Unavailable For Legal Reasons",
            description: "Access to the resource is unavailable for legal reasons."
        },
        500: {
            code: 500,
            title: "Internal Server Error",
            description: "The server encountered an internal error while processing the request."
        },
        501: {
            code: 501,
            title: "Not Implemented",
            description: "The server does not support the functionality required for the request."
        },
        502: {
            code: 502,
            title: "Bad Gateway",
            description: "The server acted as a gateway or proxy and received an invalid response."
        },
        503: {
            code: 503,
            title: "Service Unavailable",
            description: "The service is currently unavailable due to overload or maintenance."
        },
        504: {
            code: 504,
            title: "Gateway Timeout",
            description: "The gateway or proxy has reached a timeout while waiting for a response."
        },
        505: {
            code: 505,
            title: "HTTP Version Not Supported",
            description: "The server does not support the HTTP protocol version."
        },
        506: {
            code: 506,
            title: "Variant Also Negotiates",
            description: "The request has multiple representations available, and the server cannot choose one."
        },
        507: {
            code: 507,
            title: "Insufficient Storage",
            description: "The server cannot store the required representation to fulfill the request."
        },
        508: {
            code: 508,
            title: "Loop Detected",
            description: "The request caused an infinite loop detection."
        },
        510: {
            code: 510,
            title: "Not Extended",
            description: "The server requires additional extensions to fulfill the request."
        },
        511: {
            code: 511,
            title: "Network Authentication Required",
            description: "Authentication is required to access the network."
        }

    }

    private static statusMessagesPTBR: Record<number, object> = {
        100: {
            code: 100,
            title: "Continuar",
            description: "O servidor recebeu a solicitação e precisa de mais informações para continuar o processamento."
        },
        101: {
            code: 101,
            title: "Mudando Protocolos",
            description: "O servidor concorda em mudar o protocolo solicitado."
        },
        102: {
            code: 102,
            title: "Processando",
            description: "O servidor está processando a solicitação, mas ainda não concluiu."
        },
        103: {
            code: 103,
            title: "Dicas Iniciais",
            description: "Indica que o servidor está retornando informações preliminares."
        },
        200: {
            code: 200,
            title: "OK",
            description: "A solicitação foi bem-sucedida."
        },
        201: {
            code: 201,
            title: "Criado",
            description: "A solicitação foi bem-sucedida, e um novo recurso foi criado como resultado."
        },
        202: {
            code: 202,
            title: "Aceito",
            description: "A solicitação foi aceita, mas ainda não foi concluída."
        },
        203: {
            code: 203,
            title: "Informação Não Autoritária",
            description: "A resposta é uma representação do estado do recurso, mas não é uma fonte autoritária."
        },
        204: {
            code: 204,
            title: "Sem Conteúdo",
            description: "A solicitação foi bem-sucedida, mas não há informações a serem retornadas."
        },
        205: {
            code: 205,
            title: "Redefinir Conteúdo",
            description: "O cliente deve redefinir a exibição do documento."
        },
        206: {
            code: 206,
            title: "Conteúdo Parcial",
            description: "A solicitação foi parcialmente bem-sucedida, retornando apenas parte do recurso."
        },
        207: {
            code: 207,
            title: "Multi-Estado",
            description: "O servidor retornou informações sobre várias instâncias do recurso solicitado."
        },
        208: {
            code: 208,
            title: "Já Relatado",
            description: "O documento foi previamente relatado."
        },
        226: {
            code: 226,
            title: "IM Usado",
            description: "A solicitação foi concluída com o método de solicitação GET."
        },
        300: {
            code: 300,
            title: "Múltipla Escolha",
            description: "A solicitação tem várias opções para o recurso solicitado."
        },
        301: {
            code: 301,
            title: "Movido Permanentemente",
            description: "O recurso foi movido permanentemente para um novo local."
        },
        302: {
            code: 302,
            title: "Encontrado",
            description: "O recurso foi encontrado em um novo local temporário."
        },
        303: {
            code: 303,
            title: "Veja Outro",
            description: "O cliente deve fazer uma solicitação GET para o recurso em um novo local."
        },
        304: {
            code: 304,
            title: "Não Modificado",
            description: "O recurso não foi modificado desde a última solicitação."
        },
        305: {
            code: 305,
            title: "Usar Proxy",
            description: "O cliente deve usar um proxy especificado."
        },
        307: {
            code: 307,
            title: "Redirecionamento Temporário",
            description: "A solicitação foi redirecionada temporariamente para outro local."
        },
        308: {
            code: 308,
            title: "Redirecionamento Permanente",
            description: "A solicitação foi redirecionada permanentemente para outro local."
        },
        400: {
            code: 400,
            title: "Requisição Inválida",
            description: "A solicitação é inválida ou malformada."
        },
        401: {
            code: 401,
            title: "Não Autorizado",
            description: "A autenticação é necessária para acessar o recurso."
        },
        402: {
            code: 402,
            title: "Pagamento Necessário",
            description: "O pagamento é necessário para acessar o recurso."
        },
        403: {
            code: 403,
            title: "Proibido",
            description: "O acesso ao recurso é proibido."
        },
        404: {
            code: 404,
            title: "Não Encontrado",
            description: "O recurso solicitado não foi encontrado."
        },
        405: {
            code: 405,
            title: "Método Não Permitido",
            description: "O método de solicitação não é permitido para o recurso."
        },
        406: {
            code: 406,
            title: "Não Aceitável",
            description: "O recurso não é aceitável de acordo com as configurações de aceitação do cliente."
        },
        407: {
            code: 407,
            title: "Autenticação de Proxy Necessária",
            description: "A autenticação de proxy é necessária para acessar o recurso."
        },
        408: {
            code: 408,
            title: "Tempo Limite da Requisição",
            description: "A solicitação atingiu o tempo limite de espera."
        },
        409: {
            code: 409,
            title: "Conflito",
            description: "A solicitação entra em conflito com o estado atual do recurso."
        },
        410: {
            code: 410,
            title: "Desaparecido",
            description: "O recurso solicitado não está mais disponível."
        },
        411: {
            code: 411,
            title: "Comprimento Necessário",
            description: "O comprimento da solicitação não foi especificado."
        },
        412: {
            code: 412,
            title: "Pré-condição Falhou",
            description: "Uma pré-condição na solicitação falhou."
        },
        413: {
            code: 413,
            title: "Carga Muito Grande",
            description: "A carga da solicitação é muito grande para ser processada."
        },
        414: {
            code: 414,
            title: "URI Muito Longo",
            description: "A URI da solicitação é muito longa para ser processada."
        },
        415: {
            code: 415,
            title: "Tipo de Mídia Não Suportado",
            description: "O tipo de mídia na solicitação não é suportado pelo recurso."
        },
        416: {
            code: 416,
            title: "Intervalo Não Satisfatório",
            description: "A solicitação inclui um intervalo que não pode ser atendido pelo recurso."
        },
        417: {
            code: 417,
            title: "Falha na Expectativa",
            description: "A solicitação falhou devido a expectativas não atendidas."
        },
        418: {
            code: 418,
            title: "Sou um Bule de Chá",
            description: "O servidor é um bule de chá e não pode preparar café."
        },
        421: {
            code: 421,
            title: "Requisição Mal Direcionada",
            description: "A solicitação foi direcionada incorretamente."
        },
        422: {
            code: 422,
            title: "Entidade Não Processável",
            description: "A solicitação é válida, mas não pode ser processada."
        },
        423: {
            code: 423,
            title: "Bloqueado",
            description: "O recurso está bloqueado e a solicitação não pode ser atendida."
        },
        424: {
            code: 424,
            title: "Falha na Dependência",
            description: "A solicitação falhou devido a uma falha de dependência."
        },
        425: {
            code: 425,
            title: "Muito Cedo",
            description: "A solicitação é muito cedo para ser processada."
        },
        426: {
            code: 426,
            title: "Atualização Necessária",
            description: "O cliente deve atualizar para continuar."
        },
        428: {
            code: 428,
            title: "Pré-condição Necessária",
            description: "A solicitação requer uma pré-condição que não foi atendida."
        },
        429: {
            code: 429,
            title: "Muitas Requisições",
            description: "A solicitação foi rejeitada devido ao excesso de solicitações."
        },
        431: {
            code: 431,
            title: "Campos de Cabeçalho da Requisição Muito Grandes",
            description: "Os campos de cabeçalho da solicitação são muito grandes."
        },
        451: {
            code: 451,
            title: "Indisponível por Motivos Legais",
            description: "O acesso ao recurso está indisponível por motivos legais."
        },
        500: {
            code: 500,
            title: "Erro Interno do Servidor",
            description: "O servidor encontrou um erro interno ao processar a solicitação."
        },
        501: {
            code: 501,
            title: "Não Implementado",
            description: "O servidor não suporta a funcionalidade necessária para a solicitação."
        },
        502: {
            code: 502,
            title: "Gateway Ruim",
            description: "O servidor atuou como um gateway ou proxy e recebeu uma resposta inválida."
        },
        503: {
            code: 503,
            title: "Serviço Indisponível",
            description: "O serviço não está disponível no momento devido a sobrecarga ou manutenção."
        },
        504: {
            code: 504,
            title: "Tempo Limite do Gateway",
            description: "O gateway ou proxy atingiu o tempo limite ao aguardar uma resposta."
        },
        505: {
            code: 505,
            title: "Versão HTTP Não Suportada",
            description: "A versão do protocolo HTTP não é suportada pelo servidor."
        },
        506: {
            code: 506,
            title: "Variante Também Negocia",
            description: "A solicitação tem várias representações disponíveis, e o servidor não pode escolher uma."
        },
        507: {
            code: 507,
            title: "Armazenamento Insuficiente",
            description: "O servidor não pode armazenar a representação necessária para completar a solicitação."
        },
        508: {
            code: 508,
            title: "Detecção de Loop",
            description: "A solicitação causou uma detecção de loop infinito."
        },
        510: {
            code: 510,
            title: "Não Estendido",
            description: "O servidor requer extensões adicionais para atender à solicitação."
        },
        511: {
            code: 511,
            title: "Autenticação de Rede Necessária",
            description: "A autenticação é necessária para acessar a rede."
        }
    }


    static getMessage(statusCode: number, language: string): any {

        if (language == 'en') {
            return this.statusMessagesEN[statusCode];
        }

        if (language == 'pt-BR') {
            return this.statusMessagesPTBR[statusCode];
        }

        return {
            code: 0x0,
            title: "Code does not exist",
            description: "This code does not exist"
        }
    }

}