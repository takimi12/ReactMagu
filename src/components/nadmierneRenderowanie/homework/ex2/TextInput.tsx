import React, { memo, useEffect, useState } from "react"

type Props = {
    value:string;
    onChange: (e:string) => void
}

export const TextInput = memo(({value, onChange}:Props) => {

    console.log('rendering text input', value)


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value)
    }


    return (
        <input type="text" value={value} onChange={handleChange} />
    )
})


