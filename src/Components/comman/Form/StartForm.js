import Button from "../Button";

const GetStartForm = ({
  buttonTitle,
  placeholder = "enter your email",
  type = "email",
  value = "",
  filled = true,
  inputSty = "text-white placeholder:text-white border-white",
  formMainDiv = "max-md:flex-wrap",
  formBtnSty=""
}) => {
  return (
    <div className={`flex gap-2 xl:gap-4 ${formMainDiv}`}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        className={`max-md:w-full h-[48px] leading-5 py-2 px-8 border border-1 rounded-full bg-gray-100 bg-opacity-10 focus:ring-0 focus:outline-none focus-visible:ring-0 ${inputSty}`}
      />
      <Button
        filled={filled}
        data={buttonTitle}
        clsStyle={`py-3 px-8 whitespace-nowrap ${formBtnSty}`}
      />
    </div>
  );
};

export default GetStartForm;
