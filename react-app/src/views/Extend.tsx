import * as React from 'react';
import Highlight from 'react-highlight'


interface Props {};
interface State {};

export default class Extend extends React.Component<Props, State> {
 
  render () {
    return (
        <div>
            <h1>Extending the component</h1>

            <p>
                Authors of the React framework recommend to follow the pattern of "Composition
                over Inheritance" to provide some logic to our components. This is augmented 
                by powerful composition model of React. Based on their experience, they declare 
                that during the creation of Facebook page they haven't found any use case where 
                the component Inheritance will be a good idea. (<a href="https://reactjs.org/docs/composition-vs-inheritance.html">Source</a>).
            </p>

            <p>
                Of course it is possible by extending the other React component class. 
                The first one extends the <code>Component</code> class from React core 
                but this component should not have the render method. The child class 
                will inheritance the methods from the parent class but is must have 
                this missing render method. It is more for creating an abstraction layer
                to your design but it may provide an additional complexity to your code. 
            </p>

            <Highlight className="javascript">
                {`class ParentAbstractComponent extends React.Component {
  greet() {
    console.log('Hello world!')
  }
}

class ChildComponent extends ParentAbstractComponent {
  render () {
    return(
      <div>
        <button onClick={this.greet.bind(this)}>
          Say hello
        </button>
      </div>
    )
  }  
} `}
            </Highlight>

            <p>
                Developer can't "override" the render method but he can use <code>props</code> 
                to pass the additional data and change the behavior of the component.
            </p>

            <h2>High order components HOC</h2>

            <p>
                For many components that share the similar behavior, it is possible to create a 
                High-Order Component (HOC) to wrap the component and provide additional functionality. 
                HOCs are functions that take a component and return a new component with new features.
                That common behavior will be defined once and composed into classes that require it.
            </p>

            <p>
                This HOC function takes a component class as a parameter and returns a new component class 
                that has a new functionality. It is similar to the "Decorator" pattern known from the Object-Oriented Programming.
                It is advanced technique for reusing component logic that evolved from the React base.
                Previously to resolve the multi level design problems in the React, the developers
                used the "mixins". 
            </p>

            <Highlight className="javascript">
                {`const Loader = (promiseProp, Wrapped) => class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loading: true, error: null, result: null};
  }

  componentDidMount() {
      this.props[promiseProp].then(
          value => this.setState({loading: false, result: value}),
          error => this.setState({loading: false, error})
      );
  }

  render() {
      if (this.state.loading) {
          return <p>Loading. Please wait...</p>;
      } else if (!!this.state.error) {
          return <p>Error: {this.state.error.message}</p>;
      } else {
          return <Wrapped {...this.props} {this.state.result} />;
      }
  }
};
`}
            </Highlight>

            <Highlight className="javascript">
                {`let AsyncWeatherWidget = Loader("weather", Weather);
  ... 

  <AsyncWeatherWidget weather={fetchWeather('/api/krakow.json')}/>
`}
            </Highlight>

            <p>
                HOC Components doesn't modify the input component but it is wrapping it into a 
                new container component. Wrapped component receives all the props from the container
                with the addition of the result of the promise. 
            </p>

            <p>
                More detailed information about HOCs can be found in the <a href="https://reactjs.org/docs/higher-order-components.html">official documentation</a>
                of the React. During the explanation of the HOCs I based on the article from <a href="http://natpryce.com/articles/000814.html">Natpryce.com</a>
            </p>

        </div>
    );
  }
}