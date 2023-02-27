import Link from "next/link"

export const MainNav = () => {
   return (
      <header className="w-full flex justify-between mx-auto max-w-4xl">
         <div>Logo</div>
         <nav className="py-4 space-x-4">
            <Link href={"/"}>
               Home
            </Link>
            <Link href={"/"}>
               Work
            </Link>
            <Link href={"/"}>
               About
            </Link>
            <Link href={"/"}>
               Contact
            </Link>
         </nav>
      </header>
   )
}