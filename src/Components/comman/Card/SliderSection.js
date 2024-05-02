import Image from "next/image";

const SliderSection = ({
  title,
  description,
  renderElement,
  profileButton = false,
  textContentSty = "col-span-4",
  cardContentSty = "col-span-6",
  discriptionSty = "w-1/2"
}) => {
  return (
    <section className="bg-blue-900 py-[54px]">
      <div className="container">
        <div className="grid grid-cols-10">
          <div className={`${textContentSty} flex items-center`}>
            <div className="w-full text-white">
              <h1 className="text-[42px] font-medium tracking-tighter leading-[55px] mb-5">
                {title}
              </h1>
              <p className={`text-base font-normal leading-[25px] mb-[52px] ${discriptionSty}`}>
                {description}
              </p>
              {profileButton && (
                <div className="flex gap-10 items-center">
                  <p className="text-base font-semibold leading-[22px]">
                    See all Case studies
                  </p>
                  <div>
                    <div className="flex items-center">
                      <div className="shadow border-[1px]  border-blue-900 h-8 w-8 rounded-full relative z-[8] hover:z-[9] transition-all overflow-hidden flex items-center justify-center bg-yellow-900 min-w-8 text-white p-1 text-xs">
                        <Image
                          className="w-6 "
                          src={"/forward-arrow.png"}
                          height={32}
                          width={32}
                          alt="img"
                        />
                      </div>
                      <div className="h-8 w-8 min-w-8 rounded-full -ml-2 relative z-[7] hover:z-[9] transition-all overflow-hidden shadow border-[1px] border-blue-900">
                        <Image
                          src={"/avtar.png"}
                          height={32}
                          width={32}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="-ml-2 h-8 w-8 min-w-8 rounded-full relative z-[6] hover:z-[9] transition-all overflow-hidden shadow border-[1px] border-blue-900">
                        <Image
                          src={"/avtar.png"}
                          height={32}
                          width={32}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="-ml-2 h-8 w-8 min-w-8 rounded-full relative hover:z-[9] transition-all overflow-hidden shadow border-[1px] border-blue-900">
                        <Image
                          src={"/avtar.png"}
                          height={32}
                          width={32}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className={`${cardContentSty}`}>
            <div className="w-full flex gap-5 overflow-x-auto pb-5 ">
              {renderElement}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
