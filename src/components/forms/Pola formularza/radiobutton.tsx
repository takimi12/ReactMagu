



import { ChangeEvent, ReactElement, useState } from "react";

export const FakeLoginComponent1 = (): ReactElement => {
const [contact, setContact] = useState('')



const handleContactChange = (e:ChangeEvent<HTMLInputElement>) =>{
  setContact(e.target.value)
}


  return (
    <form>


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
