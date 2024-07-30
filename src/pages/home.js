import React, { useEffect, useRef, useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import Frame from '../components/frame';
import Data from '../components/data/data';
import { useIntersection } from '../hooks/useIntersection';

const Home = (title, image) => {
     const [selectedYear, setSelectedYear] = useState(0);
     const [modalIsOpen, setModalIsOpen] = useState(false);
     const [newData, setNewData] = useState(Data[0]);
     const [activeData, setActiveData] = useState(0);
     const ref = useRef(null);
     const lastElementRef = useRef(null);

     const handleYearClick = (index) => {
          const filteredData = Data[index];
          setNewData(filteredData);
          setActiveData(index);
          const isMobile = window.matchMedia('(max-width: 768px)').matches;
          if (isMobile) {
               // if mobile
               ref.current.scrollIntoView({ behavior: 'smooth' });
          }
     };

     const isLastElementVisible = useIntersection(lastElementRef, '0px');

     return (
          <div
               ref={ref}
               className='flex flex-col max-w-6xl lg:flex-row-reverse justify-between m-auto relative w-full'
          >
               {newData && (
                    <section className=' max-w-lg m-auto flex mt-20 lg:h-[500px] lg:mt-6 w-full'>
                         <Frame item={newData} />
                    </section>
               )}

               <div
                    // pour utiliser le dégrader pour le scroll : ${
                    //      isLastElementVisible
                    //           ? 'lg:bg-custom-gradient'
                    //           : 'lg:bg-custom-gradient-2'
                    // }
                    className={` scroll-shadows flex flex-col gap-1 mt-20 lg:absolute lg:mt-6 left-0 lg:max-w-[240px] lg:h-[500px] justify-between w-full overflow-scroll`}
               >
                    {Data.map((item, index) => {
                         return (
                              <div
                                   ref={lastElementRef}
                                   key={index}
                                   className={`flex flex-row justify-between p-4 transition-all duration-300 ease-in-out ${
                                        activeData === index
                                             ? 'bg-white shadow-md rounded-md backdrop-filter backdrop-blur-lg'
                                             : ''
                                   }`}
                                   onClick={() => handleYearClick(index)}
                                   onMouseEnter={() => handleYearClick(index)}
                              >
                                   <span>{item.titre}</span>
                                   <span className='text-[#8f9195]'>
                                        {item.years}
                                   </span>
                              </div>
                         );
                    })}
               </div>
          </div>
     );
};

export default Home;
