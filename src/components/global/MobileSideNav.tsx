import { FC } from "react"
import { useRouter } from "next/router"
import { IconClose } from "../elements"
import { SkillsType } from "typings"
import Link from "next/link"
import { motion } from "framer-motion"

export const MobileSideNav:FC<{
   links: {
      href: string
      text: string
      query?: Partial<Record<SkillsType[number], boolean>>
   }[]
   onClose: () => void
}> = ({
   links,
   onClose
}) => {
   const container = {
      hidden: {
      },
      show: {
         transition: {
            staggerChildren: 0.1,
            delayChildren: 1.2,
         },
      },
   }
   return (
      <div className="bg-white flex flex-col w-screen h-screen p-10 pt-16">
         <header className="flex justify-between items-center">
            <motion.h2 
               className="uppercase font-bold text-slate-700 text-xl tracking-wider flex items-center"
               animate={{
                  x: 0,
                  opacity: 1,
                  transition: {
                     delay: 0.4
                  }
               }}
               initial={{
                  x: -100,
                  opacity: 0
               }}
            >
               <div className="w-5 h-5 bg-indigo-500 rounded-full mr-1" />
               MENU
            </motion.h2>
            <motion.div
               animate={{
                  x: 0,
                  opacity: 1,
                  transition: {
                     delay: 0.8
                  }
               }}
               initial={{
                  x: 100,
                  opacity: 0
               }}
            >
               <IconClose 
                  className="text-slate-500" 
                  size={22} 
                  onClick={onClose}
               />
            </motion.div>
         </header>

         <nav className="my-10">
            <motion.ul 
               className="flex flex-col gap-4"
               variants={container}
               animate="show"
               initial="hidden"
            >
               {links.map((link, i) => (
                  <NavLink
                     key={i}
                     href={link.href}
                     text={link.text}
                     query={link.query}
                  />
               ))}
            </motion.ul>
         </nav>
      </div>
   )
}

interface NavLinkProps {
   href: string
   text: string
   query?: Partial<Record<SkillsType[number], boolean>>
}
const NavLink:FC<NavLinkProps> = ({
   href,
   text,
   query = {}
}) => {
   const router = useRouter()
   const isActive = href === "/" 
      ? router.pathname === "/"
      : router.pathname.includes(href)
   const item = {
      hidden: { opacity: 0, y: 100 },
      show: { opacity: 1, y: 0 },
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
            {isActive && (
               <motion.span
                  className="mr-1"
                  initial={{
                     width: 0
                  }}
                  animate={{
                     width: "100%"
                  }}
               >
                  👉
               </motion.span>
            )}
            {text}
         </Link>
      </motion.li>
   )
}