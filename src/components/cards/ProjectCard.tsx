import { motion } from "framer-motion"
import { FC } from "react"
import { ProjectType } from "typings"
import { IconArrow, IconFirebase, IconGatsby, IconLaravel, Skill } from "~/components/elements"
import { urlFor } from "~/sanity"

interface ProjectCardProps {
   project: ProjectType
}

export const ProjectCard:FC<ProjectCardProps> = ({
   project
}) => {
   const image = urlFor(project.thumbnail)

   return (
      <div className=" overflow-hidden  rounded-2xl">
         <motion.div
            className="flex p-6 flex-1 relative justify-between aspect-square cursor-pointer group"
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
                        key={skill}
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
               src={image.url()}
               alt=""
            />
         </motion.div>
      </div>
   )
}
