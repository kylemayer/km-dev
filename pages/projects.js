import Link from "next/link"

function Projects() {
    return (
        <div className="flex flex-col items-center min-h-screen" >
            <div className="flex flex-col md:flex-row w-full justify-center gap-4 items-start">
                <div className="bg-gray-700 p-4 rounded-2xl flex flex-col w-full md:w-7/12 lg:w-7/12 shadow-md">
                </div>
                <div className="bg-gray-700 p-4 rounded-2xl flex flex-col md:w-5/12 lg:w-4/12 h-auto shadow-md">
                    <h2 className="text-white opacity-70 text-base mb-5">Concept</h2>
                    <p className="text-white white mb-4">
                        Perseverance is a generative art project made up of 500 unique pieces. There are 4 different types of variations in their algorithms, each type is randomly distributed and the amounts are not equal.
                    </p>
                    <div className="w-full h-px bg-white bg-opacity-20 my-4"></div>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Projects

