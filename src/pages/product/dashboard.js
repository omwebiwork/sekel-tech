import Banner from "@/Components/comman/Banner";
import Breadcrumb from "@/Components/comman/Breadcrumb";
import Button from "@/Components/comman/Button";
import CardSection from "@/Components/comman/Card/CardSection";
import InfoCard from "@/Components/comman/Card/InfoCard";
import GetStartForm from "@/Components/comman/Form/StartForm";
import HyperlocalStrategyForm from "@/Components/comman/Form/hyperlocalStrategyForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Dashboard() {
  let bannerObj = {
    title: "Hyperlocation without Tech is Useless",
  };

  const challengesElement = () => {
    return (
      <InfoCard
        title="Manage all locations in a single screen"
        subheadTitle="Sekel Tech offers Dynamic Listing Management (DLM), a powerful solution that helps businesses manage and update their online listings."
        description="DLM optimises online presence, attracts more customers, and improves marketing efforts"
        subheadTitleSty = "mx-auto mr-6 text-base font-normal leading-[25px] mb-8"
        descriptionSty = "mx-auto mr-6 text-base font-normal leading-[25px] "
        image={{
          src: "/location-screen.svg",
          height: 900,
          width: 900,
          alt: "img",
        }}
        sectionStyle="py-[52px] px-[42px] rounded-[24px] bg-gray-100"
        containerSty="p-0"
        containtWidth="max-w-[490px] h-full flex flex-col justify-center"
        
      />
    );
  };

  return (
    <div>
      <Banner
        {...bannerObj}
        image={{
          src: "/dashboard.png",
          alt: "img",
          height: 561,
          width: 1138,
        }}
        containerStyle="flex-col mx:w-full items-center text-center pt-[56px]"
        descriptionSty
        headinWidth="w-[936px] mx-auto text-center mb-12"
        renderElement={
          <div>
            <div className="flex justify-center gap-4">
              <Button filled data="Request Demo" />
              <Button data="Know More" />
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
        headingSty="flex items-end mx-4 gap-[60px] mb-[52px]"
        descriptionSty="text-base font-normal leading-[22px] text-black-33 "
        title="Key product features"
        description="Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500"
        headerSection={
          <div>
            <GetStartForm
              buttonTitle="Search"
              placeholder="Hyperlocation Management"
              type="text"
              inputSty="text-black-33 placeholder:text-black-33 border-gray-400"
            />
          </div>
        }
        renderElement={challengesElement}
      />

      <InfoCard
        title="Other Important Features"
        description="Sekel Cloud Infrastructure offers scalability, cost-efficiency, and enhanced security, empowering businesses to focus on innovation and growth."
        image={{
          src: "/feature-img.png",
          height: 900,
          width: 900,
          alt: "img",
        }}
        sectionStyle="py-[100px] bg-gray-100"
        containerSty="container"
        containtWidth="max-w-[490px] h-full flex flex-col justify-center"
        descriptionSty = "mx-auto mr-6 text-base font-normal leading-[25px] mb-8"
        imageContainerSty=" w-full max-w-[580px] mx-auto"
        textContainerSty="order-2 col-span-5"
        imageContentSty="order-1 col-span-6"
        renderElement={
          <div className="">
            <div className="flex items-center gap-x-[13px] mb-1.5">
              <span className="h-[15px] w-[15px] rounded-full min-w-[15px] bg-[#FCFBB3]"></span>
              <Link
                href={""}
                className="text-[16px] text-blue-600 w-[calc(100%_-_30px)]"
              >
               Role Based Access
              </Link>
            </div>
            <div className="flex items-center gap-x-[13px]">
              <span className="h-[15px] w-[15px] rounded-full min-w-[15px] bg-[#FCFBB3]"></span>
              <Link
                href={""}
                className="text-[16px] text-blue-600 w-[calc(100%_-_30px)]"
              >
                Store Locator
              </Link>
            </div>
            <div className="flex items-center gap-x-[13px]">
              <span className="h-[15px] w-[15px] rounded-full min-w-[15px] bg-[#FCFBB3]"></span>
              <Link
                href={""}
                className="text-[16px] text-blue-600 w-[calc(100%_-_30px)]"
              >
                Store2Door Omni Commerce
              </Link>
            </div>
            <div className="mt-8 bg-yellow-100 text-blue-600 p-4">
            GDPR Compliance and Data Security
            </div>
          </div>
        }
      />
      <InfoCard
        title="Seamless Integration With Your Data Systems"
        description="Elevate efficiency as our platform seamlessly blends into your existing systems, offering a streamlined and unified digital experience"
        image={{
          src: "/integration.png",
          height: 900,
          width: 900,
          alt: "integration",
        }}
        sectionStyle="py-[52px] px-[42px] rounded-[24px]"
        containtWidth="max-w-[490px]"
        textContainerSty="col-span-5 flex items-center"
        descriptionSty="mb-8 text-base font-normal leading-[25px]"
        imageContainerSty="max-h-[504px] w-full max-w-[624px] rounded-[20px] overflow-hidden mx-auto"
        imageContentSty="col-span-6"
        renderElement={
          <Button
            data="View all integrations"
            clsStyle="py-3"
            filled
            action={() => {}}
          />
        }
      />
      <InfoCard
        title="Choose all in One Ultimate  Platform"
        description="Elevate efficiency as our platform seamlessly blends into your existing systems, offering a streamlined and unified digital experience"
        image={{
          src: "/ultimate-platform1.png",
          height: 500,
          width: 500,
          alt: "img",
        }}
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
            <Button filled data="Request Demo" clsStyle="py-3" />
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
