import { motion } from "framer-motion"
import { FC } from "react"
import { IconArrow } from "~/components/elements"

interface ProjectCardProps {
   title: string
   description: string
   image: string
}

export const ProjectCard:FC<ProjectCardProps> = ({
   title,
   description,
   image
}) => {
   return (
      <article
         className="relative overflow-hidden justify-between flex aspect-square rounded-2xl cursor-pointer"
      >
         <motion.div
            className="flex p-6 flex-1"
            whileHover={{
               scale: 1.05,
               transition: { duration: 0.5 },
            }}
         >
            <div className="flex flex-col flex-1">
               <h2 className="text-neutral-100 text-xl">{title}</h2>
               <p className="text-neutral-300 text-sm">{description}</p>
            </div>
            <IconArrow
               className="text-neutral-100 shrink-0"
               size={34}
            />
            <img
               className="absolute inset-0 w-full h-full object-cover -z-10"
               src={image}
               alt=""
            />
         </motion.div>
      </article>
   )
}
