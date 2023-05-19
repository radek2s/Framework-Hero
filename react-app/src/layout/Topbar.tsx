import React from 'react';
import './Topbar.css';
import { withTranslation, WithTranslation } from 'react-i18next'

interface Props {};
interface State {};

 class Topbar extends React.Component<Props & WithTranslation, State> {

  changeLanguageHandler({target}: React.ChangeEvent<HTMLSelectElement>) {
    this.props.i18n.changeLanguage(target.value)
  }
 
  render () {
    return (
        <div className="topbar">
            <h1>React page</h1>
            <div className='language-selector'>
              <select onChange={(e) => this.changeLanguageHandler(e)}>
                <option value={"pl"}>Polski</option>
                <option value={"en"}>English</option>
              </select>
            </div>
        </div>
    );
  }
}

export default withTranslation()(Topbar)