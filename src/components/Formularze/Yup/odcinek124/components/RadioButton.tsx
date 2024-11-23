import React,{ ChangeEvent, forwardRef } from "react";

export type RadioButtoProps = {
    label: string;
    value:string;
    name:string;
    onChange: (e:ChangeEvent) => void;
}


export const RadioButton = ({label, value, name, onChange}: RadioButtoProps) => {
    return (
        <div>
            <label>
            <input type='radio' value={value} name={name} onChange={onChange}  />
            {label}
            </label>
        </div>
    )
}