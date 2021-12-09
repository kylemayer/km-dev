import Link from "next/link"

function MyProjects() {
  return (
    <div className="divide-y-[1px] divide-gray-600">
      <span></span>
      <div className=" mb-6 px-7 sm:px-0 container mx-auto">
        <a id="projects">
          <h2 className="text-xl font-light text-gray-100 py-3">
            Projects
          </h2>
        </a>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Project 1 */}
          <div className="border-black shadow-sm hover:shadow-lg rounded-xl bg-gradient-to-r from-gray-800  via-gray-800  to-gray-900">
            <img className="h-56 md:h-48 w-full object-cover object-top rounded-t-xl border-b-2 border-gray-700"
              src="https://res.cloudinary.com/mountaincloud/image/upload/v1638817424/new-growth_mwze1u.png" alt="New Growth PDX thumbnail" />

            <div className="text-gray-100 text-bold text-lg px-4 pt-5">
              <Link href="https://new-growth-pdx-frontend.vercel.app/">
                <a target="_blank" rel="noreferrer">
                  New Growth PDX
                </a>
              </Link>
            </div>
            <div className="text-gray-200 text-sm px-4 py-3">
              An app for plant enthusiasts to create a profile and fill a greenhouse with their plants!
            </div>
            <div className="flex px-3 py-3 items-center">
              <div className="bg-gray-900 hover:bg-blue-900 transition duration=250 rounded-full text-gray-100 text-sm px-4 py-2 items-center justify-center text-base divide-x divide-gray-500 ">
                <Link href="https://new-growth-pdx-frontend.vercel.app/" passHref>
                  <a target="_blank" rel="noreferrer">
                    <span className="pr-4">Visit</span>
                  </a>
                </Link>
                <Link href="https://github.com/NewGrowthPDX" passHref>
                  <a target="_blank" rel="noreferrer">
                    <span className="pl-4">GitHub</span>
                  </a>
                </Link>
              </div>
              <div className="ml-6 flex space-x-1  items-center">
                <div className="border border-gray-600 rounded-full text-white text-xs px-3 py-1 ">
                  React/Node
                </div>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div className="border-black shadow-sm hover:shadow-lg rounded-xl bg-gradient-to-r from-gray-800  via-gray-800  to-gray-900">
            <img className="h-56 md:h-48 w-full object-cover object-top rounded-t-xl border-b-2 border-gray-700"
              src="https://res.cloudinary.com/mountaincloud/image/upload/v1638819483/brewster_mtay3y.png" alt="Brewster thumbnail" />
            <div className="text-gray-100 text-bold text-lg px-4 pt-5">
              <Link href="https://www.brewster.fun/" passHref>
                <a target="_blank" rel="noreferrer">
                  Brewster Coffee API
                </a>
              </Link>
            </div>
            <div className="text-gray-200 text-sm px-4 py-3">
              An API for cataloging various types of coffee. Built with Node.js, Express, and PostgreSQL.
            </div>
            <div className="flex flex-cols-2 px-3 py-3 items-center">
              <div className="bg-gray-900 hover:bg-blue-900 transition duration=250 rounded-full text-gray-100 text-sm px-4 py-2 items-center justify-center text-base divide-x divide-gray-500 ">
                <Link href="https://www.brewster.fun/" passHref>
                  <a target="_blank" rel="noreferrer">
                    <span className="pr-4">Visit</span>
                  </a>
                </Link>
                <Link href="https://github.com/Brewster-API" passHref>
                  <a target="_blank" rel="noreferrer">
                    <span className="pl-4">GitHub</span>
                  </a>
                </Link>
              </div>
              <div className="ml-6 flex space-x-1">
                <div className="border border-gray-600 rounded-full text-white text-xs px-3 py-1 ">
                  React/Node
                </div>
              </div>
            </div>
          </div>
          {/* Project 3 */}
          <div className="border-black shadow-sm hover:shadow-lg  rounded-xl bg-gradient-to-r from-gray-800  via-gray-800  to-gray-900">
            <img className="h-56 md:h-48 w-full object-cover object-top rounded-t-xl border-b-2 border-gray-700"
              src="https://res.cloudinary.com/mountaincloud/image/upload/v1638819906/birdzai.png" alt="Birdzai thumbnail" />
            <div className="text-gray-100 text-bold text-lg px-4 pt-5">
              <Link href="https://birdzai.netlify.app/" passHref>
                <a target="_blank" rel="noreferrer">
                  Birdzai Bird App
                </a>
              </Link>
            </div>
            <div className="text-gray-200 text-sm px-4 py-3">
              Web application with Google Maps integration enabled users to view
              recent local bird sightings.
            </div>
            <div className="flex flex-cols-2 px-3 py-3 items-center">
              <div className="bg-gray-900 hover:bg-blue-900 transition duration=250 rounded-full text-gray-100 text-sm px-4 py-2 items-center justify-center text-base divide-x divide-gray-500 ">
                <Link href="https://birdzai.netlify.app/" passHref>
                  <a target="_blank" rel="noreferrer">
                    <span className="pr-4">Visit</span>
                  </a>
                </Link>
                <Link href="https://github.com/f2-birds-i-fe" passHref>
                  <a target="_blank" rel="noreferrer">
                    <span className="pl-4">GitHub</span>
                  </a>
                </Link>
              </div>
              <div className="ml-6 flex space-x-1">
                <div className="border border-gray-600  rounded-full text-white text-xs px-3 py-1 ">
                  React/Node
                </div>
              </div>
            </div>
          </div>
          {/* Project 4 */}
        </div>
      </div>
    </div>
  );
}

export default MyProjects;
