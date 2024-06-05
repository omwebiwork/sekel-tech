import React, { useCallback, useMemo } from "react";
import Image from "next/image";

export default function NotFoundPopUp() {
  return (
    <div>
      <div className="text-center">
        <Image
          src={"/not-found.png"}
          height={150}
          width={150}
          alt=""
          className="mx-auto"
        />
      </div>

      <div
        className={`text-[32px] font-semibold text-center pt-8 text-[#655F60]`}
      >
        <p>No Data Found</p>
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
