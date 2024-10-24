import { AddBook } from "./AddBook";
import { SingleBook } from "./SingleBook";
import { useGetBooksQuery } from "./useGetBooksQuery"

export const Books = () => {

    const {data, isFetching} = useGetBooksQuery();

 
    if(isFetching) return <p>loading...</p>

    if(!data) return <p>No data...</p>

    return (
        <div>
            <h1>Books</h1>
            <AddBook />
        <ul>
            {data.map(book => <SingleBook book={book} key={book.id} />)}
        </ul>
        </div>
    )
}