import Link from "next/link"
import { useRouter } from "next/router"
import { FC } from "react"

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
      <header className="w-full text-sm flex py-4 items-center justify-between mx-auto max-w-4xl">
         <div>Logo</div>
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
         className={`tracking-tight ${isActive ? "font-bold" : "font-semibold text-neutral-400"}`}
      >
         {text}
      </Link>
   )
}