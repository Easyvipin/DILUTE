import { useLogOutMutation } from "@containers/AuthContainer/authSlice";
import Link from "next/link";
import { FaUser, FaCog, FaBell, FaUserFriends } from "react-icons/fa";
import { ImFeed } from "react-icons/im";

const SideBar = () => {
  const [logOut] = useLogOutMutation();

  return (
    <div className="flex flex-row bottom-0 sm:flex-col sm:left-0 sm:h-3/4 sm:w-1/4 sm:justify-center sm:items-center py-4 sm:py-0 sm:px-8">
      <div className="flex justify-evenly sm:justify-center basis-full sm:flex-col  sm:gap-10">
        <Link
          className="flex justify-start gap-1 items-center text-xl font-medium"
          href="/profile"
        >
          <FaUser />
          <span className="hidden sm:block">Profile</span>
        </Link>
        <Link
          className="flex justify-start gap-1 items-center text-xl font-medium"
          href="/settings"
        >
          <FaCog />
          <span className="hidden sm:block">Settings</span>
        </Link>
        <Link
          className="sm:hidden flex justify-start gap-1 items-center text-xl font-medium"
          href="/settings"
        >
          <ImFeed />
          <span className="hidden sm:block">Settings</span>
        </Link>
        <Link
          className="flex justify-start gap-1 items-center text-xl font-medium"
          href="/Notification"
        >
          <FaBell />
          <span className="hidden sm:block">Notifications</span>
        </Link>
        <Link
          className="flex justify-start gap-1 items-center text-xl font-medium"
          href="/Notification"
        >
          <FaUserFriends />
          <span className="hidden sm:block">Friends</span>
        </Link>
        <button
          className="flex justify-start gap-1 items-center text-xl font-medium"
          onClick={logOut}
        >
          <FaUserFriends />
          <span className="hidden sm:block">Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
