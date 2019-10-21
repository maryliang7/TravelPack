import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PackAddContainer from './pack_add_container';
import PackFormContainer from './pack_form_container';
import WolfCrop from './wolf-back-crop.png';
import './pack_show.css';


export default class Pack extends React.Component {
  
  render() {
    return (
      <div className="pack-forms">
        <PackFormContainer />
        <PackAddContainer />
        <img id="wolf-crop" src={WolfCrop} />
      </div>
    )
  }
}