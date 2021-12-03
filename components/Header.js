import Image from "next/image";

function Header() {
  return (
    <div>
      <header>
        <div className="pt-5 px-7 sm:px-0 container mx-auto">
          <Image
            src="/unnamed.png"
            className="rounded-full"
            alt="creature"
            height={100}
            width={100}
          />
          <div className="text-gray-100 font-bold">Hello</div>

          <div className="text-gray-100">about me blurb</div>
        </div>
      </header>
    </div>
  );
}

export default Header;
