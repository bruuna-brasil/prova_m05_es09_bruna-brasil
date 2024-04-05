import request from 'supertest';

const server = require('./endpoint');

describe('Teste da rota', () => {
  it('Deve executar testar a rota', async () => {
    const response = await request(server).get('/executar_todas_tarefas');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ tarefasExecutadas: 'Limpar o chãoLimpar a mesa' });
  });
});