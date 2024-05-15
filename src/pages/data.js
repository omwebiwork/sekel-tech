import Banner from "@/Components/comman/Banner";
import Card from "@/Components/comman/Card";
import CardSection from "@/Components/comman/Card/CardSection";
import InfoCard from "@/Components/comman/Card/InfoCard";
import GetStartForm from "@/Components/comman/Form/StartForm";
import HyperlocalStrategyForm from "@/Components/comman/Form/hyperlocalStrategyForm";
import DownArrow from "@/assets/DownArrow";
import Image from "next/image";
import React, { useState, useCallback } from "react";

const Data = () => {
  const [knowMore, setKnowMore] = useState(false);
  let cardData = [
    {
      title: "Data Collection Process",
      description:
        "Data is collected from a variety of sources, including hyperlocal data sources, physical sales channels, and other CDP routine data collection processes.",
      image: {
        src: "/data-collection.png",
        height: "500",
        width: "500",
      },
      cardImgSty: "max-w-[408px] max-h-[240px] w-full mx-auto",

      cardSty: "flex gap-4 rounded-xl p-5 pt-[52px] relative",
      cardDataSty: "w-1/2",
    },
    {
      title: "Sekel Data Cleaning Process",
      description:
        "Data is cleaned and prepared to ensure that it is consistent and accurate. Our Algorithm updates all the data of repeat customers by engaging across touchpoints in real time. ",
      cardImgSty: "max-w-[300px] max-h-[131px] w-full mx-auto",

      cardSty: " rounded-xl p-5 pt-[52px] bg-yellow-100 relative",
      cardDataSty: "w-full",
    },
    {
      title: "Data Integration",
      description:
        "Data from different sources is integrated into a single view of the customer.",
      image: {
        src: "/Integration.png",
        height: "500",
        width: "500",
      },
      cardImgSty: "max-w-[291px] max-h-[178px] w-full mx-auto",

      cardSty: "rounded-xl p-5 pt-[52px] bg-yellow-100 relative",
      cardDataSty: "w-full",
    },
    {
      title: "Data Collection Process",
      description:
        "Data is collected from a variety of sources, including hyperlocal data sources, physical sales channels, and other CDP routine data collection processes. ",
      image: {
        src: "/data-process.png",
        height: "500",
        width: "500",
      },

      cardImgSty: "max-w-[396px] max-h-[241px] w-full mx-auto mt-14",
      cardSty: " flex gap-2 rounded-xl p-5 pt-[52px] relative",
      cardDataSty: "w-1/2",
    },
  ];

  let discoveryFeature = [
    {
      title: "Data Integration",
      description:
        "Sekel Tech seamlessly integrates with various data systems, fostering a streamlined, collaborative environment",
      image: {
        src: "/listing-management.png",
        height: "500",
        width: "500",
      },
      cardImgSty: "max-w-[279px] w-full mx-auto",
    },
    {
      title: "Automation",
      description:
        "Using technology to automatically process or manage data without manual intervention.",
      image: {
        src: "/store-locator.png",
        height: "500",
        width: "500",
      },
      cardImgSty: "max-w-[300px] max-h-[183px] w-full mx-auto",
    },
    {
      title: "Data Activation",
      description:
        "Using collected data to drive actions or decisions, in marketing or business operations.",
      image: {
        src: "/store-microsites.png",
        height: "500",
        width: "500",
      },
      cardImgSty: "max-w-[340px] max-h-[169px] w-full mx-auto",
    },
    {
      title: "Data Role Based Access",
      description:
        "Granting permissions to data and systems based on an individual's job role or responsibilities.",
      image: {
        src: "/product-catalogue.png",
        height: "500",
        width: "500",
      },
      cardImgSty: "max-w-[230px] max-h-[202px] w-full mx-auto",
    },
    {
      title: "Cloud-Based Infrastructure",
      description:
        "Using online servers and systems for data storage and operations, instead of on-site physical hardware.",
      image: {
        src: "/review-management.png",
        height: "500",
        width: "500",
      },
      cardImgSty: " max-w-[304px] max-h-[156px] w-full mx-auto",
    },
    {
      title: "Data Activation",
      description:
        "Using collected data to drive actions or decisions, in marketing or business operations.",
      image: {
        src: "/content-optimisation.png",
        height: "500",
        width: "500",
      },
      cardImgSty: " max-w-[312px] max-h-[186px] w-full mx-auto",
    },
  ];
  let discoveryObj = {
    title: "Investment Focus for Long-Term Effect & Domain Authority",
    description: null,
  };

  let discoveryFeatureObj = {
    title: "Data Platform Features",
    description: null,
  };

  let systematicCardData = [
    {
      title: "Data Collection and Integration",
      description:
        "Sekel collects data from multiple sources. Sekel CDP also has the capability to integrate data seamlessly, ensuring a holistic view of each customer.",
      titleIcon: {
        src: "/collection-integration.svg",
        height: 32,
        width: 32,
        alt: "Authenticity",
      },
    },
    {
      title: "Compliance and Security",
      description:
        "Sekel CDP ensures compliance with regulations through automated data protection measures and robust security.",
      titleIcon: {
        src: "/compliance-security.svg",
        height: 32,
        width: 32,
        alt: "img",
      },
    },
    {
      title: "Segmentation and Audience Building",
      description:
        "Sekel allows you to create detailed customer segments based on various attributes and behaviours.",
      titleIcon: {
        src: "/audience-building.svg",
        height: 32,
        width: 32,
        alt: "img",
      },
    },
    {
      title: "Analytics and Reporting",
      description:
        "Robust analytics tools for gaining insights into customer behaviour, campaign effectiveness, and ROI. These insights are invaluable for refining marketing strategies",
      titleIcon: {
        src: "/analytics-reporting.svg",
        height: 32,
        width: 32,
        alt: "img",
      },
    },
    {
      title: "Data Storage and Organization",
      description:
        "Sekel efficiently manages structured and unstructured data, organising it into complete customer profiles.",
      titleIcon: {
        src: "/storage-organization.svg",
        height: 32,
        width: 32,
        alt: "img",
      },
    },
    {
      title: "Scalability and Flexibility",
      description:
        "Sekel CDP adapts as your business grows, offering dynamic scalability.",
      titleIcon: {
        src: "/Scalability-flexibility.svg",
        height: 32,
        width: 32,
        alt: "img",
      },
    },
    {
      title: "Real-Time Data Access and Updates",
      description:
        "Sekel enables real-time access to customer data for timely responses to interactions.",
      titleIcon: {
        src: "/real-time-access.svg",
        height: 32,
        width: 32,
        alt: "img",
      },
    },
    {
      title: "Cost-effectiveness and ROI",
      description:
        "Sekel delivers cost-effective solutions with innovative distribution, adaptability, and exceptional value, resulting in a strong return on investment.",
      titleIcon: {
        src: "/effectiveness-roi.svg",
        height: 32,
        width: 32,
        alt: "img",
      },
    },
  ];

  const handleKnowMore = useCallback((index) => {
    if (knowMore[index]) {
      setKnowMore({ [index]: false });
    } else {
      setKnowMore({ [index]: true });
    }
  });

  const renderDiscoveryFeature = () => {
    return (
      <div>
        <div className="grid grid-cols-3 gap-5">
          {discoveryFeature?.map((item, index) => {
            return (
              <div
                className={` "col-span-1"
                `}
              >
                <Card
                  key={index}
                  {...item}
                  actionType="Know more"
                  action={() => handleKnowMore(index)}
                  learnMore={knowMore[index]}
                  buttonSty="flex gap-1 items-center text-base font-medium text-blue-900"
                  buttonIcon={
                    <DownArrow className="w-2.5 h-2.5 ml-2.5 -rotate-90" />
                  }
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
          {cardData?.map((item, index) => {
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
                    "mb-8 tracking-tighter leading-[30px] text-[28px] font-medium text-black-33"
                  }
                  cardCountNo={index < 9 ? "0" + (index + 1) : index + 1}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  let bannerObj = {
    title: "Unified Data Platform",
    description: `Unlock the Power of Your Retail Business with Our Unified Data Platform. Seamlessly access, consolidate, and deploy data from your existing systems to supercharge discovery and engagement. Watch your content freshness and user experience soar, driving remarkable conversions and increased sales
    `,
    subTitle: "Empowering Your Insights with Data Fusion",
  };

  return (
    <div>
      <Banner
        {...bannerObj}
        image={{
          src: "/digital-connections.png",
          alt: "img",
          height: 419,
          width: 643,
        }}
        sectionSty="pb-[100px] pt-20"
        containerStyle="container justify-between"
        descriptionSty="mr-16"
        imgContainerSty="max-w-[643px] max-h-[419px] w-full"
        renderElement={<GetStartForm buttonTitle="Get started" />}
        headinWidth="max-w-[572px] w-full mb-12"
      />
      <CardSection
        {...discoveryFeatureObj}
        renderElement={renderDiscoveryFeature}
      />
      <section className="bg-blue-900 py-20">
        <div className="container">
          <div className=" mb-[52px] ">
            <h3 className="text-[42px] font-medium mb-5 leading-[52px] tracking-tighter text-white">
              Core Functions of Sekel CDP
            </h3>
            <p className="text-base font-normal leading-[22px] max-w-[722px] text-white">
              Systematic gathering of information from various sources, ensuring
              accuracy and relevance for analysis and decision-making.
            </p>
          </div>
          <div className="flex items-center">
            <div className="w-[30%] h-full mt-auto mb-5">
              <ul className="pr-20 ">
                <li className="flex items-center justify-end gap-4 mb-9 text-xl font-medium text-white relative after:content[''] after:absolute after:left-[312px] after:w-[50px] after:z-10 after:border-b-[1px] after:border-blue-100">
                  Marketing
                  <Image
                    className=" w-16 "
                    src={"/marketing-li.svg"}
                    height={64}
                    width={64}
                    alt="img"
                  />
                </li>
                <li className="flex items-center justify-end gap-4 mb-9 text-xl font-medium text-white relative after:content[''] after:absolute  after:left-[312px] after:w-[120px] after:z-10 after:border-b-[1px] after:border-blue-100">
                  Sales
                  <Image
                    className=" w-16 "
                    src={"/sales-li.svg"}
                    height={64}
                    width={64}
                    alt="img"
                  />
                </li>
                <li className="flex items-center justify-end gap-4 text-xl font-medium text-white relative after:content[''] after:absolute  after:left-[312px] after:w-[180px] after:z-10 after:border-b-[1px] after:border-blue-100">
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
            <div className="w-[40%] h-full">
              <div className="max-w-[591px] w-full mx-auto">
                <Image
                  className="h-full w-full object-cover"
                  src={"/core-function.png"}
                  height={562}
                  width={591}
                  alt="img"
                />
              </div>
            </div>
            <div className="w-[30%] h-full mb-auto mt-5">
              <ul className="pl-20 ">
                <li className="flex items-center gap-4 mb-9 text-xl font-medium text-white relative after:content[''] after:absolute after:right-[312px] after:w-[180px] after:z-10 after:border-b-[1px] after:border-blue-100">
                  <Image
                    className=" w-16 "
                    src={"/retargeting-tools.svg"}
                    height={64}
                    width={64}
                    alt="img"
                  />
                  Retargeting Tools
                </li>
                <li className="flex items-center gap-4 mb-9 text-xl font-medium text-white relative after:content[''] after:absolute after:right-[312px] after:w-[120px] after:z-10 after:border-b-[1px] after:border-blue-100">
                  <Image
                    className=" w-16 "
                    src={"/automation-tools.svg"}
                    height={64}
                    width={64}
                    alt="img"
                  />
                  Automation Tools
                </li>
                <li className="flex items-center gap-4 text-xl font-medium text-white relative after:content[''] after:absolute after:right-[312px] after:w-[50px] after:z-10 after:border-b-[1px] after:border-blue-100">
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
      <CardSection
        title="Systematic gathering of information from various sources, ensuring accuracy and relevance for analysis and decision-making."
        sectionStyle="py-[100px] bg-blue-200 "
        headingSty=""
        titleSty="text-[28px] font-medium mb-20 leading-[39px] tracking-tighter text-black-33"
        renderElement={() => (
          <div className="grid grid-cols-4">
            {systematicCardData?.map((item, index) => {
              return (
                <div className="col-span-1" key={index}>
                  <Card
                    titleIcon={item.titleIcon}
                    titleIconSty="h-[60px] w-[60px] rounded-full bg-yellow-100 flex items-center justify-center mb-4"
                    headingSty="text-[28px] font-medium leading-[30px] mb-4 text-black-900"
                    cardSty="bg-blue-200 px-6 py-6 rounded-2xl border-[1px] border-white h-full"
                    title={item?.title}
                    description={item?.description}
                    descriptionSty="text-base font-normal leading-[22px] text-black-33"
                  />
                </div>
              );
            })}
          </div>
        )}
      />

      <CardSection
        headingSty="max-w-[803px]"
        descriptionSty=""
        {...discoveryObj}
        renderElement={renderCard}
      />

      <InfoCard
        title="Sekel CDP helps brands overcome the gaps in digital to physical customer journey mapping"
        description="Digital-to-physical customer journey mapping is essential for businesses aiming to elevate the customer experience. Sekel’s CDP delivers the crucial insights and tools that brands require to enhance interactions across all channels."
        sectionStyle="bg-blue-900 pt-[100px]"
        titleSty="text-[28px] font-medium leading-[39px] tracking-tighter text-white mb-8"
        descriptionSty="text-yellow-900 text-base font-normal leading-[25px]"
        // containerSty = 'container px-[100px]'
        image={{
          src: "/journey.png",
          height: 448,
          width: 692,
          alt: "img",
        }}
      />

      <HyperlocalStrategyForm containerSty="container" />
    </div>
  );
};

export default Data;
