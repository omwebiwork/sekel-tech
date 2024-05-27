import Breadcrumb from "@/Components/comman/Breadcrumb";
import StoreCard from "@/Components/comman/Card/StoreCard";
import LovedThisContent from "@/Components/comman/Form/LovedThisContent";
import Loader from "@/Components/comman/Loader";
import SidebarSection from "@/Components/comman/SidebarSection";
import {
  PER_PAGE_FIRST,
  getPageOffset,
  totalPagesCount,
} from "@/constants/pagination";
import { blogCardData, blogsFilterData } from "@/static/json/blog";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const baseURLBlog = `${process.env.STRAPI_PATH}/blogs?populate[0]=blog_category&populate[1]=FeaturedImage&sort=publishedAt:desc&pagination[limit]=${PER_PAGE_FIRST}`;

const baseURLCategory = `${process.env.STRAPI_PATH}/blog-categories?fields[0]=name&fields[1]=slug`;
const Blog = () => {
  const router = useRouter();
  const [blogList, setBlogList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [loaderStat, setLoader] = useState(false);
  const [start, setStart] = useState(0);
  const [pagesCount, setPagesCount] = useState(0);

  const updateParent = (value) => {
    const postPerPage = getPageOffset(value) + PER_PAGE_FIRST;
    setStart(postPerPage - PER_PAGE_FIRST);
    window.scrollTo(0, 500);
  };


  const getBlogBySlug = (slug) => {
    setLoader(true);
    router.push(`/company/blog/category/${slug}`);
  };

  // get blog category
  useEffect(() => {
    if (window.location.protocol.indexOf("https") == 0) {
      var el = document.createElement("meta");
      el.setAttribute("http-equiv", "Content-Security-Policy");
      el.setAttribute("content", "upgrade-insecure-requests");
      document.head.append(el);
    }
    axios
      .get(baseURLCategory)
      .then((response) => {
        setCategoryList(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // get blog list
  useEffect(() => {
    setLoader(true);
    if (window.location.protocol.indexOf("https") == 0) {
      var el = document.createElement("meta");
      el.setAttribute("http-equiv", "Content-Security-Policy");
      el.setAttribute("content", "upgrade-insecure-requests");
      document.head.append(el);
    }
    const baseURLUpdated = baseURLBlog + "&pagination[start]=" + start;
    axios
      .get(baseURLUpdated)
      .then((response) => {
        setBlogList(response.data.data);
        setPagesCount(
          totalPagesCount(+response.data.meta.pagination.total || 0)
        );
        setLoader(false);
      })
      .catch((error) => {
        console.log(error);
        setLoader(false);
      });
  }, [start]);

  return (
    <>
      {loaderStat && <Loader />}
      <Breadcrumb
        breadcrumbList={[
          { link: "/", label: "Home" },
          { link: "/company", label: "Company" },
          { link: "/company/blog", label: "Blog" },
        ]}
      />
      <section className="pb-[50px]">
        <SidebarSection
          sidebarTitle="Blogs"
          sidebarFilterData={[blogsFilterData[0], ...categoryList]}
          onHandleFilter={(e) => {
            getBlogBySlug(e);
          }}
          renderElement={() =>
            blogList &&
            blogList?.map((item, index) => {
              return (
                <div key={index} className="col-span-6 max-md:col-span-6 mb-5">
                  <StoreCard
                    btnLabel={
                      item?.attributes?.blog_category?.data?.attributes?.name
                    }
                    description={item?.attributes?.title}
                    bgImage={{
                      src: item?.attributes?.FeaturedImage?.data?.attributes
                        ?.url,
                      height: 900,
                      width: 900,
                      alt: "img",
                    }}
                    slug={`/company/blog/${item?.attributes.slug}`}
                  />
                </div>
              );
            })
          }
        />
      </section>
      <section className="py-[30px]">
        <div className="container">
          <nav
            aria-label="Page navigation example"
            className="justify-end flex"
          >
            <div class="flex items-center text-base h-10">
              <button class="flex items-center p-1.5 justify-center w-[32px] h-[32px] rounded-full text-black-33/60 border border-black-33/30 bg-white mr-5">
                <Image
                  src={"/arrow.svg"}
                  width={35}
                  height={35}
                  alt=""
                  className="rotate-180"
                />
              </button>

              <button class="flex items-center justify-center p-2 w-[36px] h-[36px] mx-1.5 text-[16px] font-semibold rounded-full text-black-33/60 border border-black-33/30 bg-white">
                1
              </button>

              <button class="flex items-center justify-center p-2 w-[36px] h-[36px] mx-1.5 text-[16px] font-semibold rounded-full text-black-33/60 border border-black-33/30 bg-white">
                2
              </button>

              <button class="flex items-center justify-center p-2 w-[45px] h-[45px] mx-1.5 text-[16px] font-semibold rounded-full text-white border border-blue-900 bg-blue-900">
                3
              </button>

              <button class="flex items-center justify-center p-2 w-[36px] h-[36px] mx-1.5 text-[16px] font-semibold rounded-full text-black-33/60 border border-black-33/30 bg-white">
                4
              </button>

              <button class="flex items-center justify-center p-2 w-[36px] h-[36px] mx-1.5 text-[16px] font-semibold text-black-33/60 bg-white">
                ...
              </button>
              <button class="flex items-center justify-center p-2 w-[36px] h-[36px] mx-1.5 text-[16px] font-semibold rounded-full text-black-33/60 border border-black-33/30 bg-white">
                12
              </button>

              <button class="flex items-center p-1.5 justify-center w-[32px] h-[32px] rounded-full text-black-33/60 border border-black-33/30 bg-white ml-5">
                <Image src={"/arrow.svg"} width={35} height={35} alt="" />
              </button>
            </div>
          </nav>
        </div>
      </section>
      <LovedThisContent />
    </>
  );
};

export default Blog;
