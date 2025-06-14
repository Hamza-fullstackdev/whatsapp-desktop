import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdLock } from "react-icons/md";

const MainSidebar = () => {
  return (
    <main className='relative h-screen overflow-y-auto w-[350px] border border-gray-300 rounded-l-md'>
      <div className='p-2'>
        <div className='p-2 w-full sticky top-0 z-10 py-1 bg-white'>
          <div className='flex justify-between items-center'>
            <h2 className='text-xl font-semibold'>Chats</h2>
            <div className='flex items-center gap-x-2'>
              <div className='w-10 h-10 cursor-pointer flex items-center justify-center hover:bg-gray-300 hover:rounded-full'>
                <FaRegEdit fontSize={18} className='text-gray-600' />
              </div>
              <div className='w-10 h-10 cursor-pointer flex items-center justify-center hover:bg-gray-300 hover:rounded-full'>
                <HiOutlineMenuAlt3 fontSize={18} className='text-gray-600' />
              </div>
            </div>
          </div>
          <div className='my-3'>
            <input
              type='text'
              placeholder='Search or start new chat'
              className='w-full py-1 px-3 border border-gray-300 rounded-md placeholder:text-sm focus:outline-none focus:border-b-green-600 focus:border-b-2'
            />
          </div>
        </div>
        <div className='flex flex-col gap-y-2'>
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className='flex items-center gap-x-3 hover:bg-gray-200 p-2 cursor-pointer'
              >
                <div>
                  <img
                    src='https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                    alt='profile'
                    className='w-10 h-10 rounded-full'
                  />
                </div>
                <div className='flex-1 flex items-center justify-between'>
                  <div>
                    <p className='font-semibold'>John Doe</p>
                    <p className='text-sm text-gray-500'>John Doe</p>
                  </div>
                  <div>
                    <span className='text-xs'>5:00 PM</span>
                  </div>
                </div>
              </div>
            ))}
          <div className='flex items-center justify-center'>
            <div className='flex gap-x-2'>
              <MdLock fontSize={18} className='text-gray-600' />
              <p className='text-sm text-gray-600'>
                All chats are end-to-end encrypted
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainSidebar;
