import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#F18FC1] flex justify-center items-center p-4" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '24px' }}>
      <form
        method="POST"
        action="https://getform.io/f/0fb3d530-b37c-4e7b-98b8-1f67df12418d"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline  text-white">
            Contact
          </p>
          <p className="text-white py-4">
            Submit the form below or shoot me an email - willjhowe@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          SEND
        </button>
      </form>
    </div>
  );
};

export default Contact;
