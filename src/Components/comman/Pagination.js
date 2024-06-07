import Image from "next/image";

const {
  createPaginationLinks,
  createMobilePaginationLinks,
} = require("@/constants/pagination");

const Pagination = ({
  pagesCount,
  currentPageNo,
  handleUpdatePage,
  paginationStatus = false,
}) => {
  if (pagesCount === 0) {
    return null;
  }
  let paginationLinks = createPaginationLinks(currentPageNo, pagesCount);
  let mobilePaginationLinks = createMobilePaginationLinks(
    currentPageNo,
    pagesCount
  );
  const updatePage = (value) => {
    paginationLinks = createPaginationLinks(currentPageNo, pagesCount);
    mobilePaginationLinks = createMobilePaginationLinks(
      currentPageNo,
      pagesCount
    );
    handleUpdatePage && handleUpdatePage(value);
  };
  if (paginationStatus) {
    paginationLinks = createPaginationLinks(1, pagesCount);
    mobilePaginationLinks = createMobilePaginationLinks(1, pagesCount);
  }

  return (
    <section className="py-[30px]">
      <div className="container">
        <nav aria-label="Page navigation example" className="justify-end max-md:justify-center flex">
          <div class="flex items-center text-base h-10">
            <button
              onClick={() => updatePage(currentPageNo - 1)}
              disabled={currentPageNo === 1}
              class="flex items-center p-1.5 justify-center w-[28px] h-[28px] lg:w-[32px] lg:h-[32px] rounded-full text-black-33/60 border border-black-33/30 bg-white mr-1 lg:mr-5 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Image
                src={"/arrow.svg"}
                width={35}
                height={35}
                alt=""
                className="rotate-180"
              />
            </button>
            <div className="flex items-center px-3 md:hidden">
              {mobilePaginationLinks?.map((item, index) =>
                typeof item === "number" ? (
                  <button
                    onClick={() => updatePage(item)}
                    className={`flex items-center justify-center p-2 mx-1 lg:mx-1.5 text-sm lg:text-[16px] font-semibold rounded-full ${
                      currentPageNo === item
                        ? "w-[36px] lg:w-[45px] h-[36px] lg:h-[45px] text-white border border-blue-900 bg-blue-900"
                        : "w-[30px] lg:w-[36px] h-[30px] lg:h-[36px] text-black-33/60 border border-black-33/30 bg-white"
                    }`}
                  >
                    {item}
                  </button>
                ) : (
                  <button className="flex items-center justify-center p-2 w-[28px] lg:w-[36px]  h-[28px] lg:h-[36px] mx-1.5 text-[16px] font-semibold text-black-33/60 bg-white">
                    ...
                  </button>
                )
              )}
            </div>
            <div className="flex items-center px-3 max-md:hidden">
              {paginationLinks?.map((item, index) =>
                typeof item === "number" ? (
                  <button
                    onClick={() => updatePage(item)}
                    className={`flex items-center justify-center p-2 mx-1 lg:mx-1.5 text-sm lg:text-[16px] font-semibold rounded-full ${
                      currentPageNo === item
                        ? "w-[36px] lg:w-[45px] h-[36px] lg:h-[45px] text-white border border-blue-900 bg-blue-900"
                        : "w-[30px] lg:w-[36px] h-[30px] lg:h-[36px] text-black-33/60 border border-black-33/30 bg-white"
                    }`}
                  >
                    {item}
                  </button>
                ) : (
                  <button className="flex items-center justify-center p-2 w-[28px] lg:w-[36px]  h-[28px] lg:h-[36px] mx-1.5 text-[16px] font-semibold text-black-33/60 bg-white">
                    ...
                  </button>
                )
              )}
            </div>
            <button
              onClick={() => updatePage(currentPageNo + 1)}
              disabled={currentPageNo === pagesCount}
              class="flex items-center p-1.5 justify-center w-[28px] h-[28px] lg:w-[32px] lg:h-[32px] rounded-full text-black-33/60 border border-black-33/30 bg-white ml-1 lg:ml-5 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Image src={"/arrow.svg"} width={35} height={35} alt="" />
            </button>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Pagination;
