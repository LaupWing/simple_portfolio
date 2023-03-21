import { GetServerSideProps } from "next"
import { SiFirebase, SiShopify, SiTypescript } from "react-icons/si"
import { BsWordpress } from "react-icons/bs"
import { GrGatsbyjs } from "react-icons/gr"
import { IoLogoLaravel, IoLogoReact, IoLogoVue } from "react-icons/io5"

export const Slide1Skills = () => {
   
   return (
      <div className="flex-1 text-white flex space-x-6 justify-center items-center m-2">
         <SiFirebase size={34}/>
         <BsWordpress size={34}/>
         <IoLogoReact size={34}/>
         <IoLogoVue size={34}/>
         <SiTypescript size={34}/>
         <IoLogoLaravel size={34}/>
         <SiShopify size={34}/>
         <GrGatsbyjs size={34}/>
      </div>
   )
}
