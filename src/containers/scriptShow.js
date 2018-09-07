import React, {Component} from 'react';
import { connect } from 'react-redux';

import CaptionSplit from './captionSplit.js'
import {deleteScript, getScripts} from '../actions/scripts.js'

class ScriptShow extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.setState({
      loading: false
    })
  }

  handleOnClick = event => {
    event.preventDefault()
    const id = event.target.name
    // continue on creating the delete button, check where the other actions go to
    this.props.deleteScript(id)
    // return <Redirect to="/dashboard"/>
    window.history.back();
  }

  render = () => {
    if (this.props.script.characters === undefined) {
      return <p>This script does not exist. Please return to master script.</p>
    }
    else if (this.state.loading === true) {
      return <p>Loading scripts</p>
    } else {
      return (
        <div>
          <h1>{this.props.script.title}</h1>
          <p>Split by {this.props.script.characters || 45} characters</p>
          <p>Timecode: {this.props.script.timecode? this.props.script.timecode.slice(11,-5) : "undefined"}</p>
          <button name={this.props.script.id} onClick={event => this.handleOnClick(event)} >Delete</button>
          <p>{this.props.script.text}</p>
          <CaptionSplit characters={this.props.script.characters} text={this.props.script.text} />
        </div>
      )
    }
  }

  render() {
    return (
      <div key={this.props.script.id}>
        { this.render() }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // eslint-disable-next-line
  const script = state.scripts.find(script => script.id == ownProps.match.params.scriptId)

  if (script) {
    return { script }
  } else {
    return { script: {} }
  }
}

export default connect(mapStateToProps, {deleteScript, getScripts})(ScriptShow);
