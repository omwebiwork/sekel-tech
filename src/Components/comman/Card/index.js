import Image from "next/image";
import { useCallback } from "react";

const Card = ({
  titleIcon,
  cardData,
  actionType,
  action,
  buttonIcon,
  learnMore,
  cardDataSty,
  cardImgSty,
  cardSty ='p-10 rounded-2xl',
  headingSty='mb-4',
}) => {
  const handleAction = useCallback(() => action && action());
  return (
    <div className={`${cardSty}  h-full bg-gray-100 `}>
      <div className={`${cardDataSty} mb-6`}>
        {titleIcon && <div>{titleIcon}</div>}
        <h2 className={`${headingSty} text-[28px] font-medium leading-[30px] text-black-33`}>
          {cardData?.title}
        </h2>

        <div>
          <p className="text-base font-normal leading-[22px] text-black-33 mb-4">
            {cardData?.description}
          </p>
        </div>
        <button
          onClick={handleAction}
          className="flex gap-1 items-center text-base font-medium "
        >
          {actionType}
          {buttonIcon && <div>{buttonIcon}</div>}
        </button>
      </div>
      <div className={`${cardImgSty} `}>
        <Image className="mx-auto" height={57} width={300} alt="img" {...cardData.image} />
      </div>
    </div>
  );
};

export default Card;

