import Image from "next/image";
import Link from "next/link"

function Header() {
  return (
    <div>
      <header>
        <div className="pt-5 px-7 sm:px-0 container mx-auto">

          <a id="about">

          </a>

          <div className="text-gray-100">
            <div className="flex flex-col-reverse sm:flex-row items-start">
              <div className="flex flex-col pr-8">
                <h1 className="font-bold text-3xl md:text-4xl tracking-tight mb-1 text-gray-100">Kyle Mayer</h1>
                <h2 className="text-gray-100 dark:text-gray-200 mb-4">Full Stack Web Developer</h2>
                <Link href="https://www.linkedin.com/in/kyle-mayer88/">
                  <a target="_blank" rel="noreferrer">
                    <button className="text-sm border border-gray-700 rounded-md w-36 bg-gradient-to-r from-gray-800  via-yellow-900  to-gray-800 p-2">Open to Work ✨</button>
                  </a>
                </Link>

                <p className="mt-2 text-gray-100 dark:text-gray-400 mb-16">Passionate about developing fast, reliable, and accessible web applications.</p>
              </div>
              <div className="mb-4">
                <Image
                  src="/me.jpeg"
                  className="rounded-full"
                  alt="Kyle Mayer"
                  height={170}
                  width={170}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
