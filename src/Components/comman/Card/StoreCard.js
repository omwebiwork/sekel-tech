import DownArrow from "@/assets/DownArrow";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const StoreCard = ({ bgImage, logoImage, btnLabel, description, slug }) => {
  const router = useRouter();
  return (
    <div className="">
      <div className="relative max-w-[376px] max-h-[380px] w-full h-full mb-[28px] border-[1px] border-blue-200 rounded-2xl overflow-hidden">
        <Image {...bgImage} />
        {logoImage ? (
          <div className="absolute flex items-center justify-center top-[121px] left-[127px] w-[123px] h-[139px] bg-white">
            <Image {...logoImage} className="w-auto h-auto" />
          </div>
        ) : (
          ""
        )}
      </div>
      <p className="text-base border-[1px] border-yellow-900 font-medium tracking-tight leading-[22px] text-black-33 py-2 px-8 bg-yellow-100 rounded-full inline-block mb-7">
        {btnLabel}
      </p>
      <p className="text-base leading-5 text-black-33 font-normal mb-4 line-clamp-3">
        {description}
      </p>
      <button
        class="flex gap-1 items-center text-base text-blue-900 font-medium"
        onClick={() => router.push(`/company/case-studies/${slug}`)}
      >
        Read more
        <span className="-rotate-90">
          <DownArrow color="#2C74F7" ml="ml-0" />
        </span>
      </button>
    </div>
  );
};

export default StoreCard;
