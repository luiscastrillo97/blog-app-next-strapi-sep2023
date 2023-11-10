import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import welcomeImage from "../assets/imagen_bienvenida.jpg"


const Home = () => {
  return (
    <div className="space-y-8 p-3">
      <PageHeader title="¿Buscas un libro?"/>
      <div className="text-center">
        <span>Si eres apasionado por la programación y el desarrollo y buscas un líbro, este es el lugar indicado</span>
      </div>
      <Image src={welcomeImage} className="" alt="Flowbite React Logo" />
    </div>
  )
}

export default Home