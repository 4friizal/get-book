export default function InputFixed({
  id,
  type,
  placeholder,
  onChange,
  disabled,
}) {
  return (
    <input
      id={id}
      className="mx-auto bg-white rounded-[5px] text-[#000] font-Poppins text-xl p-5 shadow-[2px_2px_4px_2px_rgba(0,0,0,0.25)] w-full"
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      required
    />
  );
}
