import Banner from "@/Components/comman/Banner";
import Breadcrumb from "@/Components/comman/Breadcrumb";
import Button from "@/Components/comman/Button";
import Card from "@/Components/comman/Card";
import CardSection from "@/Components/comman/Card/CardSection";
import ImageCard from "@/Components/comman/Card/ImageCard";
import InfoCard from "@/Components/comman/Card/InfoCard";
import SliderSection from "@/Components/comman/Card/SliderSection";
import HyperlocalStrategyForm from "@/Components/comman/Form/hyperlocalStrategyForm";
import {
  bannerOneApp,
  beyondSlider,
  chooseSellrApp,
  dealerSuccess,
  dominateMarket,
  sekelDealer,
} from "@/static/json/sellrApp";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const SellrApp = () => {
  const router = useRouter();

  const renderCard = () => {
    return (
      <div>
        <div className="grid grid-cols-3 gap-5">
          {dealerSuccess?.cardDataList?.map((item, index) => {
            return (
              <div className={`${index === 1 ? "col-span-2" : "col-span-1"}`}>
                <Card
                  key={index}
                  {...item}
                  headingSty={
                    "mb-8 tracking-tighter leading-[30px] text-[28px] text-black-33 font-medium"
                  }
                  cardSty={`${
                    index === 1 ? "flex gap-10" : ""
                  } rounded-xl p-5 pt-[52px] ${
                    index === 0 || index === 3 ? "bg-yellow-100" : ""
                  }  h-full bg-gray-100`}
                  cardDataSty={`${index === 1 ? "w-1/2" : ""}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div>
      <Banner
        {...bannerOneApp}
        containerStyle="container justify-between"
        sectionSty={"pb-[100px]"}
        renderElement={
          <div className="flex gap-8">
            <button
              className="h-[57px] w-[188px] rounded-lg overflow-hidden"
              // onClick={() =>
              //   window.open(
              //     "",
              //     "_blank"
              //   )
              // }
            >
              <Image
                src={"/google-store.png"}
                height={57}
                width={188}
                alt="btn"
              />
            </button>
            <button
              className="h-[57px] w-[188px] rounded-lg overflow-hidden"
              // onClick={() =>
              //   window.open(
              //     "",
              //     "_blank"
              //   )
              // }
            >
              <Image src={"/app-store.png"} height={57} width={188} alt="btn" />
            </button>
          </div>
        }
        headinWidth="max-w-[443px] mb-12"
        descriptionSty="mr-[67px] leading-[25px] mt-8 text-yellow-900 mb-8"
      />
      <Breadcrumb
        breadcrumbList={[
          { link: "/", label: "Home" },
          { link: "/product", label: "Product" },
          { link: "/product/SellrApp", label: "SellrApp" },
        ]}
      />
      <CardSection
        {...dominateMarket?.sectionData}
        headingSty="flex items-end mx-4 gap-[60px]"
        sectionStyle="py-[100px] bg-blue-200"
        descriptionSty="max-w-[686px] text-base font-normal leading-[22px] text-black-33 mb-[52px]"
        renderElement={() => (
          <div className="grid grid-cols-4">
            {dominateMarket?.cardDataList?.map((item, index) => {
              return (
                <div className="col-span-1" key={index}>
                  <Card
                    {...item}
                    headingSty="text-xl font-medium leading-[30px] mb-8 text-black-900"
                    cardSty="bg-blue-200 px-5 py-8 rounded-2xl border-[1px] border-white h-full"
                  />
                </div>
              );
            })}
          </div>
        )}
      />
      <CardSection
        {...dealerSuccess?.sectionData}
        renderElement={renderCard}
        descriptionSty="w-full text-base font-normal leading-[22px] text-black-33"
      />

      <section className="bg-blue-900 py-20">
        <div className="container">
          <div className=" mb-[52px] ">
            <h3 className="text-[42px] font-medium mb-5 leading-[52px] tracking-tighter text-white">
              {chooseSellrApp?.sectionData?.title}
            </h3>
            <p className="text-base font-normal leading-[22px] max-w-[722px] text-white">
              {chooseSellrApp?.sectionData?.description}
            </p>
          </div>
          <div className="flex items-center">
            <div className="w-1/3">
              <ul className="pr-24">
                {chooseSellrApp?.list?.leftContent?.map((item, index) => (
                  <li
                    key={index}
                    className={`flex items-center justify-end gap-4 ${
                      index === chooseSellrApp?.list?.leftContent.length - 1
                        ? ""
                        : "mb-9"
                    }  text-xl font-medium text-white relative after:content[''] after:absolute after:-right-[130px] after:w-[115px] after:z-10 after:border-b-[1px] after:border-blue-100`}
                  >
                    {item?.label}
                    <Image
                      className=" w-16 "
                      src={item?.src}
                      height={64}
                      width={64}
                      alt="img"
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-1/3">
              <div className="max-w-[359px] mx-auto">
                <Image
                  className="h-full w-full object-cover"
                  src={chooseSellrApp?.contanierImage}
                  height={500}
                  width={500}
                  alt="img"
                />
              </div>
            </div>
            <div className="w-1/3">
              <ul className="pl-24">
                {chooseSellrApp?.list?.rightContent?.map((item, index) => (
                  <li
                    key={index}
                    className={`flex items-center gap-4 ${
                      index === chooseSellrApp?.list?.rightContent - 1
                        ? ""
                        : "mb-9"
                    } text-xl font-medium text-white relative after:content[''] after:absolute after:-left-[130px] after:w-[115px] after:z-10 after:border-b-[1px] after:border-blue-100`}
                  >
                    <Image
                      className=" w-16 "
                      src={item?.src}
                      height={64}
                      width={64}
                      alt="img"
                    />
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <InfoCard
        {...sekelDealer?.infoCardData}
        sectionStyle="py-[52px] px-[42px] rounded-[24px] bg-gray-100"
        containtWidth="max-w-[490px]"
        titleSty="text-[42px] font-medium leading-[52px] tracking-tighter text-black-33 mb-8"
        descriptionSty="mb-8 text-base font-normal leading-[25px]"
        imageContainerSty="max-h-[535px] max-w-[673px] mx-auto"
        imageContentSty="col-span-7 h-full flex items-center"
        textContainerSty="col-span-4 h-full "
        renderElement={
          <>
            <ul className="list-disc pl-6 mb-8">
              {sekelDealer?.listData?.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="text-xl font-medium text-black-33 leading-[25px] mb-6"
                  >
                    {item.title}
                  </li>
                );
              })}
            </ul>
            <Button
              filled
              data={"Book a Demo"}
              action={() => router.push("/company/contact-us")}
            />
          </>
        }
      />
      <SliderSection
        {...beyondSlider?.sectionData}
        textContentSty="col-span-3"
        discriptionSty="w-full"
        cardContentSty="col-span-7 pl-8"
        renderElement={beyondSlider?.listData?.map((item, index) => {
          return (
            <ImageCard
              {...item}
              key={index}
              imgContainerSty="w-[252px] min-w-[252px]"
              containerSty=" h-auto w-[252px] min-w-[252px]"
            />
          );
        })}
      />
      <HyperlocalStrategyForm />
    </div>
  );
};

export default SellrApp;
