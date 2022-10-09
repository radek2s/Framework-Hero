import * as React from 'react';
import Highlight from 'react-highlight';
import { Trans } from 'react-i18next'
import { withTranslation, WithTranslation } from 'react-i18next'


interface Props {};
interface State {};

class ReactInit extends React.Component<Props & WithTranslation, State> {
 
  render (): JSX.Element {
    const { t } = this.props
    return (
        <div>
            <h1>{t("page.init.project.header")}</h1>

            <p>
                {t("page.init.project.content")}
                {/* To start working with React we can just add the core library to our page.
                But for more complex projects we need to use a specific tool. The easiest
                to start with is "<a href="https://github.com/facebook/create-react-app">Create React App</a>" tool
                that helps us to create a new React project. */}
            </p>

            <h2>{t("page.init.cra.header")}</h2>

            <p>{t("page.init.cra.content")}</p>

            <Highlight className='bash'>
                {`npx create-react-app framework-hero`}
            </Highlight>

            <p>{t("page.init.cra.content2")}</p>

            <ul>
                <li>{t("page.init.cra.section.node")}</li>
                <li>{t("page.init.cra.section.public")}</li>
                <li>{t("page.init.cra.section.source")}</li>
                <li>{t("page.init.cra.section.root")}</li>
            </ul>

            <img src='images/view/init_01.png'/>

            <p>{t("page.init.cra.content3")}</p>

            <h2>{t("page.init.craTs.header")}</h2>

            <p>{t("page.init.craTs.content")}</p>

            <p>{t("page.init.craTs.content2")}</p>

            <p>{t("page.init.craTs.content3")}</p>

            <Highlight className='bash'>
                {`npx create-react-app framework-hero --template typescript`}
            </Highlight>

            <p>{t("page.init.craTs.content4")}</p>

            <img src='images/view/init_02.png'/>

            <h2>{t("page.init.run.header")}</h2>

            <p>{t("page.init.run.content")}</p>

            <Highlight className='bash'>
                {`npm run start`}
            </Highlight>

            <h2>{t("page.init.other.header")}</h2>

            <p>{t("page.init.other.content")}</p>
      
        </div>
    );
  }
}
export default withTranslation()(ReactInit)