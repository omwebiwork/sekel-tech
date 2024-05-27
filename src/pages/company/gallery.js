import axios from "axios";
import { useEffect, useState } from "react";

import {
  PER_PAGE_FIRST,
  totalPagesCount,
  getPageOffset,
} from "@/constants/pagination";
import SidebarSection from "@/Components/comman/SidebarSection";
import Breadcrumb from "@/Components/comman/Breadcrumb";
import StoreCard from "@/Components/comman/Card/StoreCard";
import { blogsFilterData } from "@/static/json/blog";
import LovedThisContent from "@/Components/comman/Form/LovedThisContent";
import VideoCard from "@/Components/comman/Card/VideoCard";
import Loader from "@/Components/comman/Loader";
import { useRouter } from "next/router";
import Button from "@/Components/comman/Button";

const baseURLVideo = `${process.env.STRAPI_PATH}/videos?populate[0]=video_category&populate[1]=thumbnail_url&sort=publishedAt%3Adesc&pagination[limit]=${PER_PAGE_FIRST}`;

const baseURLCategory = `${process.env.STRAPI_PATH}/video-categories?fields[0]=category_title&fields[1]=slug`;
const Video = () => {
  const router = useRouter();
  const [activeState, setActiveState] = useState("all");
  const [videoList, setVideoList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [loaderStat, setLoader] = useState(false);
  const [start, setStart] = useState(0);
  const [pagesCount, setPagesCount] = useState(0);

  const updateParent = (value) => {
    const postPerPage = getPageOffset(value) + PER_PAGE_FIRST;
    setStart(postPerPage - PER_PAGE_FIRST);
    window.scrollTo(0, 500);
  };

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

  useEffect(() => {
    let timeout;
    if (window.location.protocol.indexOf("https") == 0) {
      var el = document.createElement("meta");
      el.setAttribute("http-equiv", "Content-Security-Policy");
      el.setAttribute("content", "upgrade-insecure-requests");
      document.head.append(el);
    }
    if (activeState !== "all") {
      setLoader(true);
      const baseURLUpdated =
        baseURLVideo +
        "&filters[video_category][category_title][%24eq]=" +
        activeState +
        "&pagination[start]=" +
        start;
      axios
        .get(baseURLUpdated)
        .then((response) => {
          setVideoList(response.data.data);
          setPagesCount(
            totalPagesCount(+response.data.meta.pagination.total || 0)
          );
          setLoader(false);
        })
        .catch((error) => {
          console.log(error);
          setLoader(false);
        });
    } else {
      setLoader(true);
      const baseURLUpdated = baseURLVideo + "&pagination[start]=" + start;
      axios
        .get(baseURLUpdated)
        .then((response) => {
          setVideoList(response.data.data);
          setPagesCount(
            totalPagesCount(+response.data.meta.pagination.total || 0)
          );
          setLoader(false);
        })
        .catch((error) => {
          console.log(error);
          setLoader(false);
        });
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [start, activeState]);

  let categoryUpdateList = categoryList?.map((item) => {
    return {
      ...item,
      attributes: {
        ...item?.attributes,
        name: item?.attributes?.category_title,
        slug: item?.attributes?.category_title,
      },
    };
  });

  return (
    <>
      {loaderStat && <Loader />}
      <Breadcrumb
        breadcrumbList={[
          { link: "/", label: "Home" },
          { link: "/company", label: "Company" },
          { link: "/company/gallery", label: "Gallery" },
        ]}
      />
      <section className="pb-[50px]">
        <SidebarSection
          sidebarTitle="Gallery"
          sidebarFilterData={[blogsFilterData[0], ...categoryUpdateList]}
          renderHeaderElement={
            <>
              <Button
                data="Video"
                clsStyle={`max-lg:w-full max-lg:text-left py-2 border-transparent px-4 lg:px-4 text-sm whitespace-nowrap tracking-tight leading-[140%] text-black-3 block ${
                  router.asPath.includes("gallery")
                    ? "bg-yellow-100 max-lg:bg-white max-lg:border-gray-400 max-lg:w-full max-lg:text-start border-yellow-900"
                    : "text-black-33 border border-transparent"
                }`}
                action={() => router.push("/company/gallery")}
              />
              <Button
                data="Gallery"
                clsStyle={`max-lg:w-full max-lg:text-left py-2 border-transparent px-4 lg:px-4 text-sm whitespace-nowrap tracking-tight leading-[140%] text-black-3 block ${
                  router.asPath.includes("photo")
                    ? "bg-yellow-100 max-lg:bg-white max-lg:border-gray-400 max-lg:w-full max-lg:text-start border-yellow-900"
                    : "text-black-33 border border-transparent"
                }`}
                action={() => router.push("/company/photo")}
              />
            </>
          }
          onHandleFilter={(e) => {
            setActiveState(e);
          }}
          renderElement={() =>
            videoList.length > 0 ? (
              videoList?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="col-span-6 max-md:col-span-6 mb-5"
                  >
                    <VideoCard videoData={item} />
                  </div>
                );
              })
            ) : (
              <p className="col-span-12 text-center">No Video Found !!!</p>
            )
          }
        />
      </section>
      <LovedThisContent />
    </>
  );
};
export default Video;
