import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" py-4 lg:py-6">
      <div className="container flex justify-between items-center">
        {/* logo section */}
        <div>
          <p className="text-3xl lg:text-4xl font-semibold">
            FOOD<span className="text-primary">EAT</span>
          </p>
        </div>
          {/* login section */}
          <Link href="/User" className="flex gap-4 items-center">
            <img src="/profile.png" alt="" className="w-10 rounded-full " />
            User
          </Link>
      </div>
    </div>
  );
};

export default Navbar;
