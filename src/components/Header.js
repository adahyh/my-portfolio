import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header>
      <nav>
        <span class="icon">
          <Link to="/" className="icon-link">
          <span className="icon">ଘ(੭*ˊᵕˋ)੭* ̀ˋ</span>
          </Link>
        </span> <span class="nav-links" id="resume-link"><a href="https://docs.google.com/document/d/1lbolk_PDlZbAYb96d1LfenRvfMkt32094IklY__iO1A/edit?usp=sharing">resume</a></span>
        {/* </span> <span class="nav-links">about</span> <span class="nav-links" id="resume-link"><a href="https://docs.google.com/document/d/1lbolk_PDlZbAYb96d1LfenRvfMkt32094IklY__iO1A/edit?usp=sharing">resume</a></span> */}
      </nav>
      
  

    </header>
  );
};

export default Header;

