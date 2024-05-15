import Banner from "@/Components/comman/Banner";
import Breadcrumb from "@/Components/comman/Breadcrumb";
import Button from "@/Components/comman/Button";
import Card from "@/Components/comman/Card";
import CardSection from "@/Components/comman/Card/CardSection";
import ImageCard from "@/Components/comman/Card/ImageCard";
import InfoCard from "@/Components/comman/Card/InfoCard";
import SliderSection from "@/Components/comman/Card/SliderSection";
import HyperlocalStrategyForm from "@/Components/comman/Form/hyperlocalStrategyForm";
import Image from "next/image";
import React from "react";

const SellrApp = () => {
  let cardData = [
    {
      title: "Instant Order Notifications",
      description: "Receive instant notifications for every order.",
      image: {
        src: "/order-notification.png",
        height: "500",
        width: "500",
        className: " max-w-[313px] w-full mx-auto",
      },
    },
    {
      title: "Automated Order Processing",
      description:
        "Manage leads with ease, interact directly with  customers through simple clicks. ",
      image: {
        src: "/order-processing.png",
        height: "500",
        width: "500",
        className: " max-w-[334px] w-full mx-auto",
      },
    },
    {
      title: "Instant Order Notifications",
      description: "Receive instant notifications for every order. ",
      image: {
        src: "/system.png",
        height: "500",
        width: "500",
        className: " max-w-[278px] w-full mx-auto",
      },
    },
    {
      title: "Lead Management Made Easy",
      description:
        "Manage leads with ease, interact directly with  customers through simple clicks. ",
      image: {
        src: "/lead-management.png",
        height: "500",
        width: "500",
        className: " max-w-[304px] w-full mx-auto",
      },
    },
    {
      title: "Streamlined Order Tracking",
      description:
        "Automate order tracking, eliminating manual processes  and ensuring accuracy. ",
      image: {
        src: "/order-tracking.png",
        height: "500",
        width: "500",
        className: " max-w-[235px] w-full mx-auto",
      },
    },
  ];
  let discoveryObj = {
    title: "Dealer Success with SellrApp: Sell More, Sell Smarter!",
    description:
      " Simplify lead management, enhance your store's visibility, and gain real-time insights into your  store performance",
  };
  let list = [
    { title: `Tailor our system to suit your dealership's unique needs.` },
    {
      title: `Seamlessly integrate Sekel's DMS and SellrApp for streamlined operations.`,
    },
    { title: `Stay ahead with evolving, industry-leading technology.` },
    {
      title: `Streamline, minimize errors, and optimize resource use for peak efficiency`,
    },
  ];
  let beyondSliderData = [
    {
      image: {
        src: "/beyond-1.png",
        height: 304,
        width: 348,
        alt: "img",
      },
    },
    {
      image: {
        src: "/beyond-2.png",
        height: 500,
        width: 348,
        alt: "img",
      },
    },
    {
      image: {
        src: "/beyond-3.png",
        height: 304,
        width: 348,
        alt: "img",
      },
    },
    {
      image: {
        src: "/beyond-2.png",
        height: 500,
        width: 348,
        alt: "img",
      },
    },
  ];
  let managementCardData = [
    {
      title: "Multi-Location Management",
      description: "Effortlessly manage all your dealers and sales partners.",
      titleIcon: {
        src: "/multi-location.png",
        height: 32,
        width: 32,
        alt: "img",
      },
    },
    {
      title: "Product and Catalog Management",
      description:
        "Update all products in real-time, giving brands comprehensive control.",
      titleIcon: {
        src: "/catalog.png",
        height: 32,
        width: 32,
        alt: "img",
      },
    },
    {
      title: "Lead Management",
      description:
        "Streamline lead management with a centralized platform for efficiency.",
      titleIcon: {
        src: "/management.png",
        height: 32,
        width: 32,
        alt: "img",
      },
    },
    {
      title: "Real-Time Data Analytics",
      description:
        "Gain instant insights, empower strategic decisions with real-time analytics",
      titleIcon: {
        src: "/data-analytics.png",
        height: 32,
        width: 32,
        alt: "img",
      },
    },
  ];

  const renderCard = () => {
    return (
      <div>
        <div className="grid grid-cols-3 gap-5">
          {cardData?.map((item, index) => {
            return (
              <div className={`${index === 1 ? "col-span-2" : "col-span-1"}`}>
                <Card
                  key={index}
                  {...item}
                  headingSty={"mb-8 tracking-tighter leading-[30px] text-[28px] text-black-33 font-medium"}
                  cardSty={`${
                    index === 1 ? "flex gap-10" : ""
                  } rounded-xl p-5 pt-[52px] ${
                    index === 0 || index === 3 ? "bg-yellow-100" : ""
                  }  h-full bg-gray-100`}
                  cardDataSty={`${index === 1 ? "w-1/2" : ""}`}
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
        title="One App, All Things Retail"
        description={`From onboarding all your dealers and sales partners to automating retail operations and taking  control of your locations, products, and leads – all at your fingertips.`}
        image={{
          src: "/one-app-img.png",
          alt: "img",
          height: 534,
          width: 678,
          className: "max-w-[678px] w-full",
        }}
        containerStyle="container justify-between"
        sectionSty={"pb-[100px]"}
        renderElement={
          <div className="flex gap-8">
            <button className="h-[57px] w-[188px] rounded-lg overflow-hidden">
              <Image
                src={"/google-store.png"}
                height={57}
                width={188}
                alt="btn"
              />
            </button>
            <button className="h-[57px] w-[188px] rounded-lg overflow-hidden">
              <Image src={"/app-store.png"} height={57} width={188} alt="btn" />
            </button>
          </div>
        }
        headinWidth="max-w-[443px] mb-12"
        descriptionSty="mr-[67px] leading-[25px] mt-8 text-yellow-900 mb-8"
      />
       <Breadcrumb
        breadcrumbList={[
          { link: "/", label: "Home" },
          { link: "/product", label: "Product" },
          { link: "/product/SellrApp", label: "SellrApp" },
        ]}
      />
      <CardSection
        headingSty="flex items-end mx-4 gap-[60px]"
        title={"Dominate Your Market With SellrApp"}
        description={`From overseeing multiple locations to handling your catalog, products, leads, and real-time data analytics – all in one powerful app`}
        sectionStyle="py-[100px] bg-blue-200"
        descriptionSty="max-w-[686px] text-base font-normal leading-[22px] text-black-33 mb-[52px]"
        renderElement={() => (
          <div className="grid grid-cols-4">
            {managementCardData?.map((item, index) => {
              return (
                <div className="col-span-1" key={index}>
                  <Card
                    {...item}
                    headingSty="text-xl font-medium leading-[30px] mb-8 text-black-900"
                    cardSty="bg-blue-200 px-5 py-8 rounded-2xl border-[1px] border-white h-full"
                  />
                </div>
              );
            })}
          </div>
        )}
      />
      <CardSection
        {...discoveryObj}
        renderElement={renderCard}
        descriptionSty="w-full text-base font-normal leading-[22px] text-black-33"
      />
      <section className="bg-blue-900 py-20">
        <div className="container">
          <div className=" mb-[52px] ">
            <h3 className="text-[42px] font-medium mb-5 leading-[52px] tracking-tighter text-white">
              Why Choose SellrApp?
            </h3>
            <p className="text-base font-normal leading-[22px] max-w-[722px] text-white">
              {" "}
              Elevate your business effortlessly with SellrApp. Lead management,
              discovery, analytics, and real-time insights ensure seamless
              growth.
            </p>
          </div>
          <div className="flex items-center">
            <div className="w-1/3">
              <ul className="pr-24">
                <li className="flex items-center justify-end gap-4 mb-9 text-xl font-medium text-white relative after:content[''] after:absolute after:-right-[130px] after:w-[115px] after:z-10 after:border-b-[1px] after:border-blue-100">
                  Marketing
                  <Image
                    className=" w-16 "
                    src={"/marketing-li.svg"}
                    height={64}
                    width={64}
                    alt="img"
                  />
                </li>
                <li className="flex items-center justify-end gap-4 mb-9 text-xl font-medium text-white relative after:content[''] after:absolute after:-right-[130px] after:w-[115px] after:z-10 after:border-b-[1px] after:border-blue-100">
                  Sales
                  <Image
                    className=" w-16 "
                    src={"/sales-li.svg"}
                    height={64}
                    width={64}
                    alt="img"
                  />
                </li>
                <li className="flex items-center justify-end gap-4 text-xl font-medium text-white relative after:content[''] after:absolute after:-right-[130px] after:w-[115px] after:z-10 after:border-b-[1px] after:border-blue-100">
                  Service
                  <Image
                    className=" w-16 "
                    src={"/service-li.svg"}
                    height={64}
                    width={64}
                    alt="img"
                  />
                </li>
              </ul>
            </div>
            <div className="w-1/3">
              <div className="max-w-[359px] mx-auto">
                <Image
                  className="h-full w-full object-cover"
                  src={"/seller-app.png"}
                  height={500}
                  width={500}
                  alt="img"
                />
              </div>
            </div>
            <div className="w-1/3">
              <ul className="pl-24">
                <li className="flex items-center gap-4 mb-9 text-xl font-medium text-white relative after:content[''] after:absolute after:-left-[130px] after:w-[115px] after:z-10 after:border-b-[1px] after:border-blue-100">
                  <Image
                    className=" w-16 "
                    src={"/retargeting-tools.svg"}
                    height={64}
                    width={64}
                    alt="img"
                  />
                  Retargeting Tools
                </li>
                <li className="flex items-center gap-4 mb-9 text-xl font-medium text-white relative after:content[''] after:absolute after:-left-[130px] after:w-[115px] after:z-10 after:border-b-[1px] after:border-blue-100">
                  <Image
                    className=" w-16 "
                    src={"/automation-tools.svg"}
                    height={64}
                    width={64}
                    alt="img"
                  />
                  Automation Tools
                </li>
                <li className="flex items-center gap-4 text-xl font-medium text-white relative after:content[''] after:absolute after:-left-[130px] after:w-[115px] after:z-10 after:border-b-[1px] after:border-blue-100">
                  <Image
                    className=" w-16 "
                    src={"/analytics-tools.svg"}
                    height={64}
                    width={64}
                    alt="img"
                  />
                  Analytics Tools
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <InfoCard
        title="Sekel's Dealer Management System"
        description="Seamlessly Integrated with SellrApp, Increases profitability of dealers"
        image={{
          src: "/management-system.png",
          height: 536,
          width: 673,
          alt: "management-system",
        }}
        sectionStyle="py-[52px] px-[42px] rounded-[24px] bg-gray-100"
        containtWidth="max-w-[490px]"
        titleSty="text-[42px] font-medium leading-[52px] tracking-tighter text-black-33 mb-8"
        descriptionSty="mb-8 text-base font-normal leading-[25px]"
        imageContainerSty="max-h-[535px] max-w-[673px] mx-auto"
        imageContentSty="col-span-7 h-full flex items-center"
        textContainerSty="col-span-4 h-full "
        renderElement={
          <>
            <ul className="list-disc pl-6 mb-8">
              {list?.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="text-xl font-medium text-black-33 leading-[25px] mb-6"
                  >
                    {item.title}
                  </li>
                );
              })}
            </ul>
            <Button filled data={"Book a Demo"} />
          </>
        }
      />
      <section className="py-[100]">
        <div className=""></div>
      </section>
      <SliderSection
        title="Going Beyond - Growing Bigger"
        description="The power of lead management system at scale - all in one app"
        textContentSty="col-span-3"
        discriptionSty="w-full"
        cardContentSty="col-span-7 pl-8"
        renderElement={beyondSliderData?.map((item, index) => {
          return (
            <ImageCard
              {...item}
              key={index}
              imgContainerSty="w-[252px] min-w-[252px]"
              containerSty=" h-auto w-[252px] min-w-[252px]"
            />
          );
        })}
      />
      <HyperlocalStrategyForm />
    </div>
  );
};

export default SellrApp;
