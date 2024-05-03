"use client";
import React, { useEffect, useRef, useState } from "react";
import DownArrow from "@/assets/DownArrow";
import Link from "next/link";
import Image from "next/image";

const Dropdown = ({ text, list, image , dropdownContainerSty = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  let dropdownRef = useRef();
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        type="button"
        className="px-6 py-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm inline-flex items-center"
        onClick={toggleDropdown}
      >
        {text}
        <DownArrow />
      </button>

      {isOpen && (
        <div className={`${dropdownContainerSty} origin-top-right left-auto absolute right-0 mt-4 rounded-xl shadow-lg bg-white text-black-33 p-[52px]`}>
          <div className="flex">
            <div className="w-[calc(100%_-_201px)]">
              <ul
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
                className="flex flex-wrap flex-col max-h-[160px] pr-[80px] gap-x-[80px]"
              >
                {list?.map((item, index) => {
                  console.log("chekc ", "000", item.path);
                  return (
                    <li className="block" key={index}>
                      <Link
                        href={`${item.redirectPath}`}
                        className="block py-2 text-base font-medium text-black-900 hover:bg-gray-100 whitespace-nowrap"
                        onClick={closeDropdown}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="min-w-[201px] w-[201px] h-[176px] rounded-3xl overflow-hidden">
              <Image className="h-full w-full" {...image} alt="img" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
