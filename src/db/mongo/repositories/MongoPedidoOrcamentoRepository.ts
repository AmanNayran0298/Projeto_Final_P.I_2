// essa classe executa os métodos que foram definidos na Interface retornando os resultados
const { MongoClient } = require('mongodb');
const DATABASE = process.env.DATABASE
const PASSWORD = process.env.PASSWORD
// importar a conexão do banco de dados
export class MongoPedidoOrcamentoRepository {

    public uri;
    public client;

    constructor(){
        this.uri = `mongodb+srv://oficina:${PASSWORD}@cluster0.rrgc6.mongodb.net/${DATABASE}?retryWrites=true&w=majority`;
        this.client = new MongoClient(this.uri);
    }

    public async getAll() {
        try{
            await this.client.connect()
            const database = this.client.db('oficinaDB').collection('pedidoOrcamento');
            
            const query = { numeroPedido: 1 }
            const pedido = await database.findOne(query);
            console.log(pedido);            
            return pedido;
        } catch (err){
            console.log(err);
        }
    }
}