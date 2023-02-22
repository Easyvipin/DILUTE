import FeedPost from "@components/FeedPost";
import Post from "@components/Post";
import ScrollTopics from "@components/ScrollTopics";
import { topics } from "@utils/mockData";

const FeedContainer = () => {
  return (
    <div className="sm:w-3/4">
      <div>
        <ScrollTopics topics={topics} />
        <div className="">
          <FeedPost />
          <FeedPost />
          <FeedPost />
          <FeedPost />
        </div>
      </div>
      <Post />
    </div>
  );
};

export default FeedContainer;
