// essa classe executa os métodos que foram definidos na Interface retornando os resultados

// importar a conexão do banco de dados
const client = require('../index')

export class MongoPedidoOrcamentoRepository{
    // adicionar construtor que irá receber a referencia do documento do mongodb

    public async getAll(){
        await client.connect()
        const data = client.db("oficina").collection("pedidoOrcamento")
        const getAllPedidos = await data.find()
        return getAllPedidos;
    }

    public async save(){
        // adicionar ao banco de dados
        return;
    }
}