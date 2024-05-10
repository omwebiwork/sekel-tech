import Link from "next/link";
import React from "react";

const Breadcrumb = ({breadcrumbList }) => {
  return (
    <div className="bg-blue-200 py-2">
      <div className="container">
        <div className="text-base text-black-33 leading-6">
          <Link href={"/"}>{`Home >`}</Link>
          <Link href={"how-it-works"}>{`how it works >`}</Link>
          <Link href={"demand"}>{`Demand Generation`}</Link>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
