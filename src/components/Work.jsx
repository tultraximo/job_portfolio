import React from 'react';
import { data } from "../data/data.js";


const Work = () => {

    // projects file
    const project = data;
    //setProject(data);

  return (
    <div name='work' className='w-full md:h-screen text-white bg-[#F18FC1]' style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '24px' }}>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-7xl font-bold inline text-white border-gray-600'>
            Work
          </p>
          <p className='py-6'>Check out some of my recent work below !!</p>
        </div>

{/* container for projects */}
<div className="grid sm:grid-cols-3 md:grid-cols-2 gap-4">

          {/* Gird Item */}
          {project.map((item, index) => (
  <div
    key={index}
    style={{
      backgroundImage: `url(${item.image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    className="shadow-lg shadow-[#040c16] group container rounded-md
              flex justify-center text-center items-center mx-auto content-div "
  >
    {/* Hover effect for images */}
    <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-2xl font bold text-white tracking-wider ">
        {item.name}
      </span>
      <div className="pt-8 text-center ">
        {/* eslint-disable-next-line */}
        <a href={item.github} target="_blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Code
          </button>
        </a>
        {/* eslint-disable-next-line */}
        {/* <a href={item.live} target="_blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Live
          </button>
        </a> */}
      </div>
    </div>
  </div>
))}


</div>
      </div>
    </div>
  );
};

export default Work;
