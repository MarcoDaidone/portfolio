import React, { useRef, useState } from 'react';
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
               document.body.classList.add('modal-open');
          }
     };

     const closeModal = () => {
          if (modalRef.current) {
               modalRef.current.close();
               setIsModalOpen(false);
               document.body.classList.remove('modal-open');
          }
     };

     const handleBackdropClick = () => {
          closeModal();
     };
     return (
          <div className='relative w-full lg:w-[470px] p-4 project_outline m-auto transition-opacity duration-500 ease-in-out'>
               <div className='edge'></div>
               <div>
                    <Modal ref={modalRef} onBackdropClick={handleBackdropClick}>
                         {isModalOpen && (
                              <div className='bg-base-100 overflow-scroll  max-w-[600px] max-h-[700px] flex flex-col items-center justify-start pt-16 '>
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
                                        <div className='flex flex-row gap-3 mt-3 flex-wrap'>
                                             <span className='flex flx-row'>
                                                  <svg
                                                       xmlns='http://www.w3.org/2000/svg'
                                                       fill='currentColor'
                                                       viewBox='0 0 24 24'
                                                       className='h-4 w-4 text-black mt-auto mb-auto mr-[5px]'
                                                  >
                                                       <path
                                                            fillRule='evenodd'
                                                            d='M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.11.793-.26.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.839 1.236 1.839 1.236 1.07 1.835 2.809 1.305 3.495.997.108-.775.418-1.305.761-1.606-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.467-2.382 1.235-3.22-.123-.304-.536-1.528.117-3.183 0 0 1.008-.322 3.302 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.292-1.553 3.297-1.23 3.297-1.23.654 1.655.242 2.88.12 3.183.77.838 1.233 1.91 1.233 3.22 0 4.61-2.804 5.623-5.475 5.921.43.372.823 1.104.823 2.226v3.301c0 .32.192.694.8.576C20.565 21.795 24 17.298 24 12 24 5.373 18.627 0 12 0z'
                                                            clipRule='evenodd'
                                                       />{' '}
                                                  </svg>{' '}
                                                  Github:
                                             </span>
                                             <a
                                                  href='https://github.com/your-profile'
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
