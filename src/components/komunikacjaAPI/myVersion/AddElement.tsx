import { FormEvent, useState } from "react";


type postMethodProps = {
    postMethod: (inputValue: string) => void; 

}

export const AddElement = ({postMethod}:postMethodProps) => {
     const [inputValue, setInputValue] = useState(''); 

        const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        postMethod(inputValue);
    }


    return (
             <form style={{display:'block'}} onSubmit={handleSubmit}>
                    <label htmlFor="enter">Wprowadź dane</label>
                <input
                    id="enter"
                    type="text"
                    name="Text"
                    value={inputValue}
                    onChange={handleChangeInput} 
                />
                <button type="submit">Wprowadź dane</button>
            </form> 

    )
}