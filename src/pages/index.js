import Head from "next/head";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../counter";

export default function Home() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="font-bold underline">{count}</div>
        <button onClick={() => dispatch(increase())}>Increase</button>
        <button onClick={() => dispatch(decrease())}>Decrease</button>
        <Link href="/check">Home</Link>
      </main>
    </>
  );
}
