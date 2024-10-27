import { SingleBook } from "./SingleBook";
import { useGetBooksQuery } from "./hooks/useGetBooksQuery"
import { AddBook } from "./AddBook";

export const Books = () => {
    const {data} = useGetBooksQuery();

    if(!data) return <p>no data available</p>
        return (
            <div>
                <h1>Books</h1>
            <ul>
                {data.map(book => <SingleBook key={book.id} book={book} />)}
            </ul>
            </div>
    )
}