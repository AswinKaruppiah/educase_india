import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="h-screen w-full flex  justify-start p-4  items-end">
      <div className="w-full ">
        <h1 className="font-bold text-4xl">Welcome To Popx </h1>
        <p className="mt-4 text-gray-500 text-xl">
          Lorem ipsum dolor sit amet,
        </p>

        <p className="text-gray-500 text-xl">consectetur adipiscing elit,</p>
        <Link to="/create">
          <button className="text-white w-full mt-10 font-medium tracking-wide bg-violet-700 py-4 rounded-lg">
            Create Account
          </button>
        </Link>
        <br />
        <Link to="/signin">
          <button className=" mt-3 w-full font-medium tracking-wide bg-gray-300 py-4 rounded-lg">
            Already Registered?Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
