import Link from "next/link"
import { useRouter } from "next/router"
import { FC } from "react"

export const MainNav = () => {
   return (
      <header className="w-full text-sm flex py-4 items-center justify-between mx-auto max-w-4xl">
         <div>Logo</div>
         <nav className="space-x-4">
            <Link href={"/"}>
               Home
            </Link>
            <Link href={"/work"}>
               Work
            </Link>
            <Link href={"/about"}>
               About
            </Link>
            <Link href={"/contact"}>
               Contact
            </Link>
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
         className={`tracking-tighter ${isActive ? "font-bold" : ""}`}
      >
         {text}
      </Link>
   )
}