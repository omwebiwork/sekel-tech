import LetsConnectForm from "@/Components/LetsConnectForm";
import Banner from "@/Components/comman/Banner";
import Breadcrumb from "@/Components/comman/Breadcrumb";
import Button from "@/Components/comman/Button";
import Card from "@/Components/comman/Card";
import CardSection from "@/Components/comman/Card/CardSection";
import InfoCard from "@/Components/comman/Card/InfoCard";
import HyperlocalStrategyForm from "@/Components/comman/Form/hyperlocalStrategyForm";
import Image from "next/image";
import React, { useState } from "react";

const ContactUs = () => {
  const [accordianState, setAccordianState] = useState(['5','9']);
  let bannerObj = {
    title: "Discover The Power Of Digital At Your Physical Stores",
    description: `Designed to help retail businesses, Sekel Tech platform helps manage brands’ online presence, store orders, and consumers’ online to offline journey.
    `,
  };
  let managementCardData = [
    {
      title: "Email",
      subtitle: "info@sekel.tech",
      description: (
        <p>
          info@sekel.tech <br /> careers@sekel.tech
        </p>
      ),
      titleIcon: {
        src: "/Mail.png",
        height: 53,
        width: 53,
        alt: "img",
      },
    },
    {
      title: "Address",
      description:
        "91 Springboard, Creaticity Mall, Yerawada, Pune, Maharashtra-411006",
      titleIcon: {
        src: "/Location marker.png",
        height: 53,
        width: 53,
        alt: "img",
      },
    },
    {
      title: "Contact",
      description: "+91-794-256-9371",
      titleIcon: {
        src: "/Phone.png",
        height: 53,
        width: 53,
        alt: "img",
      },
    },
  ];
  const seamlessIntegration = {
    title: "Visit our office !",
    description:
      "Visit our office to meet us in person! See where ideas come to life, have real conversations, and be a part of our story.",
    leadText: (
      <div className="text-[20px] font-medium mb-8">
        {" "}
        <p>Monday -Friday</p>
        <p>09:30am - 06:30pm</p>
      </div>
    ),
    image: {
      src: "/map.png",
      height: 900,
      width: 900,
      alt: "integration",
    },
  };
  let faq = {
    sectionData: { title: "Frequently Asked Questions", image: {} },
    list: [
      {
        question: "What is hyperlocal marketing?",
        answer: "",
      },
      {
        question: "How does hyperlocal marketing benefit businesses?",
        answer: "",
      },
      {
        question: "What strategies can I use for hyperlocal marketing?",
        answer: "",
      },
      {
        question: "What strategies can I use for hyperlocal marketing?",
        answer:
          "Track metrics like foot traffic, local website visits, and social media engagement specific to your targeted area to gauge the effectiveness of your hyperlocal marketing efforts.",
      },
      {
        question: "How can I measure the success of my hyperlocal campaigns?",
        answer: "",
      },
    ],
  };
  let handleAccordian = (index) => {
    if (accordianState[index]) {
      setAccordianState({ [index]: false });
    } else {
      setAccordianState({ [index]: true });
    }
  };
  return (
    <>
      <Banner
        {...bannerObj}
        sectionSty="pb-8 pt-[50px]"
        containerStyle="container justify-between h-full gap-[80px]"
        descriptionSty="mr-16 mb-8"
        imgContainerSty="max-w-[643px] max-h-[419px] w-full"
        imgGridSty="w-full h-full  "
        renderElement={
          <div className="-mt-[200px] -mr-[80px]">
            <Image
              className="w-full object-cover"
              src={"/digital-graph.svg"}
              height={300}
              width={300}
              alt="img"
            />
          </div>
        }
        renderFormElement={
          <div className="max-w-[605px] w-full h-[566px] border-[1px] border-white rounded-[20px] p-8">
            <LetsConnectForm />
          </div>
        }
        headinWidth="max-w-[calc(100%_-_700px)] w-full mb-12"
      />
      <Breadcrumb
        breadcrumbList={[
          { link: "/", label: "Home" },
          { link: "/company", label: "Company" },
          { link: "/contact-us", label: "Contact" },
        ]}
      />
      <CardSection
        headingSty="flex items-end mx-4 gap-[60px]"
        sectionStyle="py-[50px] bg-white"
        descriptionSty="max-w-[686px] text-base font-normal leading-[22px] text-black-33 mb-[52px]"
        renderElement={() => (
          <div className="grid grid-cols-3 gap-5">
            {managementCardData?.map((item, index) => {
              return (
                <div className="col-span-1" key={index}>
                  <Card
                    {...item}
                    headingSty="text-xl font-medium leading-[30px] mb-[14px] text-black-900"
                    cardSty="bg-gray-100 px-5 py-5 rounded-2xl border-[1px] border-gray-400 h-full "
                    cardDataSty="flex gap-6"
                    dataDivSty="max-w-[206px]"
                    titleIconSty="h-[77px] w-[77px] rounded-full bg-yellow-100 flex items-center justify-center mb-8 "
                  />
                </div>
              );
            })}
          </div>
        )}
      />
      <InfoCard
        {...seamlessIntegration}
        sectionStyle="pt-[50px] pb-[100px] px-[42px]  bg-white"
        containtWidth="max-w-[371px]"
        textContainerSty="col-span-5 flex items-center"
        descriptionSty="mb-8 text-base font-normal leading-[25px]"
        imageContainerSty="max-h-[504px] w-full max-w-[624px] rounded-[20px] overflow-hidden mx-auto"
        imageContentSty="col-span-6"
        titleSty="text-[42px] font-medium leading-[52px] tracking-tighter text-black-33 mb-8"
        leadTextSty=""
        renderElement={
          <Button
            data="Get Direction"
            clsStyle="py-2"
            filled
            action={() => {
              router.push("/product/integration");
            }}
          />
        }
      />
      <InfoCard
        title="Frequently Asked Questions"
        image={{
          src: "/faq.png",
          height: 500,
          width: 500,
          alt: "img",
        }}
        sectionStyle="py-[100px] bg-blue-900"
        containerSty="container "
        containtWidth=""
        titleSty="text-white text-[42px] font-medium mb-8 leading-[62px] tracking-tighter"
        descriptionSty="text-white max-w-[542px] mb-8 mr-auto text-base font-normal leading-[25px]"
        imageContainerSty=" w-full max-w-[497px] mx-auto"
        textContainerSty=" col-span-6 order-2 flex items-center"
        imageContentSty=" col-span-5 order-1 flex items-center"
        renderElement={
          <>
            <div className=" grid  max-w-xl mx-auto mt-8">
              {faq.list?.map((item, index) => {
                return (
                  <div className="py-2">
                    <div
                      onClick={() => handleAccordian(index)}
                      className={`${
                        accordianState[index] === true
                          ? ""
                          : "border-0 border-b-[1px] border-white"
                      } text-white font-medium cursor-pointer`}
                    >
                      <div
                        className={`${
                          accordianState[index] === true
                            ? "rounded-t-xl bg-white border-[1px] border-b-0 bg-opacity-10 "
                            : ""
                        } flex justify-between items-center  list-none px-3   py-4 `}
                      >
                        <span>
                          {index + 1}. {item.question}
                        </span>
                        <span className="transition group-open:rotate-180">
                          <svg
                            fill="none"
                            height="24"
                            shape-rendering="geometricPrecision"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            width="24"
                          >
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </div>
                      <p
                        className={`${
                          accordianState[index] === true
                            ? "text-white "
                            : "hidden"
                        } p-5 border-[1px] border-white bg-white bg-opacity-10 rounded-b-xl animate-fadeIn`}
                      >
                        {item.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        }
      />
       <HyperlocalStrategyForm containerSty="container" buttonTitle="Get a  FREE Audit" placeholder="Enter your email" />
    </>
  );
};

export default ContactUs;
