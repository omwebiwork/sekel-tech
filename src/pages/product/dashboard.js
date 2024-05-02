import Banner from "@/Components/comman/Banner/Index";
import Button from "@/Components/comman/ButtonComponent/Index";
import CardSection from "@/Components/comman/Card/CardSection";
import Image from "next/image";
import React from "react";

export default function Dashboard() {
  let bannerObj = {
    title: "Hyperlocation without Tech is Useless",
  };

  const challengesElement = () => {
    return (
      <div className="grid grid-cols-16 gap-5 mb-8">
      
      </div>
    );
  };

  return (
    <div>
      <Banner
        {...bannerObj}
        image={{
          src: "/dashboard.png",
          alt: "img",
          height:561,
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
              <div>
                {/* <div>
                  <Image src={} height={} width={} alt="img"/>
                </div>
                <div>
                  <Image src={} height={} width={} alt="img"/>
                </div>
                <div>
                  <Image src={} height={} width={} alt="img"/>
                </div> */}
              </div>
            </div>
          }
        />
          <CardSection
        headingSty=""
        descriptionSty=""
        title="Key product features tab"
        desciption="Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500"
        renderElement={challengesElement}
      />
    
    </div>
  );
};


