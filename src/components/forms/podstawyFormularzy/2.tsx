import { ChangeEvent,FormEvent, useState } from "react";

type FormData = {
  login: {value:string}
}



// 1 krok zrobienie jednego wspolnego statetu dla wszystkich
// 2 krok wyciągnięcie z formstate poprzez destrukturyazacje w funkcji wyslania formularza
// 3 krok aktualizacja wsszystkich funkcji dotyczących zmiany stanu
////// do tego momentu jest ok
// 4 krok stworzenie jednej metody do aktualiacji stanu
// 5 krok zmiana funckji handleChange

/// tutaj juz sie robi lekko skomplikowane i tego nie robiłem
// 6 krok zorbienie hooka do obsługi formularza


export const Form = () => {

  // krok 1 przed zmianą

  // const [login, setLogin] = useState('');
  // const [age, setAge] = useState('');
  // const [bio, setBio] = useState('')
  // const [gender, setGender] = useState('')
  // const [agreement, setAgreeemnt] = useState(false)
  // const [contact, setContact] = useState('')

  // krok 1 po zmianie
    const [formState, setFormState] = useState({
        login:'',
        age:'',
        bio:'',
        gender:'',
        agreement:false,
        contact:''
    })

// krok 2 przed zmianą

// const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
//       e.preventDefault();
//     }

// krok 2 po zmianie

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const {login, age, bio, gender, agreement, contact} = formState
  
  }


// krok 3

// const handleLoginChange = (e:ChangeEvent<HTMLInputElement>) => {
//   setLogin(e.target.value)
// }
// const handleAgeChange = (e:ChangeEvent<HTMLInputElement>) => {
//   setAge(e.target.value)
// }

// const handleBioChange = (e:ChangeEvent<HTMLTextAreaElement>) =>{
//   setBio(e.target.value)
// }

// const handleGenderChange = (e:ChangeEvent<HTMLSelectElement>) =>{
//   setGender(e.target.value)
// }

// const handleAgreementChange = (e:ChangeEvent<HTMLInputElement>) =>{
//  setAgreeemnt(e.target.checked) 
// }

// const handleContactChange = (e:ChangeEvent<HTMLInputElement>) =>{
//   setContact(e.target.value)
// }

// krok 3
//// po 1  zmianie
//   const handleChange= (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormState(prevState => ({
//         ...prevState,
//         [e.target.name]: e.target.value
//   }))
//   }

// krok 3

////// po 2 zmianie


  const handleChange= (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prevState => ({
        ...prevState,
        [e.target.name]: e.target.value === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value
  }))
  }



return (
  <form onSubmit={handleSubmit}>
    <div>
    <input type="text" name="login" value={formState.login} onChange={handleChange} />
  {!formState.login && <p>Login jest wymagany!</p>}
  {formState.login.length <3 && <p>Login musi mieć minimum 3 znaki!</p>}
  </div>
  <div>
  <input type="number" name="age" value={formState.age} onChange={handleChange} />
  </div>
  <div>
    <textarea value={formState.bio} name="bio" onChange={handleChange} />
  </div>
  <div>
    <select value={formState.gender} onChange={handleChange}>
      <option value="f">kobieta</option>
      <option value="m">Męzczyzna</option>
      <option value="o">Inna</option>
    </select>
  </div>
  <div>
    <input type="checkbox" checked={formState.agreement} onChange={handleChange} />
    Agreement
  </div>
  <div>
    <div>
      <input type="radio" name="contact" value="email" checked={formState.contact === 'email'} onChange={handleChange} />
      Contact by Email
      </div>
      <div>
      <input type="radio" name="contact" value="sms" checked={formState.contact === 'sms'} onChange={handleChange} />
      Contact by Sms
      </div>
      <div>
      <input type="radio" name="contact" value="none" checked={formState.contact === 'none'} onChange={handleChange} />
      No Contact
      </div>
    </div>
    <button type="submit">Save</button>
   

  </form>
)



};