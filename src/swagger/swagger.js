const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Node.js API with JWT & Swagger',
      version: '1.0.0',
      description: 'API Documentation'
    }
  },
  apis: ['./src/routes/*.js']
};

const swaggerDocs = swaggerJsDoc(options);
module.exports = { swaggerDocs, swaggerUi };
