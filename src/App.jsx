import Accont from "./components/Accont";
import Createaccount from "./components/Createaccount";
import Login from "./components/Login";
import Signin from "./components/Signin";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes path="/">
      <Route index element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="signin" element={<Signin />} />
      <Route path="create" element={<Createaccount />} />
      <Route path="accont" element={<Accont />} />
    </Routes>
  );
}

export default App;
