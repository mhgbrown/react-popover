import './main.css'
import F from 'ramda'
import React from 'react'
import ReactDOM from 'react-dom'
import Popover from '../../lib'
import classNames from 'classnames'

const Main = React.createClass({
  getInitialState () {
    return {
      isOpen: false,
    }
  },
  toggle () {
    this.setState({ isOpen: !this.state.isOpen })
  },
  render () {
    return (
      <div id='app'>{ this.renderPopover() }</div>
    )
  },
  renderPopover () {
    const {
      isOpen,
    } = this.state
    return (
      <Popover isOpen={isOpen} body='inside' preferPlace={'above'} frameEl={document.getElementById('app')} >
        <div
          className={ classNames('target', { isOpen }) }
          onClick={this.toggle}>
          i
        </div>
      </Popover>
    )
  }
})

window.React = React
window.ReactDOM = ReactDOM
window.Main = Main
