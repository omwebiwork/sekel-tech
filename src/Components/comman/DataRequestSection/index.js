const DataRequestSection = ({
  title,
  description,
  importantText,
  renderFormElement,
}) => {
  return (
    <>
      <h3 className="text-[28px] leading-[140%] font-medium mb-8">{title}</h3>
      <div className="pb-5">{description}</div>
      <div className="flex gap-8 border border-yellow-900 bg-gray-100 px-10 py-8 rounded-2xl">
        <h3 className="text-[28px] font-medium text-black-33">Important!</h3>
        <p>{importantText}</p>
      </div>
      {renderFormElement && renderFormElement}
    </>
  );
};
export default DataRequestSection;
