import InfoCard from "@/Components/comman/Card/InfoCard";

const { default: Card } = require("@/Components/comman/Card");
const {
  default: CardSection,
} = require("@/Components/comman/Card/CardSection");

const Demand = () => {
  let demandGenerationFeature = {
    title: "Demand Generation Feature",
    description: null,
  };

  let generationFeature = [
    {
      title: "Digital Campaigns",
      description:
        "Elevate your digital presence with Sekel's cutting-edge Digital Campaigns. Our expertise drives results.",
      image: {
        src: "/DemandGTFeatureImgs/digital-campaigns.png",
        height: "500",
        width: "500",
      },
      cardImgSty:
        "mt-[33px] max-w-[436px] w-full mx-auto rounded-[12px] overflow-hidden",
      cardSty: "flex gap-4 rounded-xl pl-5 pr-3 pt-[52px] bg-blue-200",
      cardDataSty: "w-1/2",
      headingSty:
        "mb-[52px] leading-[30px] text-[28px] font-medium text-black-33",
    },
    {
      title: "Customer Relation Management",
      description:
        "Our customer lifetime value solutions optimize your business strategy, ensuring success and increased revenue.",
      image: {
        src: "/DemandGTFeatureImgs/customer-relation-mgt.png",
        height: "500",
        width: "500",
      },
      cardImgSty: "max-w-[328px] mt-auto w-full mx-auto",
      cardSty: "rounded-xl p-5 pt-6 bg-yellow-100 flex flex-col",
      cardDataSty: "w-full",
      headingSty:
        "mb-[32px] h-[78px] line-clamp-2 leading-[36px] text-[28px] font-medium text-black-33",
    },
    {
      title: "SellrApp",
      description:
        "Helping the business solve demand and supply challenges on a single App.",
      image: {
        src: "/DemandGTFeatureImgs/sellr-app.png",
        height: "500",
        width: "500",
      },
      cardImgSty: "max-w-[163px] w-full mx-auto mt-[102px]",
      cardSty: "flex gap-4 rounded-xl p-5 pb-0 pt-[52px] bg-yellow-100 pr-3",
      cardDataSty: "w-[45%]",
      headingSty:
        "mb-[52px] leading-[30px] text-[28px] font-medium text-black-33",
    },
    {
      title: "Conversion Analytics",
      description:
        "At Sekel, we're laser-focused on one thing: SALES CONVERSIONS.",
      image: {
        src: "/DemandGTFeatureImgs/conversion-analytics.png",
        height: "500",
        width: "500",
      },

      cardImgSty:
        "mt-[60px] rounded-[12px] overflow-hidden border border-[#EAEAEA] shadow-[0_1px_2px_rgb(0 0 0 / 25%)] max-w-[411px] max-h-[274px]",
      cardSty: "flex gap-4 rounded-xl p-5 pb-5 pr-[30px] pt-[38px] bg-blue-200",
      cardDataSty: "w-[45%]",
      headingSty:
        "mb-[29px] leading-[30px] text-[28px] font-medium text-black-33",
    },
    {
      title: "Planogram",
      description:
        "Optimizing your merchandizing for better discovery hence to sales.",
      image: {
        src: "/DemandGTFeatureImgs/laptop-screen.png",
        height: "500",
        width: "500",
      },
      descriptionSty:
        "mb-[20px] h-[72px] line-clamp-3 leading-[24px] text-[16px]",
      cardImgSty: "max-w-[247px] w-full mt-auto mx-auto",
      cardSty: "rounded-xl p-5 pt-[32px] bg-blue-200 flex flex-col",
      cardDataSty: "w-full",
      headingSty:
        "mb-[20px] h-[78px] line-clamp-2 leading-[36px] text-[28px] font-medium text-black-33",
    },
    {
      title: "Intelligent Response System",
      description:
        "Generative response to help merchants handle queries at scale to improve engagement.",
      image: {
        src: "/DemandGTFeatureImgs/intelligent-response.png",
        height: "500",
        width: "500",
      },
      descriptionSty:
        "mb-[20px] h-[72px] line-clamp-3 leading-[24px] text-[16px]",
      cardImgSty: "max-w-[350px] w-full mt-auto mx-auto",
      cardSty: "rounded-xl p-5 pt-[32px] bg-yellow-100 flex flex-col",
      cardDataSty: "w-full",
      headingSty:
        "mb-[20px] h-[78px] line-clamp-2 leading-[36px] text-[28px] font-medium text-black-33",
    },
    {
      title: "Store2Door Omni Commerce",
      description: "Enable seamless shopping with store-to-home delivery.",
      image: {
        src: "/DemandGTFeatureImgs/sore2Door-omni.png",
        height: "500",
        width: "500",
      },
      descriptionSty:
        "mb-[20px] h-[72px] line-clamp-3 leading-[24px] text-[16px]",
      cardImgSty: "max-w-[286px] mt-auto w-full mx-auto",
      cardSty: "rounded-xl p-5 pt-[32px] bg-blue-200 flex flex-col",
      cardDataSty: "w-full",
      headingSty:
        "mb-[20px] h-[78px] line-clamp-2 leading-[36px] text-[28px] font-medium text-black-33",
    },
  ];

  let demandGenerationCardData = [
    {
      title: "Best ROAS",
      description:
        "A strong focus on driving in-store traffic and call leads, crucial for brands aiming to boost offline sales.",
      titleIcon: {
        src: "/multi-location.png",
        height: 32,
        width: 32,
        alt: "img",
      },
      descriptionSty :"mb-0"
    },
    {
      title: "Reduced CAC",
      description:
        "Harness first-party data to target potential customers who visited your site but didn't take action, making your ads more precise and impactful.",
      titleIcon: {
        src: "/DemandGTFeatureImgs/reduced-CAC.svg",
        height: 32,
        width: 32,
        alt: "img",
      },
      descriptionSty :"mb-0"
    },
    {
      title: "Permission Marketing",
      description:
        "Utilize privacy-safe technologies like Google Topics API and Meta's Fan API for user retargeting, ensuring compliance with privacy regulations and fostering customer trust.",
      titleIcon: {
        src: "/management.png",
        height: 32,
        width: 32,
        alt: "img",
      },
      descriptionSty :"mb-0"
    },
    {
      title: "Direct engagement",
      description:
        "Deliver relevant ads tailored to the user's location and interests.",
      titleIcon: {
        src: "/DemandGTFeatureImgs/direct-engagement.png",
        height: 32,
        width: 32,
        alt: "img",
      },
      descriptionSty :"mb-0"
    },
  ];

  let data = [
    {
      title: "Accurate Contextual Signals",
      description:
        "Sekel Tech collects data on customer interactions across websites, apps, stores, and social media, providing more accurate and relevant insights than just relying on keywords.",
      //   buttonText: "Explore Discovery",
      imageContentSty:
        "order-1 col-span-6 h-full flex items-center bg-gray-100 ",
      textContainerSty: "order-2 col-span-6 h-full flex items-center",
      imageContainerSty: "max-h-[480px] w-full max-w-[624px]",
      image: {
        src: "/DemandGTFeatureImgs/accurate-contextual .png",
        height: 536,
        width: 673,
        alt: "hyperlocal-discovery",
      },
    },

    {
      title: "Enhanced Customer Engagement",
      description:
        "Automate your store for increased footfall and digital expansion, creating a smoother and spontaneous shopping experience.",

      imageContentSty: "col-span-6 h-full flex items-center",
      textContainerSty: "col-span-6 h-full  flex items-center ",
      imageContainerSty: "max-h-[414px] w-full max-w-[540px]",
      image: {
        src: "/DemandGTFeatureImgs/enhanced-customer.png",
        height: 536,
        width: 673,
        alt: "management-system",
      },
    },
    {
      title: "Understanding Customer Needs",
      description:
        "Gain insights into customer needs and preferences to deliver better-targeted ads.",
      imageContentSty: "order-1 col-span-6 h-full flex items-center",
      textContainerSty: "order-2 col-span-6 h-full flex items-center",
      imageContainerSty: "max-h-[361px] w-full max-w-[638px]",
      image: {
        src: "/retail-demand.png",
        height: 536,
        width: 673,
        alt: "retail-demand",
      },
    },
  ];

  let renderDemandGenerationCard = () => {
    return (
      <div>
        <div className="grid grid-cols-3 gap-5">
          {generationFeature?.map((item, index) => {
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
                  headingSty={item?.headingSty}
                  cardSty={item.cardSty + " h-full"}
                  cardDataSty={item.cardDataSty}
                  cardImgSty={item.cardImgSty}
                  descriptionSty={item.descriptionSty}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <>
      <CardSection
        {...demandGenerationFeature}
        renderElement={renderDemandGenerationCard}
      />
      <CardSection
        headingSty="flex items-end mx-4 gap-[60px]"
        title="Demand Generation Reimagined."
        description="Why Sekel Leads the Way"
        sectionStyle="py-[100px] bg-blue-200"
        descriptionSty="max-w-[686px]"
        renderElement={() => (
          <div className="grid grid-cols-4">
            {demandGenerationCardData?.map((item, index) => {
              return (
                <div className="col-span-1" key={index}>
                  <Card
                    titleIcon={item.titleIcon}
                    headingSty="text-[28px] font-medium leading-[30px] mb-8 text-black-900"
                    cardSty="bg-blue-200 px-5 py-5 rounded-2xl border-[1px] border-white h-full"
                    cardData={{
                      title: item?.title,
                      description: item?.description,
                    }}
                    descriptionSty={item.descriptionSty}
                    cardDataSty = ''
                  />
                </div>
              );
            })}
          </div>
        )}
      />

      <CardSection
        title="Sekels way to Master Local Demand"
        titleSty="text-start text-[42px] font-medium mb-3 leading-[52px] tracking-tighter text-black-33"
        renderElement={() =>
          data?.map((item, index) => {
            return (
              <InfoCard
                key={index}
                {...item}
                sectionStyle="py-8 px-5 rounded-[16px] my-8"
                containtWidth="max-w-[536px] mx-auto"
                containerSty=""
                titleSty="text-[42px] font-medium leading-[52px] tracking-tighter text-black-33 mb-[26px]"
                descriptionSty="mb-4 "
                gridContainerSty="grid grid-cols-12 gap-6"
                // renderElement={
                //   <>
                //     <ul className="list-disc pl-6 mb-[26px]">
                //       {item?.list?.map((item, index) => {
                //         return (
                //           <li
                //             key={index}
                //             className="text-base font-normal text-black-33 leading-[25px]"
                //           >
                //             {item.title}
                //           </li>
                //         );
                //       })}
                //     </ul>
                //     {/* <Button filled data={item?.buttonText} clsStyle="py-3" /> */}
                //   </>
                // }
              />
            );
          })
        }
      />
    </>
  );
};

export default Demand;
