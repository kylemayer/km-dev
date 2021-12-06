import Link from "next/link"

function Projects() {
  return (
    <div className="divide-y-[1px] divide-gray-600">
      <span></span>
      <div className="mt-5 mb-6 px-7 sm:px-0 container mx-auto">
        <a id="projects">
          <h2 className="text-xl font-light text-gray-100 py-3">
            Projects
          </h2>
        </a>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Project 1 */}
          <div className="border-black shadow-sm hover:shadow-lg rounded-xl bg-gradient-to-r from-gray-800  via-gray-800  to-gray-900">
             <img className="h-56 md:h-48 w-full object-cover object-top rounded-t-xl border-b-2 border-gray-700"
                  src="https://res.cloudinary.com/mountaincloud/image/upload/v1638817424/new-growth_mwze1u.png" alt="New Growth PDX thumbnail"/>

            <div className="text-gray-100 text-bold text-lg px-4 pt-5">
              <Link href="/">
              New Growth PDX
              </Link>
            </div>


            <div className="text-gray-200 text-sm px-4 py-3">
              Web application with Google Maps integration enabled users to view
              recent local bird sightings. Icons are rendered to a map
            </div>
            <div className="flex px-3 py-3 items-center">
              <Link href="/crater-lake">
              <button className="bg-gray-900 hover:bg-blue-900 transition duration=250 rounded-full text-gray-100 text-sm px-4 py-2">
                Details
              </button>
              </Link>
              <div className="ml-6 flex space-x-1  items-center">
                <div className="border border-gray-600 rounded-full text-white text-xs px-3 py-1 ">
                  React/Node
                </div>
                <div className="border border-gray-600  rounded-full text-white text-xs px-3 py-1">
                  Tailwind
                </div>
              </div>
            </div>
          </div>
           {/* Project 2 */}
          <div className="border-black shadow-sm hover:shadow-lg rounded-xl bg-gradient-to-r from-gray-800  via-gray-800  to-gray-900">
             <img className="h-56 md:h-48 w-full object-cover object-top rounded-t-xl border-b-2 border-gray-700"
                  src="https://res.cloudinary.com/mountaincloud/image/upload/v1638819483/brewster_mtay3y.png" alt="Brewster thumbnail"/>
            <div className="text-gray-100 text-bold text-lg px-4 pt-5">
              <Link href="/">
              Brewster Coffee API
              </Link>
            </div>
            <div className="text-gray-200 text-sm px-4 py-3">
              Web application with Google Maps integration enabled users to view
              recent local bird sightings. Icons are rendered to a map
            </div>
            <div className="flex flex-cols-2 px-3 py-3 items-center">
              <button className="bg-gray-900 hover:bg-blue-900 transition duration=250 rounded-full text-gray-100 text-sm px-4 py-2">
                Details
              </button>
              <div className="ml-6 flex space-x-1">
                <div className="border border-gray-600 rounded-full text-white text-xs px-3 py-1 ">
                  React/Node
                </div>
                <div className="border border-gray-600 rounded-full text-white text-xs px-3 py-1 ">
                  Tailwind
                </div>
              </div>
            </div>
          </div>
 {/* Project 3 */}
          <div className="border-black shadow-sm hover:shadow-lg  rounded-xl bg-gradient-to-r from-gray-800  via-gray-800  to-gray-900">
            <img className="h-56 md:h-48 w-full object-cover object-top rounded-t-xl border-b-2 border-gray-700"
                  src="https://res.cloudinary.com/mountaincloud/image/upload/v1638819906/birdzai.png" alt="Birdzai thumbnail"/>
            <div className="text-gray-100 text-bold text-lg px-4 pt-5">
              <Link href="/">
              Birdzai Bird App
              </Link>
            </div>
            <div className="text-gray-200 text-sm px-4 py-3">
              Web application with Google Maps integration enabled users to view
              recent local bird sightings. Icons are rendered to a map
            </div>
            <div className="flex flex-cols-2 px-3 py-3 items-center">
              <button className="bg-gray-900 hover:bg-blue-900 transition duration=250 rounded-full text-gray-100 text-sm px-4 py-2">
                Details
              </button>
              <div className="ml-6 flex space-x-1">
                <div className="border border-gray-600  rounded-full text-white text-xs px-3 py-1 ">
                  React
                </div>
                <div className="border border-gray-600 rounded-full text-white text-xs px-3 py-1 ">
                  Node
                </div>
              </div>
            </div>
          </div>
          {/* Project 4 */}
           <div className="border-black shadow-sm hover:shadow-lg rounded-xl bg-gradient-to-r from-gray-800  via-gray-800  to-gray-900">
             <img className="h-56 md:h-48 w-full object-cover object-center rounded-t-xl border-b-2 border-gray-700"
                  src="https://res.cloudinary.com/mountaincloud/image/upload/v1635887523/nil_foonuy.jpg" alt="thumbnail"/>
            <div className="text-gray-100 text-bold text-lg px-4 pt-5">
              <Link href="/">
             CB
              </Link>
            </div>
            <div className="text-gray-200 text-sm px-4 py-3">
              Web application with Google Maps integration enabled users to view
              recent local bird sightings. Icons are rendered to a map
            </div>
            <div className="flex flex-cols-2 px-3 py-3 items-center">
              <button className="bg-gray-900 hover:bg-blue-900 transition duration=250 rounded-full text-gray-100 text-sm px-4 py-2">
                Details
              </button>
              <div className="ml-6 flex space-x-1">
                <div className="border border-gray-600 rounded-full text-white text-xs px-3 py-1 ">
                  React
                </div>
                <div className="border border-gray-600 rounded-full text-white text-xs px-3 py-1 ">
                  REST API
                </div>
              </div>
            </div>
          </div>



        </div>
      </div>
    </div>
  );
}

export default Projects;
