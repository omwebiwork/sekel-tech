"use client";
import React, { useState } from "react";
import DownArrow from "@/assets/DownArrow";
import Link from "next/link";
import Image from "next/image";

const Dropdown = ({ text, list }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="">
      <div className="relative inline-block">
        <button
          type="button"
          className="px-4 py-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm inline-flex items-center"
          onClick={toggleDropdown}
        >
          {text}
          <DownArrow />
        </button>

        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-4 rounded-xl shadow-lg bg-white text-black-33  p-[52px]">
            <div className="flex gap-x-[80px]">
            <ul
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {list?.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={item.name}
                      className="block px-4 py-2 text-base font-medium text-black-900 hover:bg-gray-100"
                      onClick={closeDropdown}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="w-[201px] h-[176px] rounded-3xl overflow-hidden">
              <Image className="h-full w-full" src={'/Product.png'} height={176} width={200} alt="img"/>
            </div>

            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
