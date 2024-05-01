import Image from "next/image";
import React from "react";
import Card from "@/Components/comman/Card";
import { useCallback, useState } from "react";
import DownArrow from "@/assets/DownArrow";
import CardSection from "../comman/Card/CardSection";
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

  let discoveryObj = {
    title: "Data, Discovery and Demand Story",
    desciption:
      " Making sure you dominate the search results organically across google search products",
  };

  const handleLearnMore = useCallback((index) => {
    if (learnMore[index]) {
      setLearnMore({ [index]: false });
    } else {
      setLearnMore({ [index]: true });
    }
  });

  const renderElement = () => {
    return (
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
    );
  };
  return (
    <>
      <CardSection {...discoveryObj} renderElement={renderElement} />
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
            <h3 className="text-[42px] font-medium mb-3 leading-[52px] tracking-tighter text-black-33">
              Challenges Q/A
            </h3>
            <p className="text-base font-normal leading-[22px] text-black-33 ">
              Making sure you dominate the search results organically across
              google search products Making sure you dominate the s
            </p>
          </div>
          <div className="grid grid-cols-16 gap-5 mb-8">
            <div className="col-span-9">
              <div className="h-full py-8 px-[52px] rounded-xl bg-gray-100 border-[1px] border-gray-400">
                <div className="flex gap-4 mb-10">
                  <div className="h-9 w-9 rounded-full border-[1px] border-black-33 flex items-center justify-center">
                    <p className="text-xl font-medium text-black-33">?</p>
                  </div>
                  <div className="w-[calc(100%_-_50px)] ">
                    <p className=" text-base font-semibold text-black-33  tracking-tight">
                      We generate plenty of leads monthly, but lack visibility
                      on their outcomes. How do we gain insights and optimise
                      our efforts?
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-base font-normal leading-[25px] text-black-33 mb-4">To gain insights and optimize your efforts with generated leads, you need a solution that offers robust analytics and tracking capabilities. This will allow you to monitor the outcomes of your leads and adjust your strategies accordingly.</p>
                  <ul className="list-['-_'] pl-4 text-base font-normal text-black-33 mb-4">
                    <li> Data Integration</li>
                    <li> Data Activation</li>
                    <li> Security & Compliance</li>
                  </ul>
                  <button class="flex gap-2 items-center text-base text-blue-900 font-medium ">Platform
                  <div className="h-6 w-6">
                    <Image src={'/blue-arrow.svg'} height={24} width={24} alt="img"/>
                    </div>
                    </button>
                </div>
              </div>
            </div>
            <div className="col-span-7">
              <div className="h-full py-8 px-[52px] rounded-xl bg-gray-100 border-[1px] border-gray-400">
                <div className="flex gap-4 mb-10">
                  <div className="h-9 w-9 rounded-full border-[1px] border-black-33 flex items-center justify-center">
                    <p className="text-xl font-medium text-black-33">?</p>
                  </div>
                  <div className="w-[calc(100%_-_50px)] ">
                    <p className=" text-base font-semibold text-black-33  tracking-tight ">
                    Our traditional method of demand generation through leads is not working out due to high TAT and Junk Data
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-base font-normal leading-[25px] text-black-33 mb-4">To address the challenges with high turnaround time (TAT) and junk data in your traditional demand generation methods, you need a solution that can streamline lead generation and data quality.</p>
                  {/* <ul className="text-base font-normal text-black-33 mb-4">
                    <li>- Data Integration</li>
                    <li>- Data Activation</li>
                    <li>- Security & Compliance</li>
                  </ul> */}
                  <button class="flex gap-2 items-center text-base text-blue-900 font-medium ">Platform
                  <div className="h-6 w-6">
                    <Image src={'/blue-arrow.svg'} height={24} width={24} alt="img"/>
                    </div>
                    </button>
                </div>
              </div>
            </div>
            <div className="col-span-7">
              <div className="h-full py-8 px-[52px] rounded-xl bg-gray-100 border-[1px] border-gray-400">
                <div className="flex gap-4 mb-10">
                  <div className="h-9 w-9 rounded-full border-[1px] border-black-33 flex items-center justify-center">
                    <p className="text-xl font-medium text-black-33">?</p>
                  </div>
                  <div className="w-[calc(100%_-_50px)] ">
                    <p className=" text-base font-semibold text-black-33  tracking-tight">
                    While the volume targets are getting achieved, we are facing issues with lead quality & CPl
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-base font-normal leading-[25px] text-black-33 mb-4">To address the issues with lead quality and Cost Per Lead (CPL) while achieving volume targets, you need a solution that can improve lead targeting and qualification processes. By refining your targeting criteria and qualifying leads more effectively, you can improve lead quality and reduce CPL, ultimately enhancing the overall performance of your demand generation efforts.</p>
                  {/* <ul className="text-base font-normal text-black-33 mb-4">
                    <li>- Data Integration</li>
                    <li>- Data Activation</li>
                    <li>- Security & Compliance</li>
                  </ul> */}
                  <button class="flex gap-2 items-center text-base text-blue-900 font-medium ">Platform
                  <div className="h-6 w-6">
                    <Image src={'/blue-arrow.svg'} height={24} width={24} alt="img"/>
                    </div>
                    </button>
                </div>
              </div>
            </div>
            <div className="col-span-9">
              <div className="h-full py-8 px-[52px] rounded-xl bg-gray-100 border-[1px] border-gray-400">
                <div className="flex gap-4 mb-10">
                  <div className="h-9 w-9 rounded-full border-[1px] border-black-33 flex items-center justify-center">
                    <p className="text-xl font-medium text-black-33">?</p>
                  </div>
                  <div className="w-[calc(100%_-_50px)] ">
                    <p className=" text-base font-semibold text-black-33  tracking-tight">
                    The challenge is acquiring and maintaining accurate location data for effective marketing and lead generation. Seamless integration with marketing systems is crucial for targeted success.
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-base font-normal leading-[25px] text-black-33 mb-4">To address the challenge of obtaining and maintaining accurate location data, consider implementing a robust location data management system. This system should streamline the integration of marketing systems with location data, ensuring that each store's information is accurate and up-to-date. Additionally, regular audits and updates to the location data can help maintain its accuracy over time.</p>
                  {/* <ul className="text-base font-normal text-black-33 mb-4">
                    <li>- Data Integration</li>
                    <li>- Data Activation</li>
                    <li>- Security & Compliance</li>
                  </ul> */}
                  <button class="flex gap-2 items-center text-base text-blue-900 font-medium ">Platform
                  <div className="h-6 w-6">
                    <Image src={'/blue-arrow.svg'} height={24} width={24} alt="img"/>
                    </div>
                    </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-5">
            <p className="text-base font-semibold text-black-33">Need more info?</p>
                    <Button filled data="view more"/>
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
                  <div>
                  {/* <button className="bg-yellow-900  h-8 w-8 border border-1 border-yellow-900 rounded-full flex items-center justify-center">
                    <Image
                      className="w-6 "
                      src={"/forward-arrow.png"}
                      height={24}
                      width={24}
                      alt="img"
                    />
                  </button> */}
                  <div className="flex items-center">
                  <div className="shadow border-[1px]  border-blue-900 h-8 w-8 rounded-full relative z-[8] hover:z-[9] transition-all overflow-hidden flex items-center justify-center bg-yellow-900 min-w-8 text-white p-1 text-xs">
                    <Image
                      className="w-6 "
                      src={"/forward-arrow.png"}
                      height={32}
                      width={32}
                      alt="img"
                    />
                    </div>
                    <div className="h-8 w-8 min-w-8 rounded-full -ml-2 relative z-[7] hover:z-[9] transition-all overflow-hidden shadow border-[1px] border-blue-900">
                      <Image
                        src={"/avtar.png"}
                        height={32}
                        width={32}
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="-ml-2 h-8 w-8 min-w-8 rounded-full relative z-[6] hover:z-[9] transition-all overflow-hidden shadow border-[1px] border-blue-900">
                      <Image
                        src={"/avtar.png"}
                        height={32}
                        width={32}
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="-ml-2 h-8 w-8 min-w-8 rounded-full relative hover:z-[9] transition-all overflow-hidden shadow border-[1px] border-blue-900">
                      <Image
                        src={"/avtar.png"}
                        height={32}
                        width={32}
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    
                  </div>
                  </div>
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
                        height={500}
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
