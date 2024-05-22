import CardSection from "@/Components/comman/Card/CardSection";
import Card from "@/Components/comman/Card";
import Banner from "@/Components/comman/Banner";
import Breadcrumb from "@/Components/comman/Breadcrumb";
import InfoCard from "@/Components/comman/Card/InfoCard";
import Button from "@/Components/comman/Button";
import GetStartForm from "@/Components/comman/Form/StartForm";
import Image from "next/image";
import Link from "next/link";
import {
  bannerCareers,
  ourCulture,
  weCommunicate,
} from "@/static/json/careers";

const Careers = () => {
  let positionCardData = [
    {
      title: "Copy Writer",
      description: "Pune / Yerawada, Full Time",
    },
    {
      title: "Copy Writer",
      description: "Pune / Yerawada, Full Time",
    },
    {
      title: "Copy Writer",
      description: "Pune / Yerawada, Full Time",
    },
    {
      title: "Copy Writer",
      description: "Pune / Yerawada, Full Time",
    },
    {
      title: "Copy Writer",
      description: "Pune / Yerawada, Full Time",
    },
  ];

  return (
    <>
      <Banner
        {...bannerCareers}
        sectionSty="py-[50px] md:py-[60px] lg:pt-20 lg:pb-[100px]"
        containerStyle="container flex-wrap grid grid-cols-2 gap-8"
        descriptionSty="mb-0"
        imgContainerSty="md:max-h-[468px] overflow-hidden rounded-3xl w-full"
        headinWidth="col-span-2 md:col-span-1"
        imgGridSty="col-span-2 md:col-span-1"
        aboutHead="md:max-w-[506px]"
        subTitleSty="tracking-tighter mb-6"
        renderElement={
          <div className="pt-5">
            <Button data="Join Us" filled></Button>
          </div>
        }
      />

      <Breadcrumb
        breadcrumbList={[
          { link: "/", label: "Home" },
          { link: "/company", label: "Company" },
          { link: "/company/about-us", label: "About Us" },
        ]}
      />

      <section className="py-[50px] md:py-[60px] lg:py-[100px] bg-white">
        <div className="container">
          <div className="overflow-x-auto">
            <div className="grid grid-cols-6 gap-x-5 w-[1140px]">
              <div className="col-span-2">
                <div className="w-full rounded-2xl overflow-hidden h-full">
                  <Image
                    src={"/picture-1.png"}
                    width={300}
                    height={300}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="col-span-1">
                <div className="w-full rounded-2xl overflow-hidden mb-5 max-h-[286px]">
                  <Image
                    src={"/picture-2.png"}
                    width={300}
                    height={300}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full rounded-2xl overflow-hidden">
                  <Image
                    src={"/picture-3.png"}
                    width={300}
                    height={300}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="col-span-2">
                <div className="w-full rounded-2xl overflow-hidden mb-5 max-h-[230px]">
                  <Image
                    src={"/picture-4.png"}
                    width={300}
                    height={300}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full rounded-2xl overflow-hidden max-h-[230px]">
                  <Image
                    src={"/picture-5.png"}
                    width={300}
                    height={300}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="col-span-1">
                <div className="w-full rounded-2xl overflow-hidden h-full">
                  <Image
                    src={"/picture-6.png"}
                    width={300}
                    height={300}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CardSection
        {...ourCulture?.sectionData}
        headingSty="lg:max-w-[720px] mb-10 lg:mb-[52px]"
        sectionStyle="py-[50px] md:py-[60px] lg:py-[100px] bg-blue-200"
        titleSty="text-[32px] lg:text-[42px] font-medium mb-4 lg:mb-8 leading-[140%] tracking-tighter text-black-33"
        descriptionSty="lg:max-w-[686px] text-base font-normal leading-[140%] text-black-33"
        renderElement={() => (
          <div className="grid grid-cols-3 gap-4 lg:gap-0">
            {ourCulture?.cardData?.map((item, index) => {
              return (
                <div className="col-span-3 md:col-span-1" key={index}>
                  <Card
                    {...item}
                    titleIconSty="mb-[32px]"
                    headingSty="text-[24px] lg:text-[28px] font-medium leading-[140%] mb-4 text-black-900"
                    cardSty="bg-blue-200 p-4 lg:px-5 lg:py-8 rounded-2xl border-[1px] border-white h-full"
                    descriptionSty="mb-0 text-base font-normal leading-[140%] text-black-33"
                    cardDataSty="mb-0"
                    iconSty="mx-auto"
                  />
                </div>
              );
            })}
          </div>
        )}
      />

      <CardSection
        {...weCommunicate?.sectionData}
        descriptionSty="mx-auto text-white lg:w-[659px] text-base font-normal leading-[140%]"
        headingSty="text-center mx-auto max-w-[900px] mb-8"
        sectionStyle="py-[50px] md:py-[60px] lg:pt-[80px] lg:pb-[100px] bg-blue-900 text-white"
        titleSty="text-[32px] lg:text-[42px] font-medium mb-[30px] lg:mb-[20px] leading-[140%] tracking-tighter text-white"
        renderElement={() => (
          <InfoCard
            {...weCommunicate?.ourPerks}
            gridContainerSty="items-center grid grid-cols-11 gap-y-[30px] lg:gap-6"
            imageContentSty="max-lg:order-1 col-span-12 lg:col-span-6"
            textContainerSty="max-lg:order-2 col-span-12 lg:col-span-5"
            subheadTitleSty="mr-0 text-base font-normal leading-[140%] mb-6 lg:mb-3"
            containtWidth="lg:max-w-[504px] lg:pt-[26px]"
            titleSty="text-white text-[32px] md:text-[42px] xl:text-[54px] font-normal leading-[140%] tracking-tighter mb-6 lg:mb-8"
            imageContainerSty="max-h-auto lg:max-w-[500px] ml-auto"
            sectionStyle="lg:pt-[50px] text-white"
            leadTextSty="text-[16px] lg:text-[20px] font-normal leading-[140%] text-yellow-900"
            descriptionSty="mr-0 text-base font-normal leading-[140%] mb-6 lg:mb-8"
            containerSty=""
            leadText="Finally, we like to have fun! We host office dinners and team parties so that our employees can bond with each other."
          />
        )}
      />

      <CardSection
        headingSty="lg:flex justify-between gap-[60px] pb-8 lg:pb-[80px] border-b border-gray-400"
        title="Position Open"
        titleSty="text-[32px] lg:text-[42px] font-medium mb-6 lg:mb-0 leading-[140%] tracking-tighter text-black-33"
        headerSection={
          <div className="my-auto">
            <GetStartForm
              formMainDiv="justify-between flex-wrap"
              buttonTitle="Search"
              clsStyle="py-3 px-8 max-sm:w-full"
              placeholder="Hyperlocation Management"
              value="All Posts"
              type="text"
              inputSty="max-sm:w-full max-md:w-[calc(100%_-_135px)] max-lg:w-[calc(100%_-_135px)] text-black-33 placeholder:text-black-33 border-gray-400 bg-opacity-10"
            />
          </div>
        }
        renderElement={() =>
          positionCardData?.map((item, index) => {
            return (
              <Card
                key={index}
                cardDataSty="mb-6 md:b-0"
                title={item.title}
                headingSty="mb-0 text-base font-medium mb-1"
                descriptionSty="mb-0 text-base font-normal"
                description={item.description}
                cardSty="md:flex justify-between items-center py-[20px] border-b border-gray-400"
                renderElement={
                  <Button data="Apply" filled clsStyle="px-8 py-2" />
                }
              />
            );
          })
        }
      />

      <section className="bg-yellow-100 py-8">
        <div className="container">
          <div className="grid grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-center">
            <div className="col-span-12 lg:col-span-4">
              <p class="text-black-33 text-[28px] font-medium">How to Apply</p>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <h4 className="text-black-33 text-[16px] lg:text-[28px] font-medium">
                Send an email with “Job Title” in the subject along with your
                resume attached to{" "}
                <Link href={""} className="text-blue-600">
                  careers@sekel.tech
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Careers;
