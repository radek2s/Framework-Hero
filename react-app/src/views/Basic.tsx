import * as React from 'react';
import Highlight from 'react-highlight'
import { withTranslation, WithTranslation } from 'react-i18next'


interface Props {};
interface State {};

class Basic extends React.Component<Props & WithTranslation, State> {
 
  render () {
    const { t } = this.props
    return (
        <div>
            <h1>{t("page.basic.intro.header")}</h1>

            <p>{t("page.basic.intro.content")}</p>

            <p>{t("page.basic.intro.content2")}</p>

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

            <p>{t("page.basic.intro.content3")}</p>

            <h2>{t("page.basic.sfc.header")}</h2>

            <p>{t("page.basic.sfc.content")}</p>

            <h3>{t("page.basic.sfc.classComponent.header")}</h3>

            <p>{t("page.basic.sfc.classComponent.content")}</p>

            <p>{t("page.basic.sfc.classComponent.content2")}</p>

            <Highlight className="javascript">
                {`class SingleComponentSelector extends React.Component {
    render() {
        return <h1>Hello from React SFC</h1>
    }
}
export default SingleComponentSelector`}
            </Highlight>

            <p>{t("page.basic.sfc.classComponent.content3")}</p>

            <h4>{t("page.basic.sfc.classComponent.ts.header")}</h4>

            <p>{t("page.basic.sfc.classComponent.ts.content")}</p>

            <Highlight className="typescript">
                {`interface MyComponentProps {};
interface MyComponentState {};

class SingleComponentSelector extends React.Component<MyComponentProps, MyComponentState> {
    render(): JSX.Element {
        return <h1>Hello from React SFC</h1>
    }
}
export default SingleComponentSelector`}
</Highlight>

            <h3>{t("page.basic.sfc.functionComponent.header")}</h3>

            <p>{t("page.basic.sfc.functionComponent.content")}</p>

            <Highlight className="javascript">
                {`function SingleComponentSelector() {
    return <h1>Hello from React SFC</h1>
}
export default SingleComponentSelector`}
            </Highlight>

            <p>{t("page.basic.sfc.functionComponent.content2")}</p>

            <Highlight className="javascript">
                {`const SingleComponentSelector = () => {
    return <h1>Hello from React SFC</h1>
}
export default SingleComponentSelector`}
            </Highlight>

            <p>{t("page.basic.sfc.functionComponent.content3")}</p>

            <h4>{t("page.basic.sfc.functionComponent.ts.header")}</h4>

            <p>{t("page.basic.sfc.functionComponent.ts.content")}</p>

            <Highlight className="typescript">
                {`interface MyComponentProps {};
const SingleComponentSelector: React.FC<MyComponentProps> = () => {
    return <h1>Hello from React SFC</h1>
}
export default SingleComponentSelector`}
            </Highlight>



            

            <h2>{t("page.basic.usage.header")}</h2>

            <p>{t("page.basic.usage.content")}</p>

            <Highlight className="javascript">
                {`import SingleComponentSelector from './SingleComponentSelector'
...
const element = <SingleComponentSelector />;
ReactDOM.render(element, document.getElementById('root'));`}
            </Highlight>

            <p>{t("page.basic.usage.content2")}</p>
        </div>
    );
  }
}

export default withTranslation()(Basic)