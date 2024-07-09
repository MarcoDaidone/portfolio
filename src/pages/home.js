import React, { useEffect, useRef, useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import Frame from '../components/frame';
import Data from '../components/data/data';

const Home = (title, image) => {
     const [selectedYear, setSelectedYear] = useState(0);
     const [modalIsOpen, setModalIsOpen] = useState(false);
     const [newData, setNewData] = useState(Data[0]);
     const [activeData, setActiveData] = useState(0);

     const ref = useRef(null);
     const handleYearClick = (index) => {
          const filteredData = Data[index];
          setNewData(filteredData);
          setActiveData(index);
          ref.current.scrollIntoView({ behavior: 'smooth' });
     };

     const closeModal = () => {
          setModalIsOpen(false);
          setSelectedYear(null);
     };

     return (
          <div
               ref={ref}
               className='flex flex-col max-w-6xl lg:flex-row-reverse justify-between m-auto relative w-full'
          >
               {newData && (
                    <section className='scroll max-w-lg m-auto flex mt-20 w-full'>
                         <Frame item={newData} />
                    </section>
               )}

               <div className='flex flex-col gap-1 mt-20 lg:absolute left-0 lg:max-w-[240px] justify-between w-full '>
                    {Data.map((item, index) => {
                         return (
                              <div
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
