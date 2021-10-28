import * as React from 'react';
import './Topbar.css';

interface Props {};
interface State {};

export default class Topbar extends React.Component<Props, State> {
 
  render () {
    return (
        <div className="topbar">
            <h1>React page</h1>
        </div>
    );
  }
}