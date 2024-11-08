import React from "react";
import { MdOutlineSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setOpenSidebar, logout } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import UserAvatar from "./UserAvatar";
import { useLogoutMutation } from "../redux/slices/api/authApiSlice";
import { toast } from "sonner";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutUser] = useLogoutMutation();
  const logoutHandler = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="flex justify-between items-center bg-white px-4 py-3 2xl:py-4 sticky z-10 top-0">
      <div className="flex gap-4">
        <button
          onClick={() => dispatch(setOpenSidebar(true))}
          className="text-2xl text-gray-500 block md:hidden"
        >
          ☰
        </button>

        <div className="w-64 2xl:w-[1400px] flex items-center py-2 px-3 gap-2 rounded-full bg-[#f3f4f6]">
          <MdOutlineSearch className="text-gray-500 text-xl" />

          <input
            type="text"
            placeholder="Search...."
            className="flex-1 outline-none bg-transparent placeholder:text-gray-500 text-gray-800"
          />
        </div>
        <div className="flex gap-2 items-center">
          {/* <UserAvatar /> */}
          {user && (
            <button
              onClick={logoutHandler}
              className={`text-red-600 group flex w-full items-center rounded-md px-2 py-2 text-base`}
            >
              <IoLogOutOutline className="mr-2 text-2xl" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
