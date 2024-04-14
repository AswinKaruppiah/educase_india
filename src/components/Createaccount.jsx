import Input from "./Input";
import { Link } from "react-router-dom";

function Createaccount() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-between items-start p-4">
      <div className="w-full">
        <h1 className="font-bold mb-10 text-4xl">Create your PopX account</h1>
        <Input value="Marry Doe" title="Full Name" create={true} />
        <Input value="Marry Doe" title="Phone number" create={true} />
        <Input value="Marry Doe" title="Email address" create={true} />
        <Input value="Marry Doe" title="Password" create={true} />
        <Input value="Marry Doe" title="Company name" create={true} />
        <h1 className="mt-5 text-xl font-medium tracking-wide">
          Are you an Agency
        </h1>
        <div className="flex mt-5  justify-start items-center">
          <input
            type="radio"
            className="w-7 h-7 ml-3  accent-violet-500"
            checked
            value="Yes"
          />
          <label htmlFor="Yes" className="text-lg ml-2">
            Yes
          </label>
          <input
            type="radio"
            className="w-7 h-7 ml-6 accent-violet-500"
            id="No"
            value="No"
          />
          <label htmlFor="No" className="text-lg ml-2">
            No
          </label>
        </div>
        <Link to="/accont">
          <button className="text-white w-full mt-10 font-medium tracking-wide  bg-violet-700 py-4 rounded-lg">
            Create Account
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Createaccount;
