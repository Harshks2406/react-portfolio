import { DiPython } from "react-icons/di"
import { SiMongodb } from "react-icons/si"
import { DiRedis } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa"
import { BiLogoPostgresql } from "react-icons/bi"
import { SiElasticsearch } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaAws } from "react-icons/fa";


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl">Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiPython className="text-7xl" style={{ color: '#4584b6' }}/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-green-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoPostgresql className="text-7xl text-sky-700"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiRedis className="text-7xl text-red-700"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiElasticsearch className="text-7xl text-sky-700"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaAws className="text-7xl"/>
            </div>
        </div>
    </div>
  )
}

export default Technologies