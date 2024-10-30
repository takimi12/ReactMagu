import { useConfigContext } from "./useConfigContext"

export const HeaderContext = () => {
    const {colors: {primary, secondary}} = useConfigContext();

    return(
    <div style={{
        padding:24,
        backgroundColor:primary,
        color: secondary
    }}>
    <p>lorem ipsum</p>
    </div>
)
}