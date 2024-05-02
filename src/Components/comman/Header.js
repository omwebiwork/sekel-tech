import Image from "next/image";
import Link from "next/link";
import Button from "./ButtonComponent/Index";
import Dropdown from "./Dropdown";
import { useCallback } from "react";
import { useRouter } from "next/router";
let product = [
  {
    id: "1",
    name: "Dashboard",
    path: "product/dashboard",
  },
  {
    id: "2",
    name: "SellrApp",
    path: "product/sellrApp",
  },
  {
    id: "3",
    name: "Integrations",
    path: "product/integrations",
  },
];

let company = [
  {
    id: "1",
    name: "About us",
    path: "company/about-us",
  },
  {
    id: "2",
    name: "Case Studies",
    path: "company/case-studies",
  },
  {
    id: "3",
    name: "Blog",
    path: "company/blog",
  },
  {
    id: "4",
    name: "Parter Program",
    path: "company/pater-program",
  },
  {
    id: "5",
    name: "Careers",
    path: "company/careers",
  },
  {
    id: "6",
    name: "Contact Us",
    path: "company/contact-us",
  },
  {
    id: "7",
    name: "Gallery",
    path: "company/gallery",
  },
];

const Header = () => {
  let { asPath } = useRouter();

  let activeClass = useCallback(
    (activePath) => {
      // if (asPath === activePath) {
      //   return "text-white px-8 border border-1 border-yellow-900 rounded-full";
      // } else if (asPath.includes(activePath) && activePath !== "/") {
      //   return "text-white px-8 border border-1 border-yellow-900 rounded-full";
      // } else {
        return "text-white font-medium text-base";
      // }
    },
    [asPath]
  );

  console.log("router", asPath);
  return (
    <header className="bg-blue-900">
      <div class="container w-full">
        <div className=" flex py-8">
          <div className="w-[221px]">
            <Image src={"/logo.svg"} width={221} height={34} alt="logo" />
          </div>
          <div className="ml-auto ">
            <ul className="flex items-center gap-6">
              <li>
                <Link href={"/"} className={`${activeClass("/")}`}>
                  Home
                </Link>
              </li>
              <li>
                <div className={`inline-flex gap-1 ${activeClass("product")}`}>
                  <Dropdown
                    text="Products"
                    list={product}
                    image={{ src: "/Product.png", height: 176, width: 200 }}
                  />
                </div>
              </li>
              <li>
                <Link href={"/"} className="text-white font-medium text-base">
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className={`inline-flex gap-1 ${activeClass("company")}`}
                >
                  <Dropdown text="Company" list={company}  image={{ src: "/company-img.png", height: 176, width: 200 }} />
                </Link>
              </li>
              <li>
                <Link href={"/"} className="">
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
