import Link from "next/link"
import { useRouter } from "next/router"
import { FC } from "react"
import { motion } from "framer-motion"
 
export const MainNav = () => {
   const links = [
      {
         href: "/",
         text: "Home"
      },
      {
         href: "/work",
         text: "Work"
      },
      {
         href: "/about",
         text: "About"
      },
      {
         href: "/contact",
         text: "Contact"
      },
   ]
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
      <header className="w-full text-sm flex py-6 items-center justify-between mx-auto max-w-4xl">
         <motion.div 
            className="flex items-center space-x-1"
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
         >
            <div className="w-5 h-5 bg-indigo-500 rounded-full" />
            <h1 className="uppercase font-bold">Logo</h1>
         </motion.div>
         <nav className="text-neutral-800">
            <motion.ul
               className="space-x-10 flex"
               variants={container}
               animate="show"
               initial="hidden"
            >
               {links.map((link, i) => (
                  <NavLink
                     key={i}
                     href={link.href}
                     text={link.text}
                  />
               ))}
            </motion.ul>
         </nav>
      </header>
   )
}

interface NavLinkProps {
   href: string
   text: string
}

const NavLink:FC<NavLinkProps> = ({
   href,
   text
}) => {
   const router = useRouter()
   const isActive = router.pathname === href
   const item = {
      hidden: { scale: 0, y: 100 },
      show: { scale: 1, y: 0 },
  }

   return (
      <motion.li
         variants={item}
      >
         <Link 
            href={href}
            className={`tracking-tight ${isActive ? "text-neutral-900 font-semibold" : "text-neutral-500"}`}
         >
            {text}
         </Link>
      </motion.li>
   )
}