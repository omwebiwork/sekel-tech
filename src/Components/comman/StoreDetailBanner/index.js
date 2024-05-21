import Image from "next/image";
import React from "react";

const StoreDetailBanner = ({
  label,
  title,
  description,
  bgImage,
  storeLogo,
  sectionSty = 'bg-blue-200 py-[50px]'
}) => {
  return (
    <section className={sectionSty}>
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="w-3/5 ">
            <div className="max-w-[479px] my-[79px]">
              <p className="text-base border-[1px] border-yellow-900 font-medium tracking-tight leading-[22px] text-black-33 py-2 px-8 bg-yellow-100 rounded-full inline-block mb-4">
                {label}
              </p>
              <h2 className="text-[42px] font-medium leading-[65px] mb-4 tracking-tight">
                {title}
              </h2>
              <p className="text-2xl font-normal text-black-33">
                {description}
              </p>
            </div>
          </div>
          <div className="w-2/5 ">
            <div className="ml-auto relative max-w-[379px] max-h-[383px] w-full h-full  border-[1px] border-blue-200 rounded-2xl overflow-hidden">
              <Image {...bgImage} />

              {storeLogo && (
                <div className="absolute flex items-center justify-center top-[121px] left-[127px] w-[109px] h-[139px] bg-white">
                  <Image {...storeLogo} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreDetailBanner;
