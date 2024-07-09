import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
     const [activeTab, setActiveTab] = useState('');
     const navigate = useNavigate();
     const location = useLocation();

     useEffect(() => {
          if (location.pathname === '/portfolio') {
               setActiveTab('work');
          } else if (location.pathname === '/portfolio/about') {
               setActiveTab('info');
          }
     }, [location]);

     const handleTabChange = (tab) => {
          setActiveTab(tab);
          if (tab === 'work') {
               navigate('/portfolio');
          } else if (tab === 'info') {
               navigate('/portfolio/about');
          }
     };

     return (
          <header className='lg:flex lg:flex-col-reverse'>
               <h1 className='text-[22px] max-w-lg m-auto'>
                    Daidone Marco,
                    <br />
                    Developer Full Stack at{' '}
                    <span className='font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'>
                         Planity
                    </span>
               </h1>
               <div className='flex flex-col items-center mt-6 lg:mt-0 lg:mb-9'>
                    <nav className='mt-9'>
                         <div className='bg-gray-400 relative custom-nav-pill flex justify-between items-center w-48 h-12 px-1.5'>
                              <button
                                   className={`nav-toggle w-inline-block px-4 py-2 text-gray-100 ${
                                        activeTab === 'work'
                                             ? 'bg-[#00000052] rounded-3xl'
                                             : ''
                                   }`}
                                   onClick={() => handleTabChange('work')}
                              >
                                   <div className='text-nav-toggle'>Work</div>
                              </button>
                              <button
                                   className={`nav-toggle w-inline-block px-4 py-2 text-gray-100 ${
                                        activeTab === 'info'
                                             ? 'bg-[#00000052] rounded-3xl'
                                             : ''
                                   }`}
                                   onClick={() => handleTabChange('info')}
                              >
                                   <div className='text-nav-toggle'>About</div>
                              </button>
                              <div
                                   className={`nav-indicator-glow nav-indicator-pill absolute top-0 h-1 w-6 rounded bg-gray-100 transition-all duration-300 ease-in-out ${
                                        activeTab === 'info'
                                             ? 'transform translate-x-[128px]'
                                             : 'transform translate-x-[23px]'
                                   }`}
                              ></div>
                         </div>
                    </nav>
               </div>
          </header>
     );
};

export default Header;
