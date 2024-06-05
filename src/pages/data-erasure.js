import Breadcrumb from "@/Components/comman/Breadcrumb";
import DataRequestSection from "@/Components/comman/DataRequestSection";
import VerificationForm from "@/Components/comman/Form/VerificationForm";
import HyperlocalStrategyForm from "@/Components/comman/Form/hyperlocalStrategyForm";
import Modal from "@/Components/comman/Modal";
import SidebarSection from "@/Components/comman/SidebarSection";
import UserDetailPopUp from "@/Components/comman/UserDetailPopUp";
import { useRouter } from "next/router";
import { useState } from "react";

const DataErasure = () => {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  let dataErasure = {
    title: "Data Erasure Request",
    description: (
      <>
        <p className="text-[16px] mb-8">
          Sekel Tech is committed to upholding your privacy rights and
          maintaining transparency regarding the storage of any personal data we
          may have about individuals. In compliance with the General Data
          Protection Regulation (GDPR) and other applicable data protection
          laws, individuals, including EU citizens and residents, have the right
          to request the deletion of their personal data held on our servers.
        </p>

        <p className="text-[16px] mb-8">
          The provided form empowers you to initiate the deletion process for
          your account, along with any associated personal and private data. To
          ensure the security of your information, you will need to authenticate
          ownership of the account by following the provided procedures.
          Additionally, we may request supplementary identification or
          information to validate and process your deletion request thoroughly.
        </p>

        <p className="text-[16px] mb-8">
          Sekel Tech values your privacy and is dedicated to maintaining a
          secure and transparent approach to handling your personal data in
          accordance with the relevant data protection regulations.
        </p>
      </>
    ),
    importantText: `This action will initiate the permanent deletion of your Sekel
              Tech account and any relevant personal or private data stored
              exclusively on sekel.tech.`,
  };
  return (
    <>
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        className="share-modal"
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sectionSty="fixed bg-black-900/40 left-0 top-0 right-0 bottom-0 h-[100vh] w-full z-[99999] flex items-center justify-center p-10"
        boxStyle="max-w-[800px] p-[70px] rounded-[25px] max-h-[calc(100vh_-_80px)] bg-white w-full relative"
        showArrowButton={message.length === 0}
        showCloseButton={message.length > 0}
        buttonSty="flex"
      >
        <UserDetailPopUp
          actionMessage={message}
          handleOnClick={() => setMessage("Data Erasure Initiated")}
        />
      </Modal>
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
            <DataRequestSection
              {...dataErasure}
              renderFormElement={
                <>
                  <VerificationForm />
                </>
              }
            />
          )}
        />
      </section>
      <HyperlocalStrategyForm />
    </>
  );
};

export default DataErasure;
