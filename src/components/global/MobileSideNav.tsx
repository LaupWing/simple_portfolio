import { FC } from "react"
import { useRouter } from "next/router"
import { IconClose } from "../elements"
import { SkillsType } from "typings"
import Link from "next/link"

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
   return (
      <div className="bg-white flex flex-col w-screen h-screen p-10 pt-16">
         <header className="flex justify-between items-center">
            <h2 className="uppercase font-bold text-slate-700 text-xl tracking-wider flex items-center">
               <div className="w-5 h-5 bg-indigo-500 rounded-full mr-1" />
               MENU
            </h2>

            <IconClose 
               className="text-slate-500" 
               size={22} 
               onClick={onClose}
            />
         </header>

         <nav className="my-10">
            <ul className="flex flex-col gap-4">
               {links.map((link, i) => (
                  <NavLink
                     key={i}
                     href={link.href}
                     text={link.text}
                     isLast={i === (links.length - 1)}
                     query={link.query}
                  />
               ))}
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
      // <motion.li
      //    variants={item}
      // >
         <Link
            href={{
               pathname: href,
               query
            }}
            className={`tracking-tight ${isActive ? "text-neutral-900 font-semibold" : "text-neutral-500"}`}
         >
            {text}
         </Link>
      // </motion.li>
   )
}