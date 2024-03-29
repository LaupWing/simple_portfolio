import type { IconType } from "react-icons"
import {
   AiFillInstagram,
   AiFillLinkedin,
   AiFillDribbbleCircle,
   AiOutlineTwitter,
   AiFillGithub
} from "react-icons/ai"
import { 
   BsFillArrowUpRightCircleFill, 
   BsWordpress 
} from "react-icons/bs"
import { GrGatsbyjs } from "react-icons/gr"
import { 
   IoClose,
   IoLogoLaravel, 
   IoLogoReact, 
   IoLogoVue, 
   IoMail
} from "react-icons/io5"
import { HiMenuAlt2, HiOutlineExternalLink } from "react-icons/hi"
import { 
   SiFirebase, 
   SiShopify, 
   SiSolidity, 
   SiTailwindcss, 
   SiTypescript 
} from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import { IoIosSend } from "react-icons/io"


export const IconClose:IconType = (props) => {
   return <IoClose {...props}/>
} 

export const IconInstagram:IconType = (props) => {
   return <AiFillInstagram {...props}/>
} 

export const IconLinkedIn:IconType = (props) => {
   return <AiFillLinkedin {...props}/>
} 

export const IconDribbble:IconType = (props) => {
   return <AiFillDribbbleCircle {...props}/>
} 

export const IconTwitter:IconType = (props) => {
   return <AiOutlineTwitter {...props}/>
} 

export const IconArrow:IconType = (props) => {
   return <BsFillArrowUpRightCircleFill {...props}/>
} 

export const IconFirebase:IconType = (props) => {
   return <SiFirebase {...props}/>
} 

export const IconWordpress:IconType = (props) => {
   return <BsWordpress {...props}/>
} 

export const IconReact:IconType = (props) => {
   return <IoLogoReact {...props}/>
} 

export const IconVue:IconType = (props) => {
   return <IoLogoVue {...props}/>
} 

export const IconTypescript:IconType = (props) => {
   return <SiTypescript {...props}/>
} 

export const IconLaravel:IconType = (props) => {
   return <IoLogoLaravel {...props}/>
} 

export const IconShopify:IconType = (props) => {
   return <SiShopify {...props}/>
} 

export const IconGatsby:IconType = (props) => {
   return <GrGatsbyjs {...props}/>
}

export const IconGithub:IconType = (props) => {
   return <AiFillGithub {...props}/>
}

export const IconSolidity:IconType = (props) => {
   return <SiSolidity {...props}/>
}

export const IconTailwind:IconType = (props) => {
   return <SiTailwindcss {...props}/>
}

export const IconNextjs:IconType = (props) => {
   return <TbBrandNextjs {...props}/>
}

export const IconExternal:IconType = (props) => {
   return <HiOutlineExternalLink {...props} />
}

export const IconSend:IconType = (props) => {
   return <IoIosSend {...props} />
}

export const IconMail:IconType = (props) => {
   return <IoMail {...props} />
}

export const IconMenu:IconType = (props) => {
   return <HiMenuAlt2 {...props} />
}