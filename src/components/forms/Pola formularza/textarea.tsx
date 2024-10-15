

import { ChangeEvent, ReactElement, useState } from "react";

export const FakeLoginComponent1 = (): ReactElement => {
  const [bio, setbIO] = useState<string>("")

const handleBioChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
  setbIO(e.target.value)
}






const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {

}


  return (
    <form onSubmit={handleSubmit}>
<div>
    <textarea name="bio" value={bio} onChange={handleBioChange} />
</div>
      <button type="submit">Zaloguj się</button>
    </form>
  );
};
