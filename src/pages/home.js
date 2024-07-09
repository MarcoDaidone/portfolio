import React, { useEffect, useRef, useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import Frame from '../components/frame';
import Data from '../components/data/data';

const Home = (title, image) => {
     const [selectedYear, setSelectedYear] = useState(0);
     const [modalIsOpen, setModalIsOpen] = useState(false);
     const [newData, setNewData] = useState(Data[0]);

     const handleYearClick = (year) => {
          setSelectedYear(year);
          setModalIsOpen(true);
          const filteredData = Data[year];
          setNewData(filteredData);
          console.log(newData);
     };

     const closeModal = () => {
          setModalIsOpen(false);
          setSelectedYear(null);
     };

     return (
          <div className='flex flex-col max-w-6xl lg:flex-row-reverse justify-between m-auto relative w-full'>
               {newData && (
                    <section className='scroll max-w-lg m-auto flex mt-20'>
                         <Frame item={newData} />
                    </section>
               )}

               <div className='flex flex-col gap-5 mt-20 lg:absolute left-0 lg:max-w-[206px] justify-between w-full'>
                    {Data.map((item, index) => {
                         return (
                              <div
                                   key={index}
                                   className='flex flex-row justify-between'
                                   onClick={() => handleYearClick(index)}
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
