import Image from "next/image";
import Link from "next/link";
import Button from "./ButtonComponent/Index";
import Dropdown from "./Dropdown";
import { useCallback } from "react";
import { useRouter } from "next/router";
import { product, company } from "@/static/json/header"

const Header = () => {
  let { asPath } = useRouter();

  let activeClass = useCallback(
    (activePath) => {
      if (asPath === activePath) {
        return "border border-1 border-yellow-900 rounded-full";
      } else if (asPath.includes(activePath) && activePath !== "/" && activePath !== "/how-it-works") {
        return "border border-1 border-yellow-900 rounded-full";
      } else {
        return "font-medium text-base";
      }
    },
    [asPath]
  );
  
  return (
    <header className="bg-blue-900">
      <div class="container w-full">
        <div className=" flex py-8">
          <div className="w-[221px]">
            <Image src={"/logo.svg"} width={221} height={34} alt="logo" />
          </div>
          <div className="ml-auto ">
            <ul className="flex items-center gap-x-1">
              <li>
                <Link
                  href={"/"}
                  className={`text-white px-8 py-2 ${activeClass("/")}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <div className={`${activeClass("product")}`}>
                  <Dropdown
                    text="Products"
                    list={product}
                    image={{ src: "/Product.png", height: 176, width: 200 }}
                  />
                </div>
              </li>
              <li>
                <Link
                  href={"/how-it-works"}
                  className={`text-white px-8 py-2 ${activeClass("/how-it-works")}`}
                >
                  How it works
                </Link>
              </li>
              <li>
                <div className={`${activeClass("company")}`}>
                  <Dropdown
                    text="Company"
                    list={company}
                    dropdownContainerSty="w-[668px]"
                    image={{ src: "/company-img.png", height: 176, width: 200 }}
                  />
                </div>
              </li>
              <li>
                <Link href={"/"} className="ml-3">
                  <Button filled data="Log In" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
