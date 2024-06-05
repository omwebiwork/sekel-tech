import DownArrow from "@/assets/DownArrow";
import Image from "next/image";

const Modal = ({
  open,
  onClose,
  children,
  sectionSty = "",
  boxStyle = "",
  showArrowButton = false,
  showCloseButton = false,
}) => {
  return (
    <section className={`${sectionSty} ${open ? "mb-[24px]" : "hidden"}`}>
      <div className={`${boxStyle}`}>
        <button
          className={`${
            showArrowButton ? "" : "hidden"
          } rotate-180 absolute outline-none shadow-none left-8 top-8`}
        >
          <Image src={"/right-arrow.svg"} width={25} height={25} alt="" />
        </button>
        <button
          className={`${
            showCloseButton ? "" : "hidden"
          } absolute outline-none shadow-none right-8 top-8`}
          onClick={onClose}
        >
          <Image src={"/close-icons.svg"} width={20} height={20} alt="" />
        </button>
        {children}
      </div>
    </section>
  );
};

export default Modal;
