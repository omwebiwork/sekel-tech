import HeadSection from "@/Components/HeadSection";
import Banner from "@/Components/comman/Banner";
import Breadcrumb from "@/Components/comman/Breadcrumb";
import Button from "@/Components/comman/Button";
import Card from "@/Components/comman/Card";
import CardSection from "@/Components/comman/Card/CardSection";
import ImageCard from "@/Components/comman/Card/ImageCard";
import InfoCard from "@/Components/comman/Card/InfoCard";
import SliderSection from "@/Components/comman/Card/SliderSection";
import HyperlocalStrategyForm from "@/Components/comman/Form/hyperlocalStrategyForm";
import { industriesData } from "@/static/json/industries";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useMemo } from "react";

const Industry = () => {
  const router = useRouter();

  // const sellrAppSchema = useMemo(() => {
  //   return {
  //     "@context": "https://schema.org",
  //     "@type": "ItemList",
  //     url: "https://sekel.tech/product/sellrapp",
  //     itemListOrder: "http://schema.org/ItemListOrderAscending",
  //     numberOfItems: dominateMarket?.cardDataList?.length,
  //     name: dominateMarket?.sectionData?.title,
  //     description: dominateMarket?.sectionData?.description,
  //     itemListElement: dominateMarket?.cardDataList?.map((item, index) => {
  //       return {
  //         "@type": "ListItem",
  //         position: index + 1,
  //         name: item?.title,
  //         description: item?.description,
  //       };
  //     }),
  //   };
  // }, []);

  const data = industriesData.filter((item) => {
    return item.slug === router.query.slug
  })

  return (
    <div>
      {/* <HeadSection
        {...bannerOneApp}
        renderSchemaContent={() => {
          return (
            <>
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(sellrAppSchema),
                }}
                key="list-item"
              />
            </>
          );
        }}
      /> */}
      <Banner
        {...data[0]?.bannerData}
        containerStyle="container lg:pt-10 max-w-screen-xl justify-between max-md:flex-wrap"
        sectionSty="max-lg:pt-8 pb-[50px] md:pb-[60px] lg:pb-[100px]"
        imgContainerSty="max-w-full"
        imgGridSty="max-md:w-full"
        renderElement={
          <div>
            <div className="flex justify-start gap-4">
              <Button
                filled
                data="Request Demo"
                action={() => router.push("/company/contact-us")}
              />
              <Button
                data="Know More"
                clsStyle="py-2 px-8 text-white border-yellow-900"
                action={() => router.push("/company/contact-us")}
              />
            </div>
          </div>
        }
        headinWidth="md:max-w-[400px] lg:max-w-[600px] lg:mb-12 max-md:mb-8"
        descriptionSty="lg:mr-[67px] leading-[25px] mt-2 mb-6 lg:my-8 text-white"
      />
      <Breadcrumb
        breadcrumbList={[
          { link: "/", label: "Home" },
          { link: "/", label: "Industries" },
          { link: `/industries/${data[0]?.slug}`, label: data[0]?.slugLabel },
        ]}
      />
      <CardSection
        {...data[0]?.cardData?.sectionData}
        headingSty="flex items-end mx-4 gap-[60px]"
        sectionStyle="py-[50px] md:py-[60px] lg:py-[70px] bg-blue-200"
        descriptionSty="max-w-[686px] text-base font-normal leading-[22px] text-black-33 mb-[52px]"
        renderElement={() => (
          <div className={`grid pt-8 max-md:gap-3 ${ data[0]?.cardData?.gridCol ? data[0]?.cardData?.gridCol :'grid-cols-4'}`}>
            {data[0]?.cardData?.cardDataList?.map((item, index) => {
              return (
                <div className="col-span-2 md:col-span-1" key={index}>
                  <Card
                    cardDataSty="mb-0"
                    descriptionSty="text-base font-normal leading-[150%] text-black-33 mb-0"
                    titleIconSty="h-[50px] w-[50px] mb-4"
                    {...item}
                    headingSty="text-xl font-medium leading-[30px] mb-5 lg:mb-6 text-black-900"
                    cardSty="bg-blue-200 p-4 md:px-5 md:py-8 rounded-2xl border-[1px] border-white h-full"
                  />
                </div>
              );
            })}
          </div>
        )}
      />
        <CardSection
        {...data[0]?.infoData?.infoCardData}
        sectionStyle="py-[50px] md:py-[75px] lg:py-[100px]"
        titleSty="text-[42px] font-medium mb-10 leading-[52px] tracking-tighter text-black"
        descriptionSty="text-[16px] mx-auto text-black leading-[22px] text-black-33"
        renderElement={() => (
          <div className="flex max-lg:flex-wrap items-center">
            <div className="w-full max-lg:order-2 lg:w-[42%]">
              {data[0]?.infoData?.renderElement?.cardData?.map((item, index) => {
                return (
                  <Card
                    {...item}
                    headingSty="text-[20px] font-medium leading-[30px] my-3 text-black"
                    cardSty="rounded-2xl mb-3 text-black "
                    dataDivSty="w-[calc(100%_-_90px)]"
                    cardDataSty="flex gap-8"
                  />
                );
              })}
            </div>
            <div className="w-full max-lg:order-1 lg:w-[65%] pl-[40px] h-full flex flex-col justify-end mb-12 lg:mb-0">
              <div className="max-w-[700px] max-h-[700px] w-full ml-auto">
                <Image {...data[0]?.infoData?.renderElement?.image} />
              </div>
            </div>
          </div>
        )}
      />
      <SliderSection
        {...data[0]?.caseStudySlider?.sectionData}
        profileButton
        renderElement={data[0]?.caseStudySlider?.sliderCardData?.map((item, index) => {
          return <ImageCard {...item} key={index} />;
        })}
      />
      <HyperlocalStrategyForm />
    </div>
  );
};

export default Industry;
