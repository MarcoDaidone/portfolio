import React from 'react';
import Footer from './footer';
import Header from './header';

const Layers = ({ children }) => {
     return (
          <div className='flex flex-col mt-14 lg:mt-[unset]  px-5 overflow-scroll 2xl:mt-[5%]'>
               <Header />
               {children}
               <Footer />
          </div>
     );
};

export default Layers;
