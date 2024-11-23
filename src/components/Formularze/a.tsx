import { ChangeEvent,FormEvent } from "react";
import { useForm } from "./FormHooks/SimpleUseFormStep2";

type FormValue = {
    login:string;
    password: string;
    age: string;
    bio:string;
    gender:string;
    agreement:boolean;
    contact: string;
}

export const Form = () => {
 const [formState, handleChange] = useForm<FormValue>({
    login: '',
    password:'',
    age: '',
    bio: '',
    gender: 'f',
    agreement: false,
    contact: ''
 })


  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const {login, password, age, bio, gender, agreement,contact} = formState;
  
  }


return (
  <form onSubmit={handleSubmit}>
    <div>
    <input type="text" name="login" value={formState.login} onChange={handleChange} />
  {!formState.login && <p>Login jest wymagany!</p>}
  {formState.login.length <3 && <p>Login musi mieć minimum 3 znaki!</p>}
  </div>
  <div>
    <input type="password" name="password" value={formState.password} onChange={handleChange} />
  </div>
  <div>
  <input type="number" name="age" value={formState.age} onChange={handleChange} />
  </div>
  <div>
    <textarea value={formState.bio} name="bio" onChange={handleChange} />
  </div>
  <div>
    <select name="gender" value={formState.gender} onChange={handleChange}>
      <option value="f">kobieta</option>
      <option value="m">Męzczyzna</option>
      <option value="o">Inna</option>
    </select>
  </div>
  <div>
    <input name="agreement" type="checkbox" checked={formState.agreement} onChange={handleChange} />
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