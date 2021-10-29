import * as React from 'react';
import Highlight from 'react-highlight'


interface Props { };
interface State { };

export default class SlotsExample extends React.Component<Props, State> {

    render() {
        return (
            <div>
                <h1>Content projection</h1>

                <p>
                    As in other frameworks we are able to pass other components into
                    the slots of the component. To do that we have to use <code>children</code>
                    property from the <code>props</code> component object. That will inform
                    render method to put there the children elements (elements between
                    <code>Child</code> tag) provided by the parent.
                </p>

                <h2>React children</h2>

                <Highlight className="javascript">
                    {`export default Child extends React.Components {
    render() {
        return (
            <div>
                <h1>Header of child</h1>
                <div>{this.props.children}</div>
                <footer>Footer of child</footer>
            </div>
        )
    }

} `}
                </Highlight>

                <Highlight className="javascript">
                    {`export default Parent extends React.Components {
    render() {
        return (
            <div>
                <Child>
                    <section>
                        <h2>Parent section to be displayed</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </section>
                </Child>
            </div>
        )
    }
} `}
                </Highlight>

                <h2>Multiple-slots</h2>

                <p>
                    React allows us to use multiple slots called "named children".
                    It works very similar like in other frameworks.
                </p>

                <Highlight className="javascript">
                    {`export default Child extends React.Components {
    render() {
        return (
            <div>
                <div>{this.props.children.header}</div>
                <div>{this.props.children.default}</div>
                <footer>Footer of child</footer>
            </div>
        )
    }

} `}
                </Highlight>

                <Highlight className="javascript">
                    {`export default Parent extends React.Components {
    render() {
        return (
            <div>
                <Child>
                {{
                    header: <h2>Parent section to be displayed</h2>,
                    default: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                }}
                </Child>
            </div>
        )
    }
} `}
                </Highlight>



            </div>
        );
    }
}