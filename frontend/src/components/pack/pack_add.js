import React from 'react';
import { getPacks } from '../../util/pack_api_util';

export default class PackAdd extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(props)
  }

  handleSubmit(e) {

  }


  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>

        </form>
      </div>
    )
  }
}