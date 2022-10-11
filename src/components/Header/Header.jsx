import React from 'react';
import Navbar from '../Navbar/Navbar';
import SearchForm from '../SearchForm/SearchForm';
import './Header.css';

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            find your book of choice
          </h2>
          <br />
          <p className="header-text fs-18">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            repudiandae, placeat veniam excepturi nobis consectetur in laborum
            blanditiis at expedita accusantium mollitia aliquid nesciunt eaque
            magni exercitationem aperiam eos harum.
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
