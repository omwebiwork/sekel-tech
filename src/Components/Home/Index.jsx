import Image from "next/image";
import React from "react";
import Card from "@/Components/comman/Card";
import { useCallback, useState } from "react";
import DownArrow from "@/assets/DownArrow";
import CardSection from "../comman/Card/CardSection";
import Button from "../comman/ButtonComponent/Index";
import HyperlocalStrategyForm from "../comman/Form/hyperlocalStrategyForm";
import InfoCard from "../comman/Card/InfoCard";
import SliderSection from "../comman/Card/SliderSection";
import ImageCard from "../comman/Card/ImageCard";

const HomeComponent = () => {
  const [learnMore, setLearnMore] = useState(false);
  let [cardData, setCardData] = useState([
    {
      title: "Get Discovered",
      description:
        "Making sure you dominate the search results organically across google search products which drives greater hyperlocal visibility and conversions.",
      image: {
        src: "/discoverd-img.gif",
      },
    },
    {
      title: "Plug & Play Data",
      description:
        "Making sure all dealer, product, and lead data is captured, we seamlessly integrate it with your CRM, DMS, CDP, and LMS for effortless data flow and management. And get a single view. ",
      image: {
        src: "/play-data.gif",
      },
    },
    {
      title: "Generate Demand",
      description:
        "Making sure your brand stands out, by utilising features like targeted Google and Meta campaigns to boost demand and generate more walkins ",
      image: {
        src: "/generate-demand-img.gif",
      },
    },
  ]);

  let discoveryObj = {
    title: "Data, Discovery and Demand Story",
    description:
      " Making sure you dominate the search results organically across google search products",
  };
  let chanllenges = [
    {
      title:
        "We generate plenty of leads monthly, but lack visibility on their outcomes. How do we gain insights and optimise our efforts?",
      description: `To gain insights and optimize your efforts with generated leads,
    you need a solution that offers robust analytics and tracking
    capabilities. This will allow you to monitor the outcomes of your
    leads and adjust your strategies accordingly.`,
      list: [
        {
          title: "Data Integration",
        },
        {
          title: "Data Activation",
        },
        {
          title: "Data Integration",
        },
      ],
    },
    {
      title:
        "Our traditional method of demand generation through leads is not working out due to high TAT and Junk Data",
      description: `To address the challenges with high turnaround time (TAT) and junk data in your traditional demand generation methods, you need a solution that can streamline lead generation and data quality.`,
    },
    {
      title:
        " While the volume targets are getting achieved, we are facing issues with lead quality & CPl",
      description: `To address the issues with lead quality and Cost Per Lead (CPL) while achieving volume targets, you need a solution that can improve lead targeting and qualification processes. By refining your targeting criteria and qualifying leads more effectively, you can improve lead quality and reduce CPL, ultimately enhancing the overall performance of your demand generation efforts.`,
    },
    {
      title:
        "The challenge is acquiring and maintaining accurate location data for effective marketing and lead generation. Seamless integration with marketing systems is crucial for targeted success.",
      description: `To address the challenge of obtaining and maintaining accurate location data, consider implementing a robust location data management system. This system should streamline the integration of marketing systems with location data, ensuring that each store's information is accurate and up-to-date. Additionally, regular audits and updates to the location data can help maintain its accuracy over time.`,
    },
  ];

  let silderData = [
    {
      image: {
        src: "/case-studies-1.png",
        height: 304,
        width: 348,
        alt: "img",
      },

      footer: {
        image: { src: "/kalyan-logo.svg", height: 448, width: 692, alt: "img" },
        title: "Increase ROI by",
        size: "31x",
      },
    },
    {
      image: {
        src: "/case-studies.png",
        height: 500,
        width: 348,
        alt: "img",
      },

      footer: {
        image: { src: "/schneider.svg", height: 448, width: 692, alt: "img" },
        size: "10x",
      },
    },
    {
      image: {
        src: "/case-studies-1.png",
        height: 304,
        width: 348,
        alt: "img",
      },

      footer: {
        image: { src: "/kalyan-logo.svg", height: 448, width: 692, alt: "img" },
        title: "Increase ROI by",
        size: "31x",
      },
    },
    {
      image: {
        src: "/case-studies.png",
        height: 500,
        width: 348,
        alt: "img",
      },

      footer: {
        image: { src: "/schneider.svg", height: 448, width: 692, alt: "img" },
        size: "10x",
      },
    },
  ];

  const handleLearnMore = useCallback((index) => {
    if (learnMore[index]) {
      setLearnMore({ [index]: false });
    } else {
      setLearnMore({ [index]: true });
    }
  });

  const renderCard = () => {
    return (
      <div>
        <div className="grid grid-cols-3 gap-8">
          {cardData?.map((item, index) => {
            return (
              <div className="col-span-1">
                <Card
                  key={index}
                  cardData={item}
                  actionType="Learn more"
                  action={() => handleLearnMore(index)}
                  learnMore={learnMore[index]}
                  buttonIcon={<DownArrow />}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  let chanllengesCard = ({ title, description, gridColSize, list }) => {
    return (
      <div className={`${gridColSize}`}>
        <div className="h-full py-8 px-[52px] rounded-xl bg-gray-100 border-[1px] border-gray-400">
          <div className="flex gap-4 mb-10">
            <div className="h-9 w-9 rounded-full border-[1px] border-black-33 flex items-center justify-center">
              <p className="text-xl font-medium text-black-33">?</p>
            </div>
            <div className="w-[calc(100%_-_50px)] ">
              <p className=" text-base font-semibold text-black-33  tracking-tight">
                {title}
              </p>
            </div>
          </div>
          <div>
            <p className="text-base font-normal leading-[25px] text-black-33 mb-4">
              {description}
            </p>
            <ul className="list-['-_'] pl-4 text-base font-normal text-black-33 mb-4">
              {list?.map((listItem, listIndex) => {
                return <li key={listIndex}>{listItem.title}</li>;
              })}
            </ul>
            <button class="flex gap-2 items-center text-base text-blue-900 font-medium ">
              Platform
              <div className="h-6 w-6">
                <Image
                  src={"/blue-arrow.svg"}
                  height={24}
                  width={24}
                  alt="img"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  };

  const challengesElement = () => {
    return (
      <div className="grid grid-cols-16 gap-5 mb-8">
        {chanllenges?.map((item, index) =>
          chanllengesCard({
            ...item,
            gridColSize:
              index === 1 || index === 2 ? "col-span-7" : "col-span-9",
          })
        )}
      </div>
    );
  };

  const renderCompetition = () => {
    return (
      <section className="pt-[28px]">
        <div className="bg-blue-900 pl-6 rounded-t-2xl">
          <div className="grid grid-cols-3">
            <div className="col-span-1">
              <div className="bg-yellow-900 px-[2px] pt-[40px] rounded-t-xl -mt-[40px]">
                <div className="p-8 bg-blue-100 rounded-t-2xl">
                  <div className="pb-8 h-[68px]">
                    <Image
                      src={"/logo-blue.svg"}
                      height={34}
                      width={222}
                      alt="logo"
                      className="w-full max-w-[222px]"
                    />
                  </div>
                  <div className="py-4 border-t-[2px] border-white">
                    <div className="relative py-2 px-3 flex items-center gap-x-[16px] text-black-33 font-medium text-[16px] mb-3 border-b border-white">
                      <Image
                        src={"/arrow.svg"}
                        height={24}
                        width={24}
                        alt="arrow"
                      />
                      CDP
                    </div>
                    <div className="relative py-2 px-3 flex items-center gap-x-[16px] text-black-33 font-medium text-[16px] mb-3 border-b border-white">
                      <Image
                        src={"/arrow.svg"}
                        height={24}
                        width={24}
                        alt="arrow"
                      />
                      CRM
                    </div>
                    <div className="relative py-2 px-3 flex items-center gap-x-[16px] text-black-33 font-medium text-[16px] mb-3 border-b border-white">
                      <Image
                        src={"/arrow.svg"}
                        height={24}
                        width={24}
                        alt="arrow"
                      />
                      PIMS
                    </div>
                    <div className="relative py-2 px-3 flex items-center gap-x-[16px] text-black-33 font-medium text-[16px] mb-3 border-b border-white">
                      <Image
                        src={"/arrow.svg"}
                        height={24}
                        width={24}
                        alt="arrow"
                      />
                      IVR
                    </div>
                    <div className="relative py-2 px-3 flex items-center gap-x-[16px] text-black-33 font-medium text-[16px] mb-3 border-b border-white">
                      <Image
                        src={"/arrow.svg"}
                        height={24}
                        width={24}
                        alt="arrow"
                      />
                      Generative AI
                    </div>
                    <div className="relative py-2 px-3 flex items-center gap-x-[16px] text-black-33 font-medium text-[16px] mb-3 border-b border-white">
                      <Image
                        src={"/arrow.svg"}
                        height={24}
                        width={24}
                        alt="arrow"
                      />
                      Lead Classification
                    </div>
                    <div className="relative py-2 px-3 flex items-center gap-x-[16px] text-black-33 font-medium text-[16px] mb-3 border-b border-white">
                      <Image
                        src={"/arrow.svg"}
                        height={24}
                        width={24}
                        alt="arrow"
                      />
                      SellrApp
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2 border-b border-blue-100">
              <div className="px-[60px] py-[34px]">
                <div className="grid grid-cols-2">
                  <div className="col-span-1">
                    <div className="pb-8 h-[68px]">
                      <h2 className="text-white font-medium text-[20px]">
                        Typically SEO agency
                      </h2>
                    </div>
                    <div className="pt-4 border-t-[2px] border-white">
                      <div className="relative py-2 px-3 flex items-center gap-x-[16px] text-white font-medium text-[16px] mb-3 border-b border-white">
                        <Image
                          src={"/check.svg"}
                          height={24}
                          width={24}
                          alt="check"
                        />
                        CDP
                      </div>
                      <div className="relative py-2 px-3 flex items-center gap-x-[16px] text-white font-medium text-[16px] mb-3 border-b border-white">
                        <Image
                          src={"/close.svg"}
                          height={24}
                          width={24}
                          alt="close"
                        />
                        CRM
                      </div>
                      <div className="relative py-2 px-3 flex items-center gap-x-[16px] text-white font-medium text-[16px] mb-3 border-b border-white">
                        <Image
                          src={"/check.svg"}
                          height={24}
                          width={24}
                          alt="check"
                        />
                        PIMS
                      </div>

                      <div className="relative py-2 px-3 flex items-center gap-x-[16px] text-white font-medium text-[16px] mb-3 border-b border-white">
                        <Image
                          src={"/close.svg"}
                          height={24}
                          width={24}
                          alt="close"
                        />
                        IVR
                      </div>
                      <div className="relative py-2 px-3 flex items-center gap-x-[16px] text-white font-medium text-[16px] mb-3 border-b border-white">
                        <Image
                          src={"/close.svg"}
                          height={24}
                          width={24}
                          alt="close"
                        />
                        Generative AI
                      </div>

                      <div className="relative py-2 px-3 flex items-center gap-x-[16px] text-white font-medium text-[16px] mb-3 border-b border-white">
                        <Image
                          src={"/check.svg"}
                          height={24}
                          width={24}
                          alt="check"
                        />
                        Lead Classification
                      </div>
                      <div className="relative py-2 px-3 flex items-center gap-x-[16px] text-white font-medium text-[16px] mb-3 border-b border-white">
                        <Image
                          src={"/check.svg"}
                          height={24}
                          width={24}
                          alt="check"
                        />
                        SellrApp
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="pb-8 h-[68px]">
                      <h2 className="text-white font-medium text-[20px]">
                        In house SEO
                      </h2>
                    </div>
                    <div className="pt-4 border-t-[2px] border-white">
                      <div className="relative py-2 px-3 flex items-center gap-x-[16px] text-white font-medium text-[16px] mb-3 border-b border-white">
                        <Image
                          src={"/close.svg"}
                          height={24}
                          width={24}
                          alt="close"
                        />
                        CDP
                      </div>
                      <div className="relative py-2 px-3 flex items-center gap-x-[16px] text-white font-medium text-[16px] mb-3 border-b border-white">
                        <Image
                          src={"/close.svg"}
                          height={24}
                          width={24}
                          alt="close"
                        />
                        CRM
                      </div>
                      <div className="relative py-2 px-3 flex items-center gap-x-[16px] text-white font-medium text-[16px] mb-3 border-b border-white">
                        <Image
                          src={"/check.svg"}
                          height={24}
                          width={24}
                          alt="check"
                        />
                        PIMS
                      </div>

                      <div className="relative py-2 px-3 flex items-center gap-x-[16px] text-white font-medium text-[16px] mb-3 border-b border-white">
                        <Image
                          src={"/close.svg"}
                          height={24}
                          width={24}
                          alt="close"
                        />
                        IVR
                      </div>
                      <div className="relative py-2 px-3 flex items-center gap-x-[16px] text-white font-medium text-[16px] mb-3 border-b border-white">
                        <Image
                          src={"/close.svg"}
                          height={24}
                          width={24}
                          alt="close"
                        />
                        Generative AI
                      </div>

                      <div className="relative py-2 px-3 flex items-center gap-x-[16px] text-white font-medium text-[16px] mb-3 border-b border-white">
                        <Image
                          src={"/close.svg"}
                          height={24}
                          width={24}
                          alt="close"
                        />
                        Lead Classification
                      </div>
                      <div className="relative py-2 px-3 flex items-center gap-x-[16px] text-white font-medium text-[16px] mb-3 border-b border-white">
                        <Image
                          src={"/check.svg"}
                          height={24}
                          width={24}
                          alt="check"
                        />
                        SellrApp
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pl-6">
          <div className="bg-black-33 px-[43px] py-[20px] w-full rounded-b-xl">
            <div className="grid grid-cols-2 items-center">
              <div className="col-span-1">
                <h4 className="text-white text-[16px] font-medium">
                  Hyperlocal without all these?
                </h4>
              </div>
              <div className="col-span-1">
                <div className="flex items-center justify-between">
                  <div>
                    <button class="bg-yellow-900 h-[60px] w-[60px] min-w-[60px] border border-1 border-yellow-900 rounded-full flex items-center justify-center">
                      <Image
                        src={"forword-arrow.svg"}
                        height={35}
                        width={35}
                        alt="arrow"
                      />
                    </button>
                  </div>
                  <h4 className="pl-8 w-[calc(100%_-_60px)] text-white text-[20px] font-medium">
                    If you don't have all these you don't truly have hyperlocal.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      <CardSection {...discoveryObj} renderElement={renderCard} />
      <InfoCard
        title="Beyond Tehnology Business Transformation"
        description=" SellrApp provides data & insights for superior
              decision-making, driving complete business transformation.
              SellrApp is not just a technology point solution, but a
              complete business transformation tool. It can help companies
              achieve their business goals."
        image={{
          src: "/business-transformation.gif",
          height: 448,
          width: 692,
          alt: "img",
        }}
        bordershow
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
      />
      <CardSection
        title="Competition comparison data"
        containerSty="border-b border-gray-400"
        description="Making sure you dominate the search results organically across google search products Making sure you dominate the search results organically across "
        renderElement={renderCompetition}
      />
      <CardSection
        headingSty=""
        descriptionSty=""
        title="Challenges Q/A"
        description=" Making sure you dominate the search results organically across
              google search products Making sure you dominate the s"
        renderElement={challengesElement}
      />
      <SliderSection
        title="Key Success Metrics Case Studies"
        description="How Sekel Tech helped to increase the clients’ ROI"
        profileButton
        renderElement={silderData?.map((item, index) => {
          return <ImageCard {...item} key={index} />;
        })}
      />
      <section className="py-[100px] bg-white">
        <div className="container">
          <div className="grid grid-cols-10 gap-6 mb-5">
            <div className="col-span-4">
              <div className=" w-[479px] h-full flex flex-col justify-center">
                <h3 className="text-[42px] font-medium mb-[44px] leading-[52px] tracking-tighter text-black-33">
                  About Sekel
                </h3>
                <p className="text-base font-normal leading-[25px] mb-5 mx-auto text-black-33 ">
                  Our ambition is clear, To transform the landscape of
                  omni-channel commerce. In a world brimming with channels,
                  brands often struggle with fragmented customer insights and
                  complex engagements. This is the challenge we tackle. The
                  heart of our platform is the power of first-party data,
                  offering genuine and direct insights. This allows brands to
                  optimize their approach, ensuring efficiency in both strategy
                  and spend.
                </p>
                <p className="text-base font-semibold leading-[21px]  mx-auto text-black-33 mr-6">
                  Join us as we redefine commerce, creating an enduring,
                  transparent, and innovative ecosystem.
                </p>
              </div>
            </div>
            <div className="col-span-6">
              <div className="ml-auto max-h-[476px] max-w-[600px] rounded-[15px] overflow-hidden ">
                <Image
                  className="w-full h-full object-cover object-center"
                  src={"/about.png"}
                  height={476}
                  width={600}
                  alt="img"
                />
              </div>
            </div>
          </div>
          <HyperlocalStrategyForm buttonTitle="Submit" placeholder="Email" />
        </div>
      </section>
    </>
  );
};

export default HomeComponent;
