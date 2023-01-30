import Link from "next/link";
import { FaUser, FaCog, FaBell, FaUserFriends } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="flex flex-col left-0 h-3/4 w-1/4 justify-center items-center px-8">
      <div className="flex flex-col  gap-10">
        <Link
          className="flex justify-start gap-1 items-center text-xl font-medium"
          href="/profile"
        >
          <FaUser />
          <span>Profile</span>
        </Link>
        <Link
          className="flex justify-start gap-1 items-center text-xl font-medium"
          href="/settings"
        >
          <FaCog /> Settings
        </Link>
        <Link
          className="flex justify-start gap-1 items-center text-xl font-medium"
          href="/Notification"
        >
          <FaBell /> Notifications
        </Link>
        <Link
          className="flex justify-start gap-1 items-center text-xl font-medium"
          href="/Notification"
        >
          <FaUserFriends /> Friends
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
