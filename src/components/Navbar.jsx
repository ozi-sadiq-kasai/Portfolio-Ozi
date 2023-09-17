import { Link } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)

 const closeMenu = () => {
   setOpenMenu(false)
 }
  const navLinks = (
    <div className="flex justify-evenly gap-6 font-semibold text-light-army text-lg w-1/2 visible max-sm:invisible">
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
    </div>
  )
  return (
    <nav className="bg-army flex justify-center py-3">
      {navLinks}
      <AiOutlineMenu
        size={31}
        className="invisible max-sm:visible cursor-pointer ml-12 text-light-army"
        onClick={() => {
          setOpenMenu((prev) => !prev)
        }}
      />
      {openMenu && (
        <div className="fixed inset-0 z-10">
          <div className="max-sm:flex max-sm:flex-col font-semibold items-center text-army  text-2xl  bg-light-army justify-center gap-5 h-screen relative">
            <AiOutlineClose
              onClick={closeMenu}
              className="cursor-pointer absolute top-10 right-10  "
            />
            <Link to="/" onClick={closeMenu} className="hover:text-yellow-300">
              Home
            </Link>
            <Link
              to="/projects"
              onClick={closeMenu}
              className="hover:text-yellow-300"
            >
              Projects
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
