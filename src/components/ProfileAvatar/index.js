import PropTypes from "prop-types";
import Image from "next/image";
import { AVATAR_GEN_URL } from "@src/utils/constants";

const ProfileAvatar = ({ profile, name, userName }) => {
  return (
    <div className="profile-section flex justify-start items-center">
      <div className="avatar  border rounded-full overflow-hidden border-blue-100 w-10 h-10 sm:w-12 sm:h-12 shadow-sm relative">
        <img
          className="object-cover h-full"
          src={profile || `${AVATAR_GEN_URL}+${name}`}
        />
      </div>
      <div className="description ml-2">
        <div className="name text-sm font-medium ">{name}</div>
        <div className="user-name text-gray-400 -m-1 sm:-m-0 text-sm">
          @{userName}
        </div>
      </div>
    </div>
  );
};

ProfileAvatar.PropTypes = {
  profile: PropTypes.string,
  name: PropTypes.string,
  username: PropTypes.string,
};

export default ProfileAvatar;
