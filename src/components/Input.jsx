/* eslint-disable react/prop-types */
export default function Input({ placeholder, title, create, value }) {
  return (
    <div className="mt-9 relative">
      <label className="absolute -top-3 left-2 px-4 text-lg  bg-white text-violet-500 tracking-wide font-medium ">
        {title} {create && <span className=" text-red-500">*</span>}
      </label>
      <input
        type="text"
        placeholder={placeholder && placeholder}
        value={value ? value : null}
        className="w-full  focus:outline-none border-gray-300 border-2 px-6 py-4 tracking-wide font-medium  rounded-lg placeholder:text-gray-400 "
      />
    </div>
  );
}
