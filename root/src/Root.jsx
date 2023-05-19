import { Outlet } from "react-router"
import './styles.css'

export const Root = () => {
    const navigateTo = (path) => {
        const {
            protocol,
            host
        } = window.location
        console.log({protocol, host})
        window.location = `${protocol}//${host}/#/${path}`
    }
    return (<div className="shell-navbar">
        <ul>
            <li onClick={() => navigateTo("angular")}>Angular</li>
            <li onClick={() => navigateTo("react")}>React</li>
            <li onClick={() => navigateTo("vue")}>Vue</li>
        </ul>
            <Outlet/>
        </div>)

}

export default Root