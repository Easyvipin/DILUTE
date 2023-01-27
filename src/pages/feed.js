import FeedPost from "@src/components/FeedPost";
import ScrollTopics from "@src/components/ScrollTopics";
import { topics } from "@src/utils/mockData";

const feed = () => {
  return (
    <div className="w-full border border-gray-900">
      <ScrollTopics topics={topics} />
      <div className="">
        <FeedPost />
      </div>
    </div>
  );
};

export default feed;
