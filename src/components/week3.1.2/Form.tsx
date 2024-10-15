
// # Zadanie 2

// Podstrona na dodawanie klientów implementacja. Na ten moment formularz statyczny (nie robi nic oprócz walidacji) <br />

// * imię - pole wymagane, minimum 3 litery,
// * nazwisko - pole wymagane, minimum 3 litery,
// * ulica- pole wymagane, minimum 5 liter,
// * kod pocztowy - format 2 cyfr, następnie znak - i 3 cyfry, wymagane
// * miasto - minimum 3 litery, wymagane,
// * region - pole opcjonalne, napis, minimum 3 litery,
// * link do zdjęcia - pole opcjonalne, string,
// * numer telefonu - zaczyna się od + i 11 cyfr, wymagane, <br />



// * region - pole opcjonalne, napis, minimum 3 litery,
// * link do zdjęcia - pole opcjonalne, string,
// * numer telefonu - zaczyna się od + i 11 cyfr, wymagane, <br />


import { ReactElement, useState } from "react"


export const Form = () => {

    const[name, setName] = useState<string>("")
    const[surname, setSurname] = useState<string>("")
    const[street, setStreet] = useState<string>("")
    const[code, setCode] = useState<string>("")
    const[city, setCity] = useState<string>("")
    const[region, setRegion] = useState<string>("")
    const[foto, setFoto] = useState<string>("")
    const[telephone, setTelephone]= useState<string>("")

    
    const[nameError, setNameError] = useState<string>('')
    const[surnameError, setSurnameError] = useState<string>('')
    const[streetError, setStreetError] = useState<string>('')
    const[codeError, setCodeError] = useState<string>('')
    const[phoneError, setTelephoneError] = useState<string>('')


 const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleSurname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSurname(e.target.value);
  };
  const handleStreet = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStreet(e.target.value);
  };
  const handleCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };
  const handleCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };
  const handleRegion = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegion(e.target.value);
  };
  const handleFoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFoto(e.target.value);
  };
  const handleTelephone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTelephone(e.target.value);
  };



     const validate = () => {
        let isValid = false
        const postalCodePattern = /^[0-9]{2}-[0-9]{3}$/;
        const phonePattern = /^\+\d{11}$/;

        if(name.length < 3 ){
            setNameError('To pole wymaga podania 3 liter')
            isValid = false
        }
     if(surname.length < 5 ){
            setSurnameError('To pole wymaga podania 5 liter')
            isValid = false
        }
        if(street.length < 5 ){
            setStreetError('To pole wymaga podania 5 liter')
            isValid = false
        }
        if(postalCodePattern.test(code)){
            setCodeError('Wymaganay format cyfra-cyfra-znak-cyfra-cyfra')
            isValid = false
        } if(!phonePattern.test(telephone)) {
            setTelephoneError('zaczyna się od + i 11 cyfr,')
            isValid = false
        }

        
        

        return isValid
     }   




    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(validate()){
            console.log('succes')
        }else {  
        return console.log('nie udalo sie przeslac danych')
    }
    }




    return (
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="name">Imię</label>
            <input id="name"  type="text" value={name} onChange={handleName}  /> 
            <div><p>{nameError}</p></div>
            </div>
            <div>
            <label htmlFor="surname">Nazwisko</label>
            <input id="surname"  type="text" value={surname} onChange={handleSurname}  /> 
            <div><p>{surnameError}</p></div>
            </div>
            <div>
            <label htmlFor="street">Ulica</label>
            <input id="street"  type="text" value={street} onChange={handleStreet}  /> 
            <div><p>{streetError}</p></div>
            </div>
            <div>
            <label htmlFor="code">Kod pocztowy</label>
            <input id="code"  type="text" value={code} onChange={handleCode}  /> 
            </div>
            <div>
            <label htmlFor="city">Miasto</label>
            <input id="city"  type="text" value={city} onChange={handleCity}  /> 
            </div>
            <div>
            <label htmlFor="region">Region</label>
            <input id="region"  type="text" value={region} onChange={handleRegion}  /> 
            </div>
            <div>
            <label htmlFor="foto">Foto</label>
            <input id="foto"  type="text" value={foto} onChange={handleFoto}  /> 
            </div>
            <div>
        <label htmlFor="number">Numer telefonu</label>
        <input id="number" type="text" value={telephone} onChange={handleTelephone} />
        <div><p>{phoneError}</p></div>
      </div>

            <button type="submit"> Wyslij formularz</button>
        </form>
    )
}