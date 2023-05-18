import { Outlet } from "react-router"

export const Root = () => {
    return (<div>
            <h1>Hello MicroFrontends</h1>
            <Outlet/>
        </div>)

}

export default Root