import Banner from "@/Components/comman/Banner/Index";
import Button from "@/Components/comman/ButtonComponent/Index";
import React from "react";

export default function Dashboard() {
  let bannerObj = {
    title: "Hyperlocation without Tech is Useless",
  };
  return (
    <div>
      <Banner
        {...bannerObj}
        // image={{
        //   src: "/marketing-img.gif",
        //   alt: "img",
        //   height: 500,
        //   width: 500,
        // }}
        containerStyle="flex-col mx:w-full items-center text-center pt-[56px]"
        desciptionSty
        headinWidth="w-[936px] mx-auto text-center mb-12"
        renderElement={
            <div>
              <div>
                <Button filled data="submit" />
                <Button data="submit" />
              </div>
              <div>
                
              </div>
            </div>
          }
        />
    
    </div>
  );
};


