import { IconClose } from "../elements"

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