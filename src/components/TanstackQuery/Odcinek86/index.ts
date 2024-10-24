export type BookEntity ={
    id:string;
    title: string;
    description: string;
    year:number;
}


export type BookDto = Omit<BookEntity, 'id'>