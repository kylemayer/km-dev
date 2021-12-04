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
          <a id="about">
            <h1 className="text-lg font-bold text-gray-100 py-3">Hello</h1>
          </a>

          <div className="text-gray-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu
            lobortis elementum nibh tellus molestie nunc non. Volutpat blandit
            aliquam etiam erat. Felis donec et odio pellentesque diam volutpat
            commodo sed egestas. In eu mi bibendum neque egestas. Aliquam
            malesuada bibendum arcu vitae elementum. Mi bibendum neque egestas
            congue. Ullamcorper malesuada proin libero nunc consequat.
            Adipiscing commodo elit at imperdiet. Quis risus sed vulputate odio
            ut enim blandit volutpat maecenas. Congue mauris rhoncus aenean vel
            elit scelerisque mauris pellentesque. Eu nisl nunc mi ipsum faucibus
            vitae aliquet nec ullamcorper. Ultrices sagittis orci a scelerisque
            purus semper eget duis at.
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
