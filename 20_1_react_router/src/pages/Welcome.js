import {Outlet,Link} from "react-router-dom"

const Welcome = () => {
    return (
        <section>
            <h1>Welcome page</h1>
            <Link to="new-user">New User</Link>
            <Outlet />
        </section>
    )
}

export default Welcome