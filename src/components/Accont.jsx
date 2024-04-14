/* eslint-disable react/no-unescaped-entities */
import { FaCamera } from "../assets";

function Accont() {
  return (
    <div className="h-screen w-full  bg-gray-100">
      <nav className="bg-white px-4 py-6">
        <h1 className="font-medium text-2xl">Account Settings</h1>
      </nav>
      <div className="px-5 py-8 flex flex-col border-b-4 border-dotted border-gray-300  gap-8 justify-center items-start">
        <div className="flex gap-10 flex-wrap">
          <div className="relative">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              alt="profile image"
              className="w-36 h-36  rounded-full object-contain"
            />
            <FaCamera
              color="white"
              size="40px"
              className="bg-violet-600 z-20 px-3  absolute bottom-2 right-0 rounded-full"
            />
          </div>

          <div>
            <h1 className="font-medium text-lg tracking-wide">Marry Doe</h1>
            <h3 className=" tracking-wide">Marry@Gmail.com</h3>
          </div>
        </div>
        <p className="tracking-wide font-light max-w-4xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </p>
      </div>
    </div>
  );
}

export default Accont;
