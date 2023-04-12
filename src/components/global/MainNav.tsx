import Link from "next/link"
import { useRouter } from "next/router"
import { FC, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useAppDispatch } from "~/app/hooks"
import { setInitialMenuLoaded } from "~/slices/siteSettings"
import { SkillsType } from "typings"
import { IconMenu } from "../elements"
import { MobileSideNav } from "./MobileSideNav"
 
export const MainNav:FC<{
   links: {
      href: string
      text: string
      query?: Partial<Record<SkillsType[number], boolean>>
   }[]
}> = ({
   links
}) => {
   const [showSideNav, setShowSideNav] = useState(false)
   const container = {
      hidden: { 
         opacity: 0
      },
      show: {
         opacity: 1,
         transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
         },
      },
   }

   return (
      <>
         <AnimatePresence>
            {showSideNav && (
               <motion.div
                  initial={{ 
                     x: "-100%" 
                  }}
                  animate={{ 
                     x: 0 
                  }}
                  exit={{ 
                     x: "-100%" 
                  }}
                  className="z-[500] fixed inset-0"
               >
                  <MobileSideNav 
                     links={links}
                  />
               </motion.div>
            )}
         </AnimatePresence>
         <header className="w-full text-sm flex py-6 items-center md:justify-between md:mx-auto max-w-4xl sticky top-0 bg-white z-[100]">
            <motion.div
               className="md:hidden"
               animate={{
                  x: 0,
                  opacity: 1,
                  transition: {
                     duration: 0.3
                  }
               }}
               initial={{
                  x: -100,
                  opacity: 0
               }}
               onClick={() => setShowSideNav(true)}
            >
               <IconMenu 
                  className="mr-4 text-slate-700"
                  size={24} 
               />
            </motion.div>
            <motion.div 
               className="flex items-center space-x-1"
               animate={{
                  x: 0,
                  opacity: 1,
                  transition: {
                     delay: 0.3
                  }
               }}
               initial={{
                  x: 100,
                  opacity: 0
               }}
            >
               <div className="w-5 h-5 bg-indigo-500 rounded-full" />
               <h1 className="uppercase font-bold">Laup</h1>
            </motion.div>
            <nav className="text-neutral-800">
               <motion.ul
                  className="space-x-10 hidden md:flex"
                  variants={container}
                  animate="show"
                  initial="hidden"
               >
                  {links.map((link, i) => (
                     <NavLink
                        key={i}
                        href={link.href}
                        text={link.text}
                        isLast={i === (links.length - 1)}
                        query={link.query}
                     />
                  ))}
               </motion.ul>
            </nav>
         </header>
      </>
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
  const dispatch = useAppDispatch()

   return (
      <motion.li
         variants={item}
         onAnimationComplete={() => {
            if(isLast){
               dispatch(setInitialMenuLoaded(true))
            }
         }}
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