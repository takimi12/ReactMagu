import { Link } from "react-router-dom";
import { useGetClientQuery } from "./useGetClients";

export const Clients331 = () => {
    const { data } = useGetClientQuery();

    // Sprawdzanie, czy dane są dostępne
    if (!data) return <p>No data available</p>;

    return (
        <ul>
            {data.map((client) => (
                <li key={client.id}>
                     <Link to={`/clients/${client.id}`}>
              Dane szczegolowe
            </Link>
                    <div>
                        <img src={client.photoUrl} alt={`${client.firstName} ${client.lastName}`} style={{ width: '50px', height: '50px' }} />
                        <h3>{client.firstName} {client.lastName}</h3>
                        <p>{client.street}, {client.city}, {client.region}, {client.postalCode}</p>
                        <p>Phone: {client.phoneNumber}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
};
