import React from "react";
import { MdMenu } from "react-icons/md";
import { BsChatLeftText } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { IoIosStarOutline } from "react-icons/io";
import { GoArchive } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <aside className='w-[64px] flex flex-col justify-center items-center min-h-screen bg-[#F3F3F3]'>
      <div className='min-h-screen flex flex-col justify-between'>
        <div className='flex flex-col gap-y-3 py-5'>
          <div className='w-10 h-10 cursor-pointer flex items-center justify-center hover:bg-gray-300 hover:rounded-full'>
            <MdMenu fontSize={24} className='text-gray-600' />
          </div>
          <div className='w-10 h-10 cursor-pointer flex items-center justify-center hover:bg-gray-300 hover:rounded-full'>
            <BsChatLeftText fontSize={18} className='text-gray-600' />
          </div>
          <div className='w-10 h-10 cursor-pointer flex items-center justify-center hover:bg-gray-300 hover:rounded-full'>
            <FiPhoneCall fontSize={18} className='text-gray-600' />
          </div>
          <div className='w-10 h-10 cursor-pointer flex items-center justify-center hover:bg-gray-300 hover:rounded-full'>
            <HiOutlineStatusOnline fontSize={18} className='text-gray-600' />
          </div>
        </div>
        <div className='flex flex-col gap-y-3 py-5'>
          <div className='w-10 h-10 cursor-pointer flex items-center justify-center hover:bg-gray-300 hover:rounded-full'>
            <IoIosStarOutline fontSize={24} className='text-gray-600' />
          </div>
          <div className='w-10 h-10 cursor-pointer flex items-center justify-center hover:bg-gray-300 hover:rounded-full'>
            <GoArchive fontSize={18} className='text-gray-600' />
          </div>
          <div className='border-b border-gray-300' />
          <div className='w-10 h-10 cursor-pointer flex items-center justify-center hover:bg-gray-300 hover:rounded-full'>
            <IoSettingsOutline fontSize={18} className='text-gray-600' />
          </div>
          <div className='w-10 h-10 cursor-pointer flex items-center justify-center '>
            <img src='/WhatsApp.svg' alt='profile-img' width={32} height={32} />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
