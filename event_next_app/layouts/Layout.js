import MainHeader from "./MainHeader"

const Layout = (props) => {
    return(
        <>
            <header>
                <MainHeader />
            </header>
            <main>
                {props.children}
            </main>
        </>
    )
}

export default Layout