import Breadcrumb from "@/Components/comman/Breadcrumb";
import Button from "@/Components/comman/Button";
import Card from "@/Components/comman/Card";
import CardSection from "@/Components/comman/Card/CardSection";
import InfoCard from "@/Components/comman/Card/InfoCard";
import HyperlocalStrategyForm from "@/Components/comman/Form/hyperlocalStrategyForm";
import DownArrow from "@/assets/DownArrow";
import { oneUltimatePlatform } from "@/static/json/dashboard";
import {
  agencyGrowth,
  demandGeneration,
  expendYourReach,
  retailSuccess,
} from "@/static/json/partnerProgramme";
import Image from "next/image";
import React from "react";

const PartnerProgramme = () => {
  return (
    <div>
      <InfoCard
        {...expendYourReach}
        sectionStyle="pt-[50px] md:py-[75px] lg:pt-[80px] lg:pb-[100px] bg-blue-900"
        containerSty="container "
        containtWidth=""
        subheadTitleSty="text-[28px] font-medium text-white mb-8"
        titleSty="text-white text-[36px] lg:text-[54px] font-normal mb-3  leading-[140%] tracking-tighter"
        descriptionSty="text-white lg:max-w-[512px] mb-5 lg:mb-8 mr-auto text-base font-normal leading-[25px]"
        gridContainerSty="gap-0 grid grid-cols-11"
        imageContainerSty=" w-full max-w-[562px] ml-0 mx-auto"
        textContainerSty="col-span-11 lg:col-span-6 max-lg:mb-10 flex items-center"
        imageContentSty="col-span-11 lg:col-span-5 flex items-center"
        dashImageSty="col-span-11 lg:hidden pt-10"
      />
      <Breadcrumb
        breadcrumbList={[
          { link: "/", label: "Home" },
          { link: "/company", label: "Company" },
          { link: "/partner-programme", label: "Partnership Programme" },
        ]}
      />
      <CardSection
        {...retailSuccess?.sectionData}
        headingSty="flex items-end justify-center mx-4 gap-[60px] text-center"
        sectionStyle="py-[100px] bg-white "
        titleSty="text-[42px] lg:text-[42px] font-medium mb-[14px] leading-[52px] tracking-tighter text-black-33"
        descriptionSty="max-w-[456px] text-base font-normal leading-[22px] text-black-33 mb-[52px]"
        renderElement={() => (
          <div className="grid grid-cols-3 gap-8">
            {retailSuccess?.cardDataList?.map((item, index) => {
              return (
                <div className="col-span-1" key={index}>
                  <Card
                    {...item}
                    headingSty="text-[28px] font-medium leading-[40px] mb-8 text-black-900"
                    descriptionSty="text-base font-normal leading-[150%] text-black-33"
                    cardSty="bg-gray-100 px-10 py-8 rounded-2xl border-[1px] border-gray-400 h-full"
                    iconSty="min-w-[55px]"
                    titleIconSty="h-[95px] w-[95px] rounded-full bg-yellow-100 flex items-center justify-center mb-8 "
                  />
                </div>
              );
            })}
          </div>
        )}
      />

      <section className="pt-[50px] md:py-[75px] lg:pt-[80px] lg:pb-[100px] bg-blue-200">
        <div className="container">
          <h1 className="text-[36px] leading-[50px] md:text-[42px] font-medium md:leading-[52px]  max-w-[521px]">
            Accelerate your Agency’s growth with Sekel Tech Partner Program
          </h1>
          <div className="gap-[60px] grid grid-cols-12">
            <div className="col-span-12 lg:col-span-6 max-lg:mb-10 ">
              <div>
                <div className=" undefined ">
                  <p className="text-[28px] font-normal leading-[32px] tracking-tight mb-20">
                    Expand your portfolio with our hyperlocal SAAS platform.
                    Enjoy profitable sharing, support, and co-marketing for
                    agency success.
                  </p>
                </div>
                <div className="max-w-[521px] w-full ">
                  <Image
                    className="object-cover w-full"
                    src={"/partner-program.png"}
                    height={611}
                    width={521}
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 max-lg:mb-10 ">
              <div className="flex justify-between  flex-wrap w-full ">
                {agencyGrowth?.map((item, index) => {
                  return (
                    <Card
                      {...item}
                      headingSty="text-[28px] font-medium leading-[30px] mb-4  "
                      cardSty="mb-8 w-[calc(50%_-_10px)] "
                      // dataDivSty="w-[calc(100%_-_90px)]"
                      cardDataSty=""
                      titleIconSty="h-[58px] w-[58px] rounded-full bg-yellow-100 flex items-center justify-center mb-5 "
                      iconNumberSty="text-[28px] font-medium text-black-33"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[100px]">
        <div className="container">
          <h3 className="text-[42px] lg:text-[42px] font-medium mb-[52px] text-center leading-[52px] tracking-tighter text-black-33">
            Discovery, Customer data, Demand Generation
          </h3>
          {demandGeneration?.map((item, index) => {
            return (
              <InfoCard
                key={index}
                {...item}
                sectionStyle="py-8 px-5 rounded-[16px] bg-blue-200 my-8"
                containtWidth="max-w-[462px] mx-auto"
                containerSty=""
                titleSty="text-[42px] font-medium leading-[52px] tracking-tighter text-black-33 mb-[26px]"
                descriptionSty="mb-[26px] text-base font-normal leading-[25px]"
                gridContainerSty="grid grid-cols-12 gap-6"
                renderElement={
                  <>
                    <Button
                      data={
                        <div className="flex justify-between items-center">
                          {item.buttonText}
                          <div className="-rotate-90">
                            <DownArrow ml="ml-0 mt-3 w-3" />
                          </div>
                        </div>
                      }
                      action={() => {
                        //   if (item.buttonAction) {
                        //     router.push(item.buttonAction);
                        //   }
                      }}
                      clsStyle="border-none text-blue-900"
                    />
                  </>
                }
              />
            );
          })}
        </div>
      </section>
      <section className="bg-blue-900 py-20">
        <div className="container">
          <div className=" mb-[52px] ">
            <h3 className="text-[42px] font-medium mb-3 leading-[52px] tracking-tighter text-white">
              Our Commitment to DPDP and GDPR Act Standards
            </h3>
            <p className="text-base font-normal leading-[22px] max-w-[722px] text-yellow-900">
              Sekel Tech’s robust compliance measures ensure that your clients'
              data is protected, giving you peace of mind as you grow your
              agency
            </p>
          </div>
          <div className="flex items-center">
            <div className="w-[30%] h-full pr-[67px] pb-[33px] border-b-[1px] border-r-[1px] border-white relative after:content-[url('/standard-line-icon.png')] after:absolute after:-top-3 after:right-0 ">
              <ul className="pr-5 ">
                <li className="ml-auto max-w-[268px] text-end ">
                  <h3 className="text-[42px] font-medium leading-[52px] mb-3.5 text-white">
                    DPDP Act
                  </h3>
                  <p className="mb-[14px] font-medium text-white text-[28px]">
                    Committed to User Privacy
                  </p>
                  <p className="text-sm font-light text-white text-end">
                    From initial data collection to storage and sharing, our
                    platform implements industry-leading security measures,
                    ensuring data protection at every step.
                  </p>
                </li>
              </ul>
            </div>
            <div className="w-[40%] h-full">
              <div className="max-w-[438px] w-full mx-auto">
                <Image
                  className="h-full w-full object-cover"
                  src={"/standards.png"}
                  height={562}
                  width={591}
                  alt="img"
                />
              </div>
            </div>
            <div
              className={`w-[30%] h-full pl-8 pb-[33px] border-l-[1px] border-b-[1px] border-white relative after:content-[url('/standard-line-icon.png')] after:absolute after:-top-3 after:left-0 after:rotate-180`}
            >
              <ul className="">
                <li className=" max-w-[344px] ">
                  <h3 className="text-[42px] font-medium leading-[52px] mb-3.5 text-white">
                    GDPR Compliance
                  </h3>
                  <p className="mb-[14px] text-xl font-medium text-white ">
                    GDPR Compliance and Assurance
                  </p>
                  <p className="text-sm font-light text-white ">
                    Sekel Tech ensures GDPR compliance, transparent opt-out
                    options, robust security measures, and trusted third-party
                    processors for your data privacy confidence.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[100px]">
        <div className="container">
          <h3 className="text-[42px] lg:text-[42px] font-medium mb-20 leading-[52px] tracking-tighter text-black-33 ">
            Questions/ Answers
          </h3>
          <div className="py-5 border-t-[1px] border-gray-400 flex justify-between items-center mb-8">
            <div className="w-[35%]">
            <h4 className="text-base font-semibold">Who Can Join Sekel Tech's Partner Program?</h4>
            </div>
            <div className="w-[55%]">
            <p className="text-base font-normal">
            Any digital marketing agency or individual can join Sekel Tech's Partner Program. The program is open to individuals and businesses interested in collaborating with Sekel Tech to promote its products and services.
            </p>
            </div>
          </div>
          <div className="py-5 border-t-[1px] border-gray-400 flex justify-between items-center mb-8">
            <div className="w-[35%]">
            <h4 className="text-base font-semibold">How Much Time Does It Take to Become a Partner?</h4>
            </div>
            <div className="w-[55%]">
            <p className="text-base font-normal">
            The time it takes to become a partner may vary depending on completing necessary documentation and agreements. Typically, the process can be completed within a few days to a week.
            </p>
            </div>
          </div>
          <div className="py-5 border-t-[1px] border-gray-400 flex justify-between items-center ">
            <div className="w-[35%]">
            <h4 className="text-base font-semibold">How are we different from other GMB Managers, Discovery Platforms, and Marketing Agencies?</h4>
            </div>
            <div className="w-[55%]">
            <p className="text-base font-normal">
            Sekel Tech stands out with its unique Last Mile First Approach, seamlessly connecting GMB management, discovery platforms, and marketing. Our solutions prioritize enhanced retail connectivity, address offline preferences, and spotlight retailers for collaborative success, setting us apart in the evolving retail landscape.
            </p>
            </div>
          </div>
        </div>
      </section>
      <HyperlocalStrategyForm containerSty="container" />
    </div>
  );
};

export default PartnerProgramme;
