function Footer() {
  return (
    <div>
      <footer className="container mx-auto divide-y-[1px] divide-gray-600 text-sm text-gray-500">
        <span></span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense px-8 py-3">
          <div className="flex justify-center items-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2">
            Copyright © 2021 - KM
          </div>
          <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
            <p>About</p>
            <p>Contact</p>
            <p>Projects</p>
          </div>
          <div className="flex justify-center space-x-8 md:ml-auto">
            <p>GitHub</p>
            <p>LinkedIn</p>
            <p>Twitter</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
