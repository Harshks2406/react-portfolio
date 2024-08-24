import { CONTACT } from "../constants"
import { motion } from "framer-motion"

const Contacts = () => {
  return (
    <motion.div whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration: 0.8}} viewport={{ once: true }} className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">Get in Touch</h1>
        <div className="text-center tracking-tighter">
            <a href="https://drive.google.com/file/d/1bP9DZ4ksMVXsu9C3HB9WFHysY7TxcQF9/view?usp=sharing"  target="_blank" className="border-b">Resume</a>
            <br />
            {/* <p className="my-4">{CONTACT.phoneNo}</p> */}
            <a href="mailto:harshsingh.hks@gmail.com" className="border-b" target="_blank" >{CONTACT.email}</a>
        </div>
    </motion.div>
  )
}

export default Contacts