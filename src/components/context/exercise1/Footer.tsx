import { useConfigContext } from "./useConfigContext"

export const FooterContext = () => {
    const {colors: {primary, secondary}} = useConfigContext();
return(
    <footer style={{
        padding:24,
        backgroundColor:secondary,
        color: primary
    }}>
    <p>lorem ipsum</p>
    </footer>
)
}