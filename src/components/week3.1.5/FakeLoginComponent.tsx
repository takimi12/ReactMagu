import { ReactElement, useState } from "react";

export const FakeLoginComponent = (): ReactElement => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [usernameError, setUsernameError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const validate = (): boolean => {
    let isValid = true;

    if (username.length < 3) {
      setUsernameError("Nazwa użytkownika musi mieć co najmniej 3 znaki.");
      isValid = false;
    } else {
      setUsernameError("");
    }

    if (password.length < 6) {
      setPasswordError("Hasło musi mieć co najmniej 6 znaków.");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
      console.log("Logowanie udane!");
    } else {
      console.log("Błąd logowania.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Nazwa użytkownika</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <p>{usernameError}</p>
      </div>
      <div>
        <label htmlFor="password">Hasło</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>{passwordError}</p>
      </div>
      <button type="submit">Zaloguj się</button>
    </form>
  );
};
