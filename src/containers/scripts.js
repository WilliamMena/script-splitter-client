import React, {Component} from 'react';
import CaptionSplit from '../containers/captionSplit'
import { connect } from 'react-redux'
import { getScripts, deleteScript } from '../actions/scripts.js'

class Scripts extends Component {


  componentDidMount() {
    this.props.getScripts()
  }

  handleOnClick = event => {
    event.preventDefault()
    const id = event.target.name
    // continue on creating the delete button, check where the other actions go to
    this.props.deleteScript(id)
  }


  render() {
    return (
      <div>
        {this.props.scripts.map(script =>
          <div key={script.id}>
            <h4>{script.title}</h4>
            <button name={script.id} onClick={event => this.handleOnClick(event)} >Delete</button>
            <p>{script.text}</p>
            <CaptionSplit text={script.text} />
          </div>
        )}
      </div>

    )
  }
}
const mapStateToProps = (state) => {
  return ({
    scripts: state.scripts
  })
}

export default connect(mapStateToProps, {getScripts, deleteScript})(Scripts);
