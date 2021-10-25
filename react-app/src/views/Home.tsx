import * as React from 'react';

interface Props {
    framework: String;
};

interface State {
  welcomeMessage: String;
};

export default class Home extends React.Component<Props, State> {
  state: State = {
    welcomeMessage: 'Hello from '
  };

  render () {
    return (
      <div>
          <span>{this.state.welcomeMessage}</span>
          <span>{this.props.framework}</span>
      </div>
    );
  }
}