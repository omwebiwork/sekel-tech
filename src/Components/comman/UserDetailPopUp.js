import React, { useCallback, useMemo } from "react";
import Image from "next/image";
import Button from "./Button";

export default function UserDetailPopUp({
  buttonSty = "",
  buttonLabel = "Permanently Erase Data",
  handleOnClick,
  actionMessage = "",
  actionMessageSty = "text-[#F7603B]",
}) {
  const handleClick = useCallback(() => {
    handleOnClick && handleOnClick();
  }, []);
  
  return (
    <div>
      <div className="text-center">
        <Image
          src={"/graph-arrow.svg"}
          height={150}
          width={150}
          alt=""
          className="mx-auto"
        />
      </div>
      {actionMessage && (
        <div
          className={`text-2xl font-semibold text-center pt-8 ${actionMessageSty}`}
        >
          <p>{actionMessage}</p>
        </div>
      )}
      <div className="pt-8 text-center">
        <p className="pb-8 text-secondary text-[16px]">User Details</p>
        <h2 className="text-[16px] font-semibold mb-2 text-secondary">
          Name : User Namesurname
        </h2>
        <h2 className="text-[16px] font-semibold mb-2 text-secondary">
          Email : username@email.com
        </h2>
        <h2 className="text-[16px] font-semibold mb-2 text-secondary">
          Phone no. : 875 482 9973
        </h2>
      </div>
      {actionMessage.length === 0 && (
        <div className="pt-8 flex justify-center">
          <Button
            type="button"
            data={buttonLabel}
            action={handleClick}
            clsStyle={`font-semibold h-[45px] lg:h-[56px] text-white bg-blue-900 min-w-[10rem] rounded-[40px] text-center py-4 px-12 border border-yellow-900 ${buttonSty}`}
          />
        </div>
      )}

      <div className="pt-8">
        <p className="text-center">
          We will process your request to remove your data from our database
          within 24 hours. You will receive a confirmation email soon. Thanks!
        </p>
      </div>
      <div className="text-center pt-8">
        <Image
          src={"/logo-blue.svg"}
          width={221}
          height={34}
          alt=""
          className="mx-auto"
        />
      </div>
    </div>
  );
}
