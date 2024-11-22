import { memo } from "react"

type Props = {
  myArray: number[]
}

export const GrandChild =({myArray}:Props) => {

    console.log('render grandChild')

    return (
        <>
    <h3>Dowolna treść</h3>
      </>
    )
}