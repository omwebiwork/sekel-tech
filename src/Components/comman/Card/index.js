import Image from "next/image";
import { useCallback } from "react";

const Card = ({
  titleIcon,
  cardCountNo = null,
  cardCountNoSty = "",
  cardData,
  actionType,
  action,
  buttonIcon,
  learnMore,
  cardDataSty,
  cardImgSty = "",
  cardSty = "p-10 rounded-2xl",
  headingSty = "mb-4",
  buttonSty = "flex gap-1 items-center text-base font-medium",
  renderElement = null
}) => {
  const handleAction = useCallback(() => action && action());
  return (
    <div className={`${cardSty} h-full bg-gray-100 `}>
      {cardCountNo && (
        <p
          className={`text-white text-[54px] font-normal leading-[65px] absolute right-4 top-10 ${cardCountNoSty}`}
        >
          {cardCountNo}
        </p>
      )}
      <div className={`${cardDataSty} mb-6`}>
        {titleIcon && <div>{titleIcon}</div>}
        <h2
          className={`${headingSty} text-[28px] font-medium leading-[30px] text-black-33`}
        >
          {cardData?.title}
        </h2>

        <div>
          <p className="text-base font-normal leading-[22px] text-black-33 mb-4">
            {cardData?.description}
          </p>
        </div>
        <button onClick={handleAction} className={`${buttonSty}`}>
          {actionType}
          {buttonIcon && <div>{buttonIcon}</div>}
        </button>
      </div>
      {cardData?.image.src && (
        <div className={`${cardImgSty} `}>
          <Image
            className="mx-auto"
            height={57}
            width={300}
            alt="img"
            {...cardData.image}
          />
        </div>
      )}
      {renderElement && renderElement}
    </div>
  );
};

export default Card;
