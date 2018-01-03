import React from 'react';
import { NavLink} from 'react-router-dom';


const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: '#16a085',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () =>
  <div className="Header">
    <NavLink
      to="/"
      /* set exact so it knows only to only set activeStyle when route is deeply equal to link */
      exact
      /* add styling to Navlink */
      style={link}
      /* add prop for activeStyle */
      activeStyle={{
        background: 'darkblue'
      }}
      className="NavLink"
    >Home</NavLink>

    <NavLink
      to="/scripts"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
      className="NavLink"
    >Scripts</NavLink>
    
  </div>;

export default NavBar;
