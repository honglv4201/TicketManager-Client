const CustomInput = ({
  title,
  inputType,
  placeHolder,
  name,
  onChange,
  value,
}) => {
  return (
    <div>
      <div className="opacity-70 text-sm ">{title}</div>
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={inputType}
        placeholder={placeHolder}
        className="w-full px-6 py-2 rounded-lg bg-gray-100 mt-2 outline-none focus:border-2 focus:border-gray-300 border-2 border-transparent"
      />
    </div>
  );
};
export default CustomInput;
