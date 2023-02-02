const ScrollTopics = ({ topics }) => {
  const renderTopics = () =>
    topics.map((topic) => {
      return (
        <button className="px-3 py-1 text-sm sm:text-base sm:px-6 bg-black text-white border rounded-3xl">
          {topic.name}
        </button>
      );
    });
  return (
    <div className="sticky top-0 flex gap-4 mx-auto overflow-x-scroll bg-white px-4 py-2 z-20">
      {renderTopics()}
    </div>
  );
};

export default ScrollTopics;
