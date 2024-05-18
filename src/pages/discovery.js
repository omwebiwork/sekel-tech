import Image from "next/image";
import React from "react";
import Banner from "@/Components/comman/Banner";
import Breadcrumb from "@/Components/comman/Breadcrumb";
import Card from "@/Components/comman/Card";
import CardSection from "@/Components/comman/Card/CardSection";
import GetStartForm from "@/Components/comman/Form/StartForm";
import HyperlocalStrategyForm from "@/Components/comman/Form/hyperlocalStrategyForm";
import {
  advantagesOfSekel,
  bannerDiscovery,
  discoveryFeature,
  investmentFocus,
} from "@/static/json/discovery";

const Discovery = () => {
  const renderDiscoveryFeature = () => {
    return (
      <div>
        <div className="grid grid-cols-3 gap-5">
          {discoveryFeature?.cardData?.map((item, index) => {
            return (
              <div
                className={` "col-span-1"
                `}
              >
                <Card
                  key={index}
                  {...item}
                  // buttonSty="flex gap-1 items-center text-base font-medium text-blue-900"
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderCard = () => {
    return (
      <div>
        <div className="grid grid-cols-3 gap-8">
          {investmentFocus?.cardData?.map((item, index) => {
            return (
              <div
                className={`${
                  index === 0 || index === 3 ? "col-span-2" : "col-span-1"
                }`}
              >
                <Card
                  key={index}
                  {...item}
                  image={{
                    ...item.image,
                    className: "h-full w-full object-cover object-center",
                  }}
                  cardSty={item.cardSty + " h-full bg-gray-100"}
                  headingSty={
                    "mb-8 tracking-tighter leading-[30px] text-[28px]"
                  }
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div>
      <Banner
        {...bannerDiscovery}
        sectionSty="pb-[100px] pt-20"
        containerStyle="container justify-between"
        descriptionSty="mr-16 mb-8"
        imgContainerSty="max-w-[643px] max-h-[419px] w-full"
        renderElement={<GetStartForm buttonTitle="Get started" />}
        headinWidth="max-w-[500px] w-full mb-12"
      />
      <Breadcrumb
        breadcrumbList={[
          { link: "/", label: "Home" },
          { link: "/how-it-works", label: "how it works" },
          { link: "/discovery", label: "Discovery Platform" },
        ]}
      />
      <CardSection
        {...discoveryFeature?.sectionData}
        renderElement={renderDiscoveryFeature}
      />
      <CardSection
        {...advantagesOfSekel?.sectionData}
        sectionStyle="py-[100px] bg-blue-200"
        headingSty="max-w-[803px] mx-auto text-center mb-[52px]"
        renderElement={() => (
          <div className="grid grid-cols-3 mx-10">
            {advantagesOfSekel?.cardData?.map((item, index) => {
              return (
                <div className="col-span-1" key={index}>
                  <Card
                    {...item}
                    headingSty="text-[28px] font-medium leading-[30px] mb-8 text-black-900"
                    cardSty="bg-blue-200 px-5 py-5 rounded-2xl border-[1px] border-white h-full"
                    titleIconSty="h-[60px] w-[60px] rounded-full bg-yellow-100 flex items-center justify-center mb-5"
                    descriptionSty="text-base font-normal leading-[22px] text-black-33"
                  />
                </div>
              );
            })}
          </div>
        )}
      />
      <CardSection
        {...investmentFocus?.sectionData}
        headingSty="max-w-[790px] mb-[52px]"
        descriptionSty="text-base font-normal leading-[22px] text-black-33"
        renderElement={renderCard}
      />
      <section className="bg-blue-900 py-20">
        <div className="container">
          <div className=" mb-[52px] ">
            <h3 className="text-[42px] font-medium mb-3 leading-[52px] tracking-tighter text-white">
              Why Sekel Tech is the Ideal Choice
            </h3>
            <p className="text-base font-normal leading-[22px] max-w-[722px] text-yellow-900">
              Empower Your Digital Presence with Sekel Tech. Sekel Tech offers
              advanced features, including
            </p>
          </div>
          <div className="flex items-center">
            <div className="w-[25%] h-full mt-auto">
              <ul className="pr-5 ">
                <li className="ml-auto max-w-[243px] text-end  mb-[87px] ">
                  <p className="mb-[14px] text-xl font-medium text-white ">
                    Automated and Scaled Engagement
                  </p>
                  <p className="text-sm font-light text-white text-end">
                    Automate responses and content delivery for consistent,
                    valuable interactions.
                  </p>
                </li>
                <li className="ml-auto max-w-[243px] text-end ">
                  <p className="mb-[14px] text-xl font-medium text-white ">
                    Comprehensive Educational Resources
                  </p>
                  <p className="text-sm font-light text-white text-end">
                    Access a rich array of FAQs, videos and articles to empower
                    end-users in making informed choices.
                  </p>
                </li>
              </ul>
            </div>
            <div className="w-[50%] h-full">
              <div className="max-w-[591px] w-full mx-auto">
                <Image
                  className="h-full w-full object-cover"
                  src={"/Choice.png"}
                  height={562}
                  width={591}
                  alt="img"
                />
              </div>
            </div>
            <div className="w-[25%] h-full ">
              <ul className="pr-5 ">
                <li className="ml-auto max-w-[243px]  mb-[68px] ">
                  <p className="mb-[14px] text-xl font-medium text-white ">
                    Secure Payment and Consent-Driven Engagement
                  </p>
                  <p className="text-sm font-light text-white ">
                    Prioritize secure payment options and consent-driven
                    engagemen to reinforce trust.
                  </p>
                </li>
                <li className="ml-auto max-w-[243px] mb-[68px]">
                  <p className="mb-[14px] text-xl font-medium text-white ">
                    Automated and Scaled Engagement
                  </p>
                  <p className="text-sm font-light text-white ">
                    Automate responses and content delivery for consistent,
                    valuable interactions.
                  </p>
                </li>
                <li className="ml-auto max-w-[243px] ">
                  <p className="mb-[14px] text-xl font-medium text-white ">
                    Automated and Scaled Engagement
                  </p>
                  <p className="text-sm font-light text-white ">
                    Automate responses and content delivery for consistent,
                    valuable interactions.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <HyperlocalStrategyForm containerSty="container" />
    </div>
  );
};

export default Discovery;
