export type Data = {
    id:string;
    title:string;
    quantity:number;
    
}


export type MultiData = {
    data:Data[];
}
export type SingleTodosProps = MultiData & {
    handleDelete: (id: string) => void; 
    patchMethod: (id: string, newQuantity:number) => void; 
  }