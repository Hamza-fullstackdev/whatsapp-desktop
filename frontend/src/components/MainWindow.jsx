import React from "react";
import { FaRegFaceSmile } from "react-icons/fa6";
import { GrAttachment } from "react-icons/gr";
import { MdOutlineKeyboardVoice } from "react-icons/md";

const MainWindow = () => {
  return (
    <main className='relative flex-1 h-screen overflow-y-auto'>
      <header className='sticky top-0 border-y bg-[#FCFCFC] z-99 border-gray-300'>
        <div className='flex justify-between items-center p-2'>
          <div className='flex items-center gap-x-3'>
            <div>
              <img
                src='https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                alt='profile'
                className='w-10 h-10 rounded-full'
              />
            </div>
            <div>
              <div>
                <p className='font-semibold'>John Doe</p>
                <p className='text-sm text-gray-500'>Online</p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </header>
      <div className='relative h-full'>
        <div className="absolute inset-0 bg-[url('/chat-bg.webp')] bg-center opacity-10 pointer-events-none z-0" />
        <div className='p-4 relative z-10 h-full'>
          <div className='flex items-center justify-center'>
            <p className='bg-white py-2 px-4 w-fit text-sm'>Today</p>
          </div>
          {/* For Chat Receiver */}
          <div className='relative w-fit max-w-[60%] my-3'>
            <p className='text-sm bg-white px-2 pt-2 pb-6 rounded-lg'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              possimus assumenda ipsam.
            </p>
            <span className='absolute bottom-2 right-2 text-[11px] text-gray-400'>
              10:30 AM
            </span>
          </div>
          {/* For Chat Sender */}
          <div className='flex justify-end'>
            <div className='relative w-fit max-w-[60%] my-3'>
              <p className='text-sm bg-[#d8ffbc] px-2 pt-2 pb-6 rounded-lg'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                possimus assumenda ipsam.
              </p>
              <span className='absolute bottom-2 right-2 text-[11px] text-gray-400'>
                10:30 AM
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#FCFCFC] sticky bottom-0 w-full z-99'>
        <div className='flex items-center justify-between p-2 gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <div className='w-8 h-8 cursor-pointer flex items-center justify-center hover:bg-gray-300 hover:rounded-full'>
              <FaRegFaceSmile fontSize={18} className='text-gray-600' />
            </div>
            <div className='w-8 h-8 cursor-pointer flex items-center justify-center hover:bg-gray-300 hover:rounded-full'>
              <GrAttachment fontSize={18} className='text-gray-600' />
            </div>
          </div>
          <input
            type='text'
            placeholder='Type a message'
            className='w-full py-1 px-3 border border-gray-300 rounded-md placeholder:text-sm focus:outline-none focus:border-b-green-600 focus:border-b-2'
          />
          <div>
            <div className='w-10 h-10 cursor-pointer flex items-center justify-center hover:bg-gray-300 hover:rounded-full'>
              <MdOutlineKeyboardVoice fontSize={18} className='text-gray-600' />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainWindow;
