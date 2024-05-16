import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { company, product } from "@/static/json/header";

const Footer = () => {
  let renderNavigationLinks = (reidrectPath, name, index) => {
    return (
      <p
        className="font-normal text-base leading-[25px] mb-3 text-black-33"
        key={index}
      >
        <Link href={reidrectPath}>{name}</Link>
      </p>
    );
  };
  return (
    <>
      <footer className="max-md:bg-gray-100 max-lg:px-[15px] py-[40px] md:py-[60px] lg:py-[100px]">
        <div className="container">
          <div className="grid grid-cols-4 gap-6 lg:gap-12">
            <div className="col-span-4 md:col-span-1 lg:pr-8">
              <div>
                <div className="mb-4 lg:mb-[52px] h-[95px] w-[99px]">
                  <Image
                    className="h-full w-full"
                    src={"/footer-logo.png"}
                    height={95}
                    width={99}
                    alt="footer-logo"
                  />
                </div>
                <div className="mb-4 lg:mb-[52px]">
                  <p className="font-normal text-base leading-[25px] mb-6 text-black-33">
                    91 Springboard, Creaticity Mall Yerawada, Pune
                    Maharashtra-411006
                  </p>
                  <p className="font-medium text-base leading-[22px] mb-6 text-black-33">
                    P_ +91-794-256-9371
                  </p>
                </div>
                <Button filled data="Contact us" />
              </div>
            </div>
            <div className="col-span-4 md:col-span-1 lg:pl-4">
              <div className="max-md:border-b max-md:border-[#A3ACB1]/60">
                <div className="py-6 lg:mb-[52px] flex items-center justify-between">
                  <h5 className="text-xl text-black-33 font-medium">Product</h5> <span className="lg:hidden"><Image src={'/chevron-down.svg'} height={25} width={25} alt="" /></span>
                </div>
                <div className="max-md:hidden">
                  {product?.map((item, index) =>
                    renderNavigationLinks(item?.redirectPath, item?.name, index)
                  )}

                  {/* <p className="font-normal text-base leading-[25px] mb-3 text-black-33">
                  SellerApp
                </p> */}
                </div>
              </div>
            </div>
            <div className="col-span-4 md:col-span-1 lg:pl-4">
              <div className="max-md:border-b max-md:border-[#A3ACB1]/60">
                <div className="py-6 lg:mb-[52px] flex items-center justify-between">
                  <h5 className="text-xl text-black-33 font-medium">Company</h5> <span className="lg:hidden"><Image src={'/chevron-down.svg'} height={25} width={25} alt="" /></span>
                </div>
                <div className="max-md:hidden lg:mb-[52px]">
                  <p className="font-normal text-base leading-[25px] mb-3 text-black-33">
                    Partner Programme Page
                  </p>
                  <p className="font-normal text-base leading-[25px] mb-3 text-black-33">
                    Competitio n Comparison Page
                  </p>
                  {company?.map((item, index) =>
                    renderNavigationLinks(item?.redirectPath, item?.name, index)
                  )}
                </div>
                <div className="hidden md:flex items-center gap-3">
                  <div className="rounded-full overflow-hidden h-8 w-8 min-w-8">
                    <Image
                      className="h-full w-full"
                      src={"/x-icon.png"}
                      height={32}
                      width={32}
                      alt="footer-logo"
                    />
                  </div>
                  <div className="rounded-full overflow-hidden h-8 w-8 min-w-8">
                    <Image
                      className="h-full w-full"
                      src={"/linkedin-icon.png"}
                      height={32}
                      width={32}
                      alt="footer-logo"
                    />
                  </div>
                  <div className="rounded-full overflow-hidden h-8 w-8 min-w-8">
                    <Image
                      className="h-full w-full"
                      src={"/facebook-icon.png"}
                      height={32}
                      width={32}
                      alt="footer-logo"
                    />
                  </div>
                  <div className="rounded-full overflow-hidden h-8 w-8 min-w-8">
                    <Image
                      className="h-full w-full"
                      src={"/instagram-icon.png"}
                      height={32}
                      width={32}
                      alt="footer-logo"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4 md:col-span-1 lg:pl-4">
              <div>
                <div className="py-6 lg:mb-[52px]">
                  <h5 className="text-xl text-black-33 font-medium">
                    How it Works
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-8 px-3 lg:py-5 md:bg-gray-100 border-t-[1px] border-gray-400">
        <div className="container">
          <div className="flex max-lg:flex-wrap items-center">
            <div className="md:hidden flex items-center justify-between max-lg:order-2 w-full max-lg:mb-8">
              <div>
                <h4 className="text-base font-normal leading-[25px] mx-auto text-black-33">
                  Follow us:
                </h4>
              </div>
              <div className="flex items-center gap-3 max-md:order-2">
                <div className="rounded-full overflow-hidden h-8 w-8 min-w-8">
                  <Image
                    className="h-full w-full"
                    src={"/x-icon.png"}
                    height={32}
                    width={32}
                    alt="footer-logo"
                  />
                </div>
                <div className="rounded-full overflow-hidden h-8 w-8 min-w-8">
                  <Image
                    className="h-full w-full"
                    src={"/linkedin-icon.png"}
                    height={32}
                    width={32}
                    alt="footer-logo"
                  />
                </div>
                <div className="rounded-full overflow-hidden h-8 w-8 min-w-8">
                  <Image
                    className="h-full w-full"
                    src={"/facebook-icon.png"}
                    height={32}
                    width={32}
                    alt="footer-logo"
                  />
                </div>
                <div className="rounded-full overflow-hidden h-8 w-8 min-w-8">
                  <Image
                    className="h-full w-full"
                    src={"/instagram-icon.png"}
                    height={32}
                    width={32}
                    alt="footer-logo"
                  />
                </div>
              </div>
            </div>
            <h6 className="max-lg:order-3">
              © 2024 Sekel Technologies Private Limited
            </h6>
            <div className="ml-auto max-lg:w-full max-lg:order-1">
              <ul className="max-lg:flex-wrap flex max-lg:mb-8 gap-8 lg:gap-4 items-center">
                <li>
                  <Link
                    href={"/"}
                    className="font-normal text-base text-black-33"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="font-normal text-base text-black-33"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="font-normal text-base text-black-33"
                  >
                    Refund & Cancellation Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
