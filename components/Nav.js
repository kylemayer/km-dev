function Nav() {
  return (
    <div className="container mx-auto">
      <nav className="flex w-full p-5 justify-between text-gray-100">
        <div className="mr-12 mb-2 text-gray-100">Kyle Mayer</div>
        <div className=" flex space-x-4 text-gray-100 ">
          <div>Home</div>
          <div>My Work</div>
          <div>About Me</div>
          <div>Contact</div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
