import Image from "next/image";
import { useCallback } from "react";

const Card = ({
  titleIcon,
  cardData,
  actionType,
  action,
  buttonIcon,
  learnMore,
}) => {
  const handleAction = useCallback(() => action && action());
  return (
    <div className="p-10 h-full bg-gray-100 rounded-2xl border-[1px] border-gray-400">
      <div className="mb-6">
        {titleIcon && <div>{titleIcon}</div>}
        <h2 className="text-[28px] font-medium mb-4 leading-[30px] text-black-33">{cardData?.title}</h2>
      
      <div>
        <p className="text-base font-normal leading-[22px] text-black-33 mb-4">{cardData?.description}</p>
      </div>
      <button onClick={handleAction} className="flex gap-1 items-center text-base font-medium " >
        {actionType}
        {buttonIcon && <div>{buttonIcon}</div>}
      </button>
      </div>
      <div>
        <Image src={'/play-data.gif'} height={57} width={300} alt="img"/>
      </div>
    </div>
  );
};

export default Card;
