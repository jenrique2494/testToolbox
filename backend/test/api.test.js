const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/server'); // Asegúrate de que apunte correctamente al archivo app.js

chai.use(chaiHttp);
const { expect } = chai;

describe('/files/data', () => {
  it('Debería retornar datos formateados', (done) => {
    chai
      .request('http://localhost:3000') // Usa la instancia de la app exportada desde app.js
      .get('/files/data') // Endpoint a probar
      .end((err, res) => {
        // Validaciones
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });
});
