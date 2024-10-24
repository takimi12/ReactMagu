import {BookEntity} from "./index"


type SingleBookProps = {
    book: BookEntity;
}


export const SingleBook = ({book}: SingleBookProps) => {
    return (
        <li>
            <h2><strong>{book.title}</strong>({book.year})</h2>
            <p>{book.description}</p>
        </li>
    )
}