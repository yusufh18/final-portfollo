import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ currentPage, handlePageChange }) => {
  const navLinks = ["About", "Portfolio", "Contact", "Resume"];

  return (
    <nav>
      <ul className="nav nav-tabs">
        {navLinks.map((link) => (
          <li className="nav-item" key={link}>
            <Link
              to={"/" + link.toLowerCase()}
              onClick={() => handlePageChange(link)}
              className={currentPage === link ? "nav-link navActive" : "nav-link"}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
