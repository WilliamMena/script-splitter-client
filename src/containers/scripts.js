import React, {Component} from 'react';
import { connect } from 'react-redux'
import { getScripts } from '../actions/scripts.js'
import Script from '../components/script.js'

class Scripts extends Component {


  componentDidMount() {
    this.props.getScripts()
  }


  render() {
    return (
      <div>
        <h1>All Scripts</h1>
        {this.props.scripts.map((script, index) =>
          <Script key={index} script={script} />
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
