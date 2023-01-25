import Head from "next/head";
import { useSelector } from "react-redux";

export default function Check() {
  const count = useSelector((state) => state.counter.value);
  return (
    <>
      <div className="font-bold underline">{count}</div>
    </>
  );
}
