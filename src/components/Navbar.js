import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Link to="#" className='navbar' onClick={showSidebar}>
          <div className='menu-arrow'>
              <FaIcons.FaArrowRight />
          </div>
        </Link >

        <div className="container">
          <div className="row">
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <div className="col-m-9">
                      <ul className='nav-menu-items' onClick={showSidebar}>
                        {SidebarData.map((item, index) => {
                          return (
                            <li key={index} className={item.cName}>
                              <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                              </Link>
                            </li>
                          );
                        })}

                      </ul>
                    </div>

                    <div className="col-m-3">
                      <div className='navbar-toggle' onClick={showSidebar}>
                        <Link to='#' className='menu-bars'>
                          < FaIcons.FaArrowLeft />
                        </Link>
                      </div>
                    </div>

                
                </nav>
              </div>
            </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;