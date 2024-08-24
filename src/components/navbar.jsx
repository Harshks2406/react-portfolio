import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { CgFileDocument } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion"
import { animateUpOrDown } from "../animation";

const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
      
    </div>
    <motion.div variants={animateUpOrDown(-1, 0.5)} initial="hidden" animate="visible" className="m-8 flex items-center justigy-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/harshkumar2412/" target="_blank"><FaLinkedin /></a> 
        <a href="https://github.com/Harshks2406" target="_blank"><FaGithub /></a>
        <a href="mailto:harshsingh.hks@gmail.com" target="_blank"><MdEmail /></a>
        <a href="https://drive.google.com/file/d/1bP9DZ4ksMVXsu9C3HB9WFHysY7TxcQF9/view?usp=sharing"  target="_blank"><CgFileDocument /></a>
    </motion.div>
  </nav>
}

export default Navbar