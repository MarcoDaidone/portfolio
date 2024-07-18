import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
import skills from '../components/data/skills';
import events from '../components/data/events';

const Timeline = () => {
     return (
          <div className='container mx-auto p-4 max-w-[504px] m-auto'>
               <h1 className='text-4xl font-bold text-center mb-8 mt-5'>
                    My Background in Development
               </h1>
               <div className='relative'>
                    <div className='border-l-4 border-gray-200 absolute h-full left-1/2 transform -translate-x-1/2'></div>
                    <div className='mb-8 flex items-center w-full'>
                         <div className=''></div>
                         <div className='w-full p-4 backdrop-blur-sm bg-white/30 shadow-lg rounded-lg z-10 relative'>
                              <h2 className='text-2xl font-semibold mb-2'>
                                   Skills
                              </h2>
                              {skills.map((items) => (
                                   <div className='flex flex-row justify-between'>
                                        <div className='w-[45%]'>
                                             <h3 className='text-small text-right font-semibold mb-2 '>
                                                  Design
                                             </h3>
                                             {items.design.map(
                                                  (itemsDesign) => (
                                                       <>
                                                            <h4 className='text-xs text-right text-[#9da3af] mt-2'>
                                                                 {
                                                                      itemsDesign.name
                                                                 }
                                                            </h4>
                                                            <ProgressBar
                                                                 dir='rtl'
                                                                 completed={
                                                                      itemsDesign.progr
                                                                 }
                                                                 animateOnRender={
                                                                      true
                                                                 }
                                                                 height='3px'
                                                                 bgColor={
                                                                      'linear-gradient(to left, #a0a0a0, #888888, #707070)'
                                                                 }
                                                                 customLabelStyles={{
                                                                      display: 'none',
                                                                 }}
                                                            />
                                                       </>
                                                  )
                                             )}
                                        </div>
                                        <div className='w-[45%]'>
                                             <h3 className='text-small font-semibold mb-2'>
                                                  Developpement
                                             </h3>
                                             {items.dev.map((itemsDev) => (
                                                  <>
                                                       <h4 className='text-xs text-left text-[#9da3af] mt-2'>
                                                            {itemsDev.name}
                                                       </h4>
                                                       <ProgressBar
                                                            completed={
                                                                 itemsDev.progr
                                                            }
                                                            animateOnRender={
                                                                 true
                                                            }
                                                            height='3px'
                                                            bgColor={
                                                                 'linear-gradient(to right, #a0a0a0, #888888, #707070)'
                                                            }
                                                            customLabelStyles={{
                                                                 display: 'none',
                                                            }}
                                                       />
                                                  </>
                                             ))}
                                        </div>
                                   </div>
                              ))}
                         </div>
                         <div className=''></div>
                    </div>
                    {events.map((event, index) => (
                         <div
                              key={index}
                              className='mb-8 flex items-center w-full'
                         >
                              <div className=''></div>
                              <div className='w-full p-4 backdrop-blur-sm bg-white/30 shadow-lg rounded-lg z-10 relative'>
                                   <h2 className='text-2xl font-semibold mb-2'>
                                        {event.title}
                                   </h2>
                                   <p className='text-gray-600 whitespace-pre-line'>
                                        {event.description}
                                   </p>
                                   <p className='text-gray-500 text-sm mt-2'>
                                        {event.date}
                                   </p>
                              </div>
                              <div className=''></div>
                         </div>
                    ))}
               </div>
          </div>
     );
};

export default Timeline;
