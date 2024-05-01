import Image from "next/image";
import Button from "./ButtonComponent/Index";
import Link from "next/link";

const Footer = () => {
  return (
    <>
    <footer className=" py-[100px]">
      <div className="container">
        <div className="grid grid-cols-4 gap-12">
          <div className="col-span-4 sm:col-span-2 md:col-span-1 pr-8">
            <div>
              <div className="mb-[52px] h-[95px] w-[99px]">
                <Image
                  className="h-full w-full"
                  src={"/footer-logo.png"}
                  height={95}
                  width={99}
                  alt="footer-logo"
                />
              </div>
              <div className="mb-[52px]">
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
          <div className="col-span-4 sm:col-span-2 md:col-span-1 pl-4">
            <div>
              <div className="mb-[52px] ">
                <h5 className="text-xl text-black-33 font-medium">Product</h5>
              </div>
              <div className="">
                <p className="font-normal text-base leading-[25px] mb-3 text-black-33">
                  Dashboard
                </p>
                <p className="font-normal text-base leading-[25px] mb-3 text-black-33">
                  SellerApp
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-4 sm:col-span-2 md:col-span-1 pl-4">
            <div>
              <div className="mb-[52px] ">
                <h5 className="text-xl text-black-33 font-medium">Company</h5>
              </div>
              <div className="mb-[52px]">
                <p className="font-normal text-base leading-[25px] mb-3 text-black-33">
                  Partner Programme Page
                </p>
                <p className="font-normal text-base leading-[25px] mb-3 text-black-33">
                  Competitio n Comparison Page
                </p>
                <p className="font-normal text-base leading-[25px] mb-3 text-black-33">
                  About Us
                </p>
                <p className="font-normal text-base leading-[25px] mb-3 text-black-33">
                  Case Studies
                </p>
                <p className="font-normal text-base leading-[25px] mb-3 text-black-33">
                  Contact Us
                </p>
                <p className="font-normal text-base leading-[25px] mb-3 text-black-33">
                  Careers
                </p>
                <p className="font-normal text-base leading-[25px] mb-3 text-black-33">
                  Media
                </p>
                <p className="font-normal text-base leading-[25px] mb-3 text-black-33">
                  Blogs
                </p>
              </div>
              <div className="flex items-center gap-3">
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
          <div className="col-span-4 sm:col-span-2 md:col-span-1 pl-4">
            <div>
              <div className="mb-[52px]">
                <h5 className="text-xl text-black-33 font-medium">
                  How it Works
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className=" py-5 bg-gray-100 border-t-[1px] border-gray-400">
      <div className="container">
        <div className="flex items-center">
        <h6>© 2024   Sekel Technologies Private Limited  </h6>
        <div className="ml-auto">
        <ul className="flex gap-4 items-center">
          <li>
            <Link href={'/'} className="font-normal text-base text-black-33">Terms of Service</Link>
          </li>
         
          <li>
            <Link href={'/'} className="font-normal text-base text-black-33"> Privacy Policy</Link>
          </li>
          <li>
            <Link href={'/'} className="font-normal text-sm text-black-33"> Refund & Cancellation Policy</Link>
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
