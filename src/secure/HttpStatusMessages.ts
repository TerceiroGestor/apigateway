export class HttpStatusMessages {
    private static statusMessagesPTBR: Record<number, object> = {
        100: {
            codigo: 100,
            statusText: "Continuar",
            Description: "O servidor recebeu a solicitação e precisa de mais informações para continuar o processamento."
        },
        101: {
            codigo: 101,
            statusText: "Mudando Protocolos",
            Description: "O servidor concorda em mudar o protocolo solicitado."
        },
        102: {
            codigo: 102,
            statusText: "Processando",
            Description: "O servidor está processando a solicitação, mas ainda não concluiu."
        },
        103: {
            codigo: 103,
            statusText: "Dicas Iniciais",
            Description: "Indica que o servidor está retornando informações preliminares."
        },
        200: {
            codigo: 200,
            statusText: "OK",
            Description: "A solicitação foi bem-sucedida."
        },
        201: {
            codigo: 201,
            statusText: "Criado",
            Description: "A solicitação foi bem-sucedida, e um novo recurso foi criado como resultado."
        },
        202: {
            codigo: 202,
            statusText: "Aceito",
            Description: "A solicitação foi aceita, mas ainda não foi concluída."
        },
        203: {
            codigo: 203,
            statusText: "Informação Não Autoritária",
            Description: "A resposta é uma representação do estado do recurso, mas não é uma fonte autoritária."
        },
        204: {
            codigo: 204,
            statusText: "Sem Conteúdo",
            Description: "A solicitação foi bem-sucedida, mas não há informações a serem retornadas."
        },
        205: {
            codigo: 205,
            statusText: "Redefinir Conteúdo",
            Description: "O cliente deve redefinir a exibição do documento."
        },
        206: {
            codigo: 206,
            statusText: "Conteúdo Parcial",
            Description: "A solicitação foi parcialmente bem-sucedida, retornando apenas parte do recurso."
        },
        207: {
            codigo: 207,
            statusText: "Multi-Estado",
            Description: "O servidor retornou informações sobre várias instâncias do recurso solicitado."
        },
        208: {
            codigo: 208,
            statusText: "Já Relatado",
            Description: "O documento foi previamente relatado."
        },
        226: {
            codigo: 226,
            statusText: "IM Usado",
            Description: "A solicitação foi concluída com o método de solicitação GET."
        },
        300: {
            codigo: 300,
            statusText: "Múltipla Escolha",
            Description: "A solicitação tem várias opções para o recurso solicitado."
        },
        301: {
            codigo: 301,
            statusText: "Movido Permanentemente",
            Description: "O recurso foi movido permanentemente para um novo local."
        },
        302: {
            codigo: 302,
            statusText: "Encontrado",
            Description: "O recurso foi encontrado em um novo local temporário."
        },
        303: {
            codigo: 303,
            statusText: "Veja Outro",
            Description: "O cliente deve fazer uma solicitação GET para o recurso em um novo local."
        },
        304: {
            codigo: 304,
            statusText: "Não Modificado",
            Description: "O recurso não foi modificado desde a última solicitação."
        },
        305: {
            codigo: 305,
            statusText: "Usar Proxy",
            Description: "O cliente deve usar um proxy especificado."
        },
        307: {
            codigo: 307,
            statusText: "Redirecionamento Temporário",
            Description: "A solicitação foi redirecionada temporariamente para outro local."
        },
        308: {
            codigo: 308,
            statusText: "Redirecionamento Permanente",
            Description: "A solicitação foi redirecionada permanentemente para outro local."
        },
        400: {
            codigo: 400,
            statusText: "Requisição Inválida",
            Description: "A solicitação é inválida ou malformada."
        },
        401: {
            codigo: 401,
            statusText: "Não Autorizado",
            Description: "A autenticação é necessária para acessar o recurso."
        },
        402: {
            codigo: 402,
            statusText: "Pagamento Necessário",
            Description: "O pagamento é necessário para acessar o recurso."
        },
        403: {
            codigo: 403,
            statusText: "Proibido",
            Description: "O acesso ao recurso é proibido."
        },
        404: {
            codigo: 404,
            statusText: "Não Encontrado",
            Description: "O recurso solicitado não foi encontrado."
        },
        405: {
            codigo: 405,
            statusText: "Método Não Permitido",
            Description: "O método de solicitação não é permitido para o recurso."
        },
        406: {
            codigo: 406,
            statusText: "Não Aceitável",
            Description: "O recurso não é aceitável de acordo com as configurações de aceitação do cliente."
        },
        407: {
            codigo: 407,
            statusText: "Autenticação de Proxy Necessária",
            Description: "A autenticação de proxy é necessária para acessar o recurso."
        },
        408: {
            codigo: 408,
            statusText: "Tempo Limite da Requisição",
            Description: "A solicitação atingiu o tempo limite de espera."
        },
        409: {
            codigo: 409,
            statusText: "Conflito",
            Description: "A solicitação entra em conflito com o estado atual do recurso."
        },
        410: {
            codigo: 410,
            statusText: "Desaparecido",
            Description: "O recurso solicitado não está mais disponível."
        },
        411: {
            codigo: 411,
            statusText: "Comprimento Necessário",
            Description: "O comprimento da solicitação não foi especificado."
        },
        412: {
            codigo: 412,
            statusText: "Pré-condição Falhou",
            Description: "Uma pré-condição na solicitação falhou."
        },
        413: {
            codigo: 413,
            statusText: "Carga Muito Grande",
            Description: "A carga da solicitação é muito grande para ser processada."
        },
        414: {
            codigo: 414,
            statusText: "URI Muito Longo",
            Description: "A URI da solicitação é muito longa para ser processada."
        },
        415: {
            codigo: 415,
            statusText: "Tipo de Mídia Não Suportado",
            Description: "O tipo de mídia na solicitação não é suportado pelo recurso."
        },
        416: {
            codigo: 416,
            statusText: "Intervalo Não Satisfatório",
            Description: "A solicitação inclui um intervalo que não pode ser atendido pelo recurso."
        },
        417: {
            codigo: 417,
            statusText: "Falha na Expectativa",
            Description: "A solicitação falhou devido a expectativas não atendidas."
        },
        418: {
            codigo: 418,
            statusText: "Sou um Bule de Chá",
            Description: "O servidor é um bule de chá e não pode preparar café."
        },
        421: {
            codigo: 421,
            statusText: "Requisição Mal Direcionada",
            Description: "A solicitação foi direcionada incorretamente."
        },
        422: {
            codigo: 422,
            statusText: "Entidade Não Processável",
            Description: "A solicitação é válida, mas não pode ser processada."
        },
        423: {
            codigo: 423,
            statusText: "Bloqueado",
            Description: "O recurso está bloqueado e a solicitação não pode ser atendida."
        },
        424: {
            codigo: 424,
            statusText: "Falha na Dependência",
            Description: "A solicitação falhou devido a uma falha de dependência."
        },
        425: {
            codigo: 425,
            statusText: "Muito Cedo",
            Description: "A solicitação é muito cedo para ser processada."
        },
        426: {
            codigo: 426,
            statusText: "Atualização Necessária",
            Description: "O cliente deve atualizar para continuar."
        },
        428: {
            codigo: 428,
            statusText: "Pré-condição Necessária",
            Description: "A solicitação requer uma pré-condição que não foi atendida."
        },
        429: {
            codigo: 429,
            statusText: "Muitas Requisições",
            Description: "A solicitação foi rejeitada devido ao excesso de solicitações."
        },
        431: {
            codigo: 431,
            statusText: "Campos de Cabeçalho da Requisição Muito Grandes",
            Description: "Os campos de cabeçalho da solicitação são muito grandes."
        },
        451: {
            codigo: 451,
            statusText: "Indisponível por Motivos Legais",
            Description: "O acesso ao recurso está indisponível por motivos legais."
        },
        500: {
            codigo: 500,
            statusText: "Erro Interno do Servidor",
            Description: "O servidor encontrou um erro interno ao processar a solicitação."
        },
        501: {
            codigo: 501,
            statusText: "Não Implementado",
            Description: "O servidor não suporta a funcionalidade necessária para a solicitação."
        },
        502: {
            codigo: 502,
            statusText: "Gateway Ruim",
            Description: "O servidor atuou como um gateway ou proxy e recebeu uma resposta inválida."
        },
        503: {
            codigo: 503,
            statusText: "Serviço Indisponível",
            Description: "O serviço não está disponível no momento devido a sobrecarga ou manutenção."
        },
        504: {
            codigo: 504,
            statusText: "Tempo Limite do Gateway",
            Description: "O gateway ou proxy atingiu o tempo limite ao aguardar uma resposta."
        },
        505: {
            codigo: 505,
            statusText: "Versão HTTP Não Suportada",
            Description: "A versão do protocolo HTTP não é suportada pelo servidor."
        },
        506: {
            codigo: 506,
            statusText: "Variante Também Negocia",
            Description: "A solicitação tem várias representações disponíveis, e o servidor não pode escolher uma."
        },
        507: {
            codigo: 507,
            statusText: "Armazenamento Insuficiente",
            Description: "O servidor não pode armazenar a representação necessária para completar a solicitação."
        },
        508: {
            codigo: 508,
            statusText: "Detecção de Loop",
            Description: "A solicitação causou uma detecção de loop infinito."
        },
        510: {
            codigo: 510,
            statusText: "Não Estendido",
            Description: "O servidor requer extensões adicionais para atender à solicitação."
        },
        511: {
            codigo: 511,
            statusText: "Autenticação de Rede Necessária",
            Description: "A autenticação é necessária para acessar a rede."
        }
    }



    private static statusMessages: Record<number, string> = {
        100: "Continue",
        101: "Switching Protocols",
        102: "Processing",
        103: "Early Hints",
        200: "OK",
        201: "Created",
        202: "Accepted",
        203: "Non-Authoritative Information",
        204: "No Content",
        205: "Reset Content",
        206: "Partial Content",
        207: "Multi-Status",
        208: "Already Reported",
        226: "IM Used",
        300: "Multiple Choices",
        301: "Moved Permanently",
        302: "Found",
        303: "See Other",
        304: "Not Modified",
        305: "Use Proxy",
        307: "Temporary Redirect",
        308: "Permanent Redirect",
        400: "Bad Request",
        401: "Unauthorized",
        402: "Payment Required",
        403: "Forbidden",
        404: "Not Found",
        405: "Method Not Allowed",
        406: "Not Acceptable",
        407: "Proxy Authentication Required",
        408: "Request Timeout",
        409: "Conflict",
        410: "Gone",
        411: "Length Required",
        412: "Precondition Failed",
        413: "Payload Too Large",
        414: "URI Too Long",
        415: "Unsupported Media Type",
        416: "Range Not Satisfiable",
        417: "Expectation Failed",
        418: "I'm a Teapot",
        421: "Misdirected Request",
        422: "Unprocessable Entity",
        423: "Locked",
        424: "Failed Dependency",
        425: "Too Early",
        426: "Upgrade Required",
        428: "Precondition Required",
        429: "Too Many Requests",
        431: "Request Header Fields Too Large",
        451: "Unavailable For Legal Reasons",
        500: "Internal Server Error",
        501: "Not Implemented",
        502: "Bad Gateway",
        503: "Service Unavailable",
        504: "Gateway Timeout",
        505: "HTTP Version Not Supported",
        506: "Variant Also Negotiates",
        507: "Insufficient Storage",
        508: "Loop Detected",
        510: "Not Extended",
        511: "Network Authentication Required",
    };

    static getMessage(statusCode: number): string | undefined {
        return this.statusMessages[statusCode];
    }

    static getMessagePTBR(statusCode: number): object | undefined {
        return this.statusMessagesPTBR[statusCode];
    }
}