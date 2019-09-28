import React from 'react';

export default class PackShow extends React.Component {

  componentDidMount() {
    this.props.getPack(this.props.match.params.packId);
  }
  render() {
    debugger
    if (!this.props.pack) {
      return null;
    }
    return(
      <div>
        hello
      </div>
    )
  }
}