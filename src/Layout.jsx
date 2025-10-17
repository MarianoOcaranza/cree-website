import Header from "./components/Header"


const Layout = ({children}) => {
    return (
        <>
            <Header/>
            {children}
            {/* Aca va a ir el footer con el acceso a las redes sociales*/}
        </>
    )
}

export default Layout