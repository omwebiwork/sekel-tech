import Image from "next/image";
import { Inter } from "next/font/google";
import Card from "@/Components/comman/Card";
import Banner from "@/Components/comman/Banner/Index";
import HomeComponent from "@/Components/Home/Index";
import GetStartForm from "@/Components/comman/Form/StartForm";

const inter = Inter({ subsets: ["latin"] });
let bannerObj = {
  title: "Unlock Local Market Dominance with Geo-Fenced Marketing Magic",
  desciption: `Effortlessly Convert Searches into Local Sales`,
};

export default function Home() {
  return (
    <div className="bg-blue-900">
      <Banner
        {...bannerObj}
        image={{
          src: "/marketing-img.gif",
          alt: "img",
          height: 500,
          width: 500,
        }}
        containerStyle="flex-col mx:w-full items-center text-center"
        headinWidth="w-[936px] mx-auto text-center mb-12"
      />
      <HomeComponent />
    </div>
  );
}
