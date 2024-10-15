import React, { useState } from 'react';
import './Card.scss';

interface Person {
    id: number;
    imgSrc: string;
    name: string;
    surname: string;
    street: string;
    postCode: string;
    town: string;
    region: string;
    phoneNumber: string;
}

interface CardProps {
    cards: Person[];
}

const Card = ({ cards }: CardProps) => {
    const [search, setSearch] = useState('');


    const filteredCards = cards.filter(card => 
        card.name.toLowerCase().includes(search.toLowerCase())
    );



    return (
        <>
            <form>
                <input 
                    type="text" 
                    placeholder="Enter name" 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)} 
                    className="search-input"
                />
            </form>

            <div className="card-container">
                {filteredCards.length > 0 ? (
                    filteredCards.map(el => (
                        <div className="card" key={el.id}>
                            <div className="avatar">
                                <img src={el.imgSrc} alt={`${el.name} ${el.surname}`} />
                            </div>
                            <div className="details">
                                <h2>{el.name} {el.surname}</h2>
                                <p>Phone: {el.phoneNumber}</p>
                                <p>Address: {el.street}, {el.town}, {el.postCode}, {el.region}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No results found</p>
                )}
            </div>
        </>
    );
};

export default Card;
