import HeadSection from "@/Components/HeadSection";
import Banner from "@/Components/comman/Banner";
import Breadcrumb from "@/Components/comman/Breadcrumb";
import Card from "@/Components/comman/Card";
import CardSection from "@/Components/comman/Card/CardSection";
import HyperlocalStrategyForm from "@/Components/comman/Form/hyperlocalStrategyForm";
import {
  contentOptimisationBanner,
  contentOptimisationBenefits,
  contentOptimisationItemSchema,
  contentOptimisationUtilizing,
} from "@/static/json/discoveryPlatform/contentOptimisation";
import { useMemo } from "react";
CardSection;
const ContentOptimisation = () => {
  const itemListSchema = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      url: "https://sekel.tech/how-it-works/discovery-platform/content-optimisation",
      itemListOrder: "http://schema.org/ItemListOrderAscending",
      numberOfItems: contentOptimisationItemSchema?.length,
      name: "Tips for Utilizing Content Optimization",
      description:
        "Optimise your content with Sekel Tech. Attract visitors, build trust, and enhance SEO with a localised microsite experience. Boost visibility and engagement.",
      itemListElement: contentOptimisationItemSchema?.map((item, index) => {
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
        title="Content Optimization| Sekel Tech"
        description="Optimise your content with Sekel Tech. Attract visitors, build trust, and enhance SEO with a localised microsite experience. Boost visibility and engagement."
        canonical={`https://sekel.tech/how-it-works/discovery-platform/content-optimisation`}
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
        {...contentOptimisationBanner}
        titleSty="text-[36px] lg:text-[54px] font-normal leading-[140%] mb-3 tracking-tighter"
        sectionSty="py-[50px] md:py-[60px] lg:pt-20 lg:pb-[100px]"
        containerStyle="container flex-wrap grid grid-cols-11 gap-8"
        subTitleSty="text-[28px] font-medium text-white mb-5 lg:mb-8 -tracking-[0.4px]"
        descriptionSty="max-w-[424px]"
        imgContainerSty="overflow-hidden rounded-3xl w-full"
        headinWidth="col-span-12 md:col-span-6 lg:col-span-5"
        imgGridSty="col-span-12 md:col-span-6 lg:col-span-6"
        aboutHead="md:max-w-[491px]"
      />
      <Breadcrumb
        breadcrumbList={[
          { link: "/", label: "Home" },
          { link: "/how-it-works", label: "How It Works" },
          { link: "/how-it-works/discovery-platform", label: "Discovery Platform" },
          {
            link: "/how-it-works/discovery-platform/content-optimisation",
            label: "Content Optimization",
          },
        ]}
      />
      <CardSection
        {...contentOptimisationBenefits?.sectionData}
        headingSty="flex items-end justify-center mx-4 gap-[60px] text-center"
        sectionStyle="py-[50px] md:py-[60px] lg:py-[100px] bg-white"
        titleSty="text-[32px] lg:text-[42px] font-medium mb-[14px] leading-[140%] tracking-tighter text-black-33 mb-[52px]"
        renderElement={() => (
          <div className="grid grid-cols-3 gap-8">
            {contentOptimisationBenefits?.cardDataList?.map((item, index) => {
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
        {...contentOptimisationUtilizing?.sectionData}
        sectionStyle="py-[50px] md:py-[75px] lg:py-[100px] bg-blue-900"
        headingSty="max-w-[803px] mx-auto md:text-center mb-[32px] lg:mb-[52px]"
        titleSty="text-[32px] lg:text-[42px] font-medium mb-3 leading-[140%] tracking-tighter text-white"
        renderElement={() => (
          <div className="grid gap-4 lg:gap-3 grid-cols-2 lg:grid-cols-3">
            {contentOptimisationUtilizing?.cardData?.map((item, index) => {
              return (
                <div className="col-span-1" key={index}>
                  <Card
                    {...item}
                    headingSty="text-[16px] md:text-[22px] lg:text-[28px] font-medium leading-[140%] mb-4 text-white"
                    cardSty="bg-blue-900 p-3 lg:p-5 rounded-2xl border-[2px] border-white h-full"
                    descriptionSty="text-base font-normal leading-[140%] text-gray-100"
                  />
                </div>
              );
            })}
          </div>
        )}
      />
      <HyperlocalStrategyForm />
    </>
  );
};

export default ContentOptimisation;
