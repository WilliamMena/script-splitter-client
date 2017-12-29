import React, {Component} from 'react';
import { connect } from 'react-redux'

import { getScripts } from '../actions/scripts.js'
import { Link } from 'react-router-dom';



class ScriptsList extends Component {


  componentDidMount() {
    this.props.getScripts()
  }


  render() {
    return (
      <div>
        <h1>All Scripts</h1>

        {this.props.scripts.map((script, index) =>
          <div key={index}>
            <Link to={`/scripts/${script.id}`}>{script.title}</ Link>
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

export default connect(mapStateToProps, {getScripts})(ScriptsList);
