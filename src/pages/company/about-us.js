import CardSection from "@/Components/comman/Card/CardSection";
import Card from "@/Components/comman/Card";
import Banner from "@/Components/comman/Banner";
import Breadcrumb from "@/Components/comman/Breadcrumb";
import InfoCard from "@/Components/comman/Card/InfoCard";
import SliderSection from "@/Components/comman/Card/SliderSection";
import ImageCard from "@/Components/comman/Card/ImageCard";
import HyperlocalStrategyForm from "@/Components/comman/Form/hyperlocalStrategyForm";
import Image from "next/image";

const AboutUs = () => {
  let bannerObj = {
    title: "About Us",
    description:
      "Designed to help retail businesses, Sekel Tech platform helps manage brands’ online presence, store orders, and consumers’ online to offline journey.",
    subTitle: `Revolutionising Retail Tech with Sekel Tech`,
  };

  let demandGenerationCardData = [
    {
      title: "First ones to offer structured NAP data.",
      titleIcon: {
        src: "/star.svg",
        height: 54,
        width: 54,
        alt: "img",
      },
      descriptionSty: "mb-0",
    },
    {
      title: "Over 27,000+ Businesses that trust us",
      titleIcon: {
        src: "/star.svg",
        height: 54,
        width: 54,
        alt: "img",
      },
      descriptionSty: "mb-0",
    },
    {
      title: "Pioneer and Leader of 360º Hyperlocal",
      titleIcon: {
        src: "/star.svg",
        height: 54,
        width: 54,
        alt: "img",
      },
      descriptionSty: "mb-0",
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

  return (
    <>
      <Banner
        {...bannerObj}
        image={{
          src: "/about-banner.png",
          alt: "img",
          height: 800,
          width: 1200,
        }}
        sectionSty="pt-5 lg:pt-20"
        containerStyle="container block flex-wrap"
        imgContainerSty="max-h-[468px] overflow-hidden rounded-3xl w-full"
        headinWidth="w-full mb-[40px] lg:mb-[80px]"
        aboutHead="lg:flex"
        descriptionSty="lg:w-1/2 lg:pl-[30px] mb-0"
        aboutHeadBox="lg:w-1/2 max-lg:mb-[40px] lg:pr-[30px]"
        titleSty="text-[36px] md:text-[42px] font-medium leading-[130%] lg:mb-3 tracking-tighter"
        subTitleSty="tracking-tighter mb-0 font-medium text-[28px] leading-[140%]"        
      />
      <Breadcrumb
        breadcrumbList={[
          { link: "/", label: "Home" },
          { link: "/company", label: "company" },
          { link: "/company/about-us", label: "Aboutus" },
        ]}
      />
      <CardSection
        headingSty="flex items-end gap-[60px]"
        title="Our Story"
        subTitle="Omni-Channel Commerce for Retail Brands"
        description="Since our inception in 2016 with a vision for enhanced Omni-channel Commerce for Retail brands, we’ve achieved several industry firsts, such as System Driven URLs for instant page generation. We have gained expertise in building additional, sustainable, organic traffic over time with consistency of information across first-party and third-party personas."
        sectionStyle="pt-[50px] pb-[10px] md:py-[50px] lg:py-[100px] bg-white"
        descriptionSty="text-[16px] mb-5 lg:mb-[52px] max-w-[686px]"
        titleSty="text-[42px] font-medium mb-3 leading-[52px] tracking-tighter text-black-33"
        renderElement={() => (
          <div className="grid grid-cols-3 gap-4">
            {demandGenerationCardData?.map((item, index) => {
              return (
                <div className="col-span-3 lg:col-span-1" key={index}>
                  <Card
                    {...item}
                    dataDivSty="max-lg:w-[calc(100%_-_70px)] max-lg:pl-[20px]"
                    headingSty="text-[16px] md:text-[28px] font-medium leading-[140%] text-black-900"
                    cardSty="border border-gray-400 bg-gray-100 p-[12px] md:p-[20px] lg:p-[40px] rounded-2xl h-full"
                    cardDataSty="max-lg:flex items-center"
                    titleIconSty="h-[70px] w-[70px] lg:h-[95px] lg:w-[95px] rounded-full bg-yellow-100 flex items-center justify-center lg:mb-8"
                    iconSty="max-h-[42px] max-w-[42px] lg:max-h-[54px] lg:max-w-[54px]"
                  />
                </div>
              );
            })}
          </div>
        )}
      />
      <InfoCard
        subTitle="Our Mission"
        title="Unify to amplify"
        gridContainerSty="grid grid-cols-11 gap-10 lg:gap-6"
        description="To enable retail stores by providing multi-location retail brands to effortlessly construct integrated online-to-offline consumer journeys across platforms. To influence millions of consumers in buying mode from the convenience of a single platform, businesses now have the control and ability to influence consumers with rich, dynamic content that they deem most appropriate for each location and content"
        subTitleSty="mb-5 text-[16px] leading-[150%]"
        sectionStyle="py-[50px] md:py-[75px] lg:py-[138px] bg-gray-100"
        descriptionSty="mr-0 text-base font-normal leading-[25px]"
        image={{
          src: "/amplify.png",
          height: 448,
          width: 692,
          alt: "img",
        }}
      />

      <InfoCard
        title="One Platform. Unlimited Possibilities."
        subheadTitle="Sekel Tech’s all-in-one software helps multi-location businesses unlock their full potential with one centralised tool."
        description="To enable retail stores by providing multi-location retail brands to effortlessly construct integrated online-to-offline consumer journeys across platforms. To influence millions of consumers in buying mode from the convenience of a single platform, businesses now have the control and ability to influence consumers with rich, dynamic content that they deem most appropriate for each location and content"
        subheadTitleSty="text-[16px] lg:text-[28px] font-medium leading-[150%] tracking-tight tracking-tighter mb-2 md:mb-5"
        titleSty="text-white text-[22px] md:text-[42px] font-medium leading-[140%] tracking-tighter mb-3 lg:mb-5"
        sectionStyle="pt-[50px] max-lg:pb-[50px] lg:pt-[100px] bg-blue-900 text-white"
        imageContentSty="order-1 col-span-11 lg:col-span-5"
        textContainerSty="order-2 col-span-11 lg:col-span-6"
        containtWidth="lg:max-w-[615px] ml-auto pt-[38px]"
        descriptionSty="mr-0 text-[15px] md:text-base font-normal leading-[125%]"
        imageContainerSty="max-h-auto max-w-[500px] mx-auto"
        image={{
          src: "/one-platform.png",
          height: 448,
          width: 692,
          alt: "img",
        }}
      />

      <section className="py-[50px] md:py-[70px] lg:py-[100px] bg-white">
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-3">
              <h2 class="text-black text-[36px] md:text-[42px] lg:text-[54px] font-normal leading-[140%] tracking-tighter mb-5">
                Founders of Sekel Tech
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-9 lg:pl-[60px]">
              <div className="flex gap-x-[20px] lg:gap-x-[52px] mb-10">
                <div className="max-w-[332px]">
                  <div className="max-w-[332px] w-full mb-[15px] lg:mb-[30px]">
                    <Image
                      src={"/rakeshraghuvanshi.png"}
                      width={400}
                      height={500}
                      alt=""
                    />
                  </div>
                  <h2 className="text-[16px] md:text-[28px] font-medium leading-[150%] tracking-tight tracking-tighter">
                    Rakesh Raghuvanshi
                  </h2>
                </div>

                <div className="max-w-[332px]">
                  <div className="max-w-[332px] w-full mb-[15px] lg:mb-[30px]">
                    <Image
                      src={"/hemalatharaghuvanshi.png"}
                      width={400}
                      height={500}
                      alt=""
                    />
                  </div>
                  <h2 className="text-[16px] md:text-[28px] font-medium leading-[150%] tracking-tight tracking-tighter">
                    Hemalatha Raghuvanshi
                  </h2>
                </div>
              </div>
              <div>
                <div className="max-md:mb-[30px] relative max-md:pt-[85px] md:flex items-end md:mb-8">
                  <div className="max-md:absolute left-0 top-0 w-[75px] lg:w-[125px]">
                    <Image
                      src={"/coma-1.svg"}
                      height={117}
                      width={125}
                      alt=""
                    />
                  </div>
                  <div className="w-full md:w-[calc(100%_-_125px)] md:pl-4 lg:pl-[52px]">
                    <p className="text-base font-normal leading-[25px]">
                      Welcome to Sekel Tech. Our ambition is clear, To transform
                      the landscape of omni-channel commerce. In a world
                      brimming with channels, brands often struggle with
                      fragmented customer insights and complex engagements.
                    </p>
                  </div>
                </div>
                <div className="relative max-md:pb-[85px] md:flex items-end">
                  <div className="w-full md:w-[calc(100%_-_125px)] md:pr-4 lg:pr-[52px]">
                    <p className="text-base font-normal leading-[25px] mb-3">
                      Welcome to Sekel Tech. Our ambition is clear, To transform
                      the landscape of omni-channel commerce. In a world
                      brimming with channels, brands often struggle with
                      fragmented customer insights and complex engagements.
                    </p>
                    <p className="text-base font-semibold leading-[25px]">
                      Join us as we redefine commerce, creating an enduring,
                      transparent, and innovative ecosystem.
                    </p>
                  </div>
                  <div className="max-md:absolute right-0 bottom-0 w-[75px] lg:w-[125px]">
                    <Image
                      src={"/coma-2.svg"}
                      height={117}
                      width={125}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SliderSection
        title="Key Success Metrics Case Studies"
        description="How Sekel Tech helped to increase the clients’ ROI"
        profileButton
        renderElement={silderData?.map((item, index) => {
          return <ImageCard {...item} key={index} />;
        })}
      />
      <HyperlocalStrategyForm containerSty="container" />
    </>
  );
};
export default AboutUs;
