import Breadcrumb from "@/Components/comman/Breadcrumb";
import Button from "@/Components/comman/Button";
import StoreCard from "@/Components/comman/Card/StoreCard";
import LovedThisContent from "@/Components/comman/Form/LovedThisContent";
import SidebarSection from "@/Components/comman/SidebarSection";
import DownArrow from "@/assets/DownArrow";
import { blogCardData, blogsFilterData } from "@/static/json/blog";
import React, { useState } from "react";

const Blog = () => {
  const [currentFilter, setCurrentFilter] = useState("all");
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <section>
      <Breadcrumb
        breadcrumbList={[
          { link: "/", label: "Home" },
          { link: "/company", label: "Company" },
          { link: "/company/blog", label: "Blog" },
        ]}
      />
      <SidebarSection
        sidebarTitle="Blogs"
        sidebarFilterData={blogsFilterData}
        cardList={blogCardData}
        renderElement={(item, index) => (
          <div key={index} className="col-span-6 max-md:col-span-6 mb-5">
            <StoreCard {...item} />
          </div>
        )}
      />
      <LovedThisContent />
    </section>
  );
};

export default Blog;
