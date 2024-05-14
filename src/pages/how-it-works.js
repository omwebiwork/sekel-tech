import Banner from "@/Components/comman/Banner/Index";
import Button from "@/Components/comman/ButtonComponent/Index";
import CardSection from "@/Components/comman/Card/CardSection";
import InfoCard from "@/Components/comman/Card/InfoCard";
import GetStartForm from "@/Components/comman/Form/StartForm";
import HyperlocalStrategyForm from "@/Components/comman/Form/hyperlocalStrategyForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HowItWorks() {
  let data = [
    {
      title: "Hyperlocal Discovery Automation",
      description:
        "Leverage organic discovery for genuine leads, boosting footfalls and establishing trust and authority in your digital landscape with real-time reporting.",
      list: [
        {
          title:
            "Modules like Listing Management, Store Locator, Dealer Websites, Product Catalogue & more to generate high-intent buying leads",
        },
        { title: "Complete Local SEO Automation for every dealer website" },
      ],
      buttonText: "Explore Discovery",
      imageContentSty: "order-1 col-span-6 h-full flex items-center",
      textContainerSty: "order-2 col-span-6 h-full flex items-center",
      imageContainerSty: "max-h-[480px] w-full max-w-[624px] mx-auto",
      image: {
        src: "/hyperlocal-discovery.png",
        height: 536,
        width: 673,
        alt: "hyperlocal-discovery",
      },
    },

    {
      title: "Customer Data Platform",
      description:
        "Seamlessly access, integrate, consolidate, and deploy leads, dealers, inventory & customer data to propel your brand into a new era of discovery and engagement. ",
      list: [
        {
          title:
            "Integrate with your current systems for leads, dealers & customer data",
        },
        { title: "Inbuilt CDP, CRM, DMS, LMS, PMS & CMS - all in one place" },
      ],
      buttonText: "Explore CDP",
      imageContentSty: "col-span-6 h-full flex items-center",
      textContainerSty: "col-span-6 h-full  flex items-center ",
      imageContainerSty: "max-h-[414px] w-full max-w-[540px] mx-auto",
      image: {
        src: "/Product.png",
        height: 536,
        width: 673,
        alt: "management-system",
      },
    },
    {
      title: "Retail Demand Generation",
      description:
        "Through data, we generate data-driven insights, empowering businesses with valuable information for strategic retail demand generation.",
      list: [
        {
          title:
            "Modules like Google Ad Campaign, Meta Ad Campaign, Market Listener AI, Retargeting, Store 2 Door, and more to enhance engagement and satisfaction.",
        },
        { title: "Personalized communication based on customer interactions" },
      ],
      buttonText: "Get Started",
      imageContentSty: "order-1 col-span-6 h-full flex items-center",
      textContainerSty: "order-2 col-span-6 h-full flex items-center",
      imageContainerSty: "max-h-[361px] w-full max-w-[638px] mx-auto",
      image: {
        src: "/retail-demand.png",
        height: 536,
        width: 673,
        alt: "retail-demand",
      },
    },
  ];

  let bannerObj = {
    title: "360º Retail Journey with Sekel Tech",
    description: `Explore Sekel Tech's transformative journey, from forming connections to supercharging data and unleashing demand. Discover the power of Retail AI
  `,
  };

  return (
    <div>
      <Banner
        {...bannerObj}
        image={{
          src: "/retail.png",
          alt: "img",
          height: 400,
          width: 400,
        }}
        containerStyle="container justify-between"
        renderElement={<GetStartForm buttonTitle="Get started" />}
        headinWidth="max-w-[479px] mb-12"
      />

      <div className="container">
        {data?.map((item, index) => {
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
                  <Button filled data={item?.buttonText} clsStyle="py-3" />
                </>
              }
            />
          );
        })}
      </div>
      <InfoCard
        title="Seamless Integration With Your Data Systems"
        description="Elevate efficiency as our platform seamlessly blends into your existing systems, offering a streamlined and unified digital experience"
        image={{
          src: "/integration.png",
          height: 500,
          width: 500,
          alt: "img",
        }}
        sectionStyle="py-[100px] bg-blue-900"
        containerSty="container "
        containtWidth=""
        titleSty="text-white text-[54px] font-normal mb-8 leading-[70px] tracking-tighter"
        descriptionSty="text-white max-w-[542px] mb-8 mr-auto text-base font-normal leading-[25px]"
        // gridContainerSty="gap-6 grid grid-cols-11"
        imageContainerSty=" w-full max-w-[497px] mx-auto"
        textContainerSty=" col-span-6 flex items-center"
        imageContentSty=" col-span-5 flex items-center"
        renderElement={
          <>
            <Button filled data="Request Demo" clsStyle="py-3" />
          </>
        }
      />
      <HyperlocalStrategyForm containerSty="container" />
    </div>
  );
}
