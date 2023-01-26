import Link from "next/link";

const Navbar = () => (
  <div className="container border mx-auto p-1 sm:p-3">
    <div className="flex flex-row">
      <div className="text-lg md:text-4xl basis-1/4">dilute</div>
      <ul className="basis-3/4 flex flex-row border justify-end gap-3 items-center">
        <li className="hover:border hover:border-gray-800">
          <Link className="text-lg" href="/auth">
            Login
          </Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>:)</li>
      </ul>
    </div>
  </div>
);

export default Navbar;
