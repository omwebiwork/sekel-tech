import Image from "next/image";
import { useCallback } from "react";

const InfoCard = ({
  title,
  description,
  image,
  renderElement,
  bordershow = false,
  sectionStyle = "py-[100px]",
  containerSty = "container",
  containtWidth = "max-w-[479px]",
  titleSty = "mb-4",
  imageContainerSty = "max-h-[448px] max-w-[692px]",
  textContainerSty = "col-span-5",
  imageContentSty = "col-span-6",
}) => {
  const handleAction = useCallback(() => action && action());
  return (
    <section className={`${sectionStyle} bg-gray-100`}>
      <div className={`${containerSty}`}>
        <div className="grid grid-cols-11 gap-6">
          <div className={`${textContainerSty}`}>
            <div className={`${containtWidth}`}>
              <h3
                className={`text-[42px] font-medium leading-[52px] tracking-tighter text-black-33 ${titleSty}`}
              >
                {title}
              </h3>
              <p className="text-base font-normal leading-[25px] mb-8 mx-auto text-black-33 mr-6">
                {description}
              </p>
              {renderElement}
            </div>
          </div>
          {image && (
            <div className={`${imageContentSty}`}>
              <div className={`${imageContainerSty} mx-auto`}>
                <Image className="w-full h-full" {...image} />
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
