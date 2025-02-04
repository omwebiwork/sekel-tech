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
import Link from "next/link";
import React, { useState, useCallback } from "react";

const Discovery = () => {
  const [knowMore, setKnowMore] = useState(false);
  let cardData = [
    {
      title: "Quality Content Creation",
      description:
        "Investing in high-quality, relevant content is paramount. It should provide real value to our audience, addressing their questions and pain points.",
      image: {
        src: "/content-creation.png",
        height: "500",
        width: "500",
      },
      cardImgSty: "max-w-[428px] w-full mx-auto -mb-5 -mr-5",

      cardSty: "flex gap-4 rounded-xl p-5 pt-[52px] ",
      cardDataSty: "w-1/2",
    },
    {
      title: "Optimisation for Search Engines",
      description:
        "Optimizing content for search engines with keywords, meta tags, and on-page techniques is essential. ",
      image: {
        src: "/search-engines.png",
        height: "500",
        width: "500",
      },
      cardImgSty: "max-w-[300px] max-h-[131px] w-full mx-auto",

      cardSty: " rounded-xl p-5 pt-[52px] bg-yellow-100",
      cardDataSty: "w-full",
    },
    {
      title: "Consistent Engagement",
      description:
        "Maintaining consistent engagement on social media, forums, and blogs strengthens our brand's authority and presence.",
      image: {
        src: "/consistance.png",
        height: "500",
        width: "500",
      },
      cardImgSty: "max-w-[327px] max-h-[86px] w-full mx-auto",

      cardSty: "rounded-xl p-5 pt-[52px] bg-yellow-100",
      cardDataSty: "w-full",
    },
    {
      title: "In-depth Analytics and Iteration",
      description:
        "Using analytics tools to track user behavior helps us understand what works and what doesn't. This enables us to refine our content strategy for maximum impact. ",
      image: {
        src: "/analytics.png",
        height: "500",
        width: "500",
      },

      cardImgSty: "max-w-[332px] max-h-[276px] w-full mx-auto",
      cardSty: " flex gap-2 rounded-xl p-5 pt-[52px]",
      cardDataSty: "w-1/2",
    },
  ];

  let discoveryFeature = [
    {
      title: "Listing Management",
      description:
        "Ensure accurate and consistent business information across online platforms.",
      image: {
        src: "/listing-management.png",
        height: "500",
        width: "500",
      },
      cardImgSty: "max-w-[279px] w-full mx-auto",
    },
    {
      title: "Store Locator",
      description: "Help customers find your physical locations online.",
      image: {
        src: "/store-locator.png",
        height: "500",
        width: "500",
      },
      cardImgSty: "max-w-[300px] max-h-[183px] w-full mx-auto",
    },
    {
      title: "Store Microsites",
      description:
        "Create mini websites focused on specific stores to promote unique features & offerings.",
      image: {
        src: "/store-microsites.png",
        height: "500",
        width: "500",
      },
      cardImgSty: "max-w-[340px] max-h-[169px] w-full mx-auto",
    },
    {
      title: "Product Catalogue",
      description: "Showcase your brand's products and their details.",
      image: {
        src: "/product-catalogue.png",
        height: "500",
        width: "500",
      },
      cardImgSty: "max-w-[230px] max-h-[202px] w-full mx-auto",
    },
    {
      title: "Review Management",
      description:
        "Sekel Paves the way for digital success, aiding business’s growth, reputation, and customer engagement.",
      image: {
        src: "/review-management.png",
        height: "500",
        width: "500",
      },
      cardImgSty: " max-w-[304px] max-h-[156px] w-full mx-auto",
    },
    {
      title: "Content Optimisation",
      description: "Share your brand's stories, insights, and updates.",
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
    title: "Discovery Feature",
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
    title: "Discovery Platform",
    description: `Sekel Tech’s organic and paid discovery is about forming genuine connections with your audience online. It amplifies return on advertising spends ( ROAS ) and brings lasting benefits, building trust and authority in your digital space.
    `,
    subTitle: "Building Genuine Digital Connections",
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
        headinWidth="max-w-[500px] w-full mb-12"
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

export default Discovery;
