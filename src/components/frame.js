import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Modal from './modal';

const Frame = ({ item, index }) => {
     const modalRef = useRef(null);

     const [isModalOpen, setIsModalOpen] = useState(false);

     const openModal = () => {
          if (modalRef.current) {
               modalRef.current.showModal();
               setIsModalOpen(true);
          }
     };

     const closeModal = () => {
          if (modalRef.current) {
               modalRef.current.close();
               setIsModalOpen(false);
          }
     };

     const handleBackdropClick = () => {
          closeModal();
     };
     useEffect(() => {
          if (isModalOpen) {
               document.body.classList.add('modal-open');
          } else {
               document.body.classList.remove('modal-open');
          }

          return () => {
               document.body.classList.remove('modal-open');
          };
     }, [isModalOpen]);

     return (
          <div className='relative w-full lg:w-[470px] p-4 project_outline m-auto transition-opacity duration-500 ease-in-out'>
               <div className='edge'></div>
               <div>
                    <Modal ref={modalRef} onBackdropClick={handleBackdropClick}>
                         {isModalOpen && (
                              <div className='bg-base-100 max-w-[600px] max-h-[700px] flex flex-col items-center justify-start pt-16 '>
                                   <div>
                                        <img
                                             src={require(`../img/${item.image}`)}
                                             className='w-[500px] h-auto object-cover project-thumbnail shadow-black max-h-[250px]'
                                             alt='Project Thumbnail'
                                        />
                                   </div>
                                   <div className='flex flex-col w-full px-6'>
                                        <h2 className='text-2xl font-bold mt-[30px] mb-6'>
                                             {item.titre}
                                        </h2>
                                        <span>
                                             <span>Year:</span>{' '}
                                             <span className='font-bold'>
                                                  {item.years}
                                             </span>
                                        </span>
                                        <span className='flex flex-col'>
                                             <span className='mt-3'>
                                                  Mission:
                                             </span>{' '}
                                             <span className='text-gray-400 text-sm'>
                                                  <ul>
                                                       {item.mission.map(
                                                            (
                                                                 mission,
                                                                 index
                                                            ) => (
                                                                 <li
                                                                      key={
                                                                           index
                                                                      }
                                                                 >
                                                                      -{mission}
                                                                 </li>
                                                            )
                                                       )}
                                                  </ul>
                                             </span>
                                        </span>
                                        <span className='mt-3'>
                                             Tech stacks
                                        </span>
                                        <span className='flex flex-row flex-wrap'>
                                             {item.tech.map((item, index) => {
                                                  return (
                                                       <span
                                                            key={index}
                                                            className='p-2 text-gray-400 rounded-xl text-sm'
                                                       >
                                                            #{item}
                                                       </span>
                                                  );
                                             })}
                                        </span>
                                        <div className='flex flex-row gap-3 mt-3 flex-wrap pb-6'>
                                             <span className='flex flx-row'>
                                                  Link:
                                             </span>
                                             <a
                                                  href={item.lien}
                                                  target='_blank'
                                                  rel='noopener noreferrer'
                                                  className='whitespace-nowrap overflow-hidden text-ellipsis w-64 text-gray-400 text-sm hover:text-black flex flex-row items-center underline decoration-solid'
                                             >
                                                  {item.lien}
                                             </a>
                                        </div>
                                   </div>
                                   <div className='flex items-center w-full'>
                                        <button
                                             className='btn ml-auto absolute top-5 right-5 z-40'
                                             onClick={closeModal}
                                        >
                                             Close
                                        </button>
                                   </div>
                              </div>
                         )}
                    </Modal>
               </div>
               <Link
                    onClick={openModal}
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
