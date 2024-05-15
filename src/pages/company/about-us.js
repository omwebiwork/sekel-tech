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
        sectionSty="pt-20"
        containerStyle="container block flex-wrap"
        descriptionSty="w-1/2 pl-[30px] mb-0"
        imgContainerSty="max-h-[468px] overflow-hidden rounded-3xl w-full"
        headinWidth="w-full mb-[80px]"
        aboutHead="flex"
        aboutHeadBox="w-1/2 pr-[30px]"
        subTitleSty="tracking-tighter mb-0"
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
        sectionStyle="py-[100px] bg-white"
        descriptionSty="max-w-[686px]"
        renderElement={() => (
          <div className="grid grid-cols-3 -mx-4">
            {demandGenerationCardData?.map((item, index) => {
              return (
                <div className="col-span-1 px-4" key={index}>
                  <Card
                    {...item}
                    headingSty="text-[28px] font-medium leading-[140%] text-black-900"
                    cardSty="border border-gray-400 bg-gray-100 p-[40px] rounded-2xl h-full"
                    cardDataSty=""
                    titleIconSty="h-[95px] w-[95px] rounded-full bg-yellow-100 flex items-center justify-center mb-8"
                    iconSty="max-h-[54px] max-w-[54px]"
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
        description="To enable retail stores by providing multi-location retail brands to effortlessly construct integrated online-to-offline consumer journeys across platforms. To influence millions of consumers in buying mode from the convenience of a single platform, businesses now have the control and ability to influence consumers with rich, dynamic content that they deem most appropriate for each location and content"
        subTitleSty="mb-5 text-[16px] leading-[150%]"
        sectionStyle="py-[138px] bg-gray-100"
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
        subheadTitleSty="text-[28px] font-medium leading-[150%] tracking-tight tracking-tighter mb-5"
        titleSty="text-white text-[42px] font-medium leading-[52px] tracking-tighter mb-5"
        sectionStyle="pt-[100px] bg-blue-900 text-white"
        imageContentSty="order-1 col-span-5"
        textContainerSty="order-2 col-span-6"
        containtWidth="max-w-[615px] ml-auto pt-[38px]"
        descriptionSty="mr-0 text-base font-normal leading-[25px]"
        imageContainerSty="max-h-auto"
        image={{
          src: "/one-platform.png",
          height: 448,
          width: 692,
          alt: "img",
        }}
      />

      <section className="py-[100px] bg-white">
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="col-span-3">
              <h2 class="text-black text-[54px] font-normal leading-[140%] tracking-tighter mb-5">
                Founders of Sekel Tech
              </h2>
            </div>
            <div className="col-span-9 pl-[60px]">
              <div className="flex gap-x-[52px] mb-10">
                <div className="max-w-[332px]">
                  <div className="h-[300px] max-w-[332px] w-full mb-[30px]">
                    <Image
                      src={"/rakeshraghuvanshi.png"}
                      width={400}
                      height={500}
                      alt=""
                    />
                  </div>
                  <h2 className="text-[28px] font-medium leading-[150%] tracking-tight tracking-tighter">
                    Rakesh Raghuvanshi
                  </h2>
                </div>

                <div className="max-w-[332px]">
                  <div className="h-[300px] max-w-[332px] w-full mb-[30px]">
                    <Image
                      src={"/hemalatharaghuvanshi.png"}
                      width={400}
                      height={500}
                      alt=""
                    />
                  </div>
                  <h2 className="text-[28px] font-medium leading-[150%] tracking-tight tracking-tighter">
                    Hemalatha Raghuvanshi
                  </h2>
                </div>
              </div>
              <div>
                <div className="flex items-end mb-8">
                  <div className="w-[125px]">
                    <Image
                      src={"/coma-1.svg"}
                      height={117}
                      width={125}
                      alt=""
                    />
                  </div>
                  <div className="w-[calc(100%_-_125px)] pl-[52px]">
                    <p className="text-base font-normal leading-[25px]">
                      Welcome to Sekel Tech. Our ambition is clear, To transform
                      the landscape of omni-channel commerce. In a world
                      brimming with channels, brands often struggle with
                      fragmented customer insights and complex engagements.
                    </p>
                  </div>
                </div>
                <div className="flex items-end">
                  <div className="w-[calc(100%_-_125px)] pr-[52px]">
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
                  <div className="w-[125px]">
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
