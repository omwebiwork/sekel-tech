import Banner from "@/Components/comman/Banner";
import Breadcrumb from "@/Components/comman/Breadcrumb";
import Card from "@/Components/comman/Card";
import CardSection from "@/Components/comman/Card/CardSection";
import GetStartForm from "@/Components/comman/Form/StartForm";
import HyperlocalStrategyForm from "@/Components/comman/Form/hyperlocalStrategyForm";
import DownArrow from "@/assets/DownArrow";
import Image from "next/image";
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
      description: "Help customers find all your physical locations online.",
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
        "Have mini website Automated Local SEO for all your stores/dealers/outlets in minutes",
      image: {
        src: "/store-microsites.png",
        height: "500",
        width: "500",
      },
      cardImgSty: "max-w-[340px] max-h-[169px] w-full mx-auto",
    },
    {
      title: "Product Catalogue",
      description:
        "Showcase your brand's products and their details. Bulk Manage with Drag & Drop experience.",
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
        "Consolidate reviews from Google, Meta platforms. Automate reviews management for all your physical locations.",
      image: {
        src: "/review-management.png",
        height: "500",
        width: "500",
      },
      cardImgSty: " max-w-[304px] max-h-[156px] w-full mx-auto",
    },
    {
      title: "Content Optimisation",
      description:
        "Create, Publish & Optimize content at scale across all your locations.",
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

  let advantagesCardData = [
    {
      title: "Authenticity and Trust",
      description:
        "Organic discovery builds trust by presenting content naturally, without pushy ads, making it more genuine and reliable",
      titleIcon: {
        src: "/authenticity.svg",
        height: 32,
        width: 32,
        alt: "Authenticity",
      },
    },
    {
      title: "Higher Engagement and Retention",
      description:
        "Organic traffic, with increased engagement and longer on-site time, indicates genuine interest, potentially leading to higher conversions.",
      titleIcon: {
        src: "/higher-engagement.svg",
        height: 32,
        width: 32,
        alt: "img",
      },
    },
    {
      title: "Cost-Efficiency in the Long Run",
      description:
        "Unlike paid ads, which offer quick results but demand ongoing spending, organic content sustains user engagement over time as a cost-effective, lasting solution.",
      titleIcon: {
        src: "/cost-efficiency.svg",
        height: 32,
        width: 32,
        alt: "img",
      },
    },
    {
      title: "Building Brand Authority",
      description:
        "Through organic discovery, we establish ourselves as an authority in our field, with consistent, valuable content enhancing our credibility and expertise in the eyes of our audience",
      titleIcon: {
        src: "/building-brand.svg",
        height: 32,
        width: 32,
        alt: "img",
      },
    },
    {
      title: "Better SEO Rankings and Visibility",
      description:
        "Well-optimized organic content attains higher positions in search results, resulting in increased visibility, clicks, and ultimately, more conversions.",
      titleIcon: {
        src: "/seo-ranking.svg",
        height: 32,
        width: 32,
        alt: "img",
      },
    },
    {
      title: "Continuous Growth",
      description:
        "Organic content provides value without the expense of paid promotions, making it a budget-friendly strategy for sustainable growth and long-term engagement.",
      titleIcon: {
        src: "/continuous-growth.svg",
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
                  buttonSty="flex gap-1 items-center text-base font-medium text-blue-900"
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
  let bannerObj = {
    title: "Discovery Platform",
    description: `Leverage Sekel Tech's organic and paid discovery for genuine leads, boosting footfalls and establishing trust and authority in your digital landscape with real-time reporting
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
        {...discoveryFeatureObj}
        renderElement={renderDiscoveryFeature}
      />
      <CardSection
        title="Advantages of Sekel Tech Hyperlocal Dynamic Engagement Commerce"
        description="Unlocking the Power of Organic Discovery"
        sectionStyle="py-[100px] bg-blue-200"
        headingSty="max-w-[803px] mx-auto text-center mb-[52px]"
        renderElement={() => (
          <div className="grid grid-cols-3 mx-10">
            {advantagesCardData?.map((item, index) => {
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
        headingSty="max-w-[790px] mb-[52px]"
        descriptionSty="text-base font-normal leading-[22px] text-black-33"
        {...discoveryObj}
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
                  Prioritize secure payment options and consent-driven engagemen to reinforce trust.
                  </p>
                </li>
                <li className="ml-auto max-w-[243px] mb-[68px]">
                  <p className="mb-[14px] text-xl font-medium text-white ">
                  Automated and Scaled Engagement
                  </p>
                  <p className="text-sm font-light text-white ">
                  Automate responses and content delivery for consistent, valuable interactions.
                  </p>
                </li>
                <li className="ml-auto max-w-[243px] ">
                  <p className="mb-[14px] text-xl font-medium text-white ">
                  Automated and Scaled Engagement
                  </p>
                  <p className="text-sm font-light text-white ">
                  Automate responses and content delivery for consistent, valuable interactions.
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
