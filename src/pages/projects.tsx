import { SkillsPartial, SkillsType } from "typings"
import { Skill } from "~/components/elements"
import config from "~/config"
import { useEffect, useState } from "react"
import clsx from "clsx"
import { useRouter } from "next/router"
import { motion } from "framer-motion"

const ProjectsDetails = () => {
   const router = useRouter()
   const [activeSkills, setActiveSkills] = useState<SkillsPartial>(router.query 
      ? Object.keys(router.query) as SkillsPartial 
      : []
   )

   const toggleSkill = (skill: SkillsType[number]) => {
      if(activeSkills.includes(skill)){
         setActiveSkills((prev) => prev.filter(x => x !== skill))
      }else {
         setActiveSkills((prev) => [...prev, skill])
      }
   }

   useEffect(() => {
      const query:Partial<Record<SkillsType[number], boolean>> = {}
      activeSkills.forEach(_skill => {
         query[_skill] = true
      })
      router.push({
         query   
      })
   }, [activeSkills])

   return (
      <>
         <div className="flex flex-col w-full rounded p-4 bg-slate-100 border-2 border-slate-200">
            <p className="mb-3 text-slate-300 pl-1 text-xs font-bold uppercase">I've used the technologies below, but not all projects are listed here.</p>
            <div className="flex gap-x-4">
               {config.skills.map(skill => (
                  <Skill 
                     skill={skill}
                     size={30}
                     key={skill}
                     className={clsx(
                        "cursor-pointer duration-200",
                        !activeSkills.includes(skill) ? "text-slate-300" : "text-indigo-500" 
                     )}
                     onClick={() => toggleSkill(skill)}
                  />
               ))}
            </div>
         </div>
      </>
   )
}
export default ProjectsDetails