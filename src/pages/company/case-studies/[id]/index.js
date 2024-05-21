import Breadcrumb from "@/Components/comman/Breadcrumb";
import Card from "@/Components/comman/Card";
import CardSection from "@/Components/comman/Card/CardSection";
import InfoCard from "@/Components/comman/Card/InfoCard";
import LovedThisContent from "@/Components/comman/Form/LovedThisContent";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const CaseStudyDetails = () => {
  const beyondTech = {
    title: "About Bridgestone",
    description: `Bridgestone has grown tremendously in India in an extremely short time frame. It is one of the major suppliers to almost all the reputed Original Equipment Manufacturing (OEM) companies in India. Bridgestone has always placed a premium on quality, and the strict standards it follows have been certified by one of the world's most reputable quality assurance organisations.`,
  };
  const seamlessIntegrationHowItworks = {
    title: "What Sekel Tech Has Done",
    description: `Sekel Tech's Customer Success Manager (CSM) collaborated with Bridgestone's Marketing team to build various user segments. On the Sekel Tech dashboard, both teams had narrowed down their focus on Dynamic Segmentation. The Sekel Tech Journey Designer allows Bridgestone to engage segments across channels after creating them. 
    `,
    leadText: `On the Sekel Tech dashboard, Bridgestone tracks users' actions by using System and Custom events. This helps them send personalised messages to users based on the right context.`,
    image: {
      src: "/collaborated.png",
      height: 433,
      width: 537,
      alt: "img",
    },
  };

  let growthFacts = {
    sectionData: {
      title: "Growth Facts",
    },
    cardDataList: [
      {
        title: (
          <span>
            10x <br /> Total Views GMB
          </span>
        ),
        description:
          "Total Views in Google My Business (GMB) refers to the cumulative count of how many times a business’s listing has been viewed by users on Google Search and Maps.",
      },
      {
        title: (
          <span>
            4x <br /> Click to calls GMB
          </span>
        ),
        description:
          "Enables users to directly call a business by clicking its phone number on Google Search or Maps.",
      },
      {
        title: (
          <span>
            5x <br /> Physical Store Visits
          </span>
        ),
        description:
          "Count of customers visiting brick-and-mortar locations to measure foot traffic and marketing impact.",
      },
      {
        title: (
          <span>
            6.5x <br /> First Party Leads
          </span>
        ),
        description:
          "First-party leads are potential customers or prospects who directly interacted with and provided their information to a business, without any involvement of third-party intermediaries.",
      },
      {
        title: (
          <span>
            3x <br />
            Call Leads
          </span>
        ),
        description:
          "Call leads refer to potential customers or prospects who have expressed interest in a product or service by making inquiries or providing their contact information during a phone call.",
      },
    ],
  };
  let dominateMarket = {
    sectionData: {
      title: "Services integrated",
    },
    cardDataList: [
      {
        title: "Campaign Management",
        description:
          "Strategically coordinating and executing marketing initiatives to achieve specific objectives.",
        titleIcon: {
          src: "/campaign.svg",
          height: 32,
          width: 32,
          alt: "img",
        },
      },
      {
        title: "Reporting",
        description:
          "The process of presenting data and information in a structured format for analysis and decision-making.",
        titleIcon: {
          src: "/reporting.svg",
          height: 32,
          width: 32,
          alt: "img",
        },
      },
      {
        title: "3rd Party API",
        description:
          "External software interface accessed for data exchange or functionality extension.",
        titleIcon: {
          src: "/api.svg",
          height: 32,
          width: 32,
          alt: "img",
        },
      },
      {
        title: "IVR",
        description:
          "Automated phone system allowing callers to interact with pre-rec orded messages through voice or touch-tone inputs. ",
        titleIcon: {
          src: "/ivr.svg",
          height: 32,
          width: 32,
          alt: "img",
        },
      },
      {
        title: "Google Business Profile",
        description:
          "Free tool to manage online presence and connect with customers on Search and Maps.",
        titleIcon: {
          src: "/google-business.svg",
          height: 32,
          width: 32,
          alt: "img",
        },
      },
      {
        title: "Microsite",
        description:
          "A microsite is a small, focused website typically created for a specific campaign or purpose. ",
        titleIcon: {
          src: "/microsite.svg",
          height: 32,
          width: 32,
          alt: "img",
        },
      },
    ],
  };

  const router = useRouter();
  return (
    <div>
      {/* {router?.query?.id} */}

      <section className="bg-blue-200 py-[50px]">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="w-3/5 ">
              <div className="max-w-[479px] my-[79px]">
                <p className="text-base border-[1px] border-yellow-900 font-medium tracking-tight leading-[22px] text-black-33 py-2 px-8 bg-yellow-100 rounded-full inline-block mb-4">
                  Automotive &amp; Automobile
                </p>
                <h2 className="text-[42px] font-medium leading-[65px] mb-4 tracking-tight">
                  Being Omnipresent to Convert Multiple Leads.
                </h2>
                <p className="text-2xl font-normal text-black-33">
                  24% Rise in First Party Leads
                </p>
              </div>
            </div>
            <div className="w-2/5 ">
              <div className="ml-auto relative max-w-[379px] max-h-[383px] w-full h-full  border-[1px] border-blue-200 rounded-2xl overflow-hidden">
                <Image
                  src={"/bridgestone-bg.png"}
                  height={900}
                  width={900}
                  alt="img"
                />

                <div className="absolute flex items-center justify-center top-[121px] left-[127px] w-[109px] h-[139px] bg-white">
                  <Image
                    src={"/bridgestone-logo.png"}
                    height={900}
                    width={900}
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Breadcrumb
      sectionSty="py-2"
        breadcrumbList={[
          { link: "/", label: "Home" },
          { link: "/Company", label: "Company" },
          { link: "/case-study", label: "Case Study" },
          { link: "/Bridgestone", label: "Bridgestone" },
        ]}
      />

      <InfoCard
        sectionStyle="py-[50px] md:py-[75px] lg:py-[100px] bg-gray-100"
        containtWidth="lg:max-w-[481px]"
        titleSty="text-[42px] font-medium leading-[140%] tracking-tighter text-black-33 mb-5"
        descriptionSty="mx-auto text-base font-normal leading-[25px] "
        textContainerSty="col-span-12 lg:col-span-6"
        imageContentSty="col-span-12 lg:col-span-6"
        gridContainerSty="grid grid-cols-12 md:gap-6"
        {...beyondTech}
        renderSecondElement={
          <div>
            <div>
              <h6 className="text-[42px] font-medium text-black-33 mb-5">
                Goals
              </h6>
              <div className="flex gap-5 items-center mb-5">
                <div className="w-8 h-8 min-w-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <p>1</p>
                </div>
                <p className="flex-1 text-base text-black-33">
                  The goal is to convert unknown visitors into known ones
                </p>
              </div>
              <div className="flex gap-5 items-center mb-5">
                <div className="w-8 h-8 min-w-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <p>2</p>
                </div>
                <p className="flex-1 text-base text-black-33">
                  A greater number of orders will be placed
                </p>
              </div>
            </div>
            <div>
              <h6 className="text-[42px] font-medium text-black-33 mb-5">
                Challenges
              </h6>
              <div className="flex gap-8">
                <div className="w-1/2 mb-5">
                  <div className="w-8 h-8 min-w-8 bg-yellow-100 rounded-full flex items-center justify-center mb-5">
                    <p>1</p>
                  </div>
                  <p className="flex-1 text-base text-black-33">
                    Identifying Various Segments And Figuring Out How To
                    Communicate With Them
                  </p>
                </div>
                <div className="w-1/2 mb-5">
                  <div className="w-8 h-8 min-w-8 bg-yellow-100 rounded-full flex items-center justify-center mb-5">
                    <p>2</p>
                  </div>
                  <p className="flex-1 text-base text-black-33">
                    Analysing User Actions At Scale
                  </p>
                </div>
              </div>
            </div>
          </div>
        }
      />
      <CardSection
        {...growthFacts?.sectionData}
        headingSty="flex items-end mx-4 gap-[60px] justify-center"
        sectionStyle="py-[100px] bg-white"
        titleSty="text-[42px] lg:text-[42px] font-medium mb-[52px] leading-[52px]  tracking-tighter text-black-33"
        descriptionSty="max-w-[686px] text-base font-normal leading-[22px] text-black-33 mb-[52px]"
        renderElement={() => (
          <div className="flex flex-wrap justify-center	">
            {growthFacts?.cardDataList?.map((item, index) => {
              return (
                <div className="w-1/3 p-3 ">
                  <div className="w-full h-full" key={index}>
                    <Card
                      {...item}
                      headingSty="text-[28px] font-medium leading-[40px] mb-8 text-black-900"
                      descriptionSty="text-base font-normal leading-[150%] text-black-33"
                      cardSty="bg-gray-100 border-[1px] border-gray-400 px-10 py-8 rounded-2xl h-full"
                      iconSty="min-w-[55px]"
                      titleIconSty="h-[95px] w-[95px] rounded-full bg-yellow-100 flex items-center justify-center mb-8 "
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      />
      <InfoCard
        {...seamlessIntegrationHowItworks}
        sectionStyle="py-[100px] bg-blue-900"
        containerSty="container "
        containtWidth="max-w-[503px]"
        leadTextSty="text-white max-w-[542px] mb-8 mr-auto text-base font-normal leading-[25px]"
        titleSty="text-white text-[54px] font-normal mb-8 leading-[70px] "
        descriptionSty="text-white  mb-3 mr-auto text-base font-normal leading-[25px]"
        imageContainerSty=" w-full max-w-[537px] mx-auto"
        textContainerSty=" col-span-6 flex items-center"
        imageContentSty=" col-span-5 flex items-center"
      />

      <CardSection
        {...dominateMarket?.sectionData}
        headingSty="flex items-end mx-4 gap-[60px] "
        sectionStyle="py-[100px] bg-white"
        titleSty="text-[42px] lg:text-[42px] font-medium mb-[52px] leading-[52px] tracking-tighter text-black-33"
        descriptionSty="max-w-[686px] text-base font-normal leading-[22px] text-black-33 mb-[52px]"
        renderElement={() => (
          <div className="grid grid-cols-3 gap-8">
            {dominateMarket?.cardDataList?.map((item, index) => {
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
     
      <section className="py-[100px] bg-blue-200">
        <div className="container">
          <div className="relative">
            <div className="absolute w-[70px] top-16 left-0 right-0 mx-auto">
              <div className="w-[70px] max-h-[486px] relative z-[5]">
                <div className="h-[70px] w-[70px] rounded-full relative  bg-blue-900 border-[25px] border-blue-200 mb-[50px]"></div>
                <div className="h-[70px] w-[70px] rounded-full relative  bg-blue-900 border-[17px] border-blue-200 mb-[50px]"></div>
                <div className="h-[70px] w-[70px] rounded-full relative  bg-blue-900 border-[10px] border-blue-200 mb-[50px]"></div>
                <div className="h-[70px] w-[70px] rounded-full relative bg-blue-900 border-[25px] border-blue-200 mb-[50px]"></div>
                <div className="h-[70px] w-[70px] rounded-full  relative  bg-blue-900 border-[14px] border-blue-200 "></div>
              </div>

              <div className="z-[1] absolute top-8 right-0 left-0 h-full w-[10px] bg-yellow-100 mx-auto"></div>
            </div>
            <ul className="flex flex-wrap relative">
              <li className="w-1/2 pr-[113px] pb-[150px]">
                <div className="max-w-[350px] text-right ml-auto">
                  <p className="text-2xl font-normal">
                    Call leads, cookies ,Pixel ID{" "}
                    <b>Reduces Customer Acquisition </b> and Retargeting Cost
                  </p>
                </div>
              </li>
              <li className="w-1/2 pl-[113px] pt-[150px]">
                <div className="max-w-[350px] ">
                  <p className="text-2xl font-normal ">
                    <b>Omnichannel</b> Engagement and Presence for{" "}
                    <b>Increased Commerce</b>
                  </p>
                </div>
              </li>
              <li className="w-1/2 pr-[113px] pb-[150px]">
                <div className="max-w-[350px] text-right ml-auto">
                  <p className="text-2xl font-normal ">
                    A Unified Platform for Full <b>Hyperlocal Automation</b>
                  </p>
                </div>
              </li>

              <li className="w-1/2 pl-[113px] pt-[150px]">
                <div className="max-w-[350px] ">
                  <p className="text-2xl font-normal ">
                    Automated Seo Helps in <b>Higher Ranking on Search </b>
                    Results
                  </p>
                </div>
              </li>
              <li className="w-1/2 pr-[113px]">
                <div className="max-w-[350px] text-right ml-auto">
                  <p className="text-2xl font-normal ">
                    Interested <b>Brand Visibility & Standardisation</b> Across
                    all Platforms
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <LovedThisContent />
    </div>
  );
};

export default CaseStudyDetails;
