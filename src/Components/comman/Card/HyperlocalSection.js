import Image from "next/image";

const HyperlocalSection = ({ title, description, tagList }) => {
  return (
    <section className="bg-blue-900 py-[45px] md:py-[60px] lg:py-[80px]">
      <div className="container">
        <div className="mb-[52px]">
          <h3 className="text-[32px] lg:text-[42px] font-medium leading-[140%] tracking-tighter text-white max-w-[712px]">
            {title}
          </h3>
          {description && (
            <p className="text-base mt-4 font-normal leading-[140%] max-w-[740px] text-yellow-900">
              {description}
            </p>
          )}
        </div>
        <div className="flex flex-wrap items-center relative max-lg:max-w-[345px] max-lg:mx-auto">
          <div className="w-full lg:w-[25%] lg:h-full mt-auto max-lg:absolute max-lg:pl-[90px] max-lg:max-w-[400px] left-0 top-0">
            <ul className="lg:pr-5">
              {(tagList?.leftTop?.title || tagList?.leftTop?.description) && (
                <li className="ml-auto lg:max-w-[243px] lg:text-end mb-[30px] lg:mb-[87px]">
                  {tagList?.leftTop?.title && (
                    <p className="mb-[14px] text-xl font-medium text-white ">
                      {tagList?.leftTop?.title}
                    </p>
                  )}
                  {tagList?.leftTop?.description && (
                    <p className="text-sm font-light text-white lg:text-end">
                      {tagList?.leftTop?.description}
                    </p>
                  )}
                </li>
              )}
              {(tagList?.leftMiddle?.title ||
                tagList?.leftMiddle?.description) && (
                <li className="ml-auto lg:max-w-[243px] lg:text-end mb-[30px] lg:mb-[87px]">
                  {tagList?.leftMiddle?.title && (
                    <p className="mb-[14px] text-xl font-medium text-white ">
                      {tagList?.leftMiddle?.title}
                    </p>
                  )}
                  {tagList?.leftMiddle?.description && (
                    <p className="text-sm font-light text-white lg:text-end">
                      {tagList?.leftMiddle?.description}
                    </p>
                  )}
                </li>
              )}
              {(tagList?.leftBottom?.title ||
                tagList?.leftBottom?.description) && (
                <li className="ml-auto lg:max-w-[243px] lg:text-end max-md:mb-[30px]">
                  {tagList?.leftBottom?.title && (
                    <p className="mb-[14px] text-xl font-medium text-white">
                      {tagList?.leftBottom?.title}
                    </p>
                  )}
                  {tagList?.leftBottom?.description && (
                    <p className="text-sm font-light text-white lg:text-end">
                      {tagList?.leftBottom?.description}
                    </p>
                  )}
                </li>
              )}
            </ul>
          </div>
          <div className="w-full lg:w-[50%] h-full">
            <div className="max-w-[591px] w-full mx-auto">
              <Image
                className="h-full w-full object-cover max-lg:hidden"
                src={"/Choice.png"}
                height={562}
                width={591}
                alt="img"
              />
              <Image
                className="h-full w-full object-cover lg:hidden"
                src={"/discover-choice-mobile.svg"}
                height={562}
                width={591}
                alt="img"
              />
            </div>
          </div>
          <div className="w-full lg:w-[25%] lg:h-full max-lg:absolute max-lg:pr-[90px] max-lg:max-w-[400px] right-0 bottom-[20px] top-auto max-md:mt-auto">
            <ul className="lg:pr-5">
              {(tagList?.rightTop?.title || tagList?.rightTop?.description) && (
                <li className="ml-auto mb-[30px] lg:max-w-[243px] max-lg:text-end lg:mb-[68px]">
                  {tagList?.rightTop?.title && (
                    <p className="mb-[14px] text-xl font-medium text-white">
                      {tagList?.rightTop?.title}
                    </p>
                  )}
                  {tagList?.rightTop?.description && (
                    <p className="text-sm font-light text-white">
                      {tagList?.rightTop?.description}
                    </p>
                  )}
                </li>
              )}
              {(tagList?.rightMiddle?.title ||
                tagList?.rightMiddle?.description) && (
                <li className="ml-auto mb-[30px] lg:max-w-[243px] max-lg:text-end lg:mb-[68px]">
                  {tagList?.rightMiddle?.title && (
                    <p className="mb-[14px] text-xl font-medium text-white">
                      {tagList?.rightMiddle?.title}
                    </p>
                  )}
                  {tagList?.rightMiddle?.description && (
                    <p className="text-sm font-light text-white">
                      {tagList?.rightMiddle?.description}
                    </p>
                  )}
                </li>
              )}
              {(tagList?.rightBottom?.title ||
                tagList?.rightBottom?.description) && (
                <li className="ml-auto mb-[30px] lg:max-w-[243px] max-lg:text-end">
                  {tagList?.rightBottom?.title && (
                    <p className="mb-[14px] text-xl font-medium text-white">
                      {tagList?.rightBottom?.title}
                    </p>
                  )}
                  {tagList?.rightBottom?.description && (
                    <p className="text-sm font-light text-white">
                      {tagList?.rightBottom?.description}
                    </p>
                  )}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HyperlocalSection;
