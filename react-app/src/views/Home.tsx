import * as React from 'react';

interface Props {
    framework: String;
};

interface State {
  welcomeMessage: String;
};

export default class Home extends React.Component<Props, State> {
  state: State = {
    welcomeMessage: 'Hello React'
  };

  render () {
    return (
      <div>
          <h1>{this.state.welcomeMessage}</h1>
          <p>
            In general this is a JavaScript library for building user interfaces.
            React has been released in 2013 by Jordan Walke from Facebook company.
            It is mostly used to create interactive Single Page Applications (SPA).
            Why React is so popular? Because it start using Virtual DOM (Document Object Model)
            to render the UI. All the DOM manipulation is done in JavaScript so 
            React is very fast but keeps in memory the whole DOM tree. This approach
            with JavaScript everywhere caused that React start using the JSX (JavaScript XML)
            syntax to write the UI. Using that approach user can write the HTML code 
            directly in the JavaScript.
          </p>

          <p>
            It is the most popular JavaScript framework for building user interfaces.
            Used by Facebook, Instagram, Microsoft, Netflix, PayPal, and many more.
            Using React you can start creating Component-Based Applications that 
            could be very fast and scalable. Encapsulated components helps you 
            to organize your code and reuse it. Declarative views helps you to 
            create interactive user interfaces and keeping the state of your application
            without too much effort. 
          </p>

          <p>
            React is very popular so it has also many additional libraries and tools
            that can extend the functionality of your application. Community of React
            developers is very big and it is very easy to find the best solution for
            any trouble. Base React library is responsible for the rendering of the
            view layer. So to create more complex applications you have to find the 
            additional packages that will help you to create the more advanced components.
          </p>
      </div>
    );
  }
}