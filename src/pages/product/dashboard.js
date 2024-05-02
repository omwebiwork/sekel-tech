import Banner from "@/Components/comman/Banner/Index";
import Button from "@/Components/comman/ButtonComponent/Index";
import CardSection from "@/Components/comman/Card/CardSection";
import InfoCard from "@/Components/comman/Card/InfoCard";
import GetStartForm from "@/Components/comman/Form/StartForm";
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
        description="Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500"
        image={{
          src: "/location-screen.svg",
          height: 900,
          width: 900,
          alt: "img",
        }}
        sectionStyle="py-[52px] px-[42px] rounded-[24px]"
        containerSty="p-0"
        containtWidth="max-w-[490px]"
        renderElement={
          <div className="">
            <div className="flex items-center gap-x-[13px] mb-1.5">
              <span className="h-[15px] w-[15px] rounded-full min-w-[15px] bg-[#FCFBB3]"></span>
              <Link
                href={""}
                className="text-[16px] text-blue-600 w-[calc(100%_-_30px)]"
              >
                Location level edit
              </Link>
            </div>
            <div className="flex items-center gap-x-[13px]">
              <span className="h-[15px] w-[15px] rounded-full min-w-[15px] bg-[#FCFBB3]"></span>
              <Link
                href={""}
                className="text-[16px] text-blue-600 w-[calc(100%_-_30px)]"
              >
                Location based Microsites
              </Link>
            </div>
          </div>
        }
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
        desciptionSty
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
      <CardSection
        headingSty="flex items-end mx-4 gap-[60px]"
        descriptionSty=""
        title="Key product features tab"
        desciption="Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500"
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
        description="Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500"
        image={{
          src: "/location-screen.svg",
          height: 900,
          width: 900,
          alt: "img",
        }}
        sectionStyle="py-[52px] px-[42px] rounded-[24px]"
        containerSty="p-0"
        containtWidth="max-w-[490px]"
        textContainerSty="order-2 col-span-6"
        imageContentSty="order-1 col-span-5"
        renderElement={
          <div className="">
            <div className="flex items-center gap-x-[13px] mb-1.5">
              <span className="h-[15px] w-[15px] rounded-full min-w-[15px] bg-[#FCFBB3]"></span>
              <Link
                href={""}
                className="text-[16px] text-blue-600 w-[calc(100%_-_30px)]"
              >
                Location level edit
              </Link>
            </div>
            <div className="flex items-center gap-x-[13px]">
              <span className="h-[15px] w-[15px] rounded-full min-w-[15px] bg-[#FCFBB3]"></span>
              <Link
                href={""}
                className="text-[16px] text-blue-600 w-[calc(100%_-_30px)]"
              >
                Location based Microsites
              </Link>
            </div>
            <div className="mt-10 bg-yellow-100 text-blue-600 p-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </div>
          </div>
        }
      />
    </div>
  );
}
