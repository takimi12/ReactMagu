

import { ChangeEvent, ReactElement, useState } from "react";

export const FakeLoginComponent1 = (): ReactElement => {
const [age, setAge] = useState<number |string>("")

const hadnleChangeAge = (e:ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value)
    }
    const handleChangeAge = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setAge(value ? parseInt(value, 10) : "");
      };
  return (
    <form>
<div>
    <input 
    type="text" 
    name="age" 
    value={age}
    onChange={hadnleChangeAge} />
</div>


<div>
        <input 
          type="number" 
          name="age" 
          value={age} 
          onChange={handleChangeAge} 
          min="0" // Opcjonalnie: ustawienie minimalnej wartości na 0
        />
      </div>
      <button type="submit">Zaloguj się</button>
    </form>
  );
};
