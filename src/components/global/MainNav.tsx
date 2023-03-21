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
   return (
      <header className="w-full text-sm flex py-6 items-center justify-between mx-auto max-w-4xl">
         <motion.div 
            className="flex items-center space-x-1"
            animate={{
               x: 0,
               opacity: 1,
               transition: {
                  duration: 1
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
         <nav className="space-x-10 text-neutral-800">
            {links.map((link, i) => (
               <NavLink
                  key={i}
                  href={link.href}
                  text={link.text}
               />
            ))}
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

   return (
      <Link 
         href={href}
         className={`tracking-tight ${isActive ? "text-neutral-900 font-semibold" : "text-neutral-500"}`}
      >
         {text}
      </Link>
   )
}