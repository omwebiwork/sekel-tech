import Banner from "@/Components/comman/Banner";
import Breadcrumb from "@/Components/comman/Breadcrumb";
import Button from "@/Components/comman/Button";
import InfoCard from "@/Components/comman/Card/InfoCard";
import GetStartForm from "@/Components/comman/Form/StartForm";
import HyperlocalStrategyForm from "@/Components/comman/Form/hyperlocalStrategyForm";
import {
  bannerHowItworks,
  hyperlocalDiscovery,
  seamlessIntegrationHowItworks,
} from "@/static/json/howItWorks";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

export default function HowItWorks() {
  const router = useRouter();

  return (
    <div>
      <Banner
        {...bannerHowItworks}
        containerStyle="container justify-between relative"
        renderElement={
          <>
            <GetStartForm buttonTitle="Get started" />
            <div className="absolute bottom-0 ">
              <Image
                className="w-full object-cover object-center"
                src={"/how-it-work-banner.png"}
                height={792}
                width={1000}
                alt="img"
              />
            </div>
          </>
        }
        headinWidth="max-w-[491px] mb-[400px]"
        descriptionSty="text-base font-normal leading-[25px] mb-8 text-white"
        imgContainerSty="max-w-[564px] h-[631px] w-full rounded-[20px] overflow-hidden mt-[161px]"
        titleSty="text-[36px] leading-[50px] md:text-[42px] font-medium md:leading-[60px] mb-4 tracking-tight"
      />
      <Breadcrumb
        breadcrumbList={[
          { link: "/", label: "Home" },
          { link: "/how-it-works", label: "how it works" },
        ]}
      />
      <div className="container">
        {hyperlocalDiscovery?.map((item, index) => {
          return (
            <InfoCard
              key={index}
              {...item}
              sectionStyle="py-8 px-5 rounded-[16px] bg-gray-100 my-8"
              containtWidth="max-w-[536px] mx-auto"
              containerSty=""
              titleSty="text-[42px] font-medium leading-[52px] tracking-tighter text-black-33 mb-[26px]"
              descriptionSty="mb-4 text-base font-normal leading-[25px]"
              gridContainerSty="grid grid-cols-12 gap-6"
              renderElement={
                <>
                  <ul className="list-disc pl-6 mb-[26px]">
                    {item?.list?.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="text-base font-normal text-black-33 leading-[25px]"
                        >
                          {item.title}
                        </li>
                      );
                    })}
                  </ul>
                  <Button
                    filled
                    data={item?.buttonText}
                    action={() => {
                      if (item.buttonAction) {
                        router.push(item.buttonAction);
                      }
                    }}
                    clsStyle="py-3 px-8"
                  />
                </>
              }
            />
          );
        })}
      </div>
      <InfoCard
        {...seamlessIntegrationHowItworks}
        sectionStyle="py-[100px] bg-blue-900"
        containerSty="container "
        containtWidth=""
        titleSty="text-white text-[54px] font-normal mb-8 leading-[70px] tracking-tighter"
        descriptionSty="text-white max-w-[542px] mb-8 mr-auto text-base font-normal leading-[25px]"
        imageContainerSty=" w-full max-w-[497px] mx-auto"
        textContainerSty=" col-span-6 flex items-center"
        imageContentSty=" col-span-5 flex items-center"
        renderElement={
          <>
            <Button
              filled
              data="View all integrations"
              clsStyle="py-3 px-8"
              action={() => router.push("/product/integrations")}
            />
          </>
        }
      />
      <HyperlocalStrategyForm containerSty="container" />
    </div>
  );
}
