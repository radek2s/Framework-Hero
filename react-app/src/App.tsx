import React from 'react';
import './App.css';
import Navbar from './layout/Navbar';
import Topbar from './layout/Topbar';
import { Outlet } from 'react-router-dom';



export const App:React.FC = () => {

  return (
    <div>
      
        <Navbar></Navbar>
        <header>
          <Topbar></Topbar>
        </header>

        <main>
          <section>
            <Outlet/>
            {/* <Outlet/> */}
            
            {/* <HashRouter>
              <Routes>
                
              </Routes>
            </HashRouter>
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  ></Route>
                  ={(props: RouteComponentProps<any>) => (
                    <route.component {...props} {...route.props} />
                  )}
                />
              ))}
            </Switch> */}
          </section>
        </main>

        <footer></footer>
    </div>
  );
}

export default App;
