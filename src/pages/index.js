import Banner from "@/Components/comman/Banner";
import Button from "@/Components/comman/Button";
import HomeComponent from "@/Components/Home/Index";
import { bannerData } from "@/static/json/home";

export default function Home() {
  return (
    <div className="bg-blue-900 pt-8 md:pt-[56px]">
      <Banner
        {...bannerData}
        subTitleSty="text-base font-medium leading-[140%] text-yellow-900"
        descriptionSty="text-base font-medium leading-[140%] text-yellow-900"
        containerStyle="flex-col mx:w-full items-center"
        headinWidth="max-md:px-3 max-w-[665px] mx-auto mb-6 md:mb-12"
        sectionSty="md:text-center"
        renderElement={
          <div className="pt-4">
            <Button data="Request Demo" filled></Button>
          </div>
        }
      />
      <HomeComponent />
    </div>
  );
}
