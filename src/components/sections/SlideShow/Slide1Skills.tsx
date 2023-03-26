import { SiShopify } from "react-icons/si"
import { GrGatsbyjs } from "react-icons/gr"
import { IconFirebase, IconLaravel, IconReact, IconSolidity, IconTypescript, IconVue, IconWordpress } from "~/components/elements"

export const Slide1Skills = () => {
   return (
      <div className="flex-1 text-white flex space-x-6 justify-center items-center m-2">
         <IconFirebase size={34}/>
         <IconWordpress size={34}/>
         <IconReact size={34}/>
         <IconVue size={34}/>
         <IconTypescript size={34}/>
         <IconLaravel size={34}/>
         <SiShopify size={34}/>
         <GrGatsbyjs size={34}/>
         <IconSolidity size={34}/>
      </div>
   )
}
