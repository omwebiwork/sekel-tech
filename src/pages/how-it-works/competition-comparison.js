import Banner from "@/Components/comman/Banner";
import Breadcrumb from "@/Components/comman/Breadcrumb";
import GetStartForm from "@/Components/comman/Form/StartForm";
import HyperlocalStrategyForm from "@/Components/comman/Form/hyperlocalStrategyForm";

import Card from "@/Components/comman/Card";
import CardSection from "@/Components/comman/Card/CardSection";
import {
  competitionComparisonBanner,
  competitionComparisonHeading,
  competitionComparisonSay,
  readySection,
} from "@/static/json/competitionComparison";
import Image from "next/image";
import Button from "@/Components/comman/Button";
import { competitionComparison, competitionData } from "@/static/json/home";
const CompetitionComparison = () => {
  //   const itemListSchema = useMemo(() => {
  //     return {
  //       "@context": "https://schema.org",
  //       "@type": "ItemList",
  //       url: "https://sekel.tech/demand-generation",
  //       itemListOrder: "http://schema.org/ItemListOrderAscending",
  //       numberOfItems: demandGenerationFeature?.cardData?.length,
  //       name: "Demand Generation - Empowering Demand in a Hyperlocal World",
  //       description:
  //         "Unlock demand like never before with Sekel Tech's Hyperlocal Dynamic Engagement Commerce platform. Unleash the potential of privacy sandbox retargeting, transforming unknown leads into valuable connections. Join us in revolutionising the way you engage with your audience!",
  //       itemListElement: demandGenerationFeature?.cardData?.map((item, index) => {
  //         return {
  //           "@type": "ListItem",
  //           position: index + 1,
  //           name: item?.title,
  //           description: item?.description,
  //         };
  //       }),
  //     };
  //   }, []);

  const renderCompetition = () => {
    return (
      <section className="pt-[40px]">
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
                    {competitionData?.sidebar?.map((sidebar, index) => (
                      <div
                        key={index}
                        className="relative py-2 px-3 flex items-center text-black-33 font-medium mb-4 tracking-tighter border-b border-white"
                      >
                        <Image
                          src={"/arrow.svg"}
                          height={24}
                          width={24}
                          alt="arrow"
                        />
                        <div className="text-[14px] lg:text-[16px] w-[calc(100%_-_24px)] pl-3 text-ellipsis overflow-hidden">
                          {sidebar?.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2 border-b border-blue-100">
              <div className="px-8 py-8 lg:px-[60px] lg:py-[34px]">
                <div className="grid grid-cols-2">
                  <div className="col-span-1">
                    <div className="pb-8 h-[68px]">
                      <h2 className="text-white font-medium text-[20px]">
                        Typicaly Agency
                      </h2>
                    </div>
                    <div className="pt-4 border-t-[2px] border-white">
                      {competitionData?.typicalyAgency?.map((item, index) => (
                        <div
                          key={index}
                          className="relative py-2 px-3 flex items-center gap-x-[16px] text-white font-medium text-[16px] mb-4 tracking-tighter line-clamp-1 border-b border-white"
                        >
                          <Image
                            src={item?.active ? "/check.svg" : "/close.svg"}
                            height={24}
                            width={24}
                            alt="check"
                          />
                          <div className="text-[14px] lg:text-[16px] w-[calc(100%_-_24px)] pl-3 text-ellipsis overflow-hidden">
                            {item?.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="pb-8 h-[68px]">
                      <h2 className="text-white font-medium text-[20px]">
                        Other Softwares
                      </h2>
                    </div>
                    <div className="pt-4 border-t-[2px] border-white">
                      {competitionData?.otherSoftwares?.map((item, index) => (
                        <div
                          key={index}
                          className="relative py-2 px-3 flex items-center gap-x-[16px] text-white font-medium text-[16px] mb-4 tracking-tighter line-clamp-1 border-b border-white"
                        >
                          <Image
                            src={item?.active ? "/check.svg" : "/close.svg"}
                            height={24}
                            width={24}
                            alt="check"
                          />
                          <div className="text-[14px] lg:text-[16px] w-[calc(100%_-_24px)] pl-3 text-ellipsis overflow-hidden">
                            {item?.label}
                          </div>
                        </div>
                      ))}
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
                    <button className="bg-yellow-900 h-[60px] w-[60px] min-w-[60px] border border-yellow-900 rounded-full flex items-center justify-center">
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
      {/* <HeadSection
        title="Demand Generation Platform | Sekel Tech"
        description="Revolutionise audience engagement with Sekel Tech's Demand Generation Platform. Unlock hyperlocal demand, turning unknown leads into valuable connections."
        renderSchemaContent={() => {
          return (
            <>
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(itemListSchema),
                }}
                key="list-item"
              />
            </>
          );
        }} 
      />*/}
      <Banner
        {...competitionComparisonBanner}
        sectionSty="py-[50px] lg:py-[65px] xl:pb-[100px] lg:pt-[52px]"
        containerStyle="container grid grid-cols-11 gap-4 justify-between"
        descriptionSty="lg:mr-16 mb-10"
        imgContainerSty="ml-auto lg:max-w-[522px] lg:max-h-[418px] w-full"
        renderElement={
          <>
            <div className="pl-5 pb-8">
              <ul className="list-disc">
                {competitionComparisonBanner?.descriptionContentList?.map(
                  (item, index) => (
                    <li key={index}>{item?.title}</li>
                  )
                )}
              </ul>
            </div>
            <GetStartForm buttonTitle="Get started" />
          </>
        }
        headinWidth="max-lg:order-2 col-span-11 lg:col-span-5 w-full lg:mb-12"
        imgGridSty="max-lg:order-1 lg:col-span-6 col-span-11 max-lg:mb-10"
        titleSty="text-[36px] lg:text-[42px] xl:text-[54px] font-normal leading-[140%] mb-4 tracking-tighter"
      />
      <Breadcrumb
        breadcrumbList={[
          { link: "/", label: "Home" },
          { link: "/how-it-works", label: "How it works" },
          {
            link: "/how-it-works/competition-comparison",
            label: "Competition Comparison",
          },
        ]}
      />
      <CardSection
        {...competitionComparisonSay?.sectionData}
        headingSty="flex items-end mx-4 gap-[60px]"
        sectionStyle="py-[50px] md:py-[60px] lg:py-[100px] bg-blue-200"
        descriptionSty="max-w-[686px] text-base font-normal leading-[22px] text-black-33 mb-[52px]"
        titleSty="text-[32px] lg:text-[42px] font-medium mb-[80px] leading-[140%] tracking-tighter text-black-33"
        renderElement={() => (
          <div className="grid grid-cols-4 max-md:gap-3">
            {competitionComparisonSay?.cardDataList?.map((item, index) => {
              return (
                <div className="col-span-2 md:col-span-1" key={index}>
                  <Card
                    cardDataSty="mb-0"
                    descriptionSty="text-base font-normal leading-[150%] text-black-33 mb-0"
                    titleIconSty="h-[60px] w-[60px] rounded-full bg-[#F7603B] flex items-center justify-center mb-4 lg:mb-6"
                    {...item}
                    headingSty="text-xl font-medium leading-[30px] mb-5 lg:mb-8 text-black-900"
                    cardSty="bg-blue-200 p-5 rounded-2xl border-[1px] border-white h-full"
                  />
                </div>
              );
            })}
          </div>
        )}
      />

      <CardSection
        {...competitionComparison}
        containerSty="border-b border-gray-400"
        renderElement={renderCompetition}
      />

      <CardSection
        {...competitionComparisonHeading?.sectionData}
        headingSty="flex items-end mx-4 gap-[60px] mb-[68px]"
        sectionStyle="py-[50px] md:py-[60px] lg:py-[100px] bg-white"
        descriptionSty="text-base font-normal leading-[140%] text-black-33 mx-auto"
        renderElement={() => (
          <div className="grid grid-cols-3 max-md:gap-3 gap-5">
            {competitionComparisonHeading?.cardDataList?.map((item, index) => {
              return (
                <div className="col-span-2 md:col-span-1" key={index}>
                  {item?.buttonList?.length > 0 ? (
                    <div>
                      {item?.buttonList?.map((btnItem, btnIndex) => (
                        <div
                          key={btnIndex}
                          className="flex mb-2 w-full justify-between bg-gray-100 p-4 md:px-5 md:py-3 rounded-2xl border-[1px] border-white h-full"
                        >
                          <div>{btnItem?.label}</div>
                          <Image src="/blue-arrow.svg" width={23} height={23} />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <Card
                      {...item}
                      cardDataSty="mb-0"
                      descriptionSty="text-base font-normal leading-[150%] text-black-33 mb-0"
                      titleIconSty="h-[60px] w-[60px] rounded-full bg-[#F7603B] flex items-center justify-center mb-4 lg:mb-6"
                      headingSty="text-xl font-medium leading-[30px] mb-5 lg:mb-8 text-black-900"
                      cardSty="bg-gray-100 p-4 md:px-5 md:py-8 rounded-2xl border border-gray-400 h-full"
                      renderElement={
                        <>
                          <div className="">
                            <ul className="p-0">
                              {item?.list?.map((listItem, listIndex) => (
                                <li
                                  className="list-['-_'] list-inside"
                                  key={listIndex}
                                >
                                  {listItem?.title}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex gap-1 text-blue-600 pt-4">
                            Know More
                            <Image
                              src="/blue-arrow.svg"
                              width={23}
                              height={23}
                            />
                          </div>
                        </>
                      }
                    />
                  )}
                </div>
              );
            })}
          </div>
        )}
      />

      <Banner
        {...readySection}
        containerStyle="container flex-col mx:w-full items-center text-center pt-[56px]"
        descriptionSty="text-[16px] mb-5"
        sectionSty="py-[40px]"
        imgContainerSty="max-w-[1080px] mx-auto"
        imgGridSty="max-xl:px-6 w-full"
        headinWidth="max-w-[489px] mx-auto text-center"
        titleSty="text-[28px] font-semibold leading-[140%] mb-5 tracking-tighter"
        renderElement={
          <div>
            <div className="flex justify-center gap-4">
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
      />

      <HyperlocalStrategyForm />
    </>
  );
};

export default CompetitionComparison;
