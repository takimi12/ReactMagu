


import { ChangeEvent, ReactElement, useState } from "react";

export const FakeLoginComponent1 = (): ReactElement => {
  const [username, setUsername] = useState<string>("");
  const [login1, setlogin1] = useState<string>("")
  const [nameError, setNameError] = useState<string>("")


const hadnleChangeLogin1 = (e:ChangeEvent<HTMLInputElement>) => {
setlogin1(e.target.value)
}

  return (
    <form>
      <div>
        <label htmlFor="username">Nazwa użytkownika</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {!username && <p> login jest wymagany</p>}
        {username.length <3 && <p>Login musi miec przynajmniej 3 znaki</p>}
        {nameError}
      </div>
 
<div>
    <input 
    type="text" 
    name="login" 
    value={login1}
    onChange={hadnleChangeLogin1} />
</div>


      <button type="submit">Zaloguj się</button>
    </form>
  );
};
