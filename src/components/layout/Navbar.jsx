import React from "react";
import PropTypes from "prop-types";
import { Link} from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={props.icon} />
        {props.title}
      </h1>
      <ul>
        <li>
          {/* Link prevents the state from resetting when you redirect. */}
          <Link to="/">Home</Link>
        </li>
        <li><Link to="/About">About</Link></li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: " Github User Search",
  icon: "fab fa-github",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
