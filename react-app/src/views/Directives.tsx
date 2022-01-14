import * as React from 'react';
import Highlight from 'react-highlight'


interface Props { };
interface State {
    ren: number[]
};

export default class Directives extends React.Component<Props, State> {

    state: State = {
        ren: [11, 22, 33],
    }


    render() {
        return (
            <div>
                <h1>Directives? What is it?</h1>

                <p>
                    If you are looking for directives in the React application you may find it difficult.
                </p>

                <p>
                    React keep the state of the Virtual DOM so it is responsible for rendering and generating
                    the DOM elementns. This is the fundamental principle how the React works. There is no
                    reason to use something you may known from the Angular or Vue.js framework like
                    directives that are attached to HTML tags because there is no DOM elements where
                    that directive could be attached. When you are providing a attribute for
                    your React component it is treated as property that is passed to the component.
                </p>

                <h2>Dynamic CSS classes</h2>

                <p>
                    Ok so we know that we do not have any directives available in the React.js framework. But
                    how to handle the same issues that Angular and Vue.js handle with directives? The answer
                    is "use JavaScript". React take advantage of the JavaScript and we can use it to create
                    a functions that will provide the expected behavior.
                </p>

                <Highlight className="javascript">
                    {`render() {
    return (
        <div className={\`selected \${this.isAdmin() ? "" : "disabled"}\`}>
            Hello User!
        </div>
    )
}`}

                </Highlight>

                <p>
                    When the state of a component changes, React performs a re-render and in that
                    moment we pass the respective CSS classes to our div.
                </p>

                <h2>Dynamic Inline-styling</h2>

                <p>
                    This time we will also bind the expression to the style attribute. Because
                    everything in React is an JavaScript we can easily assing specific object to that
                    attribute using the assignment operator.
                </p>

                <Highlight className="javascript">
                    {`export default InputLabel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputStyles: {
                color: this.props.disabled ? "#999" : "#000",
                font-weight: this.props.required ? "bold" : "normal"
            }
        }
    }
                
    render() {
        return (
            <span style={this.state.inputStyles}>Label text</span>
        )
    }
}`}

                </Highlight>

                <p>
                    In this example depending on the provided properties we can change the style of
                    the input label. If we pass the required property the "Label text" will be
                    bolded. In inputStyles object we manipulate the CSS selectors and base on the
                    state of the component we can change them to specific value. In JSX we only need to
                    bind the style attribute with the reference of that object. We have to remember that
                    the "style" behave like a property in React.js instead of an classic attribute.
                </p>

                <h2>Conditional rendering</h2>

                <p>
                    Again we have to use the clear JavaScript to render a specific HTML code but this
                    time we can use the "if" statement. If the condition is true we will render the
                    <code>span</code> block with the basket size information. Otherwise this block will
                    return null that will not be rendered.
                </p>

                <Highlight className="javascript">
                    {`render() {
    return (
        {this.state.basketItems > 0 && <span>You have {this.state.basketItems} items in your basket.</span>}
    )
}`}

                </Highlight>

                <p>
                    Here we can see that the amount of items in basket is displayed only when there is more than 0 items.
                </p>

                <p>
                    In JSX we can use ternary operator to show two code blocks depending on the condition result.
                </p>

                <Highlight className="javascript">
                    {`render() {
    return (
        {this.state.basketItems > 0
            ? <span>You have {this.state.basketItems} items in your basket.</span>
            : <span>Your basket is empty.</span>
        }
    )
}`}

                </Highlight>

                <h2>Rendering the list</h2>

                <p>
                    Finally sometimes we need to render a list of items. Again in this case we can't
                    use directly a "for" directive but we can think of it as a JavaScript code and
                    we can use the "map" function to iterate over the list.
                </p>

                <Highlight className="javascript">
                    {`render() {
    return (
        {this.state.basketProducts.map((item) => <div>{item.name}</div>)}
    )
}`}
                </Highlight>

                <p>
                    In this case we want to present the list of orders and each order will be represented by a
                    <code>div</code> element that innerText will be the name property of the order.
                </p>
                <p>
                    Using map we can return the zero-based index of the item in the list.
                    So we can get the index of the item variable that we used in the JSX.
                    To do that we can extract the second argument form map method and then use it as a variable.
                </p>

                <Highlight className="javascript">
                    {`render() {
    return (
        {this.state.basketProducts.map((item, i) => <div>{i+1}: {item.name}</div>)}
    )
}`}
                </Highlight>

                <p>
                    Sometimes we want to render a dynamic list of items that can be changed when the component
                    receives new data. In this case every change in the data array will cause the whole list to
                    be re-rendered. To prevent this we can use the key property that is responsible for tracking
                    changes in the data array. To do that we only have to bind the key attribute with proper value.
                    In this case we want to use the id of the item as a key.
                </p>

                <Highlight className="javascript">
                    {`render() {
    return (
        {this.state.basketProducts.map((item, i) => <div key={item.id}>{i+1}: {item.name}</div>)}
    )
}`}
                </Highlight>

                <p>
                    In React this list rendering syntax within JSX may be too long and can be hard
                    to read. So if we want to provide more complex list rendering we can create
                    a specific function or variable that will be responsible for rendering the list
                    in a clear way.
                </p>

                <Highlight className="javascript">
                    {`render() {
    const itemsList = this.state.basketProducts.map((item, i) => 
        <div key={item.id}>{i+1}: {item.name}</div>);
    return (
        <header>{itemsList}</header>
    );
}`}
                </Highlight>

            </div>
        );
    }
}