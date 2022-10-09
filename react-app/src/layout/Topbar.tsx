import * as React from 'react';
import './Topbar.css';
import { withTranslation, WithTranslation } from 'react-i18next'

interface Props {};
interface State {};

 class Topbar extends React.Component<Props & WithTranslation, State> {

  changeLanguageHandler(lang: "pl" | "en") {
    this.props.i18n.changeLanguage(lang)
  }
 
  render () {
    return (
        <div className="topbar">
            <h1>React page</h1>
            <div>
              <button onClick={() => this.changeLanguageHandler("pl")}>PL</button>
              <button onClick={() => this.changeLanguageHandler("en")}>EN</button>
            </div>
        </div>
    );
  }
}

export default withTranslation()(Topbar)