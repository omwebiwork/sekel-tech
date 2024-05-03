import Button from "../ButtonComponent/Index";

const HyperlocalStrategyForm = ({
  title = "Supercharge Your Hyperlocal Strategy Today!",
  placeholder = "Enter your email",
  buttonTitle = "Get a  FREE Audit",
  containerSty=""
}) => {
  const handleAction = () => {
    console.log("submit");
  };
  return (
    <div className=" bg-yellow-100 py-[18px] px-10 rounded-[14px]">
      <div className={`${containerSty} flex gap-8`}>

      <p className="text-[28px] text-blue-600 font-medium">{title}</p>
      <div className="flex-1">
        <div className="flex gap-4 ">
          <input
            type="email"
            placeholder={placeholder}
            className="text-black-33 placeholder:text-black-33 flex-grow leading-5 py-2 px-8 border border-1 border-gray-400  rounded-full bg-white focus:ring-0 focus:outline-none focus-visible:ring-0"
          />
          <Button
            data={buttonTitle}
            clsStyle="py-3 px-10 bg-blue-900 border-blue-900"
            action={handleAction}
          />
        </div>
      </div>
      </div>
    </div>
  );
};

export default HyperlocalStrategyForm;
