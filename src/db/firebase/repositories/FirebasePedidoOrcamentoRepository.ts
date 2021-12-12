import { db } from "..";

export class FirebasePedidoOrcamentoRepository {
    // adicionar construtor que irá receber a referencia do documento do mongodb

    public async getAll() {
        const pedidosRef = db.collection('pedidoOrcamento');
        const snapshot = await pedidosRef.get();

        const pedidos: any[] = []

        snapshot.forEach((doc: any) => {
            pedidos.push(doc.data())
        });
        return pedidos
    }

    public async save(data: any) {
        console.log(data);
        db.collection('pedidoOrcamento').add(data);
        return;
    }
}