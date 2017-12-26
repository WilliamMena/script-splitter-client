import React, {Component} from 'react';
import CaptionSplit from '../containers/captionSplit'
import { connect } from 'react-redux'
import { getScripts } from '../actions/scripts.js'

class Scripts extends Component {


  componentDidMount() {
    this.props.getScripts()
  }

  render() {
    return (
      <div>
        {this.props.scripts.map(script =>
          <div key={script.id}>
            <h4>{script.title}</h4>
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

export default connect(mapStateToProps, {getScripts})(Scripts);
