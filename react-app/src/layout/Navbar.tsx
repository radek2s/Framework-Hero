import * as React from 'react';
import './Navbar.css';
import {
    Link
  } from "react-router-dom";

interface Props {
    // framework: String;
};

interface State {
//   welcomeMessage: String;
};

export default class Navbar extends React.Component<Props, State> {
  state: State = {
    // welcomeMessage: 'Hello from '
  };

  render () {
    return (
      <div>
          <nav>
              <div>
                  <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/project-initialization">Project initialization</Link></li>
                      <li><Link to="/simple-component">Component Example</Link></li>
                      <li><Link to="/props-component">Component Parameters</Link></li>
                      <li><Link to="/lifecycle-component">Component Lifecycle</Link></li>
                      <li><Link to="/slots-component">Component Projection</Link></li>
                      <li><Link to="/extend-component">Extending components</Link></li>
                      <li><Link to="/services">Service</Link></li>
                      <li><Link to="/directives-component">Directives</Link></li>
                      <li><Link to="/store-component">Store concept</Link></li>
                  </ul>
              </div>
          </nav>
      </div>
    );
  }
}