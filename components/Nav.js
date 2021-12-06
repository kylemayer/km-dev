import Link from "next/link";

function Nav() {
  return (
    <div className="px-7 sm:px-0 container mx-auto  items-center">
      <nav className="flex w-full py-5 justify-between text-gray-100">
        <div className="mr-12 mb-2 text-gray-100">
        <p className="font-light">Kyle Mayer
        </p>
        </div>
        <div className=" flex space-x-4 text-gray-100 ">
          <Link href={"/crater-lake"}>
            <p className="text-sm cursor-pointer hover:underline">About</p>
          </Link>
          <Link href={"#projects"}>
            <p className="text-sm cursor-pointer hover:underline">Projects</p>
          </Link>
          <Link href={"#contact"}>
            <p className="text-sm cursor-pointer hover:underline">Contact</p>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
