import * as React from 'react';
import Highlight from 'react-highlight'


interface Props {};
interface State {};

export default class PropsExample extends React.Component<Props, State> {
 
  render () {
    return (
        <div>
            <h1>Component data, methods and properties</h1>

            <p>
                React Components are special objects that could have properties and methods.
                We can treat them as a ES6 classes. They receives external properties that are often 
                called as "props". That are something similar to the attributes of HTML elements
                that can be used to customize the component.
            </p>

            <h2>Component internal data</h2>

            

            <p>
                Each component could have its "state"
                that allows them to keep something in memory. To do that we must define
                the "state" property in the constructor. Because we are extending the
                React.Component class we have to keep in mind that the constructor 
                receives the "props" argument and the super() method must be called with 
                that argument. Using JSX syntax we can access to out state variables using 
                <code>this.state.welcomeMessage</code> reference that is placed within 
                <code>{ "{ }" }</code> braces. That inform the renderer method to place 
                there a value of that variable.
            </p>

            <Highlight className="javascript">
                {`export default ExampleProps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            welcomeMessage: 'React property!',
        }
    }
    render() {
        return <h1>Hello from {this.state.welcomeMessage}</h1>
    }
}`}
            </Highlight>

            <h2>Passing properties</h2>

            <p>
                This time I should explaining with passing a external properties to the component
                but to keep it organized like it is presented in other frameworks I had to start 
                from the "state" property. But let's go to "props"! Props as it was mentioned 
                at the beginning are the external properties that we can pass to the component.
                By default they are accessible within the component using the "this.props" reference.
                But if we create a constructor method we have to remember to call the super() method
                with the "props" argument to not lose the reference to the "props" object. What is more
                the basic React component could be a simple function that receives the "props" as the argument
                and return the JSX code. That kind of component is called a "function component".
            </p>

            <Highlight className="javascript">
                {`function FunctionComponent(props) {
    return <h1>Hello from {props.framework}</h1>;
}`}
            </Highlight>

            <p>
                This time we are not defining the "props" that we are going to receive.
                We can add some props to the render method but we have to be aware 
                that it must be provided during the component creation.
            </p>

            <Highlight className="javascript">
                {`export default ExampleProps extends React.Component {
    render() {
        return <h1>Hello from {this.props.welcomeMessage}</h1>
    }
}`}
            </Highlight>

            <Highlight className="javascript">
                {`element = <ExampleProps welcomeMessage="React child component" />
`}
            </Highlight>

            <p>
                Wen we call ReactDOM.render() method the <code>ExampleProps</code> component
                is going to be rendered with the <code>welcomeMessage</code> property received
                from parent element. So it will render the header with text: "Hello from React child component".
            </p>

            <h3>Passing Variables</h3>

            <p>
                Using the same approach we can pass variables to the JSX template we can pass it to the 
                child component. In this case we are going to pass the variable <code>{ "framework" }</code>
                to the child ExampleProps component. It is very simple and easy to understand because 
                it is based on plain JavaScript and JSX methodology. Knowning that simple relation we are
                able to provide variables to our components.
            </p>

            <Highlight className="javascript">
                {`export default PropsParent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            framework: 'React',
        }
    }
    render() {
        return <ExampleProps welcomeMessage={this.state.framework} />
    }
}`}
            </Highlight>

            <h2>Emitting Events</h2>

            <p>
                In the previous section we have seen how to pass properties to the component.
                But sometimes we need to emit events to the parent component. In React that
                could be more complex but I will try to explain it as simple as possible.
            </p>

            <p>
                From the beginning we have to create a method inside SingleEmit component that 
                will be called when the button is clicked. To intercept the onClick event we 
                are going to use the "onClick" attribute on the button tag. Now because 
                we want to use methods inside a class we have to use <code>{ "{ }" }</code>
                braces to inform render method that we are going to use a JavaScript there.
            </p>

            <p>
                We are going to create a arrow function that will invoke the <code>increaseNumber()</code>
                method whenever the button is clicked. That method will increase the state of the 
                <code>currentValue</code> property of the SingleEmit component. Then we are going to 
                emit the event to the parent. To do that we are going to use the "this.props" reference
                and then the <code>increasedEvent</code> property will be the name of the event that
                we are going to emit. Because we want to pass the current value of that coutner to the
                parent we provide the reference to the <code>currentValue</code> property as the function argument.
            </p>

            <Highlight className="javascript">
                {`export default SingleEmit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentValue: 0,
        }
    }

    increaseNumber() {
        this.setState({currentValue: this.state.currentValue + 1});
        this.props.increasedEvent(this.state.currentValue);
    }

    render() {
        return <button onClick={() => this.increaseNumber()}>Increase number</button>
    }
}`}
            </Highlight>

            <p>
                Now everything is ready to intercept that event form the parent component.
                To do that we will add <code>increasedEvent</code> property to <code>SingleEmit</code>
                component definition. Like before with <code>onClick</code> event again we are using 
                JavaScript arrow function to intercept the event and invoke the <code>onIncreased</code>
                method. This time the arrow function will receive the current value of the counter and 
                that value will be passed to the method that will change the state of the counter state property.
            </p>

            <Highlight className="javascript">
                {`export default SingleEmitParent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
    }

    onIncreased(value) {
        this.setState({counter: value});
    }
    
    render() {
        return (<div>
            <p>Clicked: {this.state.counter} times.</p>
            <SingleEmit increasedEvent={(event) => this.onIncreased(event)}/>
        </div>)
    }
}`}
            </Highlight>

            <p>
                When the <code>onIncreased()</code> and <code>setState()</code> methods
                are called the value rendered in the template will be updated.
            </p>

           
            {/* https://youtu.be/CmUQ5C35_Oc?t=484 */}
        </div>
    );
  }
}