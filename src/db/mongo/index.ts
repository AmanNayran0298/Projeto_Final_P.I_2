const { MongoClient } = require('mongodb');
const DATABASE = process.env.DATABASE
const PASSWORD = process.env.PASSWORD
// arquivo de conexão com o banco de dados
// exportar a conexão

const uri = `mongodb+srv://oficina:${PASSWORD}@cluster0.rrgc6.mongodb.net/${DATABASE}?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })

export default client;