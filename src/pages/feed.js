import FeedPost from "@src/components/FeedPost";
import Post from "@src/components/Post";
import ScrollTopics from "@src/components/ScrollTopics";
import { topics } from "@src/utils/mockData";

const feed = () => {
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

export default feed;
