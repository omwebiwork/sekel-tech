import Breadcrumb from "@/Components/comman/Breadcrumb";
import StoreCard from "@/Components/comman/Card/StoreCard";
import ContentDetailsSection from "@/Components/comman/ContentDetailsSection";
import LovedThisContent from "@/Components/comman/Form/LovedThisContent";
import StoreDetailBanner from "@/Components/comman/StoreDetailBanner";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const baseURLJob = `${process.env.STRAPI_PATH}/jobs?populate[0]=job_category&populate[1]=JobImage&sort=publishedAt:desc`;

const CareersDetails = () => {
  const router = useRouter();
  const [jobList, setJobList] = useState([]);
  const [jobDetails, setJobDetails] = useState([]);

  useEffect(() => {
    localStorage.setItem("activePage", "Company");
    return () => {
      localStorage.setItem("activePage", "");
    };
  }, []);

  useEffect(() => {
    if (router.query.slug) {
      const baseURL = `${process.env.STRAPI_PATH}/jobs?filters[slug][$eq]=${router.query.slug}&populate[0]=job_category&populate[1]=JobImage`;
      if (window.location.protocol.indexOf("https") == 0) {
        var el = document.createElement("meta");
        el.setAttribute("http-equiv", "Content-Security-Policy");
        el.setAttribute("content", "upgrade-insecure-requests");
        document.head.append(el);
      }
      axios
        .get(baseURL)
        .then((response) => {
          setJobDetails(response.data.data[0] || []);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [router.query.slug]);

  useEffect(() => {
    if (window.location.protocol.indexOf("https") == 0) {
      var el = document.createElement("meta");
      el.setAttribute("http-equiv", "Content-Security-Policy");
      el.setAttribute("content", "upgrade-insecure-requests");
      document.head.append(el);
    }
    // get jobs
    axios
      .get(baseURLJob)
      .then((response) => {
        setJobList(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log("chekc", jobDetails, jobList);
  return (
    <>
      <Breadcrumb
        breadcrumbList={[
          { link: "/", label: "Home" },
          { link: "/company", label: "Company" },
          { link: "/company/careers", label: "Careers" },
          {
            link: `/company/careers/${jobDetails?.attributes?.slug}`,
            label: jobDetails?.attributes?.position,
          },
        ]}
      />
      <StoreDetailBanner
        title={jobDetails?.attributes?.position}
        description="Pune, Yerwada"
        sectionSty="bg-blue-200"
      />

      <ContentDetailsSection
        heading={"Other Positions Open"}
        contentDetails={jobDetails?.attributes?.roles}
        similarContentList={jobList}
        renderElement={(item, index) => {
          if (item?.attributes?.slug !== router.query.slug) {
            return (
              <StoreCard
                btnLabel={item?.attributes?.position}
                description={item?.attributes?.description}
                bgImage={{
                  src: item?.attributes?.JobImage?.data?.attributes?.url,
                  height: 900,
                  width: 900,
                  alt: "img",
                }}
                slug={`/company/careers/${item?.attributes.slug}`}
              />
            );
          }
        }}
      />
      <LovedThisContent />
    </>
  );
};

export default CareersDetails;
