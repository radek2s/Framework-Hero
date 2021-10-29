import * as React from 'react';

interface Props {};
interface State {};

export default class ReactInit extends React.Component<Props, State> {
 
  render () {
    return (
        <div>
            <h1>Project initialization</h1>

            <p>
                To start working with React we can just add the core library to our page.
                But for more complex projects we need to use a specific tool. The easiest
                to start with is "<a href="https://github.com/facebook/create-react-app">Create React App</a>" tool
                that helps us to create a new React project.
            </p>

            <h2>Installation and Creation of React Application</h2>

            <p>
                Using that tool we can easly create a new React project. Just type the following command:
            </p>

            <code>npx create-react-app framweork-hero</code>

            <h2>Running the development server</h2>

            <p>
                Then to run the development server we need run one of the npm scripts:
            </p>

            <code>
                npm run start
            </code>

      
           

        </div>
    );
  }
}