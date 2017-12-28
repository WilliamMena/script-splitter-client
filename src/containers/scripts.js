import React, {Component} from 'react';
import CaptionSplit from '../containers/captionSplit'
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
