import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  make as Web3Connect,
  Modal_make as Web3ConnectModal,
} from "../../harberger-lib/components/Web3Connect.gen";

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} />
        {title}
      </h1>
      <ul>
        <li>
          <Web3Connect />
          <Web3ConnectModal />
        </li>
        <li>
          <Link to="/">Bounties</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "  Wildcards artwork bounties",
  icon: "fa fa-paint-brush",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
