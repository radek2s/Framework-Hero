import * as React from 'react';
import Highlight from 'react-highlight'


interface Props {};
interface State {};

export default class Basic extends React.Component<Props, State> {
 
  render () {
    return (
        <div>
            <h1>Component Introduction</h1>

            <p>
                React is build of "Elements" which are the smallest building blocks 
                of the application. Elements are parts of something larger that could 
                be called a "Component" but that will be presented later. React Element is 
                a plain object managed by React DOM. All that elements are attached to 
                the single root element in the HTML file. Using <code>ReactDOM.render()</code> method
                we can pass that small element into a root DOM node. That element is immutable 
                so it won't be changed after it is rendered. It of course can be changed but 
                that will be explained later.
            </p>

            <Highlight className="xml">
                {`<html>
    <body>
        <div id="root"></div>
        <script>
            const element = <h1>Hello React!</h1>;
            ReactDOM.render(element, document.getElementById('root'));
        </script>
    </body>
</html>`}
            </Highlight>

            <p>
                Term "Component" is very often used in modern web development.
                In React it could be considered as a independent, reusable piece of code.
                They are like functions in JavaScript that can accept props and return
                other React elements. We can define a component using ES6 class syntax.
                Each React component should extend <code>React.Component</code> class.
                As you could see in the code above we have a <code>h1</code> element
                that was written with JSX syntax. It is neither a string nor HTML - it is 
                just a JSX element. That provides us a template mechanism for our components.
            </p>

            <h2>Single File Component</h2>

            <p>
                To keep our components small we can put them into separate files.
                React components are stored inside ".js" files. Each React component 
                class need to extend <code>React.Component</code> class and the 
                only method that we must define is <code>render()</code> method.
                Other methods are optional.
            </p>

            <Highlight className="javascript">
                {`class SingleComponentSelector extends React.Component {
    render() {
        return <h1>Hello from React SFC</h1>
    }
}`}
            </Highlight>

            <p>
                Render method is one of the most important methods of a React component.
                It is used to return a React element. React DOM is trying to update the 
                DOM tree according to the return value of the render method.
            </p>

            <h2>Component usage</h2>

            <p>
                To render that component we have back to the beginning of the 
                article where we defined an Element with H1 tag. Now to see that 
                component we have to pass it ClassName as a name of the tag.
            </p>


            <Highlight className="javascript">
                {`const element = <SingleComponentSelector />;
ReactDOM.render(element, document.getElementById('root'));`}
            </Highlight>

            <h2>Different component types</h2>

            <p>
                In React there are two main types of components. The function and class component. 
                Recently most developers use functional components to create their applications.
                Difference between them is mostly related with the syntax. 
            </p>

            <h3>Class component</h3>

            <p>
                These components are simple ReactJS classes that extend <code>React.Component</code> class.
                Developer must remember about adding a <code>render()</code> method to the class that returns 
                an React.Element instance. They very often implement logic and state. 
            </p>

            <p>
                These classes can handle the component state and can implements lifecycle hooks like componentDidMount and so on. 
                To do that we have to create a constructor to initialize the state and bind methods to the class.
            </p>

            <h3>Function component</h3>

            <p>
                Functional components are plain JavaScript functions that accept props and return a React.Element.
                Since React 16.8, they can handle state update and lifecycle methods. That was the main difference
                between them and class components. So that was the reason why they were used mostly for presentational 
                purposes. Not it has been mixed up with class components but this good practice is still used.
            </p>

            <p>
                This functions are easer to read and test and often contains less code. They are often known as Stateless components
                because they should not contain any logic or state but should just present the data and render UI. 
            </p>

            <p>
                After that update with React Hooks for functional components more and more applications are build 
                on the Functional Components. Functional components helps to keep the code clean and readable.
            </p>



        </div>
    );
  }
}