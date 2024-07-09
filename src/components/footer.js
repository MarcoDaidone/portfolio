import React from 'react';

const Footer = () => {
     return (
          <footer className='mt-16'>
               <div className='container mx-auto flex flex-col md:flex-row items-center justify-between gap-5 border-b-[1px] py-8	'>
                    <div className='flex flex-col items-center mb-4 md:mb-0 text-gray-400'>
                         <div className='flex space-x-4'>
                              <a
                                   href='https://github.com/your-profile'
                                   target='_blank'
                                   rel='noopener noreferrer'
                                   className='text-gray-400 hover:text-white flex flex-col items-center'
                              >
                                   <span>Github</span>
                                   <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='currentColor'
                                        viewBox='0 0 24 24'
                                        className='h-6 w-6'
                                   >
                                        <path
                                             fillRule='evenodd'
                                             d='M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.11.793-.26.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.839 1.236 1.839 1.236 1.07 1.835 2.809 1.305 3.495.997.108-.775.418-1.305.761-1.606-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.467-2.382 1.235-3.22-.123-.304-.536-1.528.117-3.183 0 0 1.008-.322 3.302 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.292-1.553 3.297-1.23 3.297-1.23.654 1.655.242 2.88.12 3.183.77.838 1.233 1.91 1.233 3.22 0 4.61-2.804 5.623-5.475 5.921.43.372.823 1.104.823 2.226v3.301c0 .32.192.694.8.576C20.565 21.795 24 17.298 24 12 24 5.373 18.627 0 12 0z'
                                             clipRule='evenodd'
                                        />
                                   </svg>
                              </a>
                              <a
                                   href='https://www.linkedin.com/in/your-profile'
                                   target='_blank'
                                   rel='noopener noreferrer'
                                   className='text-gray-400 hover:text-white flex flex-col justify-center items-center'
                              >
                                   <span>Linkedin</span>
                                   <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='currentColor'
                                        viewBox='0 0 24 24'
                                        className='h-6 w-6'
                                   >
                                        <path
                                             fillRule='evenodd'
                                             d='M19.616 19.615h-3.555V14.88c0-1.13-.023-2.585-1.576-2.585-1.578 0-1.818 1.23-1.818 2.504v4.816H9.109V9.507h3.412v1.385h.048c.475-.9 1.635-1.849 3.364-1.849 3.6 0 4.269 2.368 4.269 5.449v5.123zM5.337 8.125a2.06 2.06 0 1 1 0-4.122 2.06 2.06 0 0 1 0 4.122zm1.778 11.49H3.56V9.507h3.555v10.108zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.208 24 24 23.226 24 22.271V1.729C24 .774 23.208 0 22.225 0z'
                                             clipRule='evenodd'
                                        />
                                   </svg>
                              </a>
                         </div>
                         <p className='text-xs'>
                              © 2024 Daidone Marco. All Rights Reserved.
                         </p>
                    </div>
               </div>
          </footer>
     );
};

export default Footer;
