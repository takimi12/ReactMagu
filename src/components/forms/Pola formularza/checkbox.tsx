


import { ChangeEvent, ReactElement, useState } from "react";

export const FakeLoginComponent1 = (): ReactElement => {

const [agreement, setAgreement] = useState<boolean>(false)


const handleAgreement = (e:ChangeEvent<HTMLInputElement>) => {
setAgreement(e.target.checked)
}




  return (
    <form>


<div>
  <input type="checkbox" checked={agreement} onChange={handleAgreement}  />
</div>

      <button type="submit">Zaloguj się</button>
    </form>
  );
};
