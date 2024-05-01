import Button from "../ButtonComponent/Index";

const GetStartForm = ({ buttonTitle, placeholder = "enter your email" }) => {
  return (
    <div className="flex gap-4">
      <input
        type="email"
        placeholder={placeholder}
        className="text-white placeholder:text-white leading-5 py-2 px-8 border border-1 border-white  rounded-full bg-whites-10 bg-opacity-10 focus:ring-0 focus:outline-none focus-visible:ring-0"
      />
      <Button filled data={buttonTitle} clsStyle="py-3" />
    </div>
  );
};

export default GetStartForm;
