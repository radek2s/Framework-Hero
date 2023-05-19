import { Route, Routes } from "react-router-dom"
// import Navbar from "./layout/Navbar"
// import Topbar from "./layout/Topbar"
import Home from "./views/Home"
import ReactInit from "./views/Initialization";

export const Application:React.FC = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <header>
                <h1>Hi from MFE</h1>
                {/* <Topbar></Topbar> */}
            </header>

            <main>
                <section>
                    <Routes>
                        <Route index element={<Home framework={"React"}/>}/>
                        <Route path="project-initialization" element={<ReactInit/>}/>
                    </Routes>
                    
                </section>
            </main>

            <footer></footer>
        </div>
    )
}

export default Application