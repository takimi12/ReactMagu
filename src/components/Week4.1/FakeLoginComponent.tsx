import { ReactElement, useEffect, useState } from "react";
import { useUserContext } from "./UserContext";
import { Link, useNavigate } from "react-router-dom";

export const FakeLoginComponent = (): ReactElement => {
  const { logIn, isLoggedIn } = useUserContext();
  const [email, setEmail] = useState<string>(""); 
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>("");
  const navigate = useNavigate(); // użycie nawigatora


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const success = logIn(email, password); 
    if (!success) {
      setError("Nieprawidłowe dane logowania.");
    } else {
      setError("");
      console.log("Logowanie udane!");
      navigate("/personalData");
    }
  };




  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label> 
        <input
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        />
      </div>
      <div>
        <label htmlFor="password">Hasło</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p>{error}</p>}
<button type="submit">Zaloguj się</button>
    </form>
  );
};
