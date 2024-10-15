import { ChangeEvent,FormEvent, useState } from "react";

type FormData = {
  login: {value:string}
}


export const Form = () => {
  const [login, setLogin] = useState('');
  const [age, setAge] = useState('');
  const [bio, setBio] = useState('')
  const [gender, setGender] = useState('')
  const [agreement, setAgreeemnt] = useState(false)
  const [contact, setContact] = useState('')

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }


  const handleLoginChange = (e:ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value)
  }
  const handleAgeChange = (e:ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value)
  }
  
  const handleBioChange = (e:ChangeEvent<HTMLTextAreaElement>) =>{
    setBio(e.target.value)
  }

  const handleGenderChange = (e:ChangeEvent<HTMLSelectElement>) =>{
    setGender(e.target.value)
  }

  const handleAgreementChange = (e:ChangeEvent<HTMLInputElement>) =>{
   setAgreeemnt(e.target.checked) 
  }

  const handleContactChange = (e:ChangeEvent<HTMLInputElement>) =>{
    setContact(e.target.value)
  }


return (
  <form onSubmit={handleSubmit}>
    <div>
    <input type="text" name="login" value={login} onChange={handleLoginChange} />
  {!login && <p>Login jest wymagany!</p>}
  {login.length <3 && <p>Login musi mieć minimum 3 znaki!</p>}
  </div>
  <div>
  <input type="number" name="age" value={age} onChange={handleAgeChange} />
  </div>
  <div>
    <textarea value={bio} name="bio" onChange={handleBioChange} />
  </div>
  <div>
    <select value={gender} onChange={handleGenderChange}>
      <option value="f">kobieta</option>
      <option value="m">Męzczyzna</option>
      <option value="o">Inna</option>
    </select>
  </div>
  <div>
    <input type="checkbox" checked={agreement} onChange={handleAgreementChange} />
    Agreement
  </div>
  <div>
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
    </div>
    <button type="submit">Save</button>
   

  </form>
)



};