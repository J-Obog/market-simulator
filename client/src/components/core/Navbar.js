import React from "react"; 

const Navbar = () => {
    return (
        <div>
            <nav class="bg-white border-b border-gray-200">
                <div class="container py-3 mx-auto flex">
                <div class="flex items-center justify-between">
                    <a class="text-xl font-bold text-green-300" href="#">bullish</a>
                </div>
                <div class="w-full px-8 flex items-center justify-between">
                    <div>
                        <a class="nav-link">Some Link</a>
                    </div>
                    <div class="relative">
                    <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg class="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none">
                        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </span>
                    <input type="text" class="w-full py-1 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md transition-shadow duration-200 focus:shadow-md focus:outline-none" placeholder="Search"/>
                    </div>
                </div>
                </div>
            </nav>
        </div>
    );
}


export default Navbar;