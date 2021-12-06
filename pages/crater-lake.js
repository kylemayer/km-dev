/* eslint-disable @next/next/no-img-element */

export default function CrateLake() {
    return (
        <div className="">
            {/* banner Covid-19 */}
            <div className="bg-[#700F0A] text-white text-sm p-3">
                <div className="flex flex-cols-2 justify-center">

                    <div className="">Alert Logo</div>
                    <div className=""><p>COVID-19 Response</p><p> Masks are required for everyone, regardless of location or vaccination status, in all NPS buildings, crowded outdoor spaces, and all forms of enclosed public transportation. Additional details are available at www.nps.gov/coronavirus. Before visiting, please check the park website to determine its operating status. Please recreate responsibly.</p></div>

                </div>
            </div>
            {/*Navbar */}
            <nav className="flex space-x-4 h-12 bg-black text-white capitalize items-center">
                <div className="px-20 font-bold ">National Park Service</div>
                <div className="font-light ">Search</div>
                <div className="font-light ">Menu</div>
            </nav>
            {/*header div with image */}
            <header className="h-80 w-full bg-blue-200">Crater Lake</header>

            {/*2nd Navbar */}
            <nav className="flex space-x-10 bg-black text-white">
                <div className="">Plan Your Visit</div>
                <div className="">Learn About the Park</div>
                <div className="">Get Involved</div>
                <div className="">Info</div>
                <div className="">Alerts</div>
                <div className="">Maps</div>
                <div className="">Calendar</div>
                <div className="">Reserve</div>

            </nav>
            {/* dismissable alert */}
            <div></div>
            {/* content / grid */}
            <div className="grid grid-2-col w-full">
                <div>
                    <h1>Deep Water in a Sleeping Volcano</h1>
                </div>
            </div>
            {/* poll */}
            <form className="grid grid-row-2">
                Was this page helpful?
                <label>
                    <input type="radio" value="1" />
                    Yes
                </label>
                <label className="">
                    <input type="radio" value="2" />
                    No
                </label>
            </form>
            {/* 4 col 1 row grid */}
            <div className="grid grid-4-col w-full">
                <div>1 Protecting Crater Lake</div>
                <div>2 In the News</div>
                <div>3 Become a Junior Ranger!</div>
                <div>4 Science & Learning Center</div>
            </div>
            {/* contact footer */}
            <footer className="bg-red-100">
                <div>
                    <div>Contact the Park</div>
                    <div>Mailing Address:</div>
                    <div>Contact Us</div>
                </div>
                <div>Tools</div>
                <div>Stay Connected</div>
            </footer>
            {/* app download */}
            <div className="bg-black">
                <div className="text-white">
                    <p>Download the official NPS app before your next visit</p>
                    <button>App Store</button>
                    <button>Google Play</button>
                </div>
                <div className="">Image</div>
            </div>
            {/* main footer */}
            <footer className="bg-green-100">
                <section className="md:h-full flex items-center text-gray-600">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="text-center mb-12">
                            <h5 className="text-base md:text-lg text-indigo-700 mb-1">See Our Recent News</h5>
                            <h1 className="text-4xl md:text-6xl text-gray-700 font-semibold">Tailwind Css Responsive Cards</h1>
                        </div>
                        <div className="flex flex-wrap -m-4">
                            <div className="p-4 sm:w-1/2 lg:w-1/3">
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                                        src="https://picsum.photos/id/188/720/400" alt="blog" />
                                    <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                                        <h2 className="text-base font-medium text-indigo-300 mb-1">October 29,
                                            2021</h2>
                                        <h1 className="text-2xl font-semibold mb-3">Cities are crowded</h1>
                                        <p className="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Aperiam modi, expedita quos doloremque autem ipsum itaque incidunt ipsam reprehenderit
                                            fuga! Dolores quisquam eius cum accusamus?</p>

                                    </div>
                                </div>
                            </div>
                            <div className="p-4 sm:w-1/2 lg:w-1/3">
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                                        src="https://picsum.photos/id/1016/720/400" alt="blog" />
                                    <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                                        <h2 className="text-base font-medium text-indigo-300 mb-1">October 29,
                                            2021</h2>
                                        <h1 className="text-2xl font-semibold mb-3">Mountains are alone</h1>
                                        <p className="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Aperiam modi, expedita quos doloremque autem ipsum itaque incidunt ipsam reprehenderit
                                            fuga! Dolores quisquam eius cum accusamus?</p>

                                    </div>
                                </div>
                            </div>
                            <div className="p-4 sm:w-1/2 lg:w-1/3">
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                                        src="https://picsum.photos/id/1011/720/400" alt="blog" />
                                    <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                                        <h2 className="text-base font-medium text-indigo-300 mb-1">October 29,
                                            2021</h2>
                                        <h1 className="text-2xl font-semibold mb-3">Lakes are silent</h1>
                                        <p className="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Aperiam modi, expedita quos doloremque autem ipsum itaque incidunt ipsam reprehenderit
                                            fuga! Dolores quisquam eius cum accusamus?</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
            {/* social media */}
            <div className="bg-yellow-100"></div>
        </div>
    );
}
;

