import React, {Component} from 'react';
import { connect } from 'react-redux';

import CaptionSplit from './captionSplit.js'
import {deleteScript, getScripts} from '../actions/scripts.js'

class ScriptShow extends Component {

  constructor(props) {
    super(props)

    this.state = {
      script: [],
      loading: true
    }
  }

  componentDidMount() {
    this.props.getScripts()
    this.setState({
      loading: false
    })

  }

  handleOnClick = event => {
    event.preventDefault()
    const id = event.target.name
    // continue on creating the delete button, check where the other actions go to
    this.props.deleteScript(id)
  }

  render() {
    return (
      <div key={this.props.script.id}>
        <h1>{this.props.script.title}</h1>
        <p>Split by {this.props.script.characters || 45} characters</p>
        <button name={this.props.script.id} onClick={event => this.handleOnClick(event)} >Delete</button>
        <p>{this.props.script.text}</p>

        {this.state.loading === true ?
          <p>Loading scripts</p>
          :
          <CaptionSplit characters={this.props.script.characters} text={this.props.script.text} />
        }

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
