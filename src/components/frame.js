import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Frame = ({ item, index }) => {
     return (
          <div className='relative w-[380px] lg:w-[504px] p-4 project_outline m-auto transition-opacity duration-500 ease-in-out'>
               <div className='edge'></div>
               <Link
                    to={item.lien}
                    className='relative block project-card rounded-lg bg-[#ed933d14] overflow-hidden'
               >
                    <div className='absolute glare_item_top'></div>
                    <div className='p-4 z-40'>
                         <div className='flex justify-between items-center'>
                              <div className='text-black text-lg font-bold'>
                                   {item.titre}
                              </div>
                              <FaArrowRight />
                         </div>
                         <div className='text-gray-400 mt-2'>
                              <span className='font-semibold'>
                                   {item.description}
                              </span>
                         </div>
                    </div>
                    <img
                         src={require(`../img/${item.image}`)}
                         className='w-full h-48 object-cover project-thumbnail shadow-black'
                         alt='Project Thumbnail'
                    />
               </Link>
          </div>
     );
};

export default Frame;
