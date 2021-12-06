import Image from "next/image";

function Header() {
  return (
    <div>
      <header>
        <div className="pt-5 px-7 sm:px-0 container mx-auto">
          <Image
            src="/me.png"
            className="rounded-full"
            alt="Kyle Mayer"
            height={200}
            width={200}
          />
          <a id="about">
            <h1 className="text-lg text-gray-100 py-3">Hello</h1>
          </a>

          <div className="text-gray-100">

          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
