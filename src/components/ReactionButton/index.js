import Image from "next/image";

const ReactionButton = ({ src, width, height }) => {
  console.log(src);
  return <Image src={src} width={width} height={height} />;
};

export default ReactionButton;
