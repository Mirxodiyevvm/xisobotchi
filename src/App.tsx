import { Navigate, Route, Routes } from "react-router-dom";

import { routes } from "./routes/routes";
import type { RouteType } from "./routes/types";
import Sidebar from "./components/layouts/Sidebar";
import Header from "./components/layouts/Header";
import { lazy, useState } from "react";
const Login = lazy(() => import("./pages/login"));

function App() {
  const [logged, setLogged] = useState(false);
  return (
    <>
    <button onClick={()=>setLogged(!logged)}>change</button>
      {logged ? (
        <div className="flex items-start">
          <Sidebar />
          <div className=" flex-1">
            <Header />
            <Routes>
              {routes.map((route: RouteType) => (
                <Route
                  key={route.id}
                  path={route.path}
                  element={<route.element />}
                />
              ))}
            </Routes>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Navigate to={"/login"}/>} />
        </Routes>
      )}
    </>
  );
}

export default App;
