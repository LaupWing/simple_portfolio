import { SkillsPartial, SkillsType } from "typings"
import { Skill } from "~/components/elements"
import config from "~/config"
import { useState } from "react"

const ProjectsDetails = () => {
   const [activeSkills, setActiveSkills] = useState<SkillsPartial>([])

   const toggleSkill = (skill: SkillsType[number]) => {
      if(activeSkills.includes(skill)){
         setActiveSkills((prev) => prev.filter(x => x !== skill))
      }else {
         setActiveSkills((prev) => [...prev, skill])
      }
      console.log(activeSkills)
   }

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
                     className="text-slate-300 cursor-pointer"
                     onClick={() => toggleSkill(skill)}
                  />
               ))}
            </div>
         </div>
      </>
   )
}
export default ProjectsDetails