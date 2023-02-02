import {
  FaRegComment,
  FaRegBookmark,
  FaShare,
  FaRegHeart,
} from "react-icons/fa";

const Reactions = () => {
  return (
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
  );
};

export default Reactions;
