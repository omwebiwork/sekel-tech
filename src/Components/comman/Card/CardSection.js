const CardSection = ({
  title,
  description = null,
  subTitle = null,
  subTitleSty = '',
  renderElement,
  headerSection,
  headingSty = "text-center mb-[52px]",
  descriptionSty = "w-[456px] mx-auto",
  sectionStyle = "py-[100px] bg-white",
  titleSty = 'text-[42px] font-medium mb-3 leading-[52px] tracking-tighter text-black-33'
}) => {
  return (
    <section className={`${sectionStyle}`}>
      <div className="container">
        <div className={`${headingSty}`}>
          <div>
            <h3 className={`${titleSty}`}>
              {title}
            </h3>
            {subTitle && (
              <p
                className={`text-[28px] font-medium leading-[32px] mb-8 tracking-tight ${
                  subTitleSty 
                }`}
              >
                {subTitle}
              </p>
            )}
            {description && (
              <p
                className={`text-base font-normal leading-[22px] ${descriptionSty} text-black-33`}
              >
                {description}
              </p>
            )}
          </div>
          {headerSection}
        </div>
        {renderElement()}
      </div>
    </section>
  );
};

export default CardSection;
