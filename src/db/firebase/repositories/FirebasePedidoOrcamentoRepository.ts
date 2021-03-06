import { db } from "..";
import { crudRepository } from "../../../domain/repositories/CRUDRepositorie";

export class FirebasePedidoOrcamentoRepository implements crudRepository {

    public async getAll(): Promise<any[]> {
        const pedidosRef = db.collection('pedidoOrcamento');
        const snapshot = await pedidosRef.get();

        const pedidos: any[] = []

        snapshot.forEach((doc: any) => {
            pedidos.push(doc.data())
        });

        return pedidos
    }

    public async save(data: any): Promise<string> {
        const result = db.collection('pedidoOrcamento').add(data);
        return result;
    }

    public async getById(id: string): Promise<any> {
        const result = await db.collection('pedidoOrcamento').doc(id).get()
        if (!result.exists) return;
        return result;
    }
}