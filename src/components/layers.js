import React from 'react';
import Footer from './footer';
import Header from './header';

const Layers = ({ children }) => {
     return (
          <div className='flex flex-col mt-14 px-5'>
               <Header />
               {children}
               <Footer />
          </div>
     );
};

export default Layers;
