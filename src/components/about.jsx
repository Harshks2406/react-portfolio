import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from "../constants"

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">About Me</h1>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex items-center justify-center">
                    <img className="w-80 h-auto overflow-hidden rounded-full lg:w-1/2" src={aboutImg} alt="about" />
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg: justtify-center">
                        <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About