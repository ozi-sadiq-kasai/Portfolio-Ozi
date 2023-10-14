import { Link } from 'react-router-dom'
import diary from '../assets/Medic-Diary.png'
import menu from '../assets/CBAE MENU.png'
import apparel from "../assets/myapparel.png"
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
            <Link
              to="https://my-apparel-101ahz9n7-infobakearoo-gmailcom.vercel.app/"
              target="_blank"
            >
              <img src={apparel} alt="" className="w-full" />
            </Link>
            <p className="bg-army text-light-army max-sm:p-2 text-center">
              A responsive clothing landing page built with React and Vanilla
              css.
            </p>
            <Link
              to="https://github.com/ozi-sadiq-kasai/react-cbae-menu/tree/main"
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
