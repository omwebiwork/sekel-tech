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
        sectionSty="pt-20 pb-[100px]"
        containerStyle="container block flex-wrap"
        descriptionSty="mb-0"
        imgContainerSty="max-h-[468px] overflow-hidden rounded-3xl w-full"
        headinWidth="w-1/2"
        imgGridSty="w-1/2"
        aboutHead="max-w-[506px]"
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
          { link: "/how-it-works", label: "How it works" },
          { link: "/demand", label: "Demand" },
        ]}
      />

      <section className="py-[100px] bg-white">
        <div className="container">
          <div className="grid grid-cols-6 gap-x-5 items-center">
            <div className="col-span-2">
              <div className="w-full rounded-2xl overflow-hidden ">
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
              <div className="w-full rounded-2xl overflow-hidden mb-5 max-h-[300px]">
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
              <div className="w-full rounded-2xl overflow-hidden">
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
      </section>

      <CardSection
        {...ourCulture?.sectionData}
        headingSty="max-w-[720px] mb-[52px]"
        sectionStyle="py-[100px] bg-blue-200"
        titleSty="text-[42px] font-medium mb-8 leading-[140%] tracking-tighter text-black-33"
        descriptionSty="max-w-[686px] text-base font-normal leading-[140%] text-black-33"
        renderElement={() => (
          <div className="grid grid-cols-3">
            {ourCulture?.cardData?.map((item, index) => {
              return (
                <div className="col-span-1" key={index}>
                  <Card
                    {...item}
                    titleIconSty="mb-[32px]"
                    headingSty="text-[28px] font-medium leading-[140%] mb-4 text-black-900"
                    cardSty="bg-blue-200 px-5 py-8 rounded-2xl border-[1px] border-white h-full"
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
        descriptionSty="mx-auto text-white w-[659px] text-base font-normal leading-[140%]"
        headingSty="text-center mx-auto max-w-[900px] mb-8"
        sectionStyle="pt-[80px] pb-[100px] bg-blue-900 text-white"
        titleSty="text-[42px] font-medium mb-[20px] leading-[140%] tracking-tighter text-white"
        renderElement={() => (
          <InfoCard
            {...weCommunicate?.ourPerks}
            subheadTitleSty="mr-0 text-base font-normal leading-[140%] mb-3"
            titleSty="text-white text-[54px] font-normal leading-[140%] tracking-tighter mb-8"
            sectionStyle="pt-[50px] text-white"
            imageContentSty="col-span-6"
            textContainerSty="col-span-5"
            containerSty=""
            containtWidth="max-w-[504px] pt-[38px]"
            gridContainerSty="items-center grid grid-cols-11 gap-6"
            descriptionSty="mr-0 text-base font-normal leading-[140%] mb-8"
            imageContainerSty="max-h-auto max-w-[500px] ml-auto"
            leadText="Finally, we like to have fun! We host office dinners and team parties so that our employees can bond with each other."
            leadTextSty="text-[20px] font-normal leading-[140%] text-yellow-900"
          />
        )}
      />

      <CardSection
        headingSty="flex justify-between gap-[60px] pb-[80px] border-b border-gray-400"
        title="Position Open"
        titleSty="text-[42px] font-medium mb-0 leading-[140%] tracking-tighter text-black-33"
        headerSection={
          <div className="my-auto">
            <GetStartForm
              buttonTitle="Search"
              placeholder="Hyperlocation Management"
              value="All Posts"
              type="text"
              inputSty="text-black-33 placeholder:text-black-33 border-gray-400 bg-gray-100 bg-opacity-10"
            />
          </div>
        }
        renderElement={() =>
          positionCardData?.map((item, index) => {
            return (
              <Card
                key={index}
                cardDataSty="mb-0"
                title={item.title}
                headingSty="mb-0 text-base font-medium mb-1"
                descriptionSty="mb-0 text-base font-normal"
                description={item.description}
                cardSty="flex justify-between items-center py-[20px] border-b border-gray-400"
                renderElement={<Button data="Apply" filled />}
              />
            );
          })
        }
      />

      <section className="bg-yellow-100 py-8">
        <div className="container">
          <div className="grid grid-cols-12 gap-12 items-center">
            <div className="col-span-4">
            <p class="text-black-33 text-[28px] font-medium">How to Apply</p>
            </div>
            <div className="col-span-8">
              <h4 className="text-black-33 text-[28px] font-medium">Send an email with “Job Title” in the subject along with your resume attached to <Link href={''} className="text-blue-600">careers@sekel.tech</Link></h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Careers;
