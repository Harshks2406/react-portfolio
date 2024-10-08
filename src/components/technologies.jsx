import { DiPython } from "react-icons/di"
import { SiMongodb } from "react-icons/si"
import { DiRedis } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa"
import { BiLogoPostgresql } from "react-icons/bi"
import { SiElasticsearch } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { motion } from "framer-motion"
import { iconVariants } from "../animation"


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration: 1.5}} viewport={{ once: true }} className="my-20 text-center text-4xl">Technologies</motion.h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div variants={iconVariants(2.8)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiPython className="text-7xl" style={{ color: '#4584b6' }}/>
            </motion.div>
            <motion.div variants={iconVariants(1.8)} initial="initial" animate="animate"  className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoPostgresql className="text-7xl text-sky-700"/>
            </motion.div>
            <motion.div variants={iconVariants(1.8)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiRedis className="text-7xl text-red-700"/>
            </motion.div>
            <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate"div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiElasticsearch className="text-7xl text-sky-700"/>
            </motion.div>
            <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaAws className="text-7xl"/>
            </motion.div>
        </div>
    </div>
  )
}

export default Technologies