import HeadSection from "@/Components/HeadSection";
import Banner from "@/Components/comman/Banner";
import Breadcrumb from "@/Components/comman/Breadcrumb";
import Card from "@/Components/comman/Card";
import CardSection from "@/Components/comman/Card/CardSection";
import HyperlocalSection from "@/Components/comman/Card/HyperlocalSection";
import HyperlocalStrategyForm from "@/Components/comman/Form/hyperlocalStrategyForm";
import {
  storeMicrositesBenefits,
  storeMicrositesHyperlocal,
  storeMicrositesLeverage,
  storeMicrositesBanner,
  schemaListItem,
} from "@/static/json/discoveryPlatform/storeMicrosites";
import { useMemo } from "react";

const StoreMicrosites = () => {
  const itemListSchema = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      url: "https://sekel.tech/how-it-works/discovery-platform/store-microsites",
      itemListOrder: "http://schema.org/ItemListOrderAscending",
      numberOfItems: schemaListItem?.length,
      name: "Creating A Dynamic Microsite",
      description:
        "Elevate your hyperlocal marketing with Sekel Tech's Dynamic Hyperlocal Store Microsites. Boost sales and create organic discovery for hyperlocal success.",
      itemListElement: schemaListItem?.map((item, index) => {
        return {
          "@type": "ListItem",
          position: index + 1,
          name: item?.title,
          description: item?.description,
        };
      }),
    };
  }, []);
  return (
    <>
      <HeadSection
        title="Store Microsites| Sekel Tech"
        description="Elevate your hyperlocal marketing with Sekel Tech's Dynamic Hyperlocal Store Microsites. Boost sales and create organic discovery for hyperlocal success."
        canonical={`https://sekel.tech//how-it-works/discovery-platform/store-microsites`}
        img="/logo.svg"
        renderSchemaContent={() => {
          return (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(itemListSchema),
              }}
              key="list-item"
            />
          );
        }}
      />
      <Banner
        {...storeMicrositesBanner}
        titleSty="text-[36px] lg:text-[54px] font-normal leading-[140%] mb-3 tracking-tighter"
        sectionSty="py-[50px] md:py-[60px] lg:pt-20 lg:pb-[100px]"
        containerStyle="container flex-wrap grid grid-cols-12 gap-8"
        subTitleSty="text-[28px] font-medium text-white mb-5 lg:mb-8"
        descriptionSty="mb-0 max-w-[520px]"
        imgContainerSty="md:max-w-[554px] overflow-hidden rounded-3xl w-full ml-auto"
        headinWidth="col-span-12 md:col-span-6 lg:col-span-6"
        imgGridSty="col-span-12 md:col-span-6 lg:col-span-6"
        aboutHead="md:max-w-[588px]"
      />
      <Breadcrumb
        breadcrumbList={[
          { link: "/", label: "Home" },
          { link: "/how-it-works", label: "How It Works" },
          { link: "/how-it-works/discovery-platform", label: "Discovery Platform" },
          {
            link: "/how-it-works/discovery-platform/store-microsites",
            label: "Store Microsites",
          },
        ]}
      />
      <CardSection
        {...storeMicrositesBenefits?.sectionData}
        headingSty="flex items-end justify-center mx-4 gap-[60px] text-center"
        sectionStyle="py-[50px] md:py-[60px] lg:py-[100px] bg-white"
        titleSty="text-[32px] lg:text-[42px] font-medium mb-[14px] leading-[140%] tracking-tighter text-black-33 mb-[52px]"
        renderElement={() => (
          <div className="grid grid-cols-3 gap-8">
            {storeMicrositesBenefits?.cardDataList?.map((item, index) => {
              return (
                <div className="col-span-3 md:col-span-1" key={index}>
                  <Card
                    {...item}
                    headingSty="text-[24px] lg:text-[28px] font-medium leading-[140%] mb-4 xl:mb-8 text-black-900"
                    descriptionSty="text-base font-normal leading-[150%] text-black-33"
                    cardSty="bg-gray-100 p-6 xl:px-10 xl:py-8 rounded-2xl border-[1px] border-gray-400 h-full"
                    iconSty="min-w-[55px]"
                    cardDataSty="mb-0"
                    titleIconSty="h-[95px] w-[95px] rounded-full bg-yellow-100 flex items-center justify-center mb-4 xl:mb-8 "
                  />
                </div>
              );
            })}
          </div>
        )}
      />
      <CardSection
        {...storeMicrositesLeverage?.sectionData}
        sectionStyle="py-[50px] md:py-[75px] lg:py-[100px] bg-blue-200"
        headingSty="max-w-[803px] mx-auto md:text-center mb-[32px] lg:mb-[52px]"
        renderElement={() => (
          <div className="grid gap-4 lg:gap-3 lg:grid-cols-4">
            {storeMicrositesLeverage?.cardData?.map((item, index) => {
              return (
                <div className="col-span-1" key={index}>
                  <Card
                    {...item}
                    cardDataSty=""
                    headingSty="text-[16px] md:text-[22px] lg:text-[28px] font-medium leading-[140%] mb-4 text-black-900"
                    cardSty="bg-blue-200 p-3 lg:p-5 rounded-2xl border-[1px] border-white h-full"
                    descriptionSty="text-base font-normal leading-[140%] text-black-33"
                  />
                </div>
              );
            })}
          </div>
        )}
      />
      <HyperlocalSection {...storeMicrositesHyperlocal} />
      <HyperlocalStrategyForm />
    </>
  );
};

export default StoreMicrosites;
