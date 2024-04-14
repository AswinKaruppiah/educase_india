import Input from "./Input";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <div className="h-screen w-full flex justify-start items-start p-4">
      <div className="w-full">
        <h1 className="font-bold text-4xl">Signin to your PopX account</h1>
        <p className="mt-4 text-gray-500 text-xl">
          Lorem ipsum dolor sit amet,
        </p>

        <p className="text-gray-500 mb-10  text-xl">
          consectetur adipiscing elit,
        </p>

        <Input placeholder="Enter email address" title="Email Address" />
        <Input placeholder="Enter password" title="Password" />

        <Link to="/accont">
          <button className=" text-white mt-3 w-full font-medium tracking-wide bg-gray-300 py-4 rounded-lg">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Signin;
