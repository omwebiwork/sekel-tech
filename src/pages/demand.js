import Banner from "@/Components/comman/Banner";
import Breadcrumb from "@/Components/comman/Breadcrumb";
import Button from "@/Components/comman/Button";
import InfoCard from "@/Components/comman/Card/InfoCard";
import GetStartForm from "@/Components/comman/Form/StartForm";
import HyperlocalStrategyForm from "@/Components/comman/Form/hyperlocalStrategyForm";
import {
  bannerDemand,
  demandGenerationFeature,
  demandGenerationReimagined,
  masterLocalAdvertising,
  mediaPlanning,
  sekelsWayToMaster,
} from "@/static/json/demand";
import Image from "next/image";

const { default: Card } = require("@/Components/comman/Card");
const {
  default: CardSection,
} = require("@/Components/comman/Card/CardSection");

const Demand = () => {
  let renderDemandGenerationCard = () => {
    return (
      <div>
        <div className="grid grid-cols-3 gap-5">
          {demandGenerationFeature?.cardData?.map((item, index) => {
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
        {...bannerDemand}
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
        {...demandGenerationFeature?.sectionData}
        renderElement={renderDemandGenerationCard}
      />
      <CardSection
        {...demandGenerationReimagined?.sectionData}
        headingSty="flex items-end mx-4 gap-[60px]"
        sectionStyle="py-[100px] bg-blue-200"
        titleSty="text-[28px] font-medium mb-3 leading-[30px] tracking-tighter text-black-33"
        descriptionSty="max-w-[686px] text-[28px] font-normal leading-[22px] text-black-33 mb-20"
        renderElement={() => (
          <div className="grid grid-cols-4">
            {demandGenerationReimagined?.cardData?.map((item, index) => {
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
        {...masterLocalAdvertising?.sectionData}
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
                  {...masterLocalAdvertising?.renderElementContent?.image}
                />
              </div>
            </div>
            <div className="max-w-[455px]">
              <p className="text-white text-base font-normal mb-5">
                {" "}
                {...masterLocalAdvertising?.renderElementContent?.contentText}
              </p>
              <Button filled data="Get Started" clsStyle="py-3 px-8" />
            </div>
          </>
        }
      />
      <CardSection
        {...sekelsWayToMaster?.sectionData}
        sectionStyle="pt-[100px] pb-[50px]"
        titleSty="text-start text-[42px] font-medium mb-[52px] leading-[52px] tracking-tighter text-black-33"
        renderElement={() =>
          sekelsWayToMaster?.infoCardData?.map((item, index) => {
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
                      <Image {...sekelsWayToMaster?.renderElementContantImg} />
                    </div>
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
      <CardSection
        {...mediaPlanning?.sectionData}
        sectionStyle="py-[100px] bg-blue-900 "
        titleSty="text-[42px] font-medium mb-3 leading-[52px] tracking-tighter text-white"
        descriptionSty="w-[456px] mx-auto text-white leading-[22px] text-black-33"
        renderElement={() => (
          <div className="flex items-center">
            <div className="w-[42%]">
              {mediaPlanning?.renderElement?.cardData?.map((item, index) => {
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
                <Image {...mediaPlanning?.renderElement?.image} />
              </div>
              <div className="max-w-[438px] ml-auto mt-8 p-4 rounded-[8px] bg-white bg-opacity-10 border-[1px] border-white">
                <p className="text-base text-yellow-900 font-normal">
                  {mediaPlanning?.renderElement.text}
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
