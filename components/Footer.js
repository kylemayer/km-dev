import Link from "next/link";

function Footer() {
  return (
    <div>
      <footer className="container mx-auto divide-y-[1px] divide-gray-600 text-sm text-gray-300">
        <span></span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense px-8 py-3">
          <div className="flex justify-center items-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2">
            © Kyle Mayer
          </div>
          <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
            <Link href={"#about"} passHref>
              <p className="cursor-pointer hover:underline">About</p>
            </Link>
            <Link href={"#projects"} passHref>
              <p className="cursor-pointer hover:underline">Projects</p>
            </Link>
            <Link href={"mailto:x@kylemayer.dev"} passHref>
              <p className="cursor-pointer hover:underline">Contact</p>
            </Link>
          </div>
          <div className="flex justify-center space-x-8 md:ml-auto">
            <Link href={"https://github.com/kylemayer"}>
              <a target="_blank" rel="noreferrer">
                <p className="cursor-pointer hover:underline">GitHub</p>
              </a>
            </Link>
            <Link href={"https://www.linkedin.com/in/kyle-mayer88/"}>
              <a target="_blank" rel="noreferrer">
                <p className="cursor-pointer hover:underline">LinkedIn</p>
              </a>
            </Link>
            <Link href={"https://twitter.com/0xMayer"}>
              <a target="_blank" rel="noreferrer">
                <p className="cursor-pointer hover:underline">Twitter</p>
              </a>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
