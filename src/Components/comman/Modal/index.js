import DownArrow from "@/assets/DownArrow";
import Image from "next/image";

const Modal = ({
  open,
  onClose,
  children,
  sectionSty = "",
  boxStyle = "m-3",
  arrowBtnSty = "hidden",
  closeBtnSty = "hidden",
}) => {
  return (
    <section className={`${sectionSty} ${open ? "mb-[24px]" : "hidden"}`}>
      <div className={`${boxStyle}`}>
        <button
          className={`${arrowBtnSty} rotate-180 absolute outline-none shadow-none left-8 top-8`}
        >
          <Image src={"/right-arrow.svg"} width={25} height={25} alt="" />
        </button>
        <button
          className={`${closeBtnSty} absolute outline-none shadow-none right-8 top-8`}
        >
          <Image src={"/close-icons.svg"} width={20} height={20} alt="" />
        </button>
        {children}
      </div>
    </section>
  );
};

export default Modal;
