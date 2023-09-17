import {RxTwitterLogo} from "react-icons/rx"
import { BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full bg-army  py-2 justify-center">
      <div className="flex justify-center gap-3 text-center">
        <Link to="https://twitter.com/orzonweb" target="_blank">
          <RxTwitterLogo size={20} className="text-light-army cursor-pointer mt-1 pb-1" />
        </Link>
        <Link to="https://github.com/ozi-sadiq-kasai" target="_blank">
          <BsGithub size={20} className="text-light-army cursor-pointer mt-1 pb-1" />
        </Link>

        <p className="text-light-army e">orzkasai@gmail.com</p>
      </div>
    </div>
  )
}
export default Footer