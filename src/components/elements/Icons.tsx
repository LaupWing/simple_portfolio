import { IconType } from "react-icons"
import {
   AiFillInstagram,
   AiFillLinkedin,
   AiFillDribbbleCircle,
   AiOutlineTwitter
} from "react-icons/ai"
import { BsFillArrowUpRightCircleFill } from "react-icons/bs"


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
