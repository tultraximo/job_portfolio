import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#F18FC1] text-white' style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '24px' }}>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className=' pb-8 pl-4'>
            <p className='text-7xl font-bold inline' >
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className=' text-4xl font-bold'>
              <p>Hi. I'm Will Howe, thanks for visiting please check out my work!</p>
            </div>
            <div>
              <p>I enjoy building meaningful products and seeing them live in action. There's something
                therapeutic about the creative process that keeps me coming back for more. I'm excited
                to see what I can build for you!
              </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
