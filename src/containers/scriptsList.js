import React, {Component} from 'react';

import { Link } from 'react-router-dom';



class ScriptsList extends Component {

  render() {
    return (
      <div className="Scripts-List">
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

export default ScriptsList
