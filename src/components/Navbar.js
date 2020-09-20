import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
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
        <div className='navbar'>
          <div className='menu-bars'>
            <Link to='#' >
              <FaIcons.FaArrowRight onClick={showSidebar} />
            </Link>

          </div>

        </div>
        <div class="container">
          <div class="row">
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                

                    <div class="col-m-9">
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

                    <div class="col-m-3">
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