import { motion } from "framer-motion"
import { FC } from "react"
import { ProjectType } from "typings"
import { IconArrow, IconFirebase, IconGatsby, IconLaravel, Skill } from "~/components/elements"
import image from "~/images/lockkey.png"

interface ProjectCardProps {
   project: ProjectType
   index: number
}

export const ProjectCard:FC<ProjectCardProps> = ({
   project,
   index
}) => {
   const isEven = index % 2 === 0
   console.log(project)

   return (
      <motion.article
         initial={{
            opacity: 0,
            x: isEven ? "-100%" : "100%"
         }}
         whileInView={{
            opacity: 1,
            x: 0
         }}
         className="relative overflow-hidden justify-between flex aspect-square rounded-2xl cursor-pointer group"
      >
         <motion.div
            className="flex p-6 flex-1"
            whileHover={{
               scale: 1.05,
               transition: { duration: 0.5 },
            }}
         >
            <div className="flex flex-col flex-1">
               <h2 className="text-neutral-100 text-lg">{project.name}</h2>
               <p className="text-neutral-300 text-xs">{project.description}</p>
               <div className="mt-4 text-neutral-400 flex gap-4 group-hover:text-indigo-500 duration-500">
                  {project.skills.map(skill => (
                     <Skill 
                        skill={skill}
                        size={22}
                     />
                  ))}
               </div>
            </div>
            <IconArrow
               className="text-neutral-100 shrink-0"
               size={34}
            />
            <img
               className="absolute inset-0 w-full h-full object-cover -z-10"
               src={image.src}
               alt=""
            />
         </motion.div>
      </motion.article>
   )
}
