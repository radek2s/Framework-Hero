import * as React from 'react';
import Highlight from 'react-highlight'
import { withTranslation, WithTranslation } from 'react-i18next'


interface Props {};
interface State {};

class PropsExample extends React.Component<Props & WithTranslation, State> {
 
  render () {
    const { t } = this.props
    return (
        <div>
            <h1>{t("page.props.intro.header")}</h1>

            <p>{t("page.props.intro.content")}</p>

            <h2>{t("page.props.internal.header")}</h2>

            <p>{t("page.props.internal.content")}</p>

            <p>{t("page.props.internal.content2")}</p>


            <Highlight className="typescript">
                {`import React, { useState } from 'react'

const ExampleComponent:React.FC = () => {
    const [welcomeMessage, setWelcomeMessage] = useState<string>('State example')

    return (<h1>Hello from {welcomeMessage}</h1>)
}
export default ExampleComponent`}
            </Highlight>

            <p>{t("page.props.internal.content3")}</p>

            <Highlight className="javascript">
                {`import React from 'react'

class ExampleComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            welcomeMessage: 'State example',
        }
    }

    render() { return (<h1>Hello from {this.state.welcomeMessage}</h1>) }    
}
export default ExampleComponent`}
            </Highlight>

            <p>{t("page.props.internal.content4")}</p>

            <Highlight className="javascript">
                {`import React from 'react'

interface Props {}
interface State {
    welcomeMessage: string
}
class ExampleComponent extends React.Component<Props, State> {
    state: State = {
        welcomeMessage: 'State example'
    }

    render() { return (<h1>Hello from {this.state.welcomeMessage}</h1>) }    
}
export default ExampleComponent`}
            </Highlight>

            <h2>{t("page.props.methods.header")}</h2>

            <p>{t("page.props.methods.content")}</p>

            <Highlight className="typescript">
                {`//ExampleComponent.tsx - typescript example
const ExampleComponent:React.FC = () => {
    const [welcomeMessage, setWelcomeMessage] = useState<string>('State example')

    // Classic function approach
    function updateMessage(message: string): void {
        setWelcomeMessage(message)
    }

    // Anonymous function approach
    const getPrefixedMessage = ():string => {
        return "Example - " + welcomeMessage;
    }

    ...
}`}
            </Highlight>

            <h2>{t("page.props.props.header")}</h2>

            <p>{t("page.props.props.content")}</p>

            <Highlight className="javascript">
                {`element = <FunctionComponent framework="React child component" />`}
            </Highlight>

            <p>{t("page.props.props.content2")}</p>

            <Highlight className="typescript">
                {`//Basic example
const FunctionComponent = (props) => {
    return <h1>Hello from {props.framework}</h1>;
}`}</Highlight><Highlight className="typescript">{`//TypeScript example
interface MyProps {
    framework: string
}
const FunctionComponent: React.FC<MyProps> = (props) => {
    return <h1>Hello from {props.framework}</h1>
}
`}</Highlight><Highlight className="typescript">{`//TypeScript example with ES6 property destructuring
interface MyProps {
    framework: string
}
const FunctionComponent: React.FC<MyProps> = ({ framework }) => {
    return <h1>Hello from {framework}</h1>
}
`}
            </Highlight>

            <p>{t("page.props.props.content3")}</p>

            <Highlight className="javascript">{`class ClassComponent extends React.Component {
    constructor(props) {
        super(props)
        ...
    }
    ...

    render() {
        return <h1>Hello from {this.props.framework}</h1>
    }
}`}
            </Highlight>

            <p>{t("page.props.props.content4")}</p>

            <Highlight className="typescript">{`interface Props {
    framework: string
}
interface State {}

class ClassComponent extends React.Component<Props,State> {
    render(): JSX.Element {
        return <h1>Hello from {this.props.framework}</h1>
    }
}`}
            </Highlight>

            <h3>{t("page.props.props.variables.header")}</h3>

            <p>{t("page.props.props.variables.content")}</p>

            <Highlight className="javascript">{`const uniqueMessage = {id: 1, content: 'example'}
...
<ChildComponent message={uniqueMessage} />`}
            </Highlight>

            <h2>{t("page.props.events.header")}</h2>

            <p>{t("page.props.events.content")}</p>

            <Highlight className="typescript">
                {`const ChildComponent = (props) => {
    const [currentValue, setCurrentValue] = useState(0)

    // (3) When 'currentValue' has been updated invoke props event
    useEffect(() => {
        props.increasedEvent(currentValue)
    }, [currentValue])

    // (2) Handle state change evnet
    const increaseNumber = () => {
        setCurrentValue(currentValue + 1)
    }

    // (1) Click button
    return <button onClick={() => increaseNumber()}>Increase number</button>
}`}
            </Highlight>

            <p>{t("page.props.events.content2")}</p>

            <Highlight className="typescript">
                {`//TypeScript example
interface ChildProps {
    increasedEvent: (value: number) => void                    
}
const ChildComponent: React.FC<ChildProps> = (props) => {
    const [currentValue, setCurrentValue] = useState<number>(0)

    useEffect(() => { props.increasedEvent(currentValue) }, [currentValue])

    const increaseNumber = (): void => {
        setCurrentValue(currentValue + 1)
    }

    //We can simplify the method handler invocation
    return <button onClick={increaseNumber}>Increase number</button>
}`}
            </Highlight>

            <p>{t("page.props.events.content3")}</p>

            <p>{t("page.props.events.content4")}</p>

            <Highlight className="typescript">
                {`const ParentComponent = () => {
    const [counter, setCounter] = useState(0)

    const onIncreased = (value) => {
        setCounter(value)
    }

    return (
        <div>
            <p>Clicked: {counter} times.</p>
            <ChildComponent increasedEvent={(event) => onIncreased(event)}/>
        </div>
    )
}`}
            </Highlight>

           
            {/* https://youtu.be/CmUQ5C35_Oc?t=484 */}
        </div>
    );
  }
}

export default withTranslation()(PropsExample)