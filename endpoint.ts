const http = require('http');
const RoboDeLimpeza = require('./prova').RoboDeLimpeza;

const server = http.createServer();

const PORT = 3000;

server.on('request', async (req, res) => {
    
    if (req.url === '/executar_todas_tarefas' && req.method === 'GET') {
        
        const robo = new RoboDeLimpeza();
        const tarefasExecutadas = await robo.executarTodasTarefas(); 

        if (tarefasExecutadas.length > 0) {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(`Todas as tarefas foram executadas com sucesso. Tarefas executadas: ${tarefasExecutadas}`);
        } else {
            res.writeHead(204);
            res.end('Não há tarefas a serem executadas');
        }
    } else {
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end('Endpoint não encontrado');
    }
});


server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

module.exports = server;