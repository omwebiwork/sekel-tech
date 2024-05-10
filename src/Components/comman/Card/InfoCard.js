import Image from "next/image";
import { useCallback } from "react";

const InfoCard = ({
  title,
  description,
  image,
  renderElement,
  bordershow = false,
  sectionStyle = "py-[100px] bg-gray-100",
  containerSty = "container",
  containtWidth = "max-w-[479px]",
  titleSty = "text-[42px] font-medium leading-[52px] tracking-tighter text-black-33 mb-4",
  descriptionSty='mx-auto mr-6 text-base font-normal leading-[25px]',
  imageContainerSty = "max-h-[448px] max-w-[692px]",
  textContainerSty = "col-span-5",
  imageContentSty = "col-span-6",
  gridContainerSty='grid grid-cols-11 gap-6'
}) => {
  const handleAction = useCallback(() => action && action());
  return (
    <section className={`${sectionStyle}`}>
      <div className={`${containerSty}`}>
        <div className={` ${gridContainerSty}`}>
          <div className={`${textContainerSty}`}>
            <div className={`${containtWidth}`}>
              <h3
                className={` ${titleSty}`}
              >
                {title}
              </h3>
              <p className={` ${descriptionSty}`}>
                {description}
              </p>
              {renderElement}
            </div>
          </div>
          {image && (
            <div className={`${imageContentSty}`}>

              <div className={`${imageContainerSty} mx-auto `}>
                <Image className="w-full h-full object-cover object-center" {...image} />
              </div>
            </div>
          )}
        </div>
      </div>
      {bordershow && (
        <div className="bg-yellow-100 h-[46px] border-b border-yellow-900"></div>
      )}
    </section>
  );
};

export default InfoCard;
