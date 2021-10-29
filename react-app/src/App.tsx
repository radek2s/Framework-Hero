import React from 'react';
import './App.css';
import Navbar from './layout/Navbar';
import Topbar from './layout/Topbar';
import routes from './router';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteComponentProps,
} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <header>
          <Topbar></Topbar>
        </header>

        <main>
          <section>
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  render={(props: RouteComponentProps<any>) => (
                    <route.component {...props} {...route.props} />
                  )}
                />
              ))}
            </Switch>
          </section>
        </main>

        <footer></footer>
      </Router>
    </div>
  );
}

export default App;
