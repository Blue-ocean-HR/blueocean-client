import React from 'react'
import {Link} from 'react-router-dom'


const Nav = () => {
  const [mobileToggle, setMobileToggle] = React.useState("hidden")

  const handleMobile = () => {
    mobileToggle === "hidden" ? setMobileToggle("") : setMobileToggle("hidden")
  }
  return (
    // Use the sticky class to make the nav fixed
  <nav className="sticky top-0 z-30">
    {/* remove the max-w-7xl to make full width */}
    <div className="xl:max-w-7xl mx-auto border bg-yellow-600 text-black">
      {/* use justify between to place divs left center and right on nav bar */}
      <div className="flex justify-between">
          {/* Logo */}
          <div className="flex space-x-4">
          <div>
          <Link to="/">
            <div className="flex items-center py-2 px-3">
            <svg className="w-8 h-8 text-emerald-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
            </svg>
            <span className="ml-2 font-bold hover:text-gray-900">Waste Not</span>
            </div>
            </Link>
        </div>
          {/* Primary Nav */}
          <Link to="/pantry">
            <div className="py-3 px-3 hover:text-gray-900">
            My Pantry
            </div>

            </Link>

          </div>


          {/* Secondary Nav */}
          <div className="hidden md:flex items-center space-x-1">
          <div className="py-3 px-3">Login</div>
          <div className="py-3 px-3">Signup</div>
            {/* Mobile button */}

            {/* Place authenticate button here */}
          </div>
          <div className="md:hidden flex items-center">
              <button onClick={handleMobile}>
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
            </button>
            </div>
          </div>
    </div>
    {/* mobile menu */}
    <div className={`${mobileToggle} md:hidden`}>

      <a className="block py-2 px-4 text-sm hover:bg-gray-200">Login</a>
      <a className="block py-2 px-4 text-sm hover:bg-gray-200">Signup</a>
    </div>
  </nav>
  )
}

export default Nav