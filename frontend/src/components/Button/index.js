import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    const type = this.props?.type || 'button';
    const btnTheme = this.state?.btnTheme || 'btn-primary';
    const content = this.props?.content || 'Button';
    return (
      <button
        onClick={this.props?.handleClickButton}
        type={type} className={`btn ${btnTheme}`}>
        {content}
      </button>
    )
  }
}
