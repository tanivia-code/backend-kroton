module.exports = {
    swagger: '2.0',
    info: {
        description: 'Documentação Kroton NODEJS',
        version: '0.1.0',
        title: 'Backend Kroton',
        contact: {
            email: 'email@kroton.com'
        }
    },
    host: 'http://localhost:4444',
    schema: ['http'],
    paths: {
        '/': {
            get: {
                tags: ['rota'],
                parameters: [
                    {
                    in: 'body',
                    name: 'body',
                    description: 'Apenas recebe dados',
                    required: false,
                    schema: {}
                    }
                ],
                summary: 'Valida o funcionamento do servidor',
                description: '',
                operationId: '',
                consumers: ['application/json'],
                produces: ['application/json'],
                responses: {
                    200: {
                        "application/json": {
                            schema
                        }

                        },
                    500: {

                    }
                    }
                }
            }
        }
    }
};