import React from 'react';

const events = [
     {
          title: 'Early Career',
          description: `In 2017, I started as an Assistant Web Designer, building a solid foundation in web design and development. From 2018 to 2020, I worked as a Web & Graphic Designer, balancing aesthetics with functionality.`,
          date: '2017 - 2020',
     },
     {
          title: 'Startup Experience',
          description: `In 2020, I co-founded a startup and served as CEO until 2022, enhancing my technical skills, leadership, and business acumen.`,
          date: '2020 - 2022',
     },
     {
          title: 'Freelance Work',
          description: `During and after my CEO tenure, I undertook freelance projects:
        - Developed jolismeubles.fr using React and Angular.
        - Designed and developed Cheems.co and Cheemsarena.com.
        - Created the business page for vidoleo.com with Ngx-auth.`,
          date: '2022 - Present',
     },
     {
          title: 'Professional Growth',
          description: `MNT-ONLINE: Developed divino.io, a mobile app (vloug), and an SEO tool (Soobo) using React and React Native.
        Shoozy: Created an online sneaker sales concept from start to finish using HTML, CSS, JavaScript, and Adobe XD.
        Nimbus Hosting (London): Guided website architecture, ensuring performance and managing CMS technical aspects.
        Victus-Digital (London): Created web page mockups aligning with brand style guides using HTML, CSS, and Photoshop.`,
          date: 'Various',
     },
     {
          title: 'Other Experiences',
          description: `From 2010 to 2016, I was a Plumbing Site Manager, learning project management and teamwork. I then studied at Langley College (London), earning a diploma in Speaking, Listening, and Reading. At EPEL, I trained as a sanitary and thermal installer.`,
          date: '2010 - 2016',
     },
     {
          title: 'My Journey with Planity',
          description: `As a Full Stack Developer at Planity, I design and maintain web applications for the beauty and wellness industry. Utilizing my skills in React, Angular, and backend technologies, I create scalable solutions that enhance user experience and streamline business operations. This dynamic role allows me to continuously learn and contribute to impactful projects.`,
          date: 'Present',
     },
     {
          title: 'In My Spare Time',
          description: `I tweak my portfolio, hang out on the Design Buddies Discord server, play basketball and volleyball, hit the gym, game, and explore the latest tech.`,
          date: 'Ongoing',
     },
     {
          title: 'Thanks for Stopping By!',
          description: `Thank you for taking the time to learn about my journey. I look forward to connecting with you!`,
          date: '',
     },
];

const Timeline = () => {
     return (
          <div className='container mx-auto p-4 max-w-[504px] m-auto'>
               <h1 className='text-4xl font-bold text-center mb-8 mt-5'>
                    My Background in Development
               </h1>
               <div className='relative'>
                    <div className='border-l-4 border-gray-200 absolute h-full left-1/2 transform -translate-x-1/2'></div>
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
