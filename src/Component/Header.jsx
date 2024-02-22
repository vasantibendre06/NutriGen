import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);
  const handleLogout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };
  return (
    <>
      <nav className="flex justify-around items-center min-h-[10vh] ">
        <div className="uppercase tracking-wider text-2xl font-bold">
          Nutri <span className="text-red-500">Gen.</span>
        </div>
        <ul className="flex items-center space-x-5">
          <li>Welcome 👋🏻 {user === null ? "NA" : user.displayName}</li>
          <button
            onClick={handleLogout}
            className="bg-purple-500 hover:shadow-xl transition-all delay-75 w-[5rem] font-bold rounded-md text-white  cursor-pointer px-2 py-2"
          >
            LogOut
          </button>
        </ul>
      </nav>
    </>
  );
};

export default Header;
