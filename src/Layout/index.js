import Header from "../Components/comman/Header";
import Footer from "../Components/comman/Footer";
import { useState } from "react";
import Modal from "@/Components/comman/Modal";
import ConnectPopUp from "@/Components/comman/ConnectPopUp";
import LetConnectPopUp from "@/Components/comman/LetConnectPopUp";
import Image from "next/image";

const Layout = ({ children }) => {
  const [open, setOpen] = useState({ letsConnect: false, enquiry: false });
  const handleOpen = () => {
    if (!open?.letsConnect && !open.enquiry) {
      setOpen({ letsConnect: true, enquiry: false });
    }
  };

  const handleEnquiryOpen = () => {
    setOpen({ letsConnect: false, enquiry: true });
  };

  const handleBack = () => {
    setOpen({ letsConnect: true, enquiry: false });
  };

  const handleClose = () => {
    setOpen({ letsConnect: false, enquiry: false });
  };
  const renderLetConnectPopUp = () => {
    return (
      <Modal
        open={open?.letsConnect}
        onClose={handleClose}
        className="share-modal"
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <LetConnectPopUp handleEnquiryOpen={handleEnquiryOpen} />
      </Modal>
    );
  };
  const renderConnectPopUp = () => {
    return (
      <Modal
        open={open?.enquiry}
        onClose={handleClose}
        className="share-modal"
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ConnectPopUp handleBack={handleBack} />
      </Modal>
    );
  };
  return (
    <>
      <Header />
      {children}
      <div className="z-[9999] fixed right-10 bottom-10">
        {renderLetConnectPopUp()}
        {renderConnectPopUp()}
        <div className="flex items-center justify-end">
          {(open?.enquiry || open?.letsConnect) && (
            <div className="mr-[14px]" onClick={handleClose}>
              <div className="w-[48px] h-[48px] max-sm:h-[85%] max-sm:w-10 max-sm:ml-[2px] transition-all delay-100 rounded-[60px] bg-white mr-1 flex justify-center items-center p-4">
                <Image
                  src={"/close-icons.svg"}
                  height={"30"}
                  width={"30"}
                  alt=""
                />
              </div>
            </div>
          )}
          <div
            onClick={handleOpen}
            className="cursor-pointer group w-fit max-sm:h-10 flex items-center rounded-[60px] border-[1px] border-white overflow-hidden bg-[#54CC61] text-white font-sans text-base max-sm:text-xs font-bold "
          >
            <span className="w-[48px] h-[48px] max-sm:ml-[2px] transition-all delay-100 rounded-[60px] bg-white mr-1 flex justify-center items-center">
              <Image src={"/whatsapp.png"} height={25} width={25} alt="" />
            </span>
            <span className="pl-1.5 pr-3">Connect with us</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
