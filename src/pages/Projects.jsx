import { Link } from 'react-router-dom'
import diary from '../assets/Medic-Diary.png'
import menu from '../assets/CBAE MENU.png'
import amazon from "../assets/amazon.png"
import book from '../assets/the-bookstore.png'
import { AiOutlineGithub } from 'react-icons/ai'

const Projects = () => {
  return (
    <div className="bg-light-army min-h-screen">
      <main className="w-full md:px-16 px-6">
        <h1 className="text-center py-5 drop-shadow-sm max-sm:text-2xl text-army md:text-4xl">
          Projects
        </h1>
        <ul>
          <li className="border-4 border-light-army max-sm:full m-auto mb-6 drop-shadow-xl rounded md:w-3/5">
            <Link to="https://medic-diary.vercel.app/" target="_blank">
              <img src={diary} alt="" className="w-full " />
            </Link>
            <p className="bg-army text-light-army max-sm:p-2  text-center">
              A medical app for tracking drugs, vital signs, and diagnoses
              powered by Firebase.
            </p>
            <Link
              to="https://github.com/ozi-sadiq-kasai/medic-diary"
              target="_blank"
            >
              <AiOutlineGithub size={29} className="bg-army w-full py-1" />
            </Link>
          </li>

          {/* the BookStore */}
          <li className="border-4 border-light-army max-sm:full m-auto mb-16 drop-shadow-xl rounded md:w-3/5">
            <Link to="https://the-bookstore.vercel.app/" target="_blank">
              <img src={book} alt="" className="w-full" />
            </Link>
            <p className="bg-army text-light-army max-sm:p-2 text-center">
              A fully responsive e-bookstore with complete cart functionalities.
            </p>
            <Link
              to="https://github.com/ozi-sadiq-kasai/the-bookstore"
              target="_blank"
            >
              <AiOutlineGithub size={29} className="bg-army w-full py-1" />
            </Link>
          </li>

          {/* Restaurant */}
          <li className="border-4 border-light-army max-sm:full m-auto mb-16 drop-shadow-xl rounded md:w-3/5">
            <Link to="https://react-cbae-menu.vercel.app/" target="_blank">
              <img src={menu} alt="" className="w-full" />
            </Link>
            <p className="bg-army text-light-army max-sm:p-2 text-center">
              A restaurant menu powered by a CMS (Contentful).
            </p>
            <Link
              to="https://github.com/ozi-sadiq-kasai/react-cbae-menu"
              target="_blank"
            >
              <AiOutlineGithub size={29} className="bg-army w-full py-1" />
            </Link>
          </li>

          {/* Apparel */}
          <li className="border-4 border-light-army max-sm:full m-auto mb-16 drop-shadow-xl rounded md:w-3/5">
            <Link to="https://amazon-zeta-rose.vercel.app/" target="_blank">
              <img src={amazon} alt="" className="w-full" />
            </Link>
            <p className="bg-army text-light-army max-sm:p-2 text-center">
              A responsive Ecommerce website with cart functionalities.
            </p>
            <Link
              to="https://github.com/ozi-sadiq-kasai/amazon"
              target="_blank"
            >
              <AiOutlineGithub size={29} className="bg-army w-full py-1" />
            </Link>
          </li>
        </ul>
      </main>
    </div>
  )
}

export default Projects
