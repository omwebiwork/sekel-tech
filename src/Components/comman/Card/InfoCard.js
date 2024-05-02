import Image from "next/image";
import { useCallback } from "react";

const InfoCard = ({
  title,
  description,
  image,
  renderElement,
  bordershow = false,
  sectionStyle = "py-[100px]",
  containerSty= 'container',
  containtWidth= 'max-w-[479px]'
}) => {
  const handleAction = useCallback(() => action && action());
  return (
    <section className={`${sectionStyle} bg-gray-100`}>
      <div className={`${containerSty}`}>
        <div className="grid grid-cols-11 gap-6">
          <div className="col-span-5">
            <div className={`${containtWidth}`}>
              <h3 className="text-[42px] font-medium mb-4 leading-[52px] tracking-tighter text-black-33">
                {title}
              </h3>
              <p className="text-base font-normal leading-[21px] mb-8 mx-auto text-black-33 mr-6">
                {description}
              </p>
              {renderElement}
            </div>
          </div>
          {image && (
            <div className="col-span-6">
              <div className="max-h-[448px] max-w-[692px]">
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
