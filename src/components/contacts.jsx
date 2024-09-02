import { CONTACT, resume_url } from "../constants";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { MdEmail } from "react-icons/md";

const Contacts = () => {
  return (
    <motion.div whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration: 0.8}} viewport={{ once: true }} className="border-b border-neutral-900 pb-4">
        <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
        <div className="text-center tracking-tighter">
            <h2>Discuss a project or just want to say hi? My Inbox is open for all. You can reach me on the below links.</h2>
            <h2 className="text-neutral-400">Please do checkout my photography porfolio <a className="border-b"  target="_blank" href="http://ec2-3-6-254-20.ap-south-1.compute.amazonaws.com:2412/">here</a></h2>
            <div className="mt-40">
              <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/harshkumar2412/" target="_blank"><FaLinkedin /></a> 
                <a href="https://github.com/Harshks2406" target="_blank"><FaGithub /></a>
                <a href="mailto:harshsingh.hks@gmail.com" target="_blank"><MdEmail /></a>
                <a href={resume_url} target="_blank"><CgFileDocument /></a>
              </div>
              <span className="text-center tracking-tighter">Made with ❤️</span>
            </div>
        </div>
    </motion.div>
  )
}

export default Contacts