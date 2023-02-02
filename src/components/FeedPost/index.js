import {
  FaRegComment,
  FaRegThumbsUp,
  FaRegBookmark,
  FaRegThumbsDown,
  FaShare,
  FaRegHeart,
} from "react-icons/fa";
import Image from "next/image";
import profile from "../../assets/images/profile.webp";
import ProfileAvatar from "../ProfileAvatar";
import { AVATAR_RANDOM_URL } from "@src/utils/constants";
import Reactions from "../Reactions";

const FeedPost = () => {
  return (
    <div className="card p-4 h-68 w-auto sm:h-auto sm:p-7">
      <div className="card-header">
        <ProfileAvatar
          name="Vipin"
          userName={"Vipin"}
          profile={AVATAR_RANDOM_URL}
        />
        <div className="card-body mt-4 text-sm sm:text-base">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            ratione! Ab nostrum, maiores optio nesciunt iusto tempora.
            Repellendus qui beatae at veritatis ullam excepturi perspiciatis
            voluptate sit, aperiam vitae rem?
          </p>
        </div>
        <div className="reaction-stats font-bold text-sm mt-3">1k Likes</div>
        <Reactions />
      </div>
    </div>
  );
};

export default FeedPost;
