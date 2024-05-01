import Image from "next/image";
import { Inter } from "next/font/google";
import Card from "@/Components/comman/Card";
import Banner from "@/Components/comman/Banner/Index";
import HomeComponent from "@/Components/Home/Index";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-blue-900">
      <Banner/>
      < HomeComponent/>
    </div>
  );
}
