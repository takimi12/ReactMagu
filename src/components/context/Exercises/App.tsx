import { ConfigContext } from "./ConfigContext"
import { Footer } from "./Footer"
import { Header } from "./Header"

export const AppContext = () => {
    return <main>
        <ConfigContext.Provider value={{
            colors:{
                primary: 'blue',
                secondary: 'white'
            }
        }}>
        <Header />
        <Footer />
        </ConfigContext.Provider>
    </main>
}