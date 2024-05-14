import Link from "next/link";
import React from "react";

const Breadcrumb = ({ breadcrumbList }) => {
  return (
    <div className="bg-blue-200 py-2">
      <div className="container">
        <div className="text-base text-black-33 leading-6">
          {breadcrumbList?.map((breadcrumb, index) => {
            console.log("chhekc", breadcrumb);
            return (
              <Link key={index} href={breadcrumb?.link}>{`${breadcrumb?.label}${
                index < breadcrumbList?.length - 1 ? ">" : ""
              }`}</Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
