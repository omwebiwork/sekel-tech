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

const DataTransfer = () => {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  let dataTransfer = {
    title: "Data transfer Request",
    description: (
      <>
        <p className="text-[16px] mb-8">
          Sekel Tech is committed to protecting your privacy and ensuring
          transparency in how we handle your personal data. In accordance with
          the General Data Protection Regulation (GDPR) and other relevant data
          protection laws, you have the right to request the transfer of your
          personal data held on our servers.
        </p>

        <p className="text-[16px] mb-8">
          The provided form allows you to initiate the data transfer process for
          your account, including any associated personal and private data. To
          safeguard your information, you'll need to authenticate ownership of
          the account through provided procedures. Additionally, we may request
          supplementary identification or information to validate and process
          your data transfer request thoroughly.
        </p>

        <p className="text-[16px] mb-8">
          Sekel Tech prioritizes your privacy and adheres to a secure and
          transparent approach in managing your personal data in line with data
          protection regulations.
        </p>
      </>
    ),
    importantText: `This action will initiate the permanent deletion of your Sekel Tech account and any relevant personal or private data stored exclusively on sekel.tech.`,
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
          buttonLabel={
            <div className="flex justify-between items-center gap-5">
              <div className="">
                <Image src={"/download.svg"} width={16} height={16} alt="" />
              </div>
              Download Data
            </div>
          }
          actionMessageSty="text-blue-900"
          handleOnClick={() => setMessage("Data Transfer Initiated")}
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
              {...dataTransfer}
              renderFormElement={
                <>
                  <VerificationForm  title = 'Transfer Data'/>
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

export default DataTransfer;
