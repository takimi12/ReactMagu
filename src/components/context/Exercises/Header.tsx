import { useConfigContext } from "./useConfigContext"

export const Header = () => {
    const {colors:{primary, secondary}} = useConfigContext();

return (
    <header style={{
        padding:24,
        backgroundColor: primary,
        color:secondary
    }}>
        lorem ipsum
    </header>
)

}