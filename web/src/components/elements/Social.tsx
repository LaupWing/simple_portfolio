import { FC } from "react"
import { SocialType } from "types"
import { IconDribbble, IconGithub, IconInstagram, IconLinkedIn } from "./Icons"
import { IconType } from "react-icons"

interface SocialProps {
   name: SocialType
}
export const Social:FC<SocialProps> = ({
   name,
}) => {
   const socials:Record<SocialType, any> = {
      instagram: IconInstagram,
      linkedin: IconLinkedIn,
      dribble: IconDribbble,
      github: IconGithub
   }
   const IconComponent:IconType = socials[name]

   return (
      <div className="w-12 h-12 bg-white rounded-full text-neutral-900 flex items-center justify-center hover:text-indigo-500 cursor-pointer duration-200">
         <IconComponent 
            size={24}
         />
      </div>
   )
}