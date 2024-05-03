import Banner from "@/Components/comman/Banner/Index";
import Button from "@/Components/comman/ButtonComponent/Index";
import Card from "@/Components/comman/Card";
import CardSection from "@/Components/comman/Card/CardSection";
import ImageCard from "@/Components/comman/Card/ImageCard";
import InfoCard from "@/Components/comman/Card/InfoCard";
import SliderSection from "@/Components/comman/Card/SliderSection";
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
    //   image: {
    //     src: "/search-engines.png",
    //     height: "500",
    //     width: "500",
    //   },
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

  let card = [
    {
      title: "Authenticity and Trust",
      description:
        "Organic discovery builds trust by presenting content naturally, without pushy ads, making it more genuine and reliable",
    },
    {
      title: "Authenticity and Trust",
      description:
        "Organic discovery builds trust by presenting content naturally, without pushy ads, making it more genuine and reliable",
    },
    {
      title: "Authenticity and Trust",
      description:
        "Organic discovery builds trust by presenting content naturally, without pushy ads, making it more genuine and reliable",
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
                  cardData={item}
                  cardImgSty={item.cardImgSty}
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
                  cardData={{
                    ...item,
                    image: {
                      ...item.image,
                      className: "h-full w-full object-cover object-center",
                    },
                  }}
                  headingSty={"mb-8 tracking-tighter"}
                  cardCountNo={index < 9 ? "0" + (index+1) : index+1}
                  cardSty={item.cardSty}
                  cardDataSty={item.cardDataSty}
                  cardImgSty={item.cardImgSty}
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
      <CardSection
        title="Advantages of Sekel Tech Hyperlocal Dynamic Engagement Commerce"
        description="Unlocking the Power of Organic Discovery"
        sectionStyle="py-[100px] bg-blue-200 "
        headingSty="max-w-[803px] mx-auto text-center"
        renderElement={() => (
          <div className="grid grid-cols-4 ">
            {card?.map((item, index) => {
              return (
                <div className="col-span-1" key={index}>
                  <div className="px-6 py-8 rounded-2xl border-[1px] border-white h-full">
                    <div className="h-[60px] w-[60px] rounded-full bg-yellow-100 flex items-center justify-center mb-5 ">
                      <Image
                        src={"/multi-location.png"}
                        height={32}
                        width={32}
                        alt="img"
                      />
                    </div>
                    <h3 className="text-xl font-medium leading-[30px] mb-8">
                      {item.title}
                    </h3>
                    <p className="text-base text-black-33 font-normal leading-[25px] mb-8">
                      {item.description}
                    </p>
                  </div>
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

      <HyperlocalStrategyForm containerSty="container" />
    </div>
  );
};

export default Data;
