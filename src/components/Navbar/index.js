import Link from "next/link";

const Navbar = () => (
  <div className="container mx-auto p-1 sm:p-3">
    <div className="flex flex-row">
      <div className="text-lg md:text-4xl basis-1/4">dilute</div>
      <ul className="basis-3/4 flex flex-row justify-end gap-3 h-full ">
        <li className="border border-gray px-8 py-2 box-border rounded shadow-md">
          <Link className="text-lg font-bold" href="/auth">
            Login
          </Link>
        </li>
        <li className="border border-gray px-8 py-2 box-border rounded shadow-md">
          <Link className="text-lg font-bold" href="/about">
            About
          </Link>
        </li>
        <li className="px-8 py-2">:)</li>
      </ul>
    </div>
  </div>
);

export default Navbar;
