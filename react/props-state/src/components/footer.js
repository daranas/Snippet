import React from 'react'

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <p><strong>{ this.props.dataFooter }</strong></p>
      </div>
    )
  }
}