import Banner from "@/Components/comman/Banner";
import Breadcrumb from "@/Components/comman/Breadcrumb";
import Button from "@/Components/comman/Button";
import InfoCard from "@/Components/comman/Card/InfoCard";
import GetStartForm from "@/Components/comman/Form/StartForm";
import HyperlocalStrategyForm from "@/Components/comman/Form/hyperlocalStrategyForm";
import Image from "next/image";

const { default: Card } = require("@/Components/comman/Card");
const {
  default: CardSection,
} = require("@/Components/comman/Card/CardSection");

const Demand = () => {
  let bannerObj = {
    title: "Demand Generation",
    description:
      "Unlock demand like never before with Sekel Tech's Hyperlocal Dynamic Engagement Commerce platform. Unleash the potential of privacy sandbox retargeting, transforming unknown leads into valuable connections. Join us in revolutionising the way you engage with your audience!",
    subTitle: `Empowering Demand in a Hyperlocal World`,
  };

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
      descriptionSty: "mb-0",
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
      descriptionSty: "mb-0",
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
      descriptionSty: "mb-0",
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
      descriptionSty: "mb-0",
    },
  ];
  let mediaPlanningData = [
    {
      title: "Define your goals",
      description:
        "What do you want to achieve with your media campaign? Do you want to increase foot traffic to your stores? Generate more call leads? Drive online sales? Once you know your goals, you can start to develop a strategy to achieve them.",
      titleIcon: { iconNumber: 1 },
      descriptionSty: "mb-0",
    },
    {
      title: "Use compelling content",
      description:
        "Make ads that match your audience's interests, grab their attention with great visuals, and write clear, short messages.",
      titleIcon: { iconNumber: 2 },
      descriptionSty: "mb-0",
    },
    {
      title: "Target audience",
      description:
        "Sekel Tech's Hyperlocal Dynamic Engagement Commerce lets you show ads to people who visited your site or showed interest. It's a smart way to connect with potential customers who already know your brand and are keen on what you offer.",
      titleIcon: { iconNumber: 3 },
      descriptionSty: "mb-0",
    },
    {
      title: "Test & Optimise",
      description:
        "Once you have launched your campaigns, it is important to monitor their performance and make adjustments as needed. Use A/B testing to test different ad copy, images, and targeting strategies.",
      titleIcon: { iconNumber: 4 },
      descriptionSty: "mb-0",
    },
  ];

  let data = [
    {
      title: "Accurate Contextual Signals",
      description:
        "Sekel Tech collects data on customer interactions across websites, apps, stores, and social media, providing more accurate and relevant insights than just relying on keywords.",
      //   buttonText: "Explore Discovery",
      imageContentSty: "order-1 col-span-6 h-full flex items-center ",
      textContainerSty: "order-2 col-span-5 h-full flex items-center",
      imageContainerSty:
        "max-h-[480px] w-full max-w-[624px] pl-[15px] pt-[55px]  bg-blue-200 rounded-[16px] overflow-hidden mx-auto",
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
      imageContainerSty: "max-h-[414px] w-full max-w-[540px] mx-auto",
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
      imageContainerSty:
        "max-h-[361px] w-full max-w-[638px] pl-[12px]  bg-blue-200 rounded-[12px] overflow-hidden mx-auto",
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
                  {...item}
                  image={{
                    ...item.image,
                    className: "h-full w-full object-cover object-center",
                  }}
                  cardSty={item.cardSty + " h-full"}
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
      <Banner
        {...bannerObj}
        image={{
          src: "/demand-generation.png",
          alt: "img",
          height: 418,
          width: 650,
        }}
        sectionSty="pb-[100px] pt-20"
        containerStyle="container justify-between"
        descriptionSty="mr-16 mb-10"
        imgContainerSty="max-w-[650px] max-h-[418px] w-full"
        renderElement={<GetStartForm buttonTitle="Get started" />}
        headinWidth="max-w-[500px] w-full mb-12"
      />
      <Breadcrumb
        breadcrumbList={[
          { link: "/", label: "Home" },
          { link: "/how-it-works", label: "How it works" },
          { link: "/demand", label: "Demand Generation" },
        ]}
      />
      <CardSection
        {...demandGenerationFeature}
        renderElement={renderDemandGenerationCard}
      />
      <CardSection
        headingSty="flex items-end mx-4 gap-[60px]"
        title="Demand Generation Reimagined."
        description="Why Sekel Leads the Way"
        sectionStyle="py-[100px] bg-blue-200"
        titleSty="text-[28px] font-medium mb-3 leading-[30px] tracking-tighter text-black-33"
        descriptionSty="max-w-[686px] text-[28px] font-normal leading-[22px] text-black-33 mb-20"
        renderElement={() => (
          <div className="grid grid-cols-4">
            {demandGenerationCardData?.map((item, index) => {
              return (
                <div className="col-span-1" key={index}>
                  <Card
                    {...item}
                    headingSty="text-[28px] font-medium leading-[30px] mb-8 text-black-900"
                    cardSty="bg-blue-200 px-5 py-5 rounded-2xl border-[1px] border-white h-full"
                    cardDataSty=""
                  />
                </div>
              );
            })}
          </div>
        )}
      />
      <InfoCard
        title="Master Local Advertising"
        description="Sekel Tech’s Demand Generation Platform"
        sectionStyle="py-[100px] bg-blue-900"
        containerSty="container "
        containtWidth=""
        titleSty="text-white text-[42px] font-medium mb-2 leading-[60px] tracking-tighter"
        descriptionSty="text-white text-[28px] font-medium  mb-8  "
        gridContainerSty="gap-0 grid grid-cols-11"
        imageContainerSty=" w-full max-w-[497px] ml-0 mx-auto"
        textContainerSty=" col-span-11 "
        imageContentSty=" col-span-0 "
        renderElement={
          <>
            <div>
              <div className="mx-auto w-full max-w-[930px] rounded-2xl overflow-hidden mb-8">
                <Image
                  className="w-full h-full"
                  src={"/advertising.png"}
                  height={500}
                  width={500}
                  alt="img"
                />
              </div>
            </div>
            <div className="max-w-[455px]">
              <p className="text-white text-base font-normal mb-5">
                Revolutionize your local discovery strategy with Sekel’s Demand
                Generation Platform, turbocharging your brand’s presence and
                customer connections
              </p>
              <Button filled data="Get Started" clsStyle="py-3 px-8" />
            </div>
          </>
        }
      />
      <CardSection
        title="Sekels way to Master Local Demand"
        sectionStyle="pt-[100px] pb-[50px]"
        titleSty="text-start text-[42px] font-medium mb-[52px] leading-[52px] tracking-tighter text-black-33"
        renderElement={() =>
          data?.map((item, index) => {
            return (
              <InfoCard
                key={index}
                {...item}
                sectionStyle="rounded-[16px] mb-[20px]"
                containtWidth="max-w-[536px] mx-auto "
                containerSty=""
                titleSty="text-[42px] font-medium leading-[52px] tracking-tighter text-black-33 mb-[26px]"
                descriptionSty="mb-8 leading-[20px] text-base font-normal text-black-33"
                gridContainerSty="grid grid-cols-12 gap-6"
                renderElement={
                  <>
                    <div
                      className={`${
                        index === 1 ? "ml-auto rotate-[135deg]" : "rotate-45"
                      } h-[66px] w-[66px]  rounded-full bg-yellow-900 flex items-center justify-center mb-8`}
                    >
                      <Image
                        src={"/forword-arrow.svg"}
                        height={32}
                        width={32}
                        alt="img"
                      />
                    </div>
                    {/* <Button filled data={item?.buttonText} clsStyle="py-3" /> */}
                  </>
                }
              />
            );
          })
        }
      />
      <HyperlocalStrategyForm
        showForm={false}
        title="All of the above flows into generating a suggestive media"
        containerSty="container justify-center"
      />
      {/* change it later */}

      <CardSection
        title="Media Planning"
        description="Strategic Media Planning with Sekel Tech’s Demand Generation Platform for Leading Brands"
        sectionStyle="py-[100px] bg-blue-900 "
        titleSty="text-[42px] font-medium mb-3 leading-[52px] tracking-tighter text-white"
        descriptionSty="w-[456px] mx-auto text-white leading-[22px] text-black-33"
        renderElement={() => (
          <div className="flex items-center">
            <div className="w-[42%]">
              {mediaPlanningData?.map((item, index) => {
                return (
                  <Card
                    {...item}
                    headingSty="text-[28px] font-medium leading-[30px] mb-[26px] mt-4 text-white"
                    cardSty="rounded-2xl mb-8 text-white "
                    dataDivSty="w-[calc(100%_-_90px)]"
                    cardDataSty="flex gap-8"
                  />
                );
              })}
            </div>
            <div className="w-[55%] pl-[40px] h-full flex flex-col justify-end">
              <div class="max-w-[599px] max-h-[489px] w-full ml-auto">
                <Image
                  src={"/meeting-data.png"}
                  height={489}
                  width={599}
                  alt="img"
                />
              </div>
              <div className="max-w-[438px] ml-auto mt-8 p-4 rounded-[8px] bg-white bg-opacity-10 border-[1px] border-white">
                <p className="text-base text-yellow-900 font-normal">
                  By following these tips, you can create effective media
                  campaigns using Sekel Tech Demand Generation Platform that
                  will help you achieve your marketing goals.
                </p>
              </div>
            </div>
          </div>
        )}
      />

      <HyperlocalStrategyForm containerSty="container" />
    </>
  );
};

export default Demand;
