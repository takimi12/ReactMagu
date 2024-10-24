import { SingleUser } from "./index"

export const useUsers = ()=> {

    const getUsers = ():SingleUser[] =>[
        {id:1, name:'Aaa', lastName: 'AAA', age:111},
        {id:2, name:'bbb', lastName: 'BBB', age:222},
        {id:3, name:'ccc', lastName: 'CCC', age:333}
    ]


    return {
        getUsers
    }


}