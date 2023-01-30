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

const FeedPost = () => {
  return (
    <div className="card w-auto h-auto p-7">
      <div className="card-header">
        <div className="profile-section flex  justify-start items-center">
          <div className="avatar  border rounded-full overflow-hidden border-blue-100 w-12 h-12 shadow-sm relative">
            <Image className="object-cover h-full" src={profile} />
          </div>
          <div className="description ml-2">
            <div className="name font-medium ">Vipin</div>
            <div className="user-name text-gray-400 text-sm">@viipiiin</div>
          </div>
        </div>
        <div className="card-body mt-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            ratione! Ab nostrum, maiores optio nesciunt iusto tempora.
            Repellendus qui beatae at veritatis ullam excepturi perspiciatis
            voluptate sit, aperiam vitae rem?
          </p>
        </div>
        <div className="reaction-stats font-bold text-sm mt-3">1k Likes</div>
        <div className="reactions flex mt-3 justify-between">
          <div className="left-reactions flex w-28 justify-start gap-3">
            <FaRegHeart />
            <FaRegComment />
            <FaShare />
          </div>
          <div className="right-reactions flex w-28 justify-end gap-3">
            <FaRegBookmark />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedPost;
