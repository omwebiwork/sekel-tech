import Breadcrumb from "@/Components/comman/Breadcrumb";
import HyperlocalStrategyForm from "@/Components/comman/Form/hyperlocalStrategyForm";
import React from "react";
import { RefundCancellationPolicy } from "@/static/json/refundPolicy";

function RefundPolicy() {
  return (
    <>
      <Breadcrumb
        breadcrumbList={[
          { link: "/", label: "Home" },
          { link: "/", label: "Company" },
          { link: "/refund-policy", label: "refund-&-cancellation-policy" },
        ]}
      />
      <section className="py-[50px] lg:py-[100px]">
        <div className="container">
          <div className="grid grid-cols-12 gap-6">
            <div className="text-black-33 col-span-12 lg:col-span-8 lg:pr-[90px]">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-[28px] leading-[140%] font-medium text-black-33">
                  Refund & Cancellation Policy
                </h2>
              </div>

              {RefundCancellationPolicy?.map((item, index) => (
                <div className="pb-[24px]" key={index}>
                  <h3 className="text-[20px] font-medium leading-[140%] text-blue-900 mb-6">
                    {item?.title}
                  </h3>
                  {item?.listData?.list?.length > 0 && (
                    <ul
                      className={` ${item?.listData?.listSty} pl-[18px] text-black-33`}
                    >
                      {item?.listData?.list?.map((listItem, listIndex) => (
                        <li className="mb-1 text-[16px]" key={listIndex}>
                          {listItem?.title}
                        </li>
                      ))}
                    </ul>
                  )}
                  {item?.description && (
                    <p className="text-black-33 text-[16px]">{item?.description}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="col-span-12 lg:col-span-4">
              <div className="mb-8">
                <p className="text-black-33 text-[14px] mb-2">Last Updated:</p>
                <p className="text-black-33 text-[16px]">19 July 2023</p>
              </div>
              <div className="border border-gray-400 bg-gray-100 py-8 px-10 rounded-[16px] mb-8">
                <h2 className="text-[28px] leading-[140%] font-medium text-black-33 mb-8">
                  Refund Period
                </h2>
                <p>
                  Refund requests can be made within the duration of the service
                  allotted for.
                </p>
              </div>
              <div className="border border-gray-400 bg-gray-100 py-8 px-10 rounded-[16px]">
                <h2 className="text-[28px] leading-[140%] font-medium text-black-33 mb-8">
                  Trial Period
                </h2>
                <p>
                  Refund requests can be made within the duration of the service
                  allotted for.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HyperlocalStrategyForm />
    </>
  );
}

export default RefundPolicy;
