import { FC } from "react"
import { useRouter } from "next/router"
import { IconClose } from "../elements"
import { SkillsType } from "typings"
import { motion } from "framer-motion"
import Link from "next/link"

export const MobileSideNav = () => {
   return (
      <div className="fixed inset-0 bg-white flex flex-col z-50 w-screen h-screen p-10">
         <header className="flex justify-between items-center">
            <h2 className="uppercase font-bold text-slate-700 text-xl tracking-wider flex items-center">
               <div className="w-5 h-5 bg-indigo-500 rounded-full mr-1" />
               MENU
            </h2>

            <IconClose className="text-slate-500" size={22} />
         </header>

         <nav>
            <ul>

            </ul>
         </nav>
      </div>
   )
}

interface NavLinkProps {
   href: string
   text: string
   isLast: boolean
   query?: Partial<Record<SkillsType[number], boolean>>
}
const NavLink:FC<NavLinkProps> = ({
   href,
   text,
   isLast,
   query = {}
}) => {
   const router = useRouter()
   const isActive = href === "/" 
      ? router.pathname === "/"
      : router.pathname.includes(href)
   const item = {
      hidden: { scale: 0, y: 100 },
      show: { scale: 1, y: 0 },
  }

   return (
      <motion.li
         variants={item}
      >
         <Link
            href={{
               pathname: href,
               query
            }}
            className={`tracking-tight ${isActive ? "text-neutral-900 font-semibold" : "text-neutral-500"}`}
         >
            {text}
         </Link>
      </motion.li>
   )
}