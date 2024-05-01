import Image from "next/image";
import React from "react";
import Card from "@/Components/comman/Card";
import { useCallback, useState } from "react";
import DownArrow from "@/assets/DownArrow";
import Button from "../comman/ButtonComponent/Index";

const HomeComponent = () => {
  const [learnMore, setLearnMore] = useState(false);
  let [cardData, setCardData] = useState([
    {
      title: "Get Discovered",
      description:
        "Making sure you dominate the search results organically across google search products which drives greater hyperlocal visibility and conversions.",
    },
    {
      title: "Plug & Play Data",
      description:
        "Making sure all dealer, product, and lead data is captured, we seamlessly integrate it with your CRM, DMS, CDP, and LMS for effortless data flow and management. And get a single view. ",
    },
    {
      title: "Generate Demand",
      description:
        "Making sure your brand stands out, by utilising features like targeted Google and Meta campaigns to boost demand and generate more walkins ",
    },
  ]);

  const handleLearnMore = useCallback((index) => {
    if (learnMore[index]) {
      setLearnMore({ [index]: false });
    } else {
      setLearnMore({ [index]: true });
    }
  });
  return (
    <>
      <section className="pt-[88px]">
        <div className="w-[936px] mx-auto text-center mb-12">
          <h2 className="text-[54px] mb-4 font-normal text-white tracking-tighter leading-[70px]">
            Unlock Local Market Dominance with Geo-Fenced Marketing Magic
          </h2>
          <p className="text-base font-medium text-yellow-900">
            Effortlessly Convert Searches into Local Sales
          </p>
        </div>
        <div className="w-full">
          <Image
            className="w-full"
            src={"/marketing-img.gif"}
            height={500}
            width={500}
            alt="img"
          />
        </div>
      </section>
      <section className="py-[100px] bg-white">
        <div className="container">
          <div className="text-center mb-[52px]">
            <h3 className="text-[42px] font-medium mb-3 leading-[52px] tracking-tighter text-black-33">
              Data, Discovery and Demand Story
            </h3>
            <p className="text-base font-normal leading-[22px] w-[456px] mx-auto text-black-33">
              Making sure you dominate the search results organically across
              google search products{" "}
            </p>
          </div>
          <div>
            <div className="grid grid-cols-3 gap-8">
              {cardData?.map((item, index) => {
                return (
                  <div className="col-span-1">
                    <Card
                      key={index}
                      cardData={item}
                      actionType="Learn more"
                      action={() => handleLearnMore(index)}
                      learnMore={learnMore[index]}
                      buttonIcon={<DownArrow />}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[100px] bg-white">
        <div className="container">
          <div className="grid grid-cols-10 gap-6">
            <div className="col-span-4">
              <div className=" w-[479px]">
                <h3 className="text-[42px] font-medium mb-4 leading-[52px] tracking-tighter text-black-33">
                  Beyond Tehnology Business Transformation
                </h3>
                <p className="text-base font-normal leading-[21px] mb-8 mx-auto text-black-33 mr-6">
                  SellrApp provides data & insights for superior
                  decision-making, driving complete business transformation.
                  SellrApp is not just a technology point solution, but a
                  complete business transformation tool. It can help companies
                  achieve their business goals.
                </p>
                <div className="flex gap-8">
                  <button className="h-[57px] w-[188px] rounded-lg overflow-hidden">
                    <Image
                      src={"/google-store.png"}
                      height={57}
                      width={188}
                      alt="btn"
                    />
                  </button>
                  <button className="h-[57px] w-[188px] rounded-lg overflow-hidden">
                    <Image
                      src={"/app-store.png"}
                      height={57}
                      width={188}
                      alt="btn"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-6">
              <div className="h-[448px] w-[692px]">
                <Image
                  className="w-full h-full"
                  src={"/business-transformation.gif"}
                  height={448}
                  width={692}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-yellow-100 h-[46px]"></div>
      </section>
      <section className="py-[100px] bg-white">
        <div className="container">
            <div className="mb-[52px]">
              <h3 className="text-[42px] font-medium mb-3 leading-[52px] tracking-tighter text-black-33">Challenges Q/A</h3>
              <p className="text-base font-normal leading-[22px] text-black-33 ">Making sure you dominate the search results organically across google search products Making sure you dominate the s</p>
            </div>
            <div>
              
            </div>
        </div>
      </section>
      <section className="bg-blue-900 py-[54px]">
        <div className="container">
          <div className="grid grid-cols-10">
            <div className="col-span-4">
              <div className="w-[479px] h-full flex flex-col justify-center text-white">
                <h1 className="text-[42px] font-medium tracking-tighter leading-[55px] mb-5">
                  Key Success Metrics Case Studies
                </h1>
                <p className="text-base font-normal leading-[25px] mb-[52px] w-1/2">
                  How Sekel Tech helped to increase the clients’ ROI
                </p>
                <div className="flex gap-10 items-center">
                  <p className="text-base font-semibold leading-[22px]">
                    See all Case studies
                  </p>

                  <button className="bg-yellow-900  h-8 w-8 border border-1 border-yellow-900 rounded-full flex items-center justify-center">
                    <Image
                      className="w-6 "
                      src={"/forward-arrow.png"}
                      height={24}
                      width={24}
                      alt="img"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-6">
              <div className="w-full flex gap-5 overflow-x-auto pb-5 ">
                <div>
                  <div className="max-w-[388px] p-5 bg-blue-100 bg-opacity-10 rounded-xl">
                    <div className="mb-5 w-full h-[304px] rounded-lg overflow-hidden">
                      <Image
                        className="w-full h-full object-cover object-center"
                        src={"/case-studies-1.png"}
                        height={304}
                        width={348}
                        alt="img"
                      />
                    </div>
                    <div className="flex gap-2 justify-between items-center">
                      <div className="w-[110px]">
                        <Image
                          className="w-full h-full"
                          src={"/kalyan-logo.png"}
                          height={448}
                          width={692}
                          alt="img"
                        />
                      </div>
                      <div className="flex items-center gap-4">
                        <p className="text-base font-normal text-white w-16">
                          Increase ROI by
                        </p>
                        <p className="text-[54px] font-normal leading-[60px] text-white">
                          31x
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="max-w-[388px] p-5 bg-blue-100 bg-opacity-10 rounded-xl">
                    <div className="mb-5 w-full h-[304px] rounded-lg overflow-hidden">
                      <Image
                        className="w-full h-full object-cover object-center"
                        src={"/case-studies-1.png"}
                        height={304}
                        width={348}
                        alt="img"
                      />
                    </div>
                    <div className="flex gap-2 justify-between items-center">
                      <div className="w-[110px]">
                        <Image
                          className="w-full h-full"
                          src={"/kalyan-logo.png"}
                          height={448}
                          width={692}
                          alt="img"
                        />
                      </div>
                      <div className="flex items-center gap-4">
                        <p className="text-base font-normal text-white w-16">
                          Increase ROI by
                        </p>
                        <p className="text-[54px] font-normal leading-[60px] text-white">
                          31x
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="max-w-[388px] p-5 bg-blue-100 bg-opacity-10 rounded-xl">
                    <div className="mb-5 w-full h-[304px] rounded-lg overflow-hidden">
                      <Image
                        className="w-full h-full object-cover object-center"
                        src={"/case-studies-1.png"}
                        height={304}
                        width={348}
                        alt="img"
                      />
                    </div>
                    <div className="flex gap-2 justify-between items-center">
                      <div className="w-[110px]">
                        <Image
                          className="w-full h-full"
                          src={"/kalyan-logo.png"}
                          height={448}
                          width={692}
                          alt="img"
                        />
                      </div>
                      <div className="flex items-center gap-4">
                        <p className="text-base font-normal text-white w-16">
                          Increase ROI by
                        </p>
                        <p className="text-[54px] font-normal leading-[60px] text-white">
                          31x
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[100px] bg-white">
        <div className="container">
          <div className="grid grid-cols-10 gap-6 mb-5">
            <div className="col-span-4">
              <div className=" w-[479px] h-full flex flex-col justify-center">
                <h3 className="text-[42px] font-medium mb-[44px] leading-[52px] tracking-tighter text-black-33">
                  About Sekel
                </h3>
                <p className="text-base font-normal leading-[25px] mb-5 mx-auto text-black-33 ">
                  Our ambition is clear, To transform the landscape of
                  omni-channel commerce. In a world brimming with channels,
                  brands often struggle with fragmented customer insights and
                  complex engagements. This is the challenge we tackle. The
                  heart of our platform is the power of first-party data,
                  offering genuine and direct insights. This allows brands to
                  optimize their approach, ensuring efficiency in both strategy
                  and spend.
                </p>
                <p className="text-base font-semibold leading-[21px]  mx-auto text-black-33 mr-6">
                  Join us as we redefine commerce, creating an enduring,
                  transparent, and innovative ecosystem.
                </p>
              </div>
            </div>
            <div className="col-span-6">
              <div className=" ml-auto max-h-[476px] w-[600px] rounded-[15px] overflow-hidden ">
                <Image
                  className="w-full h-full object-cover object-center"
                  src={"/about.png"}
                  height={476}
                  width={600}
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-8 bg-yellow-100 py-[18px] px-10 rounded-[14px]">
            <p className="text-[28px] text-blue-600 font-medium">
              Supercharge Your Hyperlocal Strategy Today!
            </p>
            <div className="flex-1">
              <div className="flex gap-4 ">
                <input
                  type="email"
                  placeholder="Email"
                  className="text-black-33 placeholder:text-black-33 flex-grow leading-5 py-2 px-8 border border-1 border-gray-400  rounded-full bg-white focus:ring-0 focus:outline-none focus-visible:ring-0"
                />
                <Button
                  data="Submit"
                  clsStyle="py-3 px-10 bg-blue-900 border-blue-900"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeComponent;
