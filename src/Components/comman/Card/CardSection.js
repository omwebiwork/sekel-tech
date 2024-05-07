const CardSection = ({
  title,
  description = null,
  renderElement,
  headerSection,
  headingSty = "text-center",
  descriptionSty = "w-[456px] mx-auto",
  sectionStyle = "py-[100px] bg-white",
  titleSty = 'text-[42px] font-medium mb-3 leading-[52px] tracking-tighter text-black-33'
}) => {
  return (
    <section className={`${sectionStyle}`}>
      <div className="container">
        <div className={`${headingSty} mb-[52px]`}>
          <div>
            <h3 className={`${titleSty}`}>
              {title}
            </h3>
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
