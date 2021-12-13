export interface crudRepository{
    getAll(): Promise<any[]>
    save(data: any): Promise<string | any>
    getById(id: string): Promise<any | undefined>
}