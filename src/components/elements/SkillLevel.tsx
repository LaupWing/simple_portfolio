import clsx from "clsx"
import { FC, ReactNode } from "react"

export const SkillLevel:FC<{
   progress: number
   children: ReactNode
   color?: "indigo" | "emerald"
}> = ({
   children,
   progress,
   color = "indigo"
}) => {
   const styles:Record<"indigo"| "emerald", any> = {
      indigo: {
         border: "border-indigo-500",
         bg: "bg-indigo-500"
      },
      emerald: {
         border: "border-indigo-500",
         bg: "bg-indigo-500"
      },
   }

   return (
      <div className="flex items-center">
         <span className="font-bold uppercase text-slate-400 w-32">
            {children}
         </span>
         <div 
            className={clsx(
               "flex-1 border-2 p-0.5 rounded-full",
               styles[color].border
            )}
         >
            <div 
               className={clsx(
                  "h-1.5 rounded-full",
                  styles[color].bg
               )}
               style={{
                  width: `${progress}%`
               }}
            />
         </div>
      </div>
   )
}