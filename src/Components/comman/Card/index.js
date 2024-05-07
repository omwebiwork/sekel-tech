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
  cardDataSty = "mb-6",
  cardImgSty = "",
  cardSty = "p-10 rounded-2xl h-full bg-gray-100",
  headingSty = "mb-4 leading-[30px] text-[28px] font-medium text-black-33",
  buttonSty = "flex gap-1 items-center text-base font-medium",
  renderElement = null,
  descriptionSty = 'text-base font-normal leading-[22px] text-black-33 mb-4',
  titleIconSty = 'h-[60px] w-[60px] rounded-full bg-yellow-100 flex items-center justify-center mb-8 '
}) => {
  const handleAction = useCallback(() => action && action());
  return (
    <div className={`${cardSty}`}>
      {cardCountNo && (
        <p
          className={`text-white text-[54px] font-normal leading-[65px] absolute right-4 top-10 ${cardCountNoSty}`}
        >
          {cardCountNo}
        </p>
      )}
      <div className={`${cardDataSty}`}>
        {titleIcon && (
          <div className={`${titleIconSty}`}>
            <Image {...titleIcon} />
          </div>
        )}
        <h2
          className={`${headingSty}`}
        >
          {cardData?.title}
        </h2>

        <div>
          <p className={`${descriptionSty}`}>
            {cardData?.description}
          </p>
        </div>
        {actionType && (
          <button onClick={handleAction} className={`${buttonSty}`}>
            {actionType}
            {buttonIcon && <div>{buttonIcon}</div>}
          </button>
        )}
      </div>
      {cardData?.image?.src && (
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
