function Nav() {
  return (
    <div className="px-7 sm:px-0 container mx-auto">
      <nav className="flex w-full py-5 justify-between text-gray-100">
        <div className="mr-12 mb-2 text-gray-100">Kyle Mayer</div>
        <div className=" flex space-x-4 text-gray-100 ">
          <div>About</div>
          <div>Contact</div>
          <div>Projects</div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
