const ScrollTopics = ({ topics }) => {
  const renderTopics = () =>
    topics.map((topic) => {
      return <button className="btn border rounded-3xl">{topic.name}</button>;
    });
  return (
    <div className="w-3/4 flex gap-4 mx-auto overflow-x-scroll px-4">
      {renderTopics()}
    </div>
  );
};

export default ScrollTopics;
