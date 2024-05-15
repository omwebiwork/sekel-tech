import Button from "../ButtonComponent/Index";

const GetStartForm = ({
  buttonTitle,
  placeholder = "enter your email",
  type = "email",
  value = "",
  filled = true,
  inputSty = "text-white placeholder:text-white border-white",
}) => {
  return (
    <div className="flex gap-4">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        className={`leading-5 py-2 px-8 border border-1 rounded-full bg-gray-100 bg-opacity-10 focus:ring-0 focus:outline-none focus-visible:ring-0 ${inputSty}`}
      />
      <Button filled={filled} data={buttonTitle} clsStyle="py-3" />
    </div>
  );
};

export default GetStartForm;
