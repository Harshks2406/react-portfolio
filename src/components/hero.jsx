import {HERO_CONTENT} from "../constants"
import profilePic from "../assets/header-img.svg"
import { motion } from "framer-motion"
import { animateLeftOrRight } from "../animation"

const Hero = () => {
  return (
  <div className="border-b border-neutral-900 pb-4 lg:mb-35">
    <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <motion.h1 variants={animateLeftOrRight(-1, 0.2)} initial="hidden" animate="visible" className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Harsh Kumar</motion.h1>
                <motion.span variants={animateLeftOrRight(-1, 0.5)} initial="hidden" animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 
                    to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                    Software Engineer
                </motion.span>
                <motion.p variants={animateLeftOrRight(-1, 1)} initial="hidden" animate="visible" className="my-2 max-w-xl py-6 font-light tracking-tight">{HERO_CONTENT}</motion.p>
            </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-9">
            <div className="flex justify-center">
                <motion.img variants={animateLeftOrRight(1,1)} initial="hidden" animate="visible" src={profilePic} alt="Profile" className="rounded-full" style={{ width: '400px', height: 'auto' }} />
            </div>
        </div>
    </div>
  </div>
)}

export default Hero