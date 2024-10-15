



import { ChangeEvent, ReactElement, useState } from "react";

export const FakeLoginComponent1 = (): ReactElement => {
  const [username, setUsername] = useState<string>("");
  const [login1, setlogin1] = useState<string>("")
  const [age, setAge] = useState<string>("")
  const [gender, setGender] = useState<string>("")
  const [bio, setbIO] = useState<string>("")
  const [nameError, setNameError] = useState<string>("")
const [agreement, setAgreement] = useState<boolean>(false)

const [contact, setContact] = useState('')


const hadnleChangeLogin1 = (e:ChangeEvent<HTMLInputElement>) => {
setlogin1(e.target.value)
}

const hadnleChangeAge = (e:ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value)
    }

const handleGenderChange = (e:ChangeEvent<HTMLSelectElement>) => {
    setGender(e.target.value)
}

const handleBioChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
  setbIO(e.target.value)
}

const handleAgreement = (e:ChangeEvent<HTMLInputElement>) => {
setAgreement(e.target.checked)
}
const handleContactChange = (e:ChangeEvent<HTMLInputElement>) =>{
  setContact(e.target.value)
}



const validate = () => {
   let isValid = false
   if(username.length < 3 ){
    setNameError('To pole wymaga podania 3 liter')
    isValid = false
}
return isValid
}

const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(validate()) {
        console.log('dane zostaly wyslane')        
    } else {
        console.log('nie udalo sie wyslac danych')
    }
}


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
<div>
    <input 
    type="text" 
    name="age" 
    value={age}
    onChange={hadnleChangeAge} />
</div>
<div>
    <textarea name="bio" value={bio} onChange={handleBioChange} />
</div>

<div>
    <select value={gender} onChange={handleGenderChange}>
        <option>Kobieta</option>
        <option>Męczyzna</option>
        <option>Inna</option>
    </select>
</div>

<div>
  <input type="checkbox" checked={agreement} onChange={handleAgreement}  />
</div>

<div>
      <input type="radio" name="contact" value="email" checked={contact === 'email'} onChange={handleContactChange} />
      Contact by Email
      </div>
      <div>
      <input type="radio" name="contact" value="sms" checked={contact === 'sms'} onChange={handleContactChange} />
      Contact by Sms
      </div>
      <div>
      <input type="radio" name="contact" value="none" checked={contact === 'none'} onChange={handleContactChange} />
      No Contact
      </div>

      <button type="submit">Zaloguj się</button>
    </form>
  );
};
