import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="h-screen bg-slate-500 p-4 w-1/5 min-w-56">
      <ul className="flex flex-col items-start">
        <li>
          <NavLink to={"/"}>Dashboard</NavLink>
        </li>
        <li>
          <NavLink to={"/categories"}>Kategoriyalar</NavLink>
        </li>
        <li>
          <NavLink to={"/login"}>Login</NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
