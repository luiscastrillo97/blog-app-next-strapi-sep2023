import Image from "next/image";
import  githubIcon  from "../assets/github.png";
import  linkedinIcon  from "../assets/linkedin.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex justify-center items-center gap-5 text-center text-gray-800 p-4 bottom-0 absolute w-full">
        <span>Desarrollado por Luis Castrillo</span>
        <Link href="https://www.linkedin.com/in/luiscastrillojf/" target="_blank"><Image src={linkedinIcon} alt="GitHub Icon" className="h-9 w-9"/></Link>
        <Link href="https://github.com/luiscastrillo97" target="_blank"><Image src={githubIcon} alt="GitHub Icon" className="h-9 w-9"/></Link>
    </div>
  )
}

export default Footer