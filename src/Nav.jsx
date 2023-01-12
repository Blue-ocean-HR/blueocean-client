import React from 'react'
import { Link } from 'react-router-dom'
import { NavBarButtons } from './components/mobile-nav-bar-buttons.jsx'
import DarkButton from './components/DarkButton.jsx'
import { useAuth0 } from "@auth0/auth0-react";


const Nav = ({darkToggle, recipeHomePageRender}) => {
  const {isAuthenticated, user} = useAuth0()
  const [mobileToggle, setMobileToggle] = React.useState("hidden")

  const handleMobile = () => {
    mobileToggle === "hidden" ? setMobileToggle("") : setMobileToggle("hidden")
  }
  return (
    // Use the sticky class to make the nav fixed
    <nav className="sticky top-0 z-30">
      <div className="xl:max-w-7xl mx-auto border bg-secondary dark:bg-black  dark:border-white dark:text-white text-black rounded">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <Link to="/">
                <div className="flex items-center py-2 px-3">
                  <img alt="kawaii earth logo" className="w-8 h-8" src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Kawaii_earth_clipart.svg"></img>
                  <span className="ml-2 font-bold hover:text-gray-900 dark:hover:text-secondary">Waste Not</span>
                </div>
              </Link>
            </div>
            {isAuthenticated &&
            <div className="flex items-center">
              <Link to="/pantryItems">
                <div className=" hover:text-gray-900 dark:hover:text-secondary">
                  My Pantry
                </div>

              </Link>
            </div>}
            <div className="items-center hidden md:flex">
              <Link to="/about">
                <div className=" hover:text-gray-900 dark:hover:text-secondary">
                  About us
                </div>
              </Link>
            </div>
          </div>


          {/* Secondary Nav */}
          <div className="hidden md:flex items-center space-x-1">
          </div>
          <div className="flex items-center ">
            <div className="hidden md:block">
              <DarkButton darkToggle={darkToggle} />
            </div>
            {isAuthenticated ? <Link to='/account'><div className=" mr-3 hover:text-gray-900 dark:hover:text-secondary">Account</div></Link> :
              <NavBarButtons />}
          </div>


          <div className="md:hidden flex items-center px-3">
            <button onClick={handleMobile}>
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* mobile menu */}
      <div className={`${mobileToggle} md:hidden flex-col justify-end`}>
        <div className="flex-col">
          <DarkButton darkToggle={darkToggle} />
          <div>
            <Link to="/about">
              <div className="dark:text-white hover:text-gray-900 dark:hover:text-secondary">
                About us
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav