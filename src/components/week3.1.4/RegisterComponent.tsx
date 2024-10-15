import { ReactElement, useState } from "react";


export const FakeRegisterComponent = (): ReactElement => {
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [nameError, setNameError] = useState<string>("");
  const [usernameError, setUsernameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>("");

  const validate = (): boolean => {
    let isValid = true;

    // Regex patterns for validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length < 2) {
      setNameError("Imię musi mieć co najmniej 2 znaki.");
      isValid = false;
    } else {
      setNameError("");
    }

    if (username.length < 3) {
      setUsernameError("Nazwa użytkownika musi mieć co najmniej 3 znaki.");
      isValid = false;
    } else {
      setUsernameError("");
    }

    if (!emailPattern.test(email)) {
      setEmailError("Podaj poprawny adres e-mail.");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (password.length < 6) {
      setPasswordError("Hasło musi mieć co najmniej 6 znaków.");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError("Hasła muszą się zgadzać.");
      isValid = false;
    } else {
      setConfirmPasswordError("");
    }

    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
      console.log("Rejestracja udana!");
    } else {
      console.log("Błąd rejestracji.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Imię</label>
        <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <p>{nameError}</p>
      </div>
      <div>
        <label htmlFor="username">Nazwa użytkownika</label>
        <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <p>{usernameError}</p>
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <p>{emailError}</p>
      </div>
      <div>
        <label htmlFor="password">Hasło</label>
        <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <p>{passwordError}</p>
      </div>
      <div>
        <label htmlFor="confirmPassword">Powtórz hasło</label>
        <input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <p>{confirmPasswordError}</p>
      </div>
      <button type="submit">Zarejestruj się</button>
    </form>
  );
};
