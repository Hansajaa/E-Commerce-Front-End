import { useState } from 'react';
import user_icon from '../assets/navigation_bar_asserts/user_img.png'

function NavigationBar() {

  const [isUserMenuOpen, setUserMenu] = useState(false);
  const [isMainMenuOpen, setMainMenu] = useState(false);

  function handleMainMenu(){
      setMainMenu(!isMainMenuOpen);
      setUserMenu(false);
  }

  function handleUserMenu(){
    setUserMenu(!isUserMenuOpen);
    setMainMenu(false);
  }

  return (
    <div>
      <nav class="bg-[#15616D] border-gray-200 dark:bg-[#15616D] rounded-full w-3/4 ml-auto mt-3 mr-3">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1.5">
          <a
            href="#"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            {/* <img
              src={logo}
              class="h-10"
              alt="Clothify Logo"
            /> */}
          </a>
          <div class="flex items-center md:order-2 space-x-3 md:space-x-2 rtl:space-x-reverse">
            
            {/* Cart Button */}
            <button
              type="button"
              class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-[#15616D] dark:focus:ring-gray-600"
              id=""
              aria-expanded="false"
              data-dropdown-toggle="cart"
              data-dropdown-placement="bottom"
            >
              <span class="sr-only">Navigate Cart</span>
              <img className='h-11 w-11 rounded-full p-1' width="48" height="48" src="https://img.icons8.com/color/48/shopping-cart--v1.png" alt="shopping-cart--v1"/>
            </button>

            <button
              type="button"
              class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-[#15616D] dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
              onClick={handleUserMenu}
            >
              <span class="sr-only">Open user menu</span>
              {/* <img width="48" height="48" src="https://img.icons8.com/color/48/000000/user-male-circle--v1.png" alt="user-male-circle--v1"/> */}
              <img width="48" height="48" src={user_icon} alt="" />
            </button>

            {/* Dropdown menu  */}
            {isUserMenuOpen && 
            <div
              class="z-auto absolute top-16 right-4  my-4 text-base list-none bg-[#15616D] divide-y divide-gray-100 rounded-lg shadow dark:bg-[#15616D] dark:divide-gray-600"
              id="user-dropdown"
            >
              <div class="px-4 py-3">
                <span class="block text-sm text-white dark:text-white">
                  Bonnie Green
                </span>
                <span class="block text-sm  text-white truncate dark:text-gray-400">
                  name@flowbite.com
                </span>
              </div>
              <ul class="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-white hover:bg-[#0e4047] dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-white hover:bg-[#0e4047] dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-white hover:bg-[#0e4047] dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-white hover:bg-[#0e4047] dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
            }

            <button
              data-collapse-toggle="navbar-user"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-100 rounded-lg md:hidden hover:bg-[#133035] focus:outline-none focus:ring-2 focus:ring-[#15616D] dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-user"
              aria-expanded="false"
              onClick={handleMainMenu}
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>



          {/* Dropdown */}
          {isMainMenuOpen && 
          <div
            class="items-end absolute top-14 translate-x-10 right-5 justify-end w-full p-2 md:hidden md:order-1 ml-auto mr-5"
            id='navbar-user'
          >
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-[#15616D] rounded-lg bg-[#15616D] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#15616D] dark:bg-gray-800 md:dark:bg-[#15616D] dark:border-gray-700">
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-white rounded hover:bg-[#0e4047] md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-white rounded hover:bg-[#0e4047] md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Category
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-white rounded hover:bg-[#0e4047] md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          }
 
          <div
            class="items-end hidden justify-end w-full md:flex md:w-auto md:order-1 ml-auto mr-5"
          >
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#15616D] dark:bg-gray-800 md:dark:bg-[#15616D] dark:border-gray-700">
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Category
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;