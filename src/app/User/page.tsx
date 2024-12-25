import Link from 'next/link';
import React from 'react'
import { BiSolidLeftArrowAlt } from 'react-icons/bi';

export default function Page() {
  const bgStyle = {
    backgroundImage: `url(/2.png)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={bgStyle} className="overflow-x-hidden">
      <div className="min-h-screen flex items-center justify-center bg-white/50 backdrop-blur-3xl">
        
        {/* Back Button */}
        <Link href="/" className="absolute m-4 p-3 rounded-full text-black bg-gray-400/30 text-lg sm:text-2xl top-4 left-4">
          <BiSolidLeftArrowAlt />
        </Link>

        {/* Login Form */}
        <div className="bg-white/50 rounded-xl text-center m-3 p-6 sm:p-8 w-full max-w-lg">
          <span className="text-xl sm:text-2xl font-semibold block mb-6">
            Welcome! 😀
          </span>
          
          {/* Form Inputs */}
          <div className="flex flex-col space-y-4">
            <input 
              className="rounded-lg bg-white/20 p-3 text-sm sm:text-base placeholder-gray-500"
              type="email" 
              placeholder="Email" 
            />
            <input 
              className="rounded-lg bg-white/20 p-3 text-sm sm:text-base placeholder-gray-500"
              type="password" 
              placeholder="Password" 
            />
            <input 
              className="rounded-lg bg-white/30 p-3 text-sm sm:text-base w-fit mx-auto cursor-pointer" 
              type="submit" 
              value="Log in" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
