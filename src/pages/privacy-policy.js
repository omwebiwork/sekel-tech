import Breadcrumb from "@/Components/comman/Breadcrumb";
import HyperlocalStrategyForm from "@/Components/comman/Form/hyperlocalStrategyForm";
import SidebarSection from "@/Components/comman/SidebarSection";
import { privacyPolicy } from "@/static/json/privacyPolicy";
import { useRouter } from "next/router";

const PrivacyPolicy = () => {
  const router = useRouter();

  return (
    <>
      <Breadcrumb
        breadcrumbList={[
          { link: "/", label: "Home" },
          { link: "/about-us", label: "About Us" },
          { link: "/privacy-policy", label: "Privacy Policy" },
        ]}
      />
      <section className="pb-[50px] lg:pb-[100px] max-lg:min-h-[600px]">
        <SidebarSection
          sidebarTitle="Privacy"
          sliderBtnSty="max-lg:flex max-lg:flex-col"
          defaultActive={router?.pathname.replace("/", "")}
          sliderActTabSty="mb-3 lg:mb-6 ml-4"
          buttonActiveSty="py-2 px-4 lg:px-8"
          sliderColSty="col-span-12 lg:col-span-3 pt-[50px] lg:pt-[100px] max-lg:relative"
          galleryColSty="col-span-12 lg:col-span-9 pt-[50px] lg:pt-[100px] lg:pl-[50px]"
          cardContainerSty=""
          sidebarFilterData={[
            {
              label: "Privacy Policy",
              value: "privacy-policy",
            },
            {
              label: "Data Erasure",
              value: "data-erasure",
            },
          ]}
          onHandleFilter={(e) => {
            router.push(`/${e}`);
          }}
          renderElement={() => (
            <div className="text-black-33">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-[28px] leading-[140%] font-medium text-black-33">
                  Privacy Policy
                </h2>
                <p className="text-black-33 text-[16px]">Last Updated: 27 September 2018</p>
              </div>
              <p className="text-black-33">
                This Privacy Policy describes the policies and procedures of
                Sekel Tech (India) Private Limited (“we”, “our” or “us”) on the
                collection, use and disclosure of your personal information on
                https://sekel.tech (the “Site”) and the services, features,
                content or applications we offer (collectively with the Site,
                the “Services”).
              </p>

              {privacyPolicy?.map((item, index) => (
                <div className="py-[52px] border-b border-gray-400" key={index}>
                  <h3 className="text-[20px] font-medium leading-[140%] text-blue-900 mb-8">
                    {item?.title}
                  </h3>
                  {item?.listData?.list?.length > 0 && (
                    <ul
                      className={` ${item?.listData?.listSty} pl-[18px] text-black-33`}
                    >
                      {item?.listData?.list?.map((listItem, listIndex) => (
                        <li className="mb-1" key={listIndex}>
                          {listItem?.title}
                        </li>
                      ))}
                    </ul>
                  )}
                  {item?.description && (
                    <p className="text-black-33">{item?.description}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        />
      </section>
      <HyperlocalStrategyForm />
    </>
  );
};

export default PrivacyPolicy;
