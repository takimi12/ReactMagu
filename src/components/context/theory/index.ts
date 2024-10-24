export type SingleUser = {
    id:number;
    name:string;
    lastName:string;
    age:number;
}


export type UserContextType = {
    user: SingleUser | null;
}