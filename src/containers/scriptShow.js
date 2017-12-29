import React from 'react';
import { connect } from 'react-redux';

import Script from '../components/script.js'

const ScriptShow = ({script}) =>
  <div>
    <Script script={script} />
  </div>

const mapStateToProps = (state, ownProps) => {
  // eslint-disable-next-line
  const script = state.scripts.find(script => script.id == ownProps.match.params.scriptId)

  if (script) {
    return { script }
  } else {
    return { script: {} }
  }
}

export default connect(mapStateToProps)(ScriptShow);
