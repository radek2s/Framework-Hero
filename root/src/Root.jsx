import { Outlet } from "react-router"
import './styles.css'

export const Root = () => {
    const navigateTo = (path) => {
        const {
            protocol,
            pathname,
            host
        } = window.location
        const domain = pathname === "/" ? "" : pathname.slice(1)
        console.log({protocol, host})
        window.location = `${protocol}//${host}/${domain}#/${path}`
    }
    return (<div className="shell-navbar">
        <ul>
            <li onClick={() => navigateTo("angular")}>Angular</li>
            <li onClick={() => navigateTo("react")}>React</li>
            <li onClick={() => navigateTo("vue")}>Vue</li>
        </ul>
        <div>
            <Outlet/>
        </div>
        </div>)

}

export default Root