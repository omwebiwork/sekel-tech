import Banner from "@/Components/comman/Banner";
import Breadcrumb from "@/Components/comman/Breadcrumb";
import Button from "@/Components/comman/Button";
import CardSection from "@/Components/comman/Card/CardSection";
import InfoCard from "@/Components/comman/Card/InfoCard";
import GetStartForm from "@/Components/comman/Form/StartForm";
import HyperlocalStrategyForm from "@/Components/comman/Form/hyperlocalStrategyForm";
import {
  bannerData,
  importantFeatures,
  keyProductSectionData,
  manageInfoCard,
  oneUltimatePlatform,
  seamlessIntegration,
} from "@/static/json/dashboard";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Dashboard() {
  const router = useRouter();

  return (
    <div>
      <Banner
        {...bannerData}
        containerStyle="flex-col mx:w-full items-center text-center pt-[56px]"
        descriptionSty
        headinWidth="w-[936px] mx-auto text-center mb-12"
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
                clsStyle="py-2 px-8 text-white"
                action={() => router.push("/company/contact-us")}
              />
            </div>
          </div>
        }
      />
      <Breadcrumb
        breadcrumbList={[
          { link: "/", label: "Home" },
          { link: "/product", label: "Product" },
          { link: "/product/dashboard", label: "Dashboard" },
        ]}
      />
      <CardSection
        {...keyProductSectionData}
        headingSty="flex items-end mx-4 gap-[60px] mb-[52px] max-w-[600px]"
        descriptionSty="text-base font-normal leading-[22px] text-black-33 "
        renderElement={() => (
          <InfoCard
            {...manageInfoCard?.sectionData}
            renderFilterElement={
              <div className="flex justify-between px-4 pt-[52px]">
                {manageInfoCard?.renderFilterData?.map((item, index) => (
                  <div>
                    <Button
                      key={index}
                      data={item?.label}
                      filled={item?.active ? true : false}
                      clsStyle={`py-2 px-5 text-sm ${
                        item?.active ? "" : "bg-[#FCFBB3] text-black-33"
                      }`}
                    />
                  </div>
                ))}
              </div>
            }
            subheadTitleSty="mx-auto mr-6 text-base font-normal leading-[25px] mb-8"
            descriptionSty="mx-auto mr-6 text-base font-normal leading-[25px] "
            sectionStyle=" rounded-[24px] bg-gray-100"
            containerSty="py-[52px] px-[42px]"
            containtWidth="max-w-[490px] h-full flex flex-col justify-center"
          />
        )}
      />

      <InfoCard
        {...importantFeatures?.sectionData}
        sectionStyle="py-[100px] bg-gray-100"
        containerSty="container"
        containtWidth="max-w-[490px] h-full flex flex-col justify-center"
        descriptionSty="mx-auto mr-6 text-base font-normal leading-[25px] mb-8"
        imageContainerSty=" w-full max-w-[580px] mx-auto"
        textContainerSty="order-2 col-span-5"
        imageContentSty="order-1 col-span-6"
        renderElement={
          <div className="">
            {importantFeatures?.list.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-x-[13px] mb-1.5"
              >
                <span className="h-[15px] w-[15px] rounded-full min-w-[15px] bg-[#FCFBB3]"></span>
                <Link
                  href={item?.link}
                  className="text-[16px] text-blue-600 w-[calc(100%_-_30px)]"
                >
                  {item?.label}
                </Link>
              </div>
            ))}
            <div className="mt-8 bg-yellow-100 text-blue-600 p-4">
              {importantFeatures?.footerText}
            </div>
          </div>
        }
      />
      <InfoCard
        {...seamlessIntegration}
        sectionStyle="py-[52px] px-[42px] rounded-[24px]"
        containtWidth="max-w-[490px]"
        textContainerSty="col-span-5 flex items-center"
        descriptionSty="mb-8 text-base font-normal leading-[25px]"
        imageContainerSty="max-h-[504px] w-full max-w-[624px] rounded-[20px] overflow-hidden mx-auto"
        imageContentSty="col-span-6"
        renderElement={
          <Button
            data="View all integrations"
            clsStyle="py-3 px-8"
            filled
            action={() => {
              router.push("/product/integration");
            }}
          />
        }
      />
      <InfoCard
        {...oneUltimatePlatform}
        sectionStyle="py-[100px] bg-blue-900"
        containerSty="container "
        containtWidth=""
        titleSty="text-white text-[54px] font-normal mb-8 leading-[70px] tracking-tighter"
        descriptionSty="text-white max-w-[542px] mb-8 mr-auto text-base font-normal leading-[25px]"
        gridContainerSty="gap-0 grid grid-cols-11"
        imageContainerSty=" w-full max-w-[497px] ml-0 mx-auto"
        textContainerSty=" col-span-6"
        imageContentSty=" col-span-5 flex items-center"
        renderElement={
          <>
            <Button
              filled
              data="Request Demo"
              clsStyle="py-3 px-8"
              action={() => router.push("/company/contact-us")}
            />
            <div>
              <div className="ml-auto w-full max-w-[369px] rounded-2xl overflow-hidden">
                <Image
                  className="w-full h-full"
                  src={"/ultimate-platform2.png"}
                  height={500}
                  width={500}
                  alt="img"
                />
              </div>
            </div>
          </>
        }
      />
      <HyperlocalStrategyForm containerSty="container" />
    </div>
  );
}
