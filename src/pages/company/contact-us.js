import LetsConnectForm from "@/Components/LetsConnectForm";
import Banner from "@/Components/comman/Banner";
import Breadcrumb from "@/Components/comman/Breadcrumb";
import Button from "@/Components/comman/Button";
import Card from "@/Components/comman/Card";
import InfoCard from "@/Components/comman/Card/InfoCard";
import HyperlocalStrategyForm from "@/Components/comman/Form/hyperlocalStrategyForm";
import DownArrow from "@/assets/DownArrow";
import Image from "next/image";
import React, { useState } from "react";
import {
  bannerDiscoverPower,
  frequentlyAsked,
  information,
  seamlessIntegration,
} from "@/static/json/contactUs";

const ContactUs = () => {
  const [accordianState, setAccordianState] = useState({ 0: false });

  let handleAccordian = (index) => {
    if (accordianState?.[index]) {
      setAccordianState({ [index]: false });
    } else {
      setAccordianState({ [index]: true });
    }
  };
  return (
    <>
      <Banner
        {...bannerDiscoverPower}
        sectionSty="py-[50px] lg:pb-8 lg:pt-[50px]"
        containerStyle="container justify-between max-lg:flex-wrap h-full lg:gap-[80px]"
        descriptionSty="lg:mr-16 mb-8"
        imgContainerSty="max-w-[643px] max-h-[419px] w-full"
        titleSty="text-[32px] md:text-[36px] lg:text-[54px] font-normal leading-[140%] mb-4 tracking-tighter"
        imgGridSty="w-full lg:w-1/2"
        renderElement={
          <>
            <div className="max-lg:hidden lg:-mt-[200px] lg:-mr-[80px]">
              <Image className="w-full object-cover" {...bannerDiscoverPower?.renderImage} />
            </div>
            <div className="lg:hidden -mb-[100px]">
              <Image className="w-full max-w-[90%]" {...bannerDiscoverPower?.renderMobileImage} />
            </div>
          </>
        }
        renderFormElement={
          <div className="w-full h-[566px] border-[1px] border-white rounded-[20px] p-8 bg-blue-900">
            <LetsConnectForm />
          </div>
        }
        headinWidth="lg:w-1/2 mb-12"
      />
      <Breadcrumb
        breadcrumbList={[
          { link: "/", label: "Home" },
          { link: "/company", label: "Company" },
          { link: "/contact-us", label: "Contact" },
        ]}
      />
      <section className="container">
        <div className="grid grid-cols-3 gap-5 py-[50px] bg-white">
          {information?.map((item, index) => {
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
      </section>

      <InfoCard
        {...seamlessIntegration}
        sectionStyle="pt-[50px] pb-[100px] px-[42px]  bg-white"
        containtWidth="max-w-[371px]"
        textContainerSty="col-span-5 flex items-center"
        descriptionSty="mb-8 text-base font-normal leading-[25px]"
        imageContainerSty="max-h-[504px] w-full max-w-[624px] rounded-[20px] overflow-hidden mx-auto"
        imageContentSty="col-span-6"
        titleSty="text-[42px] font-medium leading-[52px] tracking-tighter text-black-33 mb-8"
        leadTextSty="mb-8"
        renderElement={
          <Button
            data="Get Direction"
            clsStyle="py-2 px-8"
            filled
            action={() => {
              window?.open(
                "https://www.google.com/maps/dir//sekel+tech+pune/@18.561688,73.8602503,14z/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x3bc2c1fb070ebbd9:0x25d044c2fb6f27f9!3e0",
                "_blank",
                "noopener noreferrer"
              );
            }}
          />
        }
      />

      <InfoCard
        {...frequentlyAsked?.sectionData}
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
              {frequentlyAsked?.faqList?.map((item, index) => {
                return (
                  <div className="py-2">
                    <div
                      onClick={() => handleAccordian(index)}
                      className={`${
                        accordianState?.[index] === true
                          ? ""
                          : "border-0 border-b-[1px] border-white"
                      } text-white font-medium cursor-pointer`}
                    >
                      <div
                        className={`${
                          accordianState?.[index] === true
                            ? "rounded-t-xl bg-white border-[1px] border-b-0 bg-opacity-10 "
                            : ""
                        } flex justify-between items-center  list-none px-3   py-4 `}
                      >
                        <span>
                          {index + 1}. {item.question}
                        </span>
                        <span className="transition group-open:rotate-180">
                          <DownArrow />
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
      <HyperlocalStrategyForm
        containerSty="container"
        buttonTitle="Get a  FREE Audit"
        placeholder="Enter your email"
      />
    </>
  );
};

export default ContactUs;
