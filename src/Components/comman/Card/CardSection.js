const CardSection = ({
  title,
  desciption,
  renderElement,
  headingSty = "text-center",
  descriptionSty = "w-[456px] mx-auto",
}) => {
  return (
    <section className="py-[100px] bg-white">
      <div className="container">
        <div className={`${headingSty} mb-[52px]`}>
          <h3 className="text-[42px] font-medium mb-3 leading-[52px] tracking-tighter text-black-33">
            {title}
          </h3>
          <p
            className={`text-base font-normal leading-[22px] ${descriptionSty} text-black-33`}
          >
            {desciption}
          </p>
        </div>
        {renderElement()}
      </div>
    </section>
  );
};

export default CardSection;
