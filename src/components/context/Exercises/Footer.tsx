import { useConfigContext } from "./useConfigContext"

export const Footer = () => {
    const {colors:{primary, secondary}} = useConfigContext();

return (
    <footer style={{
        padding:24,
        backgroundColor: primary,
        color:secondary
    }}>
        lorem ipsum
    </footer>
)

}