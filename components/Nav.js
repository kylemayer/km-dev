import Link from "next/link";

function Nav() {
  return (
    <div className="px-7 sm:px-0 container mx-auto  items-center">
      <nav className="flex w-full py-5 justify-between text-gray-100">
        <div className="mr-12 mb-2 text-gray-100">
          <p className="font-light">
          </p>
        </div>
        <div className=" flex space-x-4 text-gray-100 ">
          <Link href={"#about"} passHref>
            <p className="text-sm cursor-pointer hover:underline">About</p>
          </Link>
          <Link href={"#projects"} passHref>
            <p className="text-sm cursor-pointer hover:underline">Projects</p>
          </Link>
          <Link href={"/resume-mayer.pdf"} passHref>
            <p className="text-sm cursor-pointer hover:underline">Resume</p>
          </Link>
          <Link href={"mailto:x@kylemayer.dev"} passHref>
            <p className="text-sm cursor-pointer hover:underline">Contact</p>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
