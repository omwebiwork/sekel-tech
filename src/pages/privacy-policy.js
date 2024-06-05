import Breadcrumb from "@/Components/comman/Breadcrumb";
import DataRequestSection from "@/Components/comman/DataRequestSection";
import VerificationForm from "@/Components/comman/Form/VerificationForm";
import HyperlocalStrategyForm from "@/Components/comman/Form/hyperlocalStrategyForm";
import Modal from "@/Components/comman/Modal";
import SidebarSection from "@/Components/comman/SidebarSection";
import UserDetailPopUp from "@/Components/comman/UserDetailPopUp";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

const PrivacyPolicy = () => {
  const router = useRouter();

  return (
    <>
      <Breadcrumb
        breadcrumbList={[
          { link: "/", label: "Home" },
          { link: "/about-us", label: "About Us" },
          { link: "/data-erasure", label: "Data Erasure" },
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
              label: "Data Transfer",
              value: "data-transfer",
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
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-[28px] leading-[140%] font-medium mb-8">Privacy Policy</h2>
                <p>Last Updated: 27 September 2018</p>
              </div>
              <p>
                This Privacy Policy describes the policies and procedures of
                Sekel Tech (India) Private Limited (“we”, “our” or “us”) on the
                collection, use and disclosure of your personal information on
                https://sekel.tech (the “Site”) and the services, features,
                content or applications we offer (collectively with the Site,
                the “Services”).
              </p>
            </div>
          )}
        />
      </section>
      <HyperlocalStrategyForm />
    </>
  );
};

export default PrivacyPolicy;
